// Browser notification helpers for GeoChallenge daily reminders.
import type { Lang } from "@/lib/geo";

export const NOTIF_PREF_KEY = "geoChallengeNotifPref"; // "enabled" | "dismissed"
export const NOTIF_LAST_SENT_KEY = "geoChallengeNotifLastSent"; // YYYY-MM-DD (local)
export const NOTIF_PROMPT_SHOWN_KEY = "geoChallengeNotifPromptShown"; // "1"

const STORAGE_KEY = "geoChallenge"; // mirror src/routes/index.tsx
const STREAK_KEY = "geoChallengeStreak";

const REMINDER_HOUR = 9; // 9:00 local time

export function notificationsSupported(): boolean {
  return (
    typeof window !== "undefined" &&
    "Notification" in window &&
    "serviceWorker" in navigator
  );
}

export function getNotifPref(): "enabled" | "dismissed" | null {
  if (typeof window === "undefined") return null;
  const v = window.localStorage.getItem(NOTIF_PREF_KEY);
  return v === "enabled" || v === "dismissed" ? v : null;
}

export function setNotifPref(v: "enabled" | "dismissed") {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(NOTIF_PREF_KEY, v);
}

export async function registerSW(): Promise<ServiceWorkerRegistration | null> {
  if (!notificationsSupported()) return null;
  try {
    return await navigator.serviceWorker.register("/sw.js");
  } catch {
    return null;
  }
}

export async function requestPermissionAndEnable(): Promise<boolean> {
  if (!notificationsSupported()) return false;
  const perm = await Notification.requestPermission();
  if (perm !== "granted") return false;
  setNotifPref("enabled");
  await registerSW();
  return true;
}

function localDateKey(d: Date = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function utcDateKey(d: Date = new Date()): string {
  return d.toISOString().slice(0, 10);
}

function hasPlayedToday(): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const saved = JSON.parse(raw) as { date?: string; gameState?: string };
    return (
      saved.date === utcDateKey() &&
      (saved.gameState === "won" || saved.gameState === "lost")
    );
  } catch {
    return false;
  }
}

function getStreak(): number {
  try {
    const raw = localStorage.getItem(STREAK_KEY);
    if (!raw) return 0;
    const s = JSON.parse(raw) as { currentStreak?: number };
    return s.currentStreak ?? 0;
  } catch {
    return 0;
  }
}

function getLang(): Lang {
  const nav = typeof navigator !== "undefined" ? navigator.language : "es";
  return nav.toLowerCase().startsWith("en") ? "en" : "es";
}

function buildMessage(lang: Lang, streak: number): { title: string; body: string } {
  if (lang === "en") {
    return {
      title: "GeoChallenge 🌍",
      body: `🔥 Time for your daily challenge! You have a ${streak} day streak`,
    };
  }
  return {
    title: "GeoChallenge 🌍",
    body: `🔥 ¡Es hora de tu desafío diario! Tienes una racha de ${streak} días`,
  };
}

async function sendReminderNow() {
  const today = localDateKey();
  if (localStorage.getItem(NOTIF_LAST_SENT_KEY) === today) return;
  if (hasPlayedToday()) return;
  if (Notification.permission !== "granted") return;

  const reg = (await navigator.serviceWorker.getRegistration()) || (await registerSW());
  const msg = buildMessage(getLang(), getStreak());

  if (reg && reg.active) {
    reg.active.postMessage({ type: "SHOW_REMINDER", ...msg });
  } else if (reg) {
    await reg.showNotification(msg.title, { body: msg.body, icon: "/favicon.ico", tag: "geochallenge-daily-reminder" });
  } else {
    new Notification(msg.title, { body: msg.body, icon: "/favicon.ico" });
  }
  localStorage.setItem(NOTIF_LAST_SENT_KEY, today);
}

let scheduledTimeout: number | null = null;

/**
 * Call on app load. If notifications are enabled:
 *  - If it's already past 9 AM local and the user hasn't played today and we
 *    haven't sent a reminder today → send immediately.
 *  - Otherwise schedule a timeout for the next 9 AM (within ~24h while tab open).
 */
export async function initDailyReminder() {
  if (!notificationsSupported()) return;
  if (getNotifPref() !== "enabled") return;
  if (Notification.permission !== "granted") return;

  await registerSW();

  const now = new Date();
  const target = new Date(now);
  target.setHours(REMINDER_HOUR, 0, 0, 0);

  if (now >= target) {
    // Past 9 AM today — send if conditions are met.
    await sendReminderNow();
    // Schedule for 9 AM tomorrow.
    target.setDate(target.getDate() + 1);
  }

  if (scheduledTimeout !== null) window.clearTimeout(scheduledTimeout);
  const delay = Math.min(target.getTime() - Date.now(), 2_147_000_000);
  scheduledTimeout = window.setTimeout(() => {
    sendReminderNow().finally(() => initDailyReminder());
  }, delay);
}
