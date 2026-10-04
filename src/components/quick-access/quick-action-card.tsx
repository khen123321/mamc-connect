import type { QuickAction } from "@/types/quick-action";

const toneClasses: Record<QuickAction["tone"], string> = {
  primary:
    "border-[rgba(1,94,50,0.22)] bg-[linear-gradient(145deg,#015E32,#0D7E6A)] text-white shadow-[0_16px_34px_rgba(1,94,50,0.22)]",
  standard:
    "border-[rgba(1,94,50,0.12)] bg-white text-[var(--color-charcoal)] shadow-[0_12px_30px_rgba(15,23,42,0.07)]",
  urgent:
    "border-[rgba(190,18,60,0.14)] bg-white text-[var(--color-charcoal)] shadow-[0_12px_30px_rgba(15,23,42,0.07)]",
  muted:
    "border-[rgba(100,116,139,0.16)] bg-white text-[var(--color-charcoal)] shadow-[0_12px_30px_rgba(15,23,42,0.06)]",
};

const iconClasses: Record<QuickAction["tone"], string> = {
  primary: "bg-white/20 text-white ring-1 ring-white/15",
  standard:
    "bg-[rgba(13,126,106,0.1)] text-[var(--color-excellence)] ring-1 ring-[rgba(13,126,106,0.08)]",
  urgent: "bg-rose-50 text-rose-700 ring-1 ring-rose-100",
  muted: "bg-slate-100 text-slate-600 ring-1 ring-slate-200/70",
};

interface QuickActionCardProps {
  action: QuickAction;
  onNotice: (action: QuickAction) => void;
}

export function QuickActionCard({ action, onNotice }: QuickActionCardProps) {
  const Icon = action.icon;
  const label = action.compactLabel ?? action.label;
  const isNotice = action.behavior === "notice";
  const className = `group flex min-h-[5.55rem] flex-col items-center justify-center gap-2.5 rounded-[1.35rem] border px-3 py-4 text-center transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(15,23,42,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-excellence)] ${toneClasses[action.tone]}`;
  const content = (
    <>
      <span
        className={`flex h-10 w-10 flex-none items-center justify-center rounded-2xl ${iconClasses[action.tone]}`}
      >
        <Icon aria-hidden="true" className="h-[1.35rem] w-[1.35rem]" />
      </span>
      <span className="line-clamp-2 max-w-[8.25rem] text-[0.9rem] font-semibold leading-snug">
        {label}
      </span>
      {isNotice ? (
        <span className="rounded-full bg-slate-50 px-2 py-0.5 text-[0.66rem] font-semibold leading-none text-[var(--color-muted)]">
          Coming Soon
        </span>
      ) : null}
    </>
  );

  if (action.behavior === "link" && action.href) {
    return (
      <a
        href={action.href}
        target={action.external ? "_blank" : undefined}
        rel={action.external ? "noopener noreferrer" : undefined}
        title={action.description}
        aria-label={`${action.label}. ${action.description}`}
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      title={action.description}
      aria-label={`${action.label}. ${action.description}`}
      className={className}
      onClick={() => onNotice(action)}
    >
      {content}
    </button>
  );
}
