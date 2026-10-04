import type { QuickAction } from "@/types/quick-action";

const toneClasses: Record<QuickAction["tone"], string> = {
  primary:
    "border-[rgba(1,94,50,0.18)] bg-[linear-gradient(135deg,#015E32,#0D7E6A)] text-white shadow-[0_10px_24px_rgba(1,94,50,0.16)]",
  standard:
    "border-[rgba(1,94,50,0.1)] bg-white text-[var(--color-charcoal)] shadow-[0_8px_22px_rgba(15,23,42,0.055)]",
  urgent:
    "border-[rgba(190,18,60,0.13)] bg-white text-[var(--color-charcoal)] shadow-[0_8px_22px_rgba(15,23,42,0.055)]",
  muted:
    "border-[rgba(100,116,139,0.16)] bg-white text-[var(--color-charcoal)] shadow-[0_8px_22px_rgba(15,23,42,0.05)]",
};

const iconClasses: Record<QuickAction["tone"], string> = {
  primary: "bg-white/18 text-white",
  standard: "bg-[rgba(13,126,106,0.1)] text-[var(--color-excellence)]",
  urgent: "bg-rose-50 text-rose-700",
  muted: "bg-slate-100 text-slate-600",
};

interface QuickActionCardProps {
  action: QuickAction;
}

export function QuickActionCard({ action }: QuickActionCardProps) {
  const Icon = action.icon;

  return (
    <a
      href={action.href}
      target={action.external ? "_blank" : undefined}
      rel={action.external ? "noopener noreferrer" : undefined}
      title={action.description}
      aria-label={`${action.label}. ${action.description}`}
      className={`group flex min-h-[4.25rem] flex-col items-center justify-center gap-1.5 rounded-2xl border px-2.5 py-2.5 text-center transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(15,23,42,0.1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-excellence)] ${toneClasses[action.tone]}`}
    >
      <span
        className={`flex h-8 w-8 flex-none items-center justify-center rounded-xl ${iconClasses[action.tone]}`}
      >
        <Icon aria-hidden="true" className="h-5 w-5" />
      </span>
      <span className="line-clamp-2 text-[0.86rem] font-semibold leading-tight">
        {action.compactLabel ?? action.label}
      </span>
    </a>
  );
}
