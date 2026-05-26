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
  primary: 'bg-caramel-deep text-cream shadow-[0_18px_45px_rgba(51,38,28,0.13)] hover:bg-ink',
  secondary:
    'border border-champagne-warm/40 bg-cream/80 text-ink shadow-[0_12px_30px_rgba(51,38,28,0.045)] hover:border-honey hover:bg-champagne-pale',
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
