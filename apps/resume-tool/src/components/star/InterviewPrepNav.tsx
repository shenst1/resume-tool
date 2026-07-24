type NavLink = {
  href: string;
  label: string;
};

type NavGroup = {
  title: string;
  links: NavLink[];
};

type InterviewPrepNavProps = {
  groups: NavGroup[];
  className?: string;
};

function NavGroups({ groups }: { groups: NavGroup[] }) {
  return (
    <div className="space-y-5">
      {groups.map((group) => (
        <div key={group.title}>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
            {group.title}
          </p>
          <ul className="space-y-1">
            {group.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-md px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function InterviewPrepNav({ groups, className = "" }: InterviewPrepNavProps) {
  return (
    <nav className={className} aria-label="Interview prep sections">
      <NavGroups groups={groups} />
    </nav>
  );
}

export function InterviewPrepMobileNav({ groups }: { groups: NavGroup[] }) {
  return (
    <details className="lg:hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <summary className="cursor-pointer list-none px-4 py-3 text-sm font-semibold text-gray-900 [&::-webkit-details-marker]:hidden">
        Jump to section ▾
      </summary>
      <div className="border-t border-gray-100 px-3 py-3 max-h-64 overflow-y-auto">
        <InterviewPrepNav groups={groups} />
      </div>
    </details>
  );
}

export function InterviewPrepSidebar({ groups }: { groups: NavGroup[] }) {
  return (
    <aside className="hidden lg:block lg:w-56 shrink-0">
      <div className="sticky top-6 rounded-xl border border-gray-200 bg-white p-4 shadow-sm max-h-[calc(100vh-3rem)] overflow-y-auto">
        <p className="mb-3 text-sm font-semibold text-gray-900">On this page</p>
        <InterviewPrepNav groups={groups} />
      </div>
    </aside>
  );
}
