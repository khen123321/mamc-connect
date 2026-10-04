import type { LucideIcon } from "lucide-react";

export type QuickActionTone = "primary" | "standard" | "urgent" | "muted";

export interface QuickAction {
  id: string;
  label: string;
  compactLabel?: string;
  description: string;
  href: string;
  icon: LucideIcon;
  tone: QuickActionTone;
  external?: boolean;
  enabled: boolean;
}
