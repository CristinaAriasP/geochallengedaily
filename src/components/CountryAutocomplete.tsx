import { useEffect, useMemo, useRef, useState } from "react";
import { countries } from "@/data/countries";
import { normalizeString, type Lang } from "@/lib/geo";

interface Props {
  value: string;
  onChange: (v: string) => void;
  lang: Lang;
  placeholder?: string;
  className?: string;
}

const MAX_SUGGESTIONS = 5;

export function CountryAutocomplete({
  value,
  onChange,
  lang,
  placeholder,
  className,
}: Props) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  const normalizedQuery = normalizeString(value);
  const shouldShow = normalizedQuery.length >= 2;

  const suggestions = useMemo(() => {
    if (!shouldShow) return [];
    const seen = new Set<string>();
    const results: string[] = [];
    for (const c of countries) {
      const name = lang === "es" ? c.name : c.name_en;
      const norm = normalizeString(name);
      if (norm.includes(normalizedQuery) && !seen.has(norm)) {
        seen.add(norm);
        results.push(name);
        if (results.length >= MAX_SUGGESTIONS) break;
      }
    }
    return results;
  }, [normalizedQuery, shouldShow, lang]);

  useEffect(() => {
    setOpen(shouldShow && suggestions.length > 0);
    setActiveIndex(-1);
  }, [shouldShow, suggestions.length, value, lang]);

  // Close on outside click
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  function handleSelect(name: string) {
    onChange(name);
    setOpen(false);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!open || suggestions.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % suggestions.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i <= 0 ? suggestions.length - 1 : i - 1));
    } else if (e.key === "Enter") {
      if (activeIndex >= 0) {
        e.preventDefault();
        handleSelect(suggestions[activeIndex]);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <div ref={containerRef} className="w-full">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => {
          if (shouldShow && suggestions.length > 0) setOpen(true);
        }}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
        role="combobox"
        aria-expanded={open}
        aria-autocomplete="list"
        className={className}
      />
      {open && suggestions.length > 0 && (
        <ul
          role="listbox"
          className="absolute left-0 right-0 top-full z-50 mt-1 rounded-[10px] border border-border bg-card text-foreground shadow-lg"
        >
          {suggestions.map((name, i) => (
            <li
              key={name}
              role="option"
              aria-selected={i === activeIndex}
              onMouseDown={(e) => {
                e.preventDefault();
                handleSelect(name);
              }}
              onMouseEnter={() => setActiveIndex(i)}
              className={`cursor-pointer px-4 py-3 text-sm font-medium text-foreground border-b border-border/50 last:border-b-0 transition-colors ${
                i === activeIndex ? "bg-accent text-accent-foreground" : "hover:bg-accent/50"
              }`}
            >
              {highlightMatch(name, normalizedQuery)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/** Highlight every occurrence of the normalized query inside the original name. */
function highlightMatch(name: string, normalizedQuery: string) {
  if (!normalizedQuery) return name;
  // Walk char by char comparing normalized versions to preserve original casing/accents.
  const parts: Array<{ text: string; match: boolean }> = [];
  const nameNorm = normalizeString(name);
  let i = 0;
  while (i < name.length) {
    const idx = nameNorm.indexOf(normalizedQuery, i);
    if (idx === -1) {
      parts.push({ text: name.slice(i), match: false });
      break;
    }
    if (idx > i) parts.push({ text: name.slice(i, idx), match: false });
    const end = idx + normalizedQuery.length;
    parts.push({ text: name.slice(idx, end), match: true });
    i = end;
  }
  return (
    <>
      {parts.map((p, idx) =>
        p.match ? (
          <strong key={idx} className="font-bold text-primary">
            {p.text}
          </strong>
        ) : (
          <span key={idx}>{p.text}</span>
        ),
      )}
    </>
  );
}
