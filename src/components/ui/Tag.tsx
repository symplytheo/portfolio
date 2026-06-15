import type { ReactNode } from "react";

interface TagProps {
  label: string;
  icon?: ReactNode;
}

export function Tag({ label, icon }: TagProps) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-raised px-3 py-1 font-mono text-xs text-soft">
      {icon}
      {label}
    </span>
  );
}
