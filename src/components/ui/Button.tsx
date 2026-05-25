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
  primary: 'bg-ink text-cream hover:bg-honey-deep',
  secondary: 'border border-honey/30 bg-cream text-ink hover:border-honey hover:bg-cream-soft',
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
    'inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-colors',
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
