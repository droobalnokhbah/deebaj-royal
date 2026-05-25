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
    <section className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      {(eyebrow || title || description) && (
        <div className="mb-10 max-w-3xl">
          {eyebrow && (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-honey">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="font-serif text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-5xl">
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
