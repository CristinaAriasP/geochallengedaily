import { useEffect, useState } from "react";

type TimeOfDay = "morning" | "afternoon" | "evening" | "night";

function getTimeOfDay(hour: number): TimeOfDay {
  if (hour >= 6 && hour < 12) return "morning";
  if (hour >= 12 && hour < 17) return "afternoon";
  if (hour >= 17 && hour < 20) return "evening";
  return "night";
}

export function AnimatedBackground() {
  const [period, setPeriod] = useState<TimeOfDay>(() =>
    getTimeOfDay(new Date().getHours()),
  );

  useEffect(() => {
    const update = () => setPeriod(getTimeOfDay(new Date().getHours()));
    update();
    // Re-check every 5 minutes; CSS handles the smooth visual transition.
    const id = window.setInterval(update, 5 * 60 * 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      aria-hidden
      data-period={period}
      className="gc-aurora-root pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="gc-aurora-blob gc-aurora-hue-1 absolute -top-32 -left-24 h-[55vw] w-[55vw] rounded-full blur-3xl" />
        <div className="gc-aurora-blob-2 gc-aurora-hue-2 absolute top-1/3 -right-32 h-[60vw] w-[60vw] rounded-full blur-3xl" />
        <div className="gc-aurora-blob-3 gc-aurora-hue-3 absolute -bottom-40 left-1/4 h-[50vw] w-[50vw] rounded-full blur-3xl" />
      </div>
    </div>
  );
}
