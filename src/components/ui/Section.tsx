import type { ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
  className?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function Section({
  children,
  className = '',
  eyebrow,
  title,
  description,
}: SectionProps) {
  return (
    <section className={`py-20 sm:py-24 lg:py-32 ${className}`}>
      {(eyebrow || title || description) && (
        <div className="mb-12 max-w-3xl lg:mb-16">
          {eyebrow && (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-honey">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="font-serif text-4xl font-medium leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-5 text-base leading-8 text-ink-soft sm:text-lg">
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
