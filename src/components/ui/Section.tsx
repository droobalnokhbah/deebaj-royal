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
    <section className={`py-24 sm:py-28 lg:py-36 ${className}`}>
      {(eyebrow || title || description) && (
        <div className="mb-14 max-w-4xl lg:mb-18">
          {eyebrow && (
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-honey">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="font-serif text-5xl font-medium leading-[1.04] text-ink sm:text-6xl lg:text-7xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-6 max-w-3xl text-lg leading-9 text-ink-soft sm:text-xl sm:leading-10">
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
