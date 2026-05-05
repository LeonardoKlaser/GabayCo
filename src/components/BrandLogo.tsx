interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: {
    name: "text-xs",
    pipe: "text-base",
    lines: "text-[7px]",
    gap: "gap-2",
  },
  md: {
    name: "text-base",
    pipe: "text-xl",
    lines: "text-[9px]",
    gap: "gap-3",
  },
  lg: {
    name: "text-2xl",
    pipe: "text-2xl",
    lines: "text-[11px]",
    gap: "gap-3",
  },
};

export default function BrandLogo({ size = "sm" }: BrandLogoProps) {
  const s = sizes[size];
  return (
    <div className={`flex items-center justify-center ${s.gap}`}>
      <span className={`font-heading font-bold ${s.name} text-brand-ice-white`}>
        Gabriele.
      </span>
      <span className={`font-body font-light ${s.pipe} text-brand-blue-gray`}>
        |
      </span>
      <div className="flex flex-col leading-tight">
        <span
          className={`font-body font-light ${s.lines} uppercase tracking-[0.15em] text-brand-blue-gray`}
        >
          Comunicação
        </span>
        <span
          className={`font-body font-light ${s.lines} uppercase tracking-[0.15em] text-brand-blue-gray`}
        >
          e Marketing
        </span>
      </div>
    </div>
  );
}
