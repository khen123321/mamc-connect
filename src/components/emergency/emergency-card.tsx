import { HeartPulse, Phone } from "lucide-react";

import { formatTelephoneHref, siteConfig } from "@/config/site";

export function EmergencyCard() {
  return (
    <a
      href={formatTelephoneHref(siteConfig.contact.primaryPhone)}
      aria-label={`${siteConfig.contact.emergencyAvailability}. Call MCMC at ${siteConfig.contact.primaryPhone}`}
      className="mt-3 flex min-h-14 items-center gap-3 rounded-2xl border border-rose-200 bg-white px-3.5 py-2.5 text-left shadow-[0_10px_24px_rgba(190,18,60,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(190,18,60,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-rose-500"
    >
      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-rose-50 text-rose-700">
        <HeartPulse aria-hidden="true" className="h-5 w-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-bold leading-5 text-[var(--color-charcoal)]">
          {siteConfig.contact.emergencyAvailability}
        </span>
        <span className="block text-xs font-medium leading-4 text-rose-700">
          Call MCMC
        </span>
      </span>
      <div className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[var(--color-spartan)] text-white">
        <Phone aria-hidden="true" className="h-4 w-4" />
      </div>
    </a>
  );
}
