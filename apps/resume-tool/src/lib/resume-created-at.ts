/** Entries with `createdAt` in the last this many full days appear only on the “Recently added” tab. */
export const RECENT_RESUME_DAYS = 5;

function parseCreatedAtDay(createdAt: string): Date | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(createdAt)) return null;
  const d = new Date(`${createdAt}T12:00:00.000Z`);
  return Number.isNaN(d.getTime()) ? null : d;
}

/** `true` when the resume should appear on the Recently added tab (and be hidden from the default Library tab). */
export function isRecentlyAddedResume(createdAt: string | undefined, now = new Date()): boolean {
  if (createdAt === undefined || createdAt === "") return false;
  const start = parseCreatedAtDay(createdAt);
  if (!start) return false;
  const diffMs = now.getTime() - start.getTime();
  const days = diffMs / 86_400_000;
  return days >= 0 && days < RECENT_RESUME_DAYS;
}
