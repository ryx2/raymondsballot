import { writeFileSync } from "node:fs";

const COUNTY_SOURCE =
  "https://www2.census.gov/geo/docs/reference/codes/files/national_county.txt";

const STATE_SLUGS = {
  AL: "alabama",
  AK: "alaska",
  AZ: "arizona",
  AR: "arkansas",
  CA: "california",
  CO: "colorado",
  CT: "connecticut",
  DE: "delaware",
  FL: "florida",
  GA: "georgia",
  HI: "hawaii",
  ID: "idaho",
  IL: "illinois",
  IN: "indiana",
  IA: "iowa",
  KS: "kansas",
  KY: "kentucky",
  LA: "louisiana",
  ME: "maine",
  MD: "maryland",
  MA: "massachusetts",
  MI: "michigan",
  MN: "minnesota",
  MS: "mississippi",
  MO: "missouri",
  MT: "montana",
  NE: "nebraska",
  NV: "nevada",
  NH: "new-hampshire",
  NJ: "new-jersey",
  NM: "new-mexico",
  NY: "new-york",
  NC: "north-carolina",
  ND: "north-dakota",
  OH: "ohio",
  OK: "oklahoma",
  OR: "oregon",
  PA: "pennsylvania",
  RI: "rhode-island",
  SC: "south-carolina",
  SD: "south-dakota",
  TN: "tennessee",
  TX: "texas",
  UT: "utah",
  VT: "vermont",
  VA: "virginia",
  WA: "washington",
  WV: "west-virginia",
  WI: "wisconsin",
  WY: "wyoming",
};

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/'/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const response = await fetch(COUNTY_SOURCE);
if (!response.ok) {
  throw new Error(`Failed to fetch counties: ${response.status}`);
}

const rows = (await response.text())
  .trim()
  .split("\n")
  .map((line) => line.trim())
  .filter(Boolean);

const counties = rows
  .map((line) => {
    const [statePostalAbbreviation, stateFips, countyFips, name] =
      line.split(",");
    const stateSlug = STATE_SLUGS[statePostalAbbreviation];
    if (!stateSlug) return null;

    return {
      stateSlug,
      statePostalAbbreviation,
      stateFips,
      countyFips,
      fips: `${stateFips}${countyFips}`,
      name,
      slug: slugify(name),
    };
  })
  .filter(Boolean)
  .sort((a, b) => {
    if (a.stateSlug !== b.stateSlug) return a.stateSlug.localeCompare(b.stateSlug);
    return a.name.localeCompare(b.name);
  });

const body = `// Generated from U.S. Census county code list: ${COUNTY_SOURCE}
// Regenerate with: bun scripts/generate-counties.mjs

export interface County {
  stateSlug: string;
  statePostalAbbreviation: string;
  stateFips: string;
  countyFips: string;
  fips: string;
  name: string;
  slug: string;
}

export const COUNTIES: County[] = ${JSON.stringify(counties, null, 2)};

export function getCountiesByStateSlug(stateSlug: string): County[] {
  return COUNTIES.filter((county) => county.stateSlug === stateSlug);
}

export function getCounty(stateSlug: string, countySlug: string): County | undefined {
  return COUNTIES.find(
    (county) => county.stateSlug === stateSlug && county.slug === countySlug
  );
}
`;

writeFileSync(new URL("../data/counties.ts", import.meta.url), body);
console.log(`Wrote ${counties.length} counties to data/counties.ts`);
