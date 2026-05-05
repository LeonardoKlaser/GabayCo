interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

const sizes = {
  sm: {
    name: "text-sm",
    pipe: "text-lg",
    lines: "text-[8px]",
    gap: "gap-2",
  },
  md: {
    name: "text-lg",
    pipe: "text-2xl",
    lines: "text-[10px]",
    gap: "gap-3",
  },
  lg: {
    name: "text-2xl",
    pipe: "text-3xl",
    lines: "text-[12px]",
    gap: "gap-3",
  },
};

const variants = {
  light: {
    name: "text-brand-ice-white",
    pipe: "text-brand-blue-gray",
    lines: "text-brand-blue-gray",
  },
  dark: {
    name: "text-brand-dark-navy",
    pipe: "text-brand-medium-navy",
    lines: "text-brand-medium-navy",
  },
};

export default function BrandLogo({ size = "sm", variant = "light" }: BrandLogoProps) {
  const s = sizes[size];
  const v = variants[variant];
  return (
    <div className={`flex items-center justify-center ${s.gap}`}>
      <span className={`font-heading font-bold ${s.name} ${v.name}`}>
        Gabriele.
      </span>
      <span className={`font-body font-light ${s.pipe} ${v.pipe}`}>
        |
      </span>
      <div className="flex flex-col leading-tight">
        <span
          className={`font-body font-light ${s.lines} uppercase tracking-[0.15em] ${v.lines}`}
        >
          Comunicação
        </span>
        <span
          className={`font-body font-light ${s.lines} uppercase tracking-[0.15em] ${v.lines}`}
        >
          e Marketing
        </span>
      </div>
    </div>
  );
}
