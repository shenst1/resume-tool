# Resume Viewer

A Next.js application for viewing and managing job-specific resumes. Resumes are driven by typed JSON data, making it easy to create new versions for different job applications.

## Getting Started

First, install dependencies:

```bash
npm install
# or
pnpm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see the resume index page.

## Interview guidance

Living docs for prep and debriefs (not part of the resume app):

- **[INTERVIEW-GUIDANCE.md](./INTERVIEW-GUIDANCE.md)** — top priorities and index
- **[prospects/interview-reminders.md](./prospects/interview-reminders.md)** — cross-company habits (guardrails-first AI, Staff framing, closing block)
- **`prospects/<Company>/interview-debrief-*.md`** — company-specific post-interview notes (e.g. [Dutchie](./prospects/Dutchie/interview-debrief-cyril.md))

## Viewing Resumes

Navigate to `/jobs/[slug]` to view a specific resume. For example:
- `/jobs/builder` - Builder.io resume
- `/jobs/mercury` - Mercury resume

## Adding a New Resume

1. Create a new file in `src/data/resumes/[job-name].ts`
2. Import the base profile data and types:
   ```typescript
   import { about, baseSkills, companyReferences, contact, experience } from "@/data/base-profile";
   import type { Resume, SkillCategory } from "@/types/resume";
   ```
3. Create your resume data following the `Resume` type structure:
   ```typescript
   export const [jobName]Resume: Resume = {
     slug: "[job-name]",
     pageTitle: "Your Name - Application for Role @ Company",
     target: {
       company: "Company Name",
       role: "Role Title",
       teamOrFocus: "Optional Team/Focus",
     },
     contact,
     about: "Single summary + pitch (one block)...",
     skills: baseSkills, // or customize
     experience, // or customize
     companyReferences,
     outreachEmail: {
       label: "Technical recruiter (after applying; personalize [First name])",
       subject: "[Role title] application / Andrew Shenstone",
       body: "Hey [First name],\\n\\nI recently applied for [Role] at [Company] through your job portal. Same resume attached here.\\n\\n...",
     }, // optional; shown in screen-only box with copy, hidden when printing
   };
   ```
4. Export it from `src/data/resumes/index.ts`:
   ```typescript
   import { [jobName]Resume } from "./[job-name]";
   
   export const resumes: Record<string, Resume> = {
     builder: builderResume,
     mercury: mercuryResume,
     [job-name]: [jobName]Resume, // add here
   };
   ```

## Customizing Resumes

- **Skills**: Modify `baseSkills` in `src/data/base-profile.ts` or create custom skill arrays per resume
- **Experience**: Update `experience` array in `src/data/base-profile.ts` or override per resume
- **Summary**: Customize the `about` field per resume (one opening narrative)

## Printing/Saving as PDF

1. Open a resume page (e.g., `/jobs/builder`)
2. Press `Cmd+P` (Mac) or `Ctrl+P` (Windows/Linux)
3. Select "Save as PDF"
4. The resume is optimized for letter-size paper with proper margins

## Tech Stack

- **Next.js** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Inter Font** - Typography via `next/font`

## Project Structure

```
profile-tools/
├── app/
│   ├── jobs/
│   │   └── [slug]/
│   │       └── page.tsx      # Dynamic resume pages
│   ├── layout.tsx            # Root layout with Inter font
│   └── page.tsx               # Resume index page
├── src/
│   ├── components/
│   │   └── resume/           # Reusable resume components
│   ├── data/
│   │   ├── base-profile.ts   # Shared profile data
│   │   └── resumes/          # Job-specific resumes
│   └── types/
│       └── resume.ts         # TypeScript types
```
