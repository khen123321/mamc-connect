import {
  Globe,
  MapPin,
  MapPinned,
  MessageSquareText,
  Wifi,
} from "lucide-react";
import { createElement } from "react";
import type { SVGProps } from "react";

import { siteConfig } from "@/config/site";
import type { QuickAction } from "@/types/quick-action";

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return createElement(
    "svg",
    { viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", ...props },
    createElement("path", {
      d: "M14.25 8.35V6.9c0-.7.48-.86.82-.86h2.1V2.32L14.28 2.3c-3.2 0-4.02 2.39-4.02 3.92v2.13H7.68v3.92h2.58V22h4V12.27h3.05l.4-3.92h-3.46Z",
      fill: "currentColor",
    }),
  );
}

const createOptionalLinkAction = (
  action: Omit<QuickAction, "behavior" | "enabled" | "href"> & {
    href: string;
  },
): QuickAction => {
  if (action.href) {
    return {
      ...action,
      behavior: "link",
      enabled: true,
    };
  }

  return {
    ...action,
    behavior: "notice",
    enabled: true,
    noticeTitle: `${action.label} not connected yet`,
    noticeMessage: `${action.label} will be available once the official URL is configured.`,
  };
};

export const quickActions: QuickAction[] = [
  {
    id: "website",
    label: "Website",
    description: "Visit the MCMC Website",
    href: siteConfig.links.website,
    icon: Globe,
    tone: "primary",
    behavior: "link",
    enabled: true,
  },
  createOptionalLinkAction({
    id: "facebook",
    label: "Facebook",
    description: "Open the official MCMC Facebook page.",
    href: siteConfig.links.facebook,
    icon: FacebookIcon,
    tone: "standard",
    external: true,
  }),
  createOptionalLinkAction({
    id: "google",
    label: "Leave a Google Review",
    description: "Leave a review for MCMC on Google.",
    href: siteConfig.links.google,
    icon: MapPin,
    tone: "standard",
    external: true,
  }),
  createOptionalLinkAction({
    id: "feedback",
    label: "Feedback",
    description: "Patient Satisfaction Survey",
    href: siteConfig.links.survey,
    icon: MessageSquareText,
    tone: "standard",
    external: true,
  }),
  {
    id: "wifi",
    label: "Wi-Fi",
    description: "Hospital Wi-Fi information coming soon.",
    icon: Wifi,
    tone: "muted",
    behavior: "notice",
    enabled: true,
    noticeTitle: "Wi-Fi",
    noticeMessage: "Hospital Wi-Fi information coming soon.",
  },
  {
    id: "hospital-map",
    label: "Hospital Map",
    description: "Hospital wayfinding coming soon.",
    href: siteConfig.links.hospitalMap || undefined,
    icon: MapPinned,
    tone: siteConfig.links.hospitalMap ? "standard" : "muted",
    behavior: siteConfig.links.hospitalMap ? "link" : "notice",
    external: Boolean(siteConfig.links.hospitalMap),
    enabled: true,
    noticeTitle: "Hospital Map",
    noticeMessage: "Hospital map will be available here.",
  },
];
