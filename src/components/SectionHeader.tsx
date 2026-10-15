interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

/** The one header every home section uses: rule, label, title, optional blurb and actions. */
export default function SectionHeader({ eyebrow, title, description, children }: SectionHeaderProps) {
  return (
    <header className="mb-10 lg:mb-12">
      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-accent">{eyebrow}</p>
          <h2 className="mt-2 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            {title}
          </h2>
          {description && <p className="mt-3 max-w-[62ch] leading-relaxed text-mute">{description}</p>}
        </div>
        {children && <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">{children}</div>}
      </div>
    </header>
  );
}
