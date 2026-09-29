import { useEffect, useRef, useState } from "react";
import { impactLedger, profile } from "../../data";

type Gaze = "center" | "left" | "right" | "up" | "down";

/** Deterministic pseudo-barcode so it renders identically on every load. */
const BARS = Array.from("SYMPLYTHEO-2020-PRODUCTION").flatMap((ch, i) => {
  const c = ch.charCodeAt(0);
  return [1 + (c % 3), 1 + ((c >> 2) % 2), 1 + ((c + i) % 3)];
});

function Barcode() {
  let x = 0;
  return (
    <svg viewBox={`0 0 ${BARS.reduce((a, b) => a + b + 1, 0)} 24`} className="h-7 w-full" preserveAspectRatio="none" aria-hidden="true">
      {BARS.map((w, i) => {
        const rect = i % 2 === 0 ? <rect key={i} x={x} y="0" width={w} height="24" fill="currentColor" /> : null;
        x += w + 1;
        return rect;
      })}
    </svg>
  );
}

function Fingerprint() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true">
      <path d="M12 11c0 3.5-1 6.5-2.5 9" />
      <path d="M8.5 8.5A4.5 4.5 0 0 1 16.5 11c0 2.8-.5 5.5-1.6 8" />
      <path d="M5.8 6.5A8 8 0 0 1 20 11c0 1.8-.2 3.6-.6 5.2" />
      <path d="M5 16.5c.6-1.7 1-3.5 1-5.5a6 6 0 0 1 .6-2.6" />
      <path d="M12.5 21c1.3-2.5 2-5.8 2-10a2.5 2.5 0 0 0-5 0" />
    </svg>
  );
}

/**
 * The hero's signature element: a lanyard ID badge that swings with pointer
 * movement (spring physics), tilts toward the cursor, and flips on click.
 * Pointer tracking only runs for fine pointers without reduced motion.
 */
export function AccessBadge() {
  const rigRef = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState(false);
  const [gaze, setGaze] = useState<Gaze>("center");

  useEffect(() => {
    const rig = rigRef.current;
    if (!rig) return;
    const canTrack =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canTrack) return;

    const hasGazeFrames = Object.keys(profile.portrait).length > 1;
    let angle = 0;
    let velocity = 0;
    let target = 0;
    let tiltX = 0;
    let tiltY = 0;
    let lastX: number | null = null;
    let frame = 0;
    let visible = true;

    const tick = () => {
      // Damped spring toward the target angle
      velocity += (target - angle) * 0.06;
      velocity *= 0.9;
      angle += velocity;
      target *= 0.94; // impulses decay back to rest
      rig.style.setProperty("--swing", `${angle.toFixed(2)}deg`);
      rig.style.setProperty("--tx", `${tiltX.toFixed(2)}deg`);
      rig.style.setProperty("--ty", `${tiltY.toFixed(2)}deg`);
      frame =
        Math.abs(velocity) > 0.01 || Math.abs(target) > 0.01 || Math.abs(angle) > 0.01
          ? requestAnimationFrame(tick)
          : 0;
    };
    const kick = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      if (!visible) return;
      const r = rig.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / window.innerWidth;
      const dy = (e.clientY - (r.top + r.height / 2)) / window.innerHeight;
      tiltY = Math.max(-1, Math.min(1, dx * 2)) * 14;
      tiltX = Math.max(-1, Math.min(1, dy * 2)) * -9;
      if (lastX !== null) {
        target = Math.max(-10, Math.min(10, target + (e.clientX - lastX) * 0.06));
      }
      lastX = e.clientX;
      if (hasGazeFrames) {
        const next: Gaze =
          Math.abs(dx) < 0.08 && Math.abs(dy) < 0.08
            ? "center"
            : Math.abs(dx) > Math.abs(dy)
              ? dx < 0 ? "left" : "right"
              : dy < 0 ? "up" : "down";
        setGaze(next);
      }
      kick();
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(rig);
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  const photo = profile.portrait[gaze] ?? profile.portrait.center;

  return (
    <div ref={rigRef} className="badge-rig relative mx-auto w-[260px] sm:w-[290px]">
      <div className="badge-swing">
        {/* Lanyard strap running up out of the band */}
        <div aria-hidden="true" className="relative mx-auto -mt-16 h-28 w-9 overflow-hidden lg:-mt-[40vh] lg:h-[calc(40vh+64px)]">
          <div className="absolute inset-0 bg-brand [background-image:repeating-linear-gradient(0deg,transparent_0_14px,rgb(0_0_0/0.12)_14px_15px)]" />
          <p className="absolute bottom-8 left-1/2 -translate-x-1/2 rotate-180 font-mono text-[9px] tracking-[0.3em] whitespace-nowrap text-black/60 [writing-mode:vertical-rl]">
            SYMPLYTHEO · SYMPLYTHEO
          </p>
        </div>
        {/* Metal clip */}
        <div aria-hidden="true" className="mx-auto -mt-1 h-7 w-12 rounded-md border-2 border-[#c9c2ba] bg-gradient-to-b from-[#e9e4de] to-[#9d958c] shadow" />

        <button
          type="button"
          onClick={() => setFlipped((f) => !f)}
          aria-pressed={flipped}
          aria-label={flipped ? "Show front of badge" : "Flip badge to see impact numbers"}
          className="badge-card relative -mt-2 block aspect-[5/7] w-full cursor-pointer text-left"
          style={{ ["--flip" as string]: flipped ? "180deg" : "0deg" }}
        >
          {/* Front */}
          <div className="badge-face absolute inset-0 flex flex-col overflow-hidden rounded-[22px] border border-black/10 bg-[#fbf5ee] text-[#241a12] shadow-[0_30px_60px_-20px_rgb(0_0_0/0.6)]">
            <div className="flex items-center justify-between bg-[#c2410c] px-4 py-2.5 text-[#fbf5ee]">
              <span className="font-mono text-[10px] tracking-[0.25em]">ACCESS · PROD</span>
              <span aria-hidden="true" className="h-2.5 w-7 rounded-full bg-black/25" />
            </div>
            <div className="flex flex-1 flex-col px-4 pt-4 pb-3">
              <div className="flex gap-3">
                <img
                  src={photo}
                  alt={`Portrait of ${profile.name}`}
                  width={310}
                  height={400}
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-[3/4] w-[46%] rounded-xl object-cover"
                />
                <div className="flex flex-1 flex-col justify-between py-1">
                  <div className="h-8 w-10 rounded-md [background-image:linear-gradient(135deg,#e7c77c,#b98d38),repeating-linear-gradient(90deg,transparent_0_5px,rgb(0_0_0/0.15)_5px_6px)]" aria-hidden="true" />
                  <dl className="space-y-2 font-mono text-[9.5px] leading-tight uppercase">
                    <div>
                      <dt className="text-[#766858]">ID</dt>
                      <dd>TOI-2020</dd>
                    </div>
                    <div>
                      <dt className="text-[#766858]">Clearance</dt>
                      <dd className="font-medium text-[#c2410c]">Production</dd>
                    </div>
                    <div>
                      <dt className="text-[#766858]">Base</dt>
                      <dd>Lagos, NG</dd>
                    </div>
                  </dl>
                </div>
              </div>
              <p className="font-display mt-4 text-[26px] leading-none font-extrabold tracking-tightest">
                Theophilus
                <br />
                Iyonor
              </p>
              <p className="mt-1.5 font-mono text-[10px] tracking-[0.2em] text-[#766858] uppercase">{profile.role}</p>
              <p className="mt-3 border-t border-dashed border-black/15 pt-2.5 font-mono text-[10px] leading-relaxed text-[#241a12]/80">
                React · Vue · TypeScript
                <br />
                Next · Nuxt · Node · NestJS
              </p>
              <div className="mt-auto flex items-end gap-3 pt-3">
                <Barcode />
                <span className="text-[#c2410c]">
                  <Fingerprint />
                </span>
              </div>
            </div>
            <div aria-hidden="true" className="badge-sheen pointer-events-none absolute inset-0" />
          </div>

          {/* Back */}
          <div className="badge-face badge-back absolute inset-0 flex flex-col overflow-hidden rounded-[22px] border border-white/10 bg-[#1f1813] p-5 text-[#f7f0e8] shadow-[0_30px_60px_-20px_rgb(0_0_0/0.6)]">
            <p className="font-mono text-[10px] tracking-[0.25em] text-[#ff8a5b]">IMPACT LEDGER</p>
            <dl className="mt-3 flex-1 divide-y divide-white/10">
              {impactLedger.map((item) => (
                <div key={item.label} className="flex flex-col-reverse py-2.5">
                  <dt className="text-[11px] leading-snug text-[#b3a597]">{item.label}</dt>
                  <dd className="font-display tabular text-2xl font-bold tracking-tightest">
                    {item.prefix}
                    {item.value.toLocaleString("en-NG")}
                    {item.suffix}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="note text-lg text-[#ff8a5b]">tap to flip back ↺</p>
          </div>
        </button>
      </div>
    </div>
  );
}
