import { useState } from "react";
import { Check, Copy, Linkedin, MessageCircle, Twitter } from "lucide-react";
import type { Lang } from "@/lib/geo";
import { t } from "@/lib/i18n";

interface Props {
  lang: Lang;
  hintsUsed: number;
  totalHints: number;
  streak: number;
}

const SHARE_URL = "https://geochallengedaily.lovable.app";

export function ShareResult({ lang, hintsUsed, totalHints, streak }: Props) {
  const tx = t(lang);
  const text = tx.shareText(hintsUsed, totalHints, streak);
  const [copied, setCopied] = useState(false);

  const encoded = encodeURIComponent(text);

  const openShare = (url: string) => {
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  const baseBtn =
    "inline-flex items-center justify-center gap-1.5 rounded-[10px] border border-border bg-card px-3 py-2 text-xs font-medium text-foreground shadow-[var(--shadow-soft)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <div className="mt-5 border-t border-border pt-5">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {tx.shareTitle}
      </p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <button
          type="button"
          onClick={() =>
            openShare(`https://twitter.com/intent/tweet?text=${encoded}`)
          }
          className={baseBtn}
          aria-label={tx.shareTwitter}
        >
          <Twitter className="h-4 w-4" />
          <span>{tx.shareTwitter}</span>
        </button>
        <button
          type="button"
          onClick={() => openShare(`https://wa.me/?text=${encoded}`)}
          className={baseBtn}
          aria-label={tx.shareWhatsApp}
        >
          <MessageCircle className="h-4 w-4" />
          <span>{tx.shareWhatsApp}</span>
        </button>
        <button
          type="button"
          onClick={() => {
            void handleCopy();
            openShare(
              `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(SHARE_URL)}`,
            );
          }}
          className={baseBtn}
          aria-label={tx.shareLinkedIn}
        >
          <Linkedin className="h-4 w-4" />
          <span>{tx.shareLinkedIn}</span>
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className={baseBtn}
          aria-label={tx.shareCopy}
        >
          {copied ? (
            <Check className="h-4 w-4 text-primary" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
          <span>{copied ? tx.shareCopied : tx.shareCopy}</span>
        </button>
      </div>
    </div>
  );
}
