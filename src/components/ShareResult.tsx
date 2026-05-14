import { useState } from "react";
import { Check, Copy, Linkedin, MessageCircle, Twitter } from "lucide-react";
import type { Lang } from "@/lib/geo";
import { t } from "@/lib/i18n";

interface Props {
  lang: Lang;
  hintsUsed: number;
  totalHints: number;
  streak: number;
  won?: boolean;
}

const SHARE_URL = "https://geochallengedaily.lovable.app";

export function ShareResult({ lang, hintsUsed, totalHints, streak, won = true }: Props) {
  const tx = t(lang);
  const text = won ? tx.shareText(hintsUsed, totalHints, streak) : tx.shareTextLost(streak);
  const [copied, setCopied] = useState(false);

  const encoded = encodeURIComponent(text);
  const encodedUrl = encodeURIComponent(SHARE_URL);

  const twitterHref = `https://twitter.com/intent/tweet?text=${encoded}`;
  // api.whatsapp.com works both on desktop and mobile reliably
  const whatsappHref = `https://api.whatsapp.com/send?text=${encoded}`;
  // LinkedIn's share-offsite only accepts a URL, not custom text.
  const linkedinHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

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
        <a
          href={twitterHref}
          target="_blank"
          rel="noopener noreferrer"
          className={baseBtn}
          aria-label={tx.shareTwitter}
        >
          <Twitter className="h-4 w-4" />
          <span>{tx.shareTwitter}</span>
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          data-action="share/whatsapp/share"
          className={baseBtn}
          aria-label={tx.shareWhatsApp}
        >
          <MessageCircle className="h-4 w-4" />
          <span>{tx.shareWhatsApp}</span>
        </a>
        <a
          href={linkedinHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            void handleCopy();
          }}
          className={baseBtn}
          aria-label={tx.shareLinkedIn}
          title={tx.shareLinkedIn}
        >
          <Linkedin className="h-4 w-4" />
          <span>{tx.shareLinkedIn}</span>
        </a>
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
