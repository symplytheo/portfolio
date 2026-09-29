import { siWhatsapp } from "simple-icons";
import { profile } from "../../data";

/** Floating "text me" button. Expands to show its label on hover/focus. */
export function WhatsAppFab() {
  return (
    <a
      href={profile.social.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with me on WhatsApp"
      className="no-print group fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 flex h-14 items-center rounded-full bg-[#25D366] pr-4 pl-4 text-white shadow-[0_12px_30px_-8px_rgb(37_211_102/0.6)] transition-transform hover:-translate-y-0.5 sm:right-6 sm:bottom-6 motion-safe:animate-[fab-in_0.5s_1.2s_both_var(--ease-out-soft)]"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 shrink-0 fill-current">
        <path d={siWhatsapp.path} />
      </svg>
      <span className="max-w-0 overflow-hidden text-sm font-semibold whitespace-nowrap transition-[max-width,margin] duration-300 ease-out-soft group-hover:ml-2 group-hover:max-w-40 group-focus-visible:ml-2 group-focus-visible:max-w-40">
        Chat on WhatsApp
      </span>
    </a>
  );
}
