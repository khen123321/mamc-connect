import { SiteFooter } from "@/components/footer/site-footer";
import { MamcHero } from "@/components/hero/mamc-hero";
import { QuickActionList } from "@/components/quick-access/quick-action-list";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-[34rem] flex-col px-3 pb-2 sm:px-5">
      <MamcHero />
      <QuickActionList />
      <SiteFooter />
    </main>
  );
}
