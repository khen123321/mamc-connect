import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="mt-3 pb-2 text-center text-[0.72rem] leading-5 text-[var(--color-muted)]">
      <p>
        Made by{" "}
        <a
          href={siteConfig.links.tapTapTap}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold !text-[#08AFC4] transition hover:!text-[#11c8df] hover:underline"
        >
          TapTapTap
        </a>
      </p>
    </footer>
  );
}
