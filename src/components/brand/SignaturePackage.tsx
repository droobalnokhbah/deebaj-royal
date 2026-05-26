type SignaturePackageProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  tone?: 'ivory' | 'caramel';
  size?: 'small' | 'large';
};

export function SignaturePackage({
  eyebrow = 'DEEBAJ',
  title = 'ROYAL',
  subtitle,
  tone = 'ivory',
  size = 'large',
}: SignaturePackageProps) {
  const isCaramel = tone === 'caramel';
  const frameClass = isCaramel
    ? 'border-champagne/40 bg-caramel-deep text-cream'
    : 'border-champagne-warm/40 bg-cream text-ink';
  const panelClass = isCaramel
    ? 'border-champagne/40 bg-[#78573c]'
    : 'border-champagne-warm/40 bg-[#fffaf0]';
  const heightClass = size === 'large' ? 'aspect-[4/5]' : 'aspect-[4/3]';
  const logoSize = size === 'large' ? 'text-4xl sm:text-5xl' : 'text-2xl';

  return (
    <div
      className={`rounded-[2.75rem] border p-5 shadow-[0_42px_110px_rgba(51,38,28,0.11)] ${frameClass}`}
    >
      <div
        className={`relative flex ${heightClass} items-center justify-center overflow-hidden rounded-[2.2rem] border text-center ${panelClass}`}
      >
        <div className="absolute inset-5 rounded-[1.75rem] border border-current/10" />
        <div className="absolute left-8 top-8 h-8 w-8 border-l border-t border-current/25" />
        <div className="absolute right-8 top-8 h-8 w-8 border-r border-t border-current/25" />
        <div className="absolute bottom-8 left-8 h-8 w-8 border-b border-l border-current/25" />
        <div className="absolute bottom-8 right-8 h-8 w-8 border-b border-r border-current/25" />

        <div className="relative px-8">
          <div className="mx-auto mb-10 h-10 w-16 border-x border-t border-current/30" />
          <p className={`font-logo ${logoSize} tracking-[0.42em] text-current`}>
            {eyebrow}
          </p>
          <div className="mx-auto my-7 h-px w-28 bg-current/25" />
          <p className="text-xs uppercase tracking-[0.42em] text-current/70">
            {title}
          </p>
          {subtitle && (
            <p className="mx-auto mt-8 max-w-xs text-xs leading-6 tracking-[0.12em] text-current/60">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
