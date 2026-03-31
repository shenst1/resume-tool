import Link from "next/link";

export const metadata = {
  title: "TypeScript: Benefits, Downsides & Considerations",
  description:
    "Why use TypeScript? Benefits, tradeoffs, and when to adopt or skip it",
};

const sections = [
  {
    title: "Benefits of TypeScript",
    items: [
      {
        heading: "Catch bugs at compile time",
        body: "Many runtime errors become compile-time errors. Typos in property names, wrong argument types, and null/undefined mistakes surface before the code runs. Refactoring is safer because the compiler flags call sites that break.",
      },
      {
        heading: "Better IDE support",
        body: "Autocomplete, inline documentation, go-to-definition, and rename refactoring all improve with types. IDEs can show you exactly what a function expects and what a variable holds without running the code.",
      },
      {
        heading: "Living documentation",
        body: "Types serve as always-updated docs. Unlike comments or READMEs, they can't drift from the implementation. New team members (and future you) understand APIs faster.",
      },
      {
        heading: "Scalability for teams",
        body: "As codebases and teams grow, types reduce coordination overhead. Contracts between modules are explicit. Breaking changes are caught when you change a type, not when a consumer deploys.",
      },
      {
        heading: "Refactoring confidence",
        body: "Safe renaming, extraction, and restructuring. The compiler finds every usage that needs updating. Large refactors that would be risky in plain JS become manageable.",
      },
      {
        heading: "Modern features, browser compatibility",
        body: "Use modern JS (optional chaining, nullish coalescing, decorators) and compile to targets that don't support it. TypeScript acts as both type checker and transpiler.",
      },
    ],
  },
  {
    title: "Downsides & Tradeoffs",
    items: [
      {
        heading: "Learning curve",
        body: "Developers need to learn the type system—generics, utility types, conditional types. Over-typing or fighting the compiler can be frustrating. It takes time to write idiomatic TypeScript.",
      },
      {
        heading: "Build time and tooling",
        body: "Compilation adds a step. Large projects can have slow tsc runs. Some tooling (tests, scripts) may need extra config to work with TS. Build pipelines get slightly more complex.",
      },
      {
        heading: "False sense of security",
        body: "Types only cover what you type. External data (APIs, user input) is often untyped or loosely typed. Without runtime validation, you can still have type mismatches at runtime. Types complement, don't replace, runtime checks.",
      },
      {
        heading: "Boilerplate and verbosity",
        body: "Some patterns require extra typing. Complex generics can be hard to read. Declaration files for JS libraries add maintenance. Over-defensive typing can clutter code.",
      },
      {
        heading: "Escape hatches can undermine value",
        body: "`any`, `as` assertions, and `@ts-ignore` bypass the type checker. Overuse negates many benefits. Teams need discipline to type properly instead of silencing the compiler.",
      },
      {
        heading: "Not all libraries are well-typed",
        body: "Some packages have poor or missing type definitions. You may spend time writing or fixing `.d.ts` files, or resort to `any` for untyped APIs.",
      },
    ],
  },
  {
    title: "When to Use TypeScript",
    items: [
      {
        heading: "New projects and greenfield work",
        body: "Start with TypeScript from day one. No migration cost, and you get benefits as the project grows. Especially valuable for apps with a long lifespan.",
      },
      {
        heading: "Larger teams and codebases",
        body: "The ROI increases with size. Multiple contributors, many modules, and long-lived codebases benefit most from explicit contracts and compile-time checks.",
      },
      {
        heading: "Libraries and APIs",
        body: "Published packages and public APIs benefit from types. Consumers get better DX and fewer integration bugs. Types are a feature of your library.",
      },
      {
        heading: "Complex business logic",
        body: "Domains with many states, rules, or data shapes are easier to reason about with types. Discriminated unions and branded types can encode business constraints.",
      },
    ],
  },
  {
    title: "When to Skip or Go Light",
    items: [
      {
        heading: "Tiny scripts and one-offs",
        body: "Quick automation, throwaway scripts, or tiny tools may not justify the overhead. Plain JS or JSDoc can be enough.",
      },
      {
        heading: "Prototyping and experimentation",
        body: "Rapid iteration may favor flexibility. You can add types later when the design stabilizes.",
      },
      {
        heading: "Legacy codebases with no bandwidth",
        body: "Migrating a large, untyped codebase is costly. Incremental adoption via allowJs and gradual typing is possible but takes discipline. Sometimes maintaining status quo is pragmatic.",
      },
      {
        heading: "Teams without TS experience",
        body: "If the team isn't ready, forcing TypeScript can slow delivery and cause friction. Consider training or pilot projects first.",
      },
    ],
  },
  {
    title: "Other Considerations",
    items: [
      {
        heading: "Incremental adoption",
        body: "You can migrate gradually with allowJs: enable TS for new files while existing JS remains. Add strictness over time. No need for a big-bang rewrite.",
      },
      {
        heading: "JSDoc as an alternative",
        body: "TypeScript can type-check plain JS via JSDoc annotations. Good middle ground: no separate build step, but you get some type checking and IDE support.",
      },
      {
        heading: "Runtime validation",
        body: "For external data (APIs, forms), pair types with runtime validation (Zod, io-ts, etc.). Parse at boundaries and trust types inside. Types alone don't validate at runtime.",
      },
      {
        heading: "Ecosystem maturity",
        body: "TypeScript is widely adopted. Most major frameworks and libraries have first-class support. The ecosystem is mature enough that lack of support is increasingly rare.",
      },
    ],
  },
];

function SectionCard({
  heading,
  body,
}: {
  heading: string;
  body: string;
}) {
  return (
    <div className="p-4 border border-gray-200 rounded-lg bg-white">
      <h3 className="font-semibold text-gray-900 mb-2">{heading}</h3>
      <p className="text-gray-600 text-[15px] leading-relaxed">{body}</p>
    </div>
  );
}

export default function TypeScriptBenefitsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto p-8">
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 text-sm"
          >
            ← Back to Resume Viewer
          </Link>
          <span className="text-gray-300">|</span>
          <Link
            href="/typescript"
            className="text-gray-600 hover:text-gray-900 text-sm"
          >
            Interview Q&A
          </Link>
        </div>

        <header className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            TypeScript: Benefits, Downsides & Considerations
          </h1>
          <p className="text-gray-600">
            Why use TypeScript? Tradeoffs, when to adopt, and when to skip it
          </p>
        </header>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.items.map((item) => (
                  <SectionCard
                    key={item.heading}
                    heading={item.heading}
                    body={item.body}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-200 text-sm text-gray-500">
          <Link href="/typescript" className="text-indigo-600 hover:underline">
            → TypeScript Interview Q&A
          </Link>
        </footer>
      </div>
    </div>
  );
}
