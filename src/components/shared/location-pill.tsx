import { MapPin } from "lucide-react";

interface LocationPillProps {
  location: string;
}

export function LocationPill({ location }: LocationPillProps) {
  return (
    <div className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-[rgba(1,94,50,0.12)] bg-[var(--color-soft)] px-2.5 py-1 text-[0.72rem] font-medium text-[var(--color-spartan)]">
      <MapPin aria-hidden="true" className="h-3.5 w-3.5 flex-none" />
      <span className="truncate">{location}</span>
    </div>
  );
}
