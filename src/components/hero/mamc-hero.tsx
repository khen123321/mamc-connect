import Image from "next/image";

import { siteConfig } from "@/config/site";
import { HospitalIdentity } from "@/components/hero/hospital-identity";

export function MamcHero() {
  return (
    <header className="relative">
      <div className="relative h-[8.25rem] overflow-hidden rounded-b-[1.4rem] bg-[var(--color-spartan)] shadow-[0_16px_34px_rgba(1,94,50,0.16)] sm:h-[9rem]">
        <Image
          src={siteConfig.assets.heroImage}
          alt="Madonna and Child Medical Center hospital exterior"
          fill
          sizes="(max-width: 768px) 100vw, 560px"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(1,94,50,0.08)] via-[rgba(1,94,50,0.02)] to-[rgba(1,94,50,0.46)]" />
        <div className="absolute left-3 top-3 rounded-full bg-white/92 px-3 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-spartan)] shadow-sm backdrop-blur">
          {siteConfig.hospital.shortName} Connect
        </div>
      </div>

      <HospitalIdentity />
    </header>
  );
}
