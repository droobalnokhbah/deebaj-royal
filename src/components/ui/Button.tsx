import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  type?: 'button' | 'submit';
};

const variantClasses = {
  primary: 'bg-honey-deep text-cream shadow-[0_18px_40px_rgba(92,62,16,0.18)] hover:bg-ink',
  secondary:
    'border border-honey/25 bg-cream/80 text-ink shadow-[0_12px_30px_rgba(92,62,16,0.06)] hover:border-honey hover:bg-cream-soft',
  ghost: 'text-ink hover:text-honey',
};

export function Button({
  children,
  href,
  className = '',
  variant = 'primary',
  type = 'button',
}: ButtonProps) {
  const classes = [
    'inline-flex min-h-12 items-center justify-center rounded-full px-7 text-sm font-semibold transition-colors',
    'focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-cream',
    variantClasses[variant],
    className,
  ].join(' ');

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
