import type { LucideIcon } from "lucide-react";

export type QuickActionTone = "primary" | "standard" | "urgent" | "muted";
export type QuickActionBehavior = "link" | "notice";

export interface QuickAction {
  id: string;
  label: string;
  compactLabel?: string;
  description: string;
  href?: string;
  icon: LucideIcon;
  tone: QuickActionTone;
  behavior: QuickActionBehavior;
  external?: boolean;
  enabled: boolean;
  noticeTitle?: string;
  noticeMessage?: string;
}
