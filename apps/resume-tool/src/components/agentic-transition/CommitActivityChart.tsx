import type { commitActivityByMonth } from "@/data/agentic-transition-report";

type MonthRow = (typeof commitActivityByMonth)[number];

const CHART_HEIGHT_PX = 200;

/** Solid fills so PDF print preserves bar colors (no opacity). */
const phaseBarClass: Record<MonthRow["phase"], string> = {
  ramp: "bg-emerald-400",
  peak: "bg-emerald-700",
  "wind-down": "bg-emerald-300",
};

const phaseLegendClass: Record<MonthRow["phase"], string> = {
  ramp: "bg-emerald-400",
  peak: "bg-emerald-700",
  "wind-down": "bg-emerald-300",
};

const phaseLabels: Record<MonthRow["phase"], string> = {
  ramp: "Ramp-up",
  peak: "Peak leverage",
  "wind-down": "Wind-down (job search focus)",
};

export function CommitActivityChart({ data }: { data: MonthRow[] }) {
  const max = Math.max(...data.map((d) => d.commits));

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-5 text-xs font-medium text-gray-700">
        {(Object.keys(phaseLegendClass) as MonthRow["phase"][]).map((phase) => (
          <span key={phase} className="flex items-center gap-2">
            <span
              className={`h-3 w-3 shrink-0 rounded-sm border border-gray-400 ${phaseLegendClass[phase]} print-color-bar`}
            />
            {phaseLabels[phase]}
          </span>
        ))}
      </div>
      <div
        className="flex items-end gap-0.5 border-b border-gray-400 pb-0 sm:gap-1"
        style={{ height: CHART_HEIGHT_PX }}
      >
        {data.map((row) => {
          const barHeightPx = Math.max(
            Math.round((row.commits / max) * CHART_HEIGHT_PX),
            8,
          );
          const monthLabel = row.month.slice(2).replace("-", "/");
          return (
            <div
              key={row.month}
              className="flex h-full min-w-0 flex-1 flex-col items-center"
            >
              <div className="flex min-h-0 w-full flex-1 flex-col items-center justify-end">
                <span className="mb-0.5 text-[8px] font-bold leading-none text-gray-900 tabular-nums sm:text-[9px]">
                  {row.commits}
                </span>
                <div
                  className={`w-full max-w-[22px] shrink-0 rounded-t-sm border border-emerald-900/20 sm:max-w-[26px] ${phaseBarClass[row.phase]} print-color-bar`}
                  style={{ height: barHeightPx }}
                  aria-label={`${row.month}: ${row.commits} commits`}
                />
              </div>
              <span className="mt-1 w-full shrink-0 text-center text-[7px] font-medium leading-tight text-gray-600 sm:text-[8px]">
                {monthLabel}
              </span>
            </div>
          );
        })}
      </div>
      <p className="text-sm text-gray-600">
        Monthly commits on Plantfolio (solo author). Peak month: Oct 2024 (148). Active
        development intentionally slowed after Nov 2025.
      </p>
    </div>
  );
}
