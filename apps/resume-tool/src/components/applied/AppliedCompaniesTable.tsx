"use client";

import { useMemo, useState } from "react";
import type { AppliedCompany } from "@/data/applied-companies-types";

function ExternalLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sky-700 underline decoration-sky-200 underline-offset-2 hover:text-sky-900 hover:decoration-sky-400"
    >
      {children}
    </a>
  );
}

export function AppliedCompaniesTable({
  companies,
}: {
  companies: AppliedCompany[];
}) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return companies;
    return companies.filter((c) => {
      const urls = (c.potentialUrls ?? [])
        .map((u) => `${u.label} ${u.url}`)
        .join(" ");
      const hay =
        `${c.name} ${c.notes ?? ""} ${c.rolesCheckNote ?? ""} ${urls}`.toLowerCase();
      return hay.includes(q);
    });
  }, [companies, query]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <label className="block min-w-0 flex-1">
          <span className="sr-only">Search companies</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search company, notes, or roles"
            className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none placeholder:text-gray-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
          />
        </label>
        <p className="shrink-0 text-sm tabular-nums text-gray-500">
          {filtered.length === companies.length
            ? `${companies.length} companies`
            : `${filtered.length} of ${companies.length}`}
        </p>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
        <table className="min-w-full text-left text-sm">
          <thead className="sticky top-0 bg-gray-50 text-xs font-semibold uppercase tracking-wide text-gray-500">
            <tr>
              <th className="whitespace-nowrap px-4 py-3">Company</th>
              <th className="whitespace-nowrap px-4 py-3">Careers</th>
              <th className="whitespace-nowrap px-4 py-3">Open roles</th>
              <th className="px-4 py-3">Potential roles</th>
              <th className="whitespace-nowrap px-4 py-3">LinkedIn</th>
              <th className="px-4 py-3">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtered.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="px-4 py-10 text-center text-gray-500"
                >
                  No companies match that search.
                </td>
              </tr>
            ) : (
              filtered.map((company) => (
                <tr key={company.name} className="align-top hover:bg-sky-50/40">
                  <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900">
                    {company.name}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3">
                    {company.careersPage ? (
                      <ExternalLink href={company.careersPage}>
                        Careers
                      </ExternalLink>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3">
                    {company.openRolesPage ? (
                      <ExternalLink href={company.openRolesPage}>
                        Job board
                      </ExternalLink>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                  <td className="max-w-sm px-4 py-3">
                    {company.potentialUrls &&
                    company.potentialUrls.length > 0 ? (
                      <ul className="space-y-1">
                        {company.potentialUrls.map((item) => (
                          <li key={item.url + item.label}>
                            <ExternalLink href={item.url}>
                              {item.label}
                            </ExternalLink>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3">
                    {company.linkedInCompanyPage ? (
                      <ExternalLink href={company.linkedInCompanyPage}>
                        LinkedIn
                      </ExternalLink>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                  <td className="max-w-md px-4 py-3 text-gray-600">
                    <div className="space-y-2">
                      {company.notes ? <p>{company.notes}</p> : null}
                      {company.rolesCheckNote ? (
                        <p className="text-xs text-amber-800">
                          {company.rolesCheckNote}
                        </p>
                      ) : null}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
