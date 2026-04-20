export type BgVariant = "none" | "aurora" | "meridians" | "constellation" | "pattern";

interface Props {
  variant: BgVariant;
}

export function AnimatedBackground({ variant }: Props) {
  if (variant === "none") return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {variant === "aurora" && <AuroraBg />}
      {variant === "meridians" && <MeridiansBg />}
      {variant === "constellation" && <ConstellationBg />}
      {variant === "pattern" && <PatternBg />}
    </div>
  );
}

function AuroraBg() {
  return (
    <div className="absolute inset-0">
      <div
        className="gc-aurora-blob absolute -top-32 -left-24 h-[55vw] w-[55vw] rounded-full opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
        }}
      />
      <div
        className="gc-aurora-blob-2 absolute top-1/3 -right-32 h-[60vw] w-[60vw] rounded-full opacity-35 blur-3xl"
        style={{
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
      />
      <div
        className="gc-aurora-blob-3 absolute -bottom-40 left-1/4 h-[50vw] w-[50vw] rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

function MeridiansBg() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="none"
      viewBox="0 0 1000 1000"
    >
      <defs>
        <linearGradient id="meridian-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.12" />
        </linearGradient>
      </defs>
      <g
        fill="none"
        stroke="url(#meridian-grad)"
        strokeWidth="1.2"
        className="gc-meridian-flow"
      >
        {[...Array(9)].map((_, i) => {
          const cx = (i + 1) * 100;
          return (
            <ellipse
              key={`v-${i}`}
              cx={cx}
              cy="500"
              rx={60 + i * 8}
              ry="500"
            />
          );
        })}
        {[...Array(7)].map((_, i) => (
          <line
            key={`h-${i}`}
            x1="0"
            y1={(i + 1) * 125}
            x2="1000"
            y2={(i + 1) * 125}
            strokeDasharray="4 6"
            opacity="0.5"
          />
        ))}
      </g>
    </svg>
  );
}

function ConstellationBg() {
  // Deterministic pseudo-random points
  const points = Array.from({ length: 28 }, (_, i) => {
    const x = ((i * 137.5) % 100);
    const y = ((i * 73.3 + 11) % 100);
    return { x, y, r: 1 + ((i * 7) % 3) * 0.4 };
  });

  return (
    <svg
      className="gc-constellation-drift absolute inset-0 h-full w-full"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      <g stroke="var(--primary)" strokeWidth="0.08" opacity="0.35">
        {points.map((p, i) => {
          const next = points[(i + 1) % points.length];
          const next2 = points[(i + 3) % points.length];
          return (
            <g key={i}>
              <line x1={p.x} y1={p.y} x2={next.x} y2={next.y} />
              <line x1={p.x} y1={p.y} x2={next2.x} y2={next2.y} opacity="0.4" />
            </g>
          );
        })}
      </g>
      <g fill="var(--primary)" opacity="0.55">
        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={p.r * 0.3} />
        ))}
      </g>
    </svg>
  );
}

function PatternBg() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid"
    >
      <defs>
        <pattern
          id="geo-pattern"
          x="0"
          y="0"
          width="120"
          height="120"
          patternUnits="userSpaceOnUse"
        >
          {/* Compass rose */}
          <g
            transform="translate(60 60)"
            fill="none"
            stroke="var(--foreground)"
            strokeWidth="0.8"
            opacity="0.06"
          >
            <circle r="22" />
            <circle r="14" />
            <line x1="-28" y1="0" x2="28" y2="0" />
            <line x1="0" y1="-28" x2="0" y2="28" />
            <line x1="-20" y1="-20" x2="20" y2="20" strokeDasharray="2 3" />
            <line x1="-20" y1="20" x2="20" y2="-20" strokeDasharray="2 3" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#geo-pattern)" />
    </svg>
  );
}
