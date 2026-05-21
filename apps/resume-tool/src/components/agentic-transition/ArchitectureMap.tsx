import {
  architectureSurfaces,
  backendPackages,
  externalServices,
} from "@/data/agentic-transition-report";

export function ArchitectureMap() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">
          Deployable surfaces
        </h3>
        <ul className="space-y-2">
          {architectureSurfaces.map((s) => (
            <li
              key={s.name}
              className="rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <code className="text-sm font-semibold text-emerald-800">{s.name}</code>
                <span className="text-xs text-gray-500">{s.stack}</span>
              </div>
              <p className="text-sm text-gray-600 mt-0.5">{s.role}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">
            Shared backend packages
          </h3>
          <div className="flex flex-wrap gap-2">
            {backendPackages.map((pkg) => (
              <span
                key={pkg}
                className="rounded-full bg-emerald-50 border border-emerald-200/80 px-3 py-1 text-xs font-medium text-emerald-900"
              >
                {pkg}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">
            External services (production)
          </h3>
          <div className="flex flex-wrap gap-2">
            {externalServices.map((svc) => (
              <span
                key={svc}
                className="rounded-md bg-gray-100 px-2.5 py-1 text-xs text-gray-700"
              >
                {svc}
              </span>
            ))}
          </div>
        </div>
        <p className="text-sm text-gray-500">
          Full diagrams and flows:{" "}
          <a
            href="https://www.plantfolio.garden/support/architecture"
            className="text-emerald-700 hover:underline font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            plantfolio.garden/support/architecture
          </a>
        </p>
      </div>
    </div>
  );
}
