import type { FAQ } from "@/lib/faq";

export default function _FAQ({ questions }: { questions: FAQ[] }) {
  return (
    <div className="divide-y divide-black/10 border-y border-black/10 dark:divide-white/10 dark:border-white/10">
      {questions.map((item) => (
        <details key={item.id} id={item.id} className="group scroll-mt-28">
          <summary className="cursor-pointer px-2 py-6 text-lg font-bold tracking-tight marker:text-orange-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600 sm:text-xl">
            {item.question}
          </summary>
          <div className="max-w-3xl px-2 pb-6 text-base leading-8 text-stone-700 dark:text-stone-300">
            <p>{item.answer}</p>
            {item.source && (
              <a
                href={item.source.href}
                className="mt-3 inline-block text-sm font-semibold text-orange-700 underline underline-offset-4 dark:text-orange-400"
              >
                {item.source.label}
              </a>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}
