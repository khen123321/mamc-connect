import Image from "next/image";

import { siteConfig } from "@/config/site";
import { LocationPill } from "@/components/shared/location-pill";

export function HospitalIdentity() {
  return (
    <section className="relative -mt-9 rounded-[1.35rem] border border-white/80 bg-white px-4 pb-3 pt-10 text-center shadow-[0_16px_42px_rgba(15,23,42,0.11)] sm:px-6">
      <div className="absolute left-1/2 top-0 flex h-[4.25rem] w-[4.25rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(1,94,50,0.12)] bg-white p-2.5 shadow-[0_12px_26px_rgba(1,94,50,0.14)]">
        <Image
          src={siteConfig.assets.logoMark}
          alt={`${siteConfig.hospital.shortName} logo mark`}
          width={72}
          height={72}
          className="h-full w-full object-contain"
          priority
        />
      </div>

      <h1 className="mx-auto max-w-[22rem] text-balance text-[1.75rem] font-bold leading-[0.98] text-[var(--color-charcoal)] sm:text-[2rem]">
        Madonna and Child
        <br />
        Medical Center
      </h1>
      <p className="mx-auto mt-2 max-w-[19rem] truncate text-sm leading-5 text-[var(--color-muted)]">
        Quick access to hospital services.
      </p>

      <div className="mt-2">
        <LocationPill location={siteConfig.hospital.location} />
      </div>
    </section>
  );
}
