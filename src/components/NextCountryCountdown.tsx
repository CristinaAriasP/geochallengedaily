import { useEffect, useState } from "react";

function getMsUntilMidnight(now: Date = new Date()): number {
  const tomorrow = new Date(now);
  tomorrow.setHours(24, 0, 0, 0); // next local midnight
  return Math.max(0, tomorrow.getTime() - now.getTime());
}

function formatHMS(ms: number): string {
  const total = Math.floor(ms / 1000);
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${h}h ${pad(m)}m ${pad(s)}s`;
}

interface Props {
  label: string;
  className?: string;
}

export function NextCountryCountdown({ label, className }: Props) {
  const [ms, setMs] = useState<number>(() => getMsUntilMidnight());

  useEffect(() => {
    const id = window.setInterval(() => {
      setMs(getMsUntilMidnight());
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <p
      className={
        className ??
        "mt-3 inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-sm font-medium text-foreground"
      }
      aria-live="polite"
    >
      <span>⏰</span>
      <span>{label}</span>
      <span className="font-semibold tabular-nums">{formatHMS(ms)}</span>
    </p>
  );
}
