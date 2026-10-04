import { quickActions } from "@/config/quick-actions";
import { QuickActionCard } from "@/components/quick-access/quick-action-card";

export function QuickActionList() {
  const enabledActions = quickActions.filter(
    (action) => action.enabled && action.id !== "emergency",
  );

  return (
    <section aria-labelledby="quick-access-heading" className="mt-3">
      <h2 id="quick-access-heading" className="sr-only">
        Quick Access
      </h2>

      <div className="grid grid-cols-2 gap-2">
        {enabledActions.map((action) => (
          <QuickActionCard key={action.id} action={action} />
        ))}
      </div>
    </section>
  );
}
