import projectPreview from "../../assets/images/biometric.webp";

/**
 * Project card preview image. Currently the same placeholder for every
 * project — swap in per-project screenshots later.
 */
export function ProjectVisual() {
  return (
    <div className="mb-5 overflow-hidden rounded-xl bg-brand-soft">
      <img
        src={projectPreview}
        alt=""
        width={658}
        height={282}
        loading="lazy"
        decoding="async"
        className="h-24 w-full object-cover"
      />
    </div>
  );
}
