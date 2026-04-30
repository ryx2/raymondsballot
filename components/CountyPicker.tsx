"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { County } from "@/data/counties";

interface Props {
  stateSlug: string;
  counties: County[];
  selectedCountySlug?: string;
}

export default function CountyPicker({
  stateSlug,
  counties,
  selectedCountySlug,
}: Props) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const filteredCounties = useMemo(() => {
    if (!normalizedQuery) return counties;
    return counties.filter((county) =>
      county.name.toLowerCase().includes(normalizedQuery)
    );
  }, [counties, normalizedQuery]);

  const visibleCounties = normalizedQuery
    ? filteredCounties
    : filteredCounties.slice(0, 30);
  const remainingCount = filteredCounties.length - visibleCounties.length;

  return (
    <div className="border-t-2 border-ink pt-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="eyebrow mb-2">Choose your county</div>
          <h2 className="font-display text-3xl font-black tracking-tight">
            Localize the guide
          </h2>
        </div>
        <label className="block md:w-80">
          <span className="sr-only">Search counties</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search county"
            className="w-full border-2 border-ink bg-paper px-3 py-2 text-sm outline-none placeholder:text-ink-faint focus:bg-paper-deep"
          />
        </label>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
        {visibleCounties.map((county) => {
          const selected = county.slug === selectedCountySlug;
          return (
            <Link
              key={county.fips}
              href={`/states/${stateSlug}/${county.slug}`}
              aria-current={selected ? "page" : undefined}
              className={[
                "group flex min-h-14 flex-col justify-between border px-3 py-2 transition-colors",
                selected
                  ? "border-ink bg-ink text-paper"
                  : "border-rule-soft bg-paper hover:border-ink hover:bg-paper-deep",
              ].join(" ")}
            >
              <span className="truncate text-sm font-medium">
                {county.name}
              </span>
              <span
                className={[
                  "mt-1 font-data text-[10px] tabnum",
                  selected ? "text-paper/70" : "text-ink-faint",
                ].join(" ")}
              >
                FIPS {county.fips}
              </span>
            </Link>
          );
        })}
      </div>

      {visibleCounties.length === 0 && (
        <div className="mt-4 border-l-4 border-rule-soft pl-4 text-sm text-ink-muted">
          No county matches that search.
        </div>
      )}

      {remainingCount > 0 && (
        <div className="mt-3 font-data text-xs text-ink-faint">
          Showing first {visibleCounties.length} of {filteredCounties.length}.
          Search to narrow the county list.
        </div>
      )}
    </div>
  );
}
