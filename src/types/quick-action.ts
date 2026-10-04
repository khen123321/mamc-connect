import type { ComponentType, SVGProps } from "react";

export type QuickActionTone = "primary" | "standard" | "urgent" | "muted";
export type QuickActionBehavior = "link" | "notice";

export interface QuickAction {
  id: string;
  label: string;
  compactLabel?: string;
  description: string;
  href?: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  tone: QuickActionTone;
  behavior: QuickActionBehavior;
  external?: boolean;
  enabled: boolean;
  noticeTitle?: string;
  noticeMessage?: string;
}
