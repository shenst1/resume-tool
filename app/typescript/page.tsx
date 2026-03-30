import Link from "next/link";

export const metadata = {
  title: "TypeScript Review & Interview Prep",
  description:
    "TypeScript refreshers and common interview questions for technical interviews",
};

const sections = [
  {
    title: "Types & Type Annotations",
    questions: [
      {
        q: "What is the difference between type and interface?",
        a: "Both describe object shapes. Interfaces are extendable and can be merged (declaration merging). Types can represent unions, primitives, and complex mapped types. Prefer interface for object shapes; use type for unions, intersections, and utility types.",
      },
      {
        q: "What are union types and when would you use them?",
        a: "Union types (A | B) allow a value to be one of several types. Use them when a function accepts multiple input types, or when a variable can hold different shapes of data. Example: status: 'pending' | 'success' | 'error'",
      },
      {
        q: "Explain the difference between 'any' and 'unknown'",
        a: "any disables type checking entirely. unknown is type-safe: you must narrow (type guard, assert) before using it. Prefer unknown when you truly don't know the type at compile time.",
      },
      {
        q: "What is a type guard and give examples",
        a: "A type guard narrows a union to a specific type. Examples: typeof x === 'string', x instanceof Date, or a custom function with return type x is T. in operator can narrow discriminated unions.",
      },
    ],
  },
  {
    title: "Generics",
    questions: [
      {
        q: "What are generics and why use them?",
        a: "Generics let you write reusable code that works with multiple types while preserving type safety. Instead of any, they capture and propagate the type. Example: function identity<T>(x: T): T { return x; }",
      },
      {
        q: "Explain generic constraints with extends",
        a: "extends constrains the generic to a subset of types. Example: function getKey<T extends object, K extends keyof T>(obj: T, key: K): T[K] ensures K is a key of T and returns the correct value type.",
      },
      {
        q: "What are utility types? Name a few.",
        a: "Built-in types that transform other types: Partial<T>, Required<T>, Pick<T, K>, Omit<T, K>, Record<K, V>, ReturnType<F>, etc. They are implemented with mapped types and keyof.",
      },
    ],
  },
  {
    title: "Advanced Types",
    questions: [
      {
        q: "What are mapped types?",
        a: "Mapped types iterate over keys and create new object types. Example: type Readonly<T> = { readonly [K in keyof T]: T[K] }. Used for Partial, Pick, Record, etc.",
      },
      {
        q: "Explain conditional types",
        a: "Conditional types (T extends U ? X : Y) choose a type based on a condition. Used for inferring types, e.g. type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never.",
      },
      {
        q: "What is the infer keyword?",
        a: "Used in conditional types to infer a type from another. Example: type Param<T> = T extends (arg: infer P) => any ? P : never extracts the parameter type of a function.",
      },
      {
        q: "What are discriminated unions?",
        a: "Unions where each member has a common literal property (discriminant) that TypeScript uses to narrow. Example: type Shape = { kind: 'circle'; r: number } | { kind: 'rect'; w: number; h: number }.",
      },
    ],
  },
  {
    title: "Configuration & Module Systems",
    questions: [
      {
        q: "What do strict mode flags do?",
        a: "strict: true enables all strict checks (strictNullChecks, strictFunctionTypes, noImplicitAny, etc.). strictNullChecks is especially important—it prevents null/undefined from being assignable unless explicitly allowed.",
      },
      {
        q: "Explain moduleResolution: 'bundler' vs 'node'",
        a: "'bundler' assumes a bundler (Webpack, Vite) will resolve modules; allows package.json exports and modern resolution. 'node' follows Node's classic resolution for Node.js projects.",
      },
      {
        q: "What is declaration (d.ts) and when do you need it?",
        a: "Declaration files describe types for JS libraries. .d.ts files emit no JS—only type info. Needed when publishing libraries for TypeScript consumers or when adding types to untyped JS.",
      },
    ],
  },
  {
    title: "Decorators & Metadata",
    questions: [
      {
        q: "What are TypeScript decorators?",
        a: "Decorators are functions that modify classes, methods, or properties. Use @decorator syntax. Require experimentalDecorators in tsconfig. Used in Angular and class-validator.",
      },
      {
        q: "How do you type a decorator?",
        a: "For class decorators: (target: Function) => void. For method decorators: (target, key, descriptor: PropertyDescriptor) => PropertyDescriptor | void. Use DecoratorContext in stage 3 decorators.",
      },
    ],
  },
  {
    title: "Common Pitfalls & Best Practices",
    questions: [
      {
        q: "Why avoid 'as' type assertions when possible?",
        a: "Assertions bypass the type checker. Prefer type guards, narrowing, or better types. Use 'as const' for literal narrowing, but avoid as SomeType to force incorrect types.",
      },
      {
        q: "How do you type React event handlers?",
        a: "Use React.ChangeEvent<HTMLInputElement>, React.MouseEvent<HTMLButtonElement>, etc. For handlers: (e: React.ChangeEvent<HTMLInputElement>) => void. Use React.ComponentProps<'button'> for element props.",
      },
      {
        q: "What is the difference between 'satisfies' and 'as'?",
        a: "'satisfies' (TS 4.9+) validates that a value matches a type while preserving the most specific inferred type. Unlike 'as', it doesn't widen—you get autocomplete and safety for the literal shape.",
      },
    ],
  },
];

function AccordionItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="group border border-gray-200 rounded-lg bg-white">
      <summary className="cursor-pointer p-4 font-medium text-gray-900 hover:bg-gray-50 rounded-lg list-none flex justify-between items-center">
        <span>{question}</span>
        <span className="text-gray-400 group-open:rotate-180 transition-transform text-lg">
          ▼
        </span>
      </summary>
      <div className="px-4 pb-4 pt-0 text-gray-600 border-t border-gray-100 mt-0">
        <p className="pt-3 text-[15px] leading-relaxed">{answer}</p>
      </div>
    </details>
  );
}

export default function TypeScriptReviewPage() {
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
            href="/typescript/benefits"
            className="text-gray-600 hover:text-gray-900 text-sm"
          >
            Benefits & Downsides
          </Link>
        </div>

        <header className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            TypeScript Review & Interview Prep
          </h1>
          <p className="text-gray-600">
            Refreshers and common interview questions for technical interviews
          </p>
        </header>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.questions.map(({ q, a }) => (
                  <AccordionItem key={q} question={q} answer={a} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-200 text-sm text-gray-500 space-y-2">
          <p>
            Quick reference: run <code className="bg-gray-200 px-1 rounded">tsc --noEmit</code> to
            type-check without emitting files.
          </p>
          <Link href="/typescript/benefits" className="text-indigo-600 hover:underline">
            → TypeScript Benefits & Downsides
          </Link>
        </footer>
      </div>
    </div>
  );
}
