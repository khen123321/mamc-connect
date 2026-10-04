"use client";

import { useState } from "react";

import { QuickActionCard } from "@/components/quick-access/quick-action-card";
import { quickActions } from "@/config/quick-actions";
import type { QuickAction } from "@/types/quick-action";

export function QuickActionList() {
  const [noticeAction, setNoticeAction] = useState<QuickAction | null>(null);
  const enabledActions = quickActions.filter((action) => action.enabled);

  return (
    <>
      <section aria-labelledby="quick-access-heading" className="mt-3">
        <h2 id="quick-access-heading" className="sr-only">
          Quick Access
        </h2>

        <div className="grid grid-cols-2 gap-2">
          {enabledActions.map((action) => (
            <QuickActionCard
              key={action.id}
              action={action}
              onNotice={setNoticeAction}
            />
          ))}
        </div>
      </section>

      {noticeAction ? (
        <div
          className="fixed inset-x-4 bottom-4 z-20 mx-auto max-w-[30rem] rounded-2xl border border-[rgba(1,94,50,0.16)] bg-white p-4 text-left shadow-[0_18px_45px_rgba(15,23,42,0.18)]"
          role="status"
        >
          <p className="text-sm font-semibold text-[var(--color-charcoal)]">
            {noticeAction.noticeTitle ?? noticeAction.label}
          </p>
          <p className="mt-1 text-sm leading-5 text-[var(--color-muted)]">
            {noticeAction.noticeMessage ?? noticeAction.description}
          </p>
          <button
            type="button"
            className="mt-3 rounded-full bg-[var(--color-spartan)] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[var(--color-excellence)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-excellence)]"
            onClick={() => setNoticeAction(null)}
          >
            Got it
          </button>
        </div>
      ) : null}
    </>
  );
}
