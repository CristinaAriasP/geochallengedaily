import { useEffect, useState } from "react";
import { Bell, X } from "lucide-react";
import type { Lang } from "@/lib/geo";
import {
  NOTIF_PROMPT_SHOWN_KEY,
  getNotifPref,
  initDailyReminder,
  notificationsSupported,
  requestPermissionAndEnable,
  setNotifPref,
} from "@/lib/notifications";

interface Props {
  lang: Lang;
  /** Game is finished (won/lost) — prompt becomes eligible to show. */
  show: boolean;
}

const COPY = {
  es: {
    title: "¿Quieres notificaciones para recordar tu racha diaria?",
    body: "Te enviaremos un único recordatorio a las 9:00 si aún no has jugado.",
    enable: "Activar notificaciones",
    later: "Ahora no",
    close: "Cerrar",
  },
  en: {
    title: "Enable notifications to remember your daily streak",
    body: "We'll send one reminder at 9:00 AM if you haven't played yet.",
    enable: "Enable notifications",
    later: "Not now",
    close: "Close",
  },
} as const;

export function NotificationPrompt({ lang, show }: Props) {
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!show) return;
    if (!notificationsSupported()) return;
    if (Notification.permission === "denied") return;
    if (getNotifPref() !== null) return;
    if (typeof window === "undefined") return;
    if (window.localStorage.getItem(NOTIF_PROMPT_SHOWN_KEY) === "1") return;
    const id = window.setTimeout(() => setOpen(true), 600);
    return () => window.clearTimeout(id);
  }, [show]);

  function dismiss(reason: "dismissed" | "shown") {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(NOTIF_PROMPT_SHOWN_KEY, "1");
    }
    if (reason === "dismissed") setNotifPref("dismissed");
    setOpen(false);
  }

  async function enable() {
    setBusy(true);
    const ok = await requestPermissionAndEnable();
    setBusy(false);
    if (ok) await initDailyReminder();
    dismiss(ok ? "shown" : "dismissed");
  }

  if (!open) return null;
  const tx = COPY[lang];

  return (
    <div
      className="gc-overlay-in fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-4"
      onClick={() => dismiss("dismissed")}
    >
      <div
        className="gc-pop-in relative w-full max-w-sm rounded-[12px] bg-card p-6 text-center shadow-[var(--shadow-pop)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => dismiss("dismissed")}
          aria-label={tx.close}
          className="absolute right-3 top-3 rounded-full p-1 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
          <Bell className="h-6 w-6" />
        </div>
        <h2 className="mt-3 text-lg font-semibold">{tx.title}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{tx.body}</p>
        <div className="mt-5 flex flex-col gap-2">
          <button
            type="button"
            disabled={busy}
            onClick={enable}
            className="w-full rounded-[10px] bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary/90 active:scale-[0.98] disabled:opacity-60"
          >
            {tx.enable}
          </button>
          <button
            type="button"
            onClick={() => dismiss("dismissed")}
            className="w-full rounded-[10px] bg-secondary px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary/80"
          >
            {tx.later}
          </button>
        </div>
      </div>
    </div>
  );
}
