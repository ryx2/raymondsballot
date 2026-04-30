export type StateRegion = "Northeast" | "Midwest" | "South" | "West";

export type StatePostalAbbreviation =
  | "AL"
  | "AK"
  | "AZ"
  | "AR"
  | "CA"
  | "CO"
  | "CT"
  | "DE"
  | "FL"
  | "GA"
  | "HI"
  | "ID"
  | "IL"
  | "IN"
  | "IA"
  | "KS"
  | "KY"
  | "LA"
  | "ME"
  | "MD"
  | "MA"
  | "MI"
  | "MN"
  | "MS"
  | "MO"
  | "MT"
  | "NE"
  | "NV"
  | "NH"
  | "NJ"
  | "NM"
  | "NY"
  | "NC"
  | "ND"
  | "OH"
  | "OK"
  | "OR"
  | "PA"
  | "RI"
  | "SC"
  | "SD"
  | "TN"
  | "TX"
  | "UT"
  | "VT"
  | "VA"
  | "WA"
  | "WV"
  | "WI"
  | "WY";

export interface StateTilePosition {
  row: number;
  col: number;
}

export interface USState {
  name: string;
  postalAbbreviation: StatePostalAbbreviation;
  slug: string;
  region: StateRegion;
  tile: StateTilePosition;
}

// Tile coordinates are zero-based and fit an 8-row by 11-column compact map.
export const STATES: USState[] = [
  {
    name: "Alabama",
    postalAbbreviation: "AL",
    slug: "alabama",
    region: "South",
    tile: { row: 6, col: 6 },
  },
  {
    name: "Alaska",
    postalAbbreviation: "AK",
    slug: "alaska",
    region: "West",
    tile: { row: 7, col: 0 },
  },
  {
    name: "Arizona",
    postalAbbreviation: "AZ",
    slug: "arizona",
    region: "West",
    tile: { row: 5, col: 1 },
  },
  {
    name: "Arkansas",
    postalAbbreviation: "AR",
    slug: "arkansas",
    region: "South",
    tile: { row: 5, col: 4 },
  },
  {
    name: "California",
    postalAbbreviation: "CA",
    slug: "california",
    region: "West",
    tile: { row: 4, col: 0 },
  },
  {
    name: "Colorado",
    postalAbbreviation: "CO",
    slug: "colorado",
    region: "West",
    tile: { row: 4, col: 2 },
  },
  {
    name: "Connecticut",
    postalAbbreviation: "CT",
    slug: "connecticut",
    region: "Northeast",
    tile: { row: 2, col: 9 },
  },
  {
    name: "Delaware",
    postalAbbreviation: "DE",
    slug: "delaware",
    region: "South",
    tile: { row: 4, col: 9 },
  },
  {
    name: "Florida",
    postalAbbreviation: "FL",
    slug: "florida",
    region: "South",
    tile: { row: 7, col: 8 },
  },
  {
    name: "Georgia",
    postalAbbreviation: "GA",
    slug: "georgia",
    region: "South",
    tile: { row: 6, col: 7 },
  },
  {
    name: "Hawaii",
    postalAbbreviation: "HI",
    slug: "hawaii",
    region: "West",
    tile: { row: 7, col: 1 },
  },
  {
    name: "Idaho",
    postalAbbreviation: "ID",
    slug: "idaho",
    region: "West",
    tile: { row: 2, col: 1 },
  },
  {
    name: "Illinois",
    postalAbbreviation: "IL",
    slug: "illinois",
    region: "Midwest",
    tile: { row: 3, col: 5 },
  },
  {
    name: "Indiana",
    postalAbbreviation: "IN",
    slug: "indiana",
    region: "Midwest",
    tile: { row: 3, col: 6 },
  },
  {
    name: "Iowa",
    postalAbbreviation: "IA",
    slug: "iowa",
    region: "Midwest",
    tile: { row: 3, col: 4 },
  },
  {
    name: "Kansas",
    postalAbbreviation: "KS",
    slug: "kansas",
    region: "Midwest",
    tile: { row: 5, col: 3 },
  },
  {
    name: "Kentucky",
    postalAbbreviation: "KY",
    slug: "kentucky",
    region: "South",
    tile: { row: 4, col: 5 },
  },
  {
    name: "Louisiana",
    postalAbbreviation: "LA",
    slug: "louisiana",
    region: "South",
    tile: { row: 6, col: 4 },
  },
  {
    name: "Maine",
    postalAbbreviation: "ME",
    slug: "maine",
    region: "Northeast",
    tile: { row: 0, col: 10 },
  },
  {
    name: "Maryland",
    postalAbbreviation: "MD",
    slug: "maryland",
    region: "South",
    tile: { row: 4, col: 8 },
  },
  {
    name: "Massachusetts",
    postalAbbreviation: "MA",
    slug: "massachusetts",
    region: "Northeast",
    tile: { row: 1, col: 10 },
  },
  {
    name: "Michigan",
    postalAbbreviation: "MI",
    slug: "michigan",
    region: "Midwest",
    tile: { row: 2, col: 6 },
  },
  {
    name: "Minnesota",
    postalAbbreviation: "MN",
    slug: "minnesota",
    region: "Midwest",
    tile: { row: 2, col: 4 },
  },
  {
    name: "Mississippi",
    postalAbbreviation: "MS",
    slug: "mississippi",
    region: "South",
    tile: { row: 6, col: 5 },
  },
  {
    name: "Missouri",
    postalAbbreviation: "MO",
    slug: "missouri",
    region: "Midwest",
    tile: { row: 4, col: 4 },
  },
  {
    name: "Montana",
    postalAbbreviation: "MT",
    slug: "montana",
    region: "West",
    tile: { row: 2, col: 2 },
  },
  {
    name: "Nebraska",
    postalAbbreviation: "NE",
    slug: "nebraska",
    region: "Midwest",
    tile: { row: 4, col: 3 },
  },
  {
    name: "Nevada",
    postalAbbreviation: "NV",
    slug: "nevada",
    region: "West",
    tile: { row: 3, col: 1 },
  },
  {
    name: "New Hampshire",
    postalAbbreviation: "NH",
    slug: "new-hampshire",
    region: "Northeast",
    tile: { row: 1, col: 9 },
  },
  {
    name: "New Jersey",
    postalAbbreviation: "NJ",
    slug: "new-jersey",
    region: "Northeast",
    tile: { row: 3, col: 9 },
  },
  {
    name: "New Mexico",
    postalAbbreviation: "NM",
    slug: "new-mexico",
    region: "West",
    tile: { row: 5, col: 2 },
  },
  {
    name: "New York",
    postalAbbreviation: "NY",
    slug: "new-york",
    region: "Northeast",
    tile: { row: 2, col: 8 },
  },
  {
    name: "North Carolina",
    postalAbbreviation: "NC",
    slug: "north-carolina",
    region: "South",
    tile: { row: 5, col: 6 },
  },
  {
    name: "North Dakota",
    postalAbbreviation: "ND",
    slug: "north-dakota",
    region: "Midwest",
    tile: { row: 2, col: 3 },
  },
  {
    name: "Ohio",
    postalAbbreviation: "OH",
    slug: "ohio",
    region: "Midwest",
    tile: { row: 3, col: 7 },
  },
  {
    name: "Oklahoma",
    postalAbbreviation: "OK",
    slug: "oklahoma",
    region: "South",
    tile: { row: 6, col: 3 },
  },
  {
    name: "Oregon",
    postalAbbreviation: "OR",
    slug: "oregon",
    region: "West",
    tile: { row: 3, col: 0 },
  },
  {
    name: "Pennsylvania",
    postalAbbreviation: "PA",
    slug: "pennsylvania",
    region: "Northeast",
    tile: { row: 3, col: 8 },
  },
  {
    name: "Rhode Island",
    postalAbbreviation: "RI",
    slug: "rhode-island",
    region: "Northeast",
    tile: { row: 2, col: 10 },
  },
  {
    name: "South Carolina",
    postalAbbreviation: "SC",
    slug: "south-carolina",
    region: "South",
    tile: { row: 5, col: 7 },
  },
  {
    name: "South Dakota",
    postalAbbreviation: "SD",
    slug: "south-dakota",
    region: "Midwest",
    tile: { row: 3, col: 3 },
  },
  {
    name: "Tennessee",
    postalAbbreviation: "TN",
    slug: "tennessee",
    region: "South",
    tile: { row: 5, col: 5 },
  },
  {
    name: "Texas",
    postalAbbreviation: "TX",
    slug: "texas",
    region: "South",
    tile: { row: 7, col: 3 },
  },
  {
    name: "Utah",
    postalAbbreviation: "UT",
    slug: "utah",
    region: "West",
    tile: { row: 4, col: 1 },
  },
  {
    name: "Vermont",
    postalAbbreviation: "VT",
    slug: "vermont",
    region: "Northeast",
    tile: { row: 1, col: 8 },
  },
  {
    name: "Virginia",
    postalAbbreviation: "VA",
    slug: "virginia",
    region: "South",
    tile: { row: 4, col: 7 },
  },
  {
    name: "Washington",
    postalAbbreviation: "WA",
    slug: "washington",
    region: "West",
    tile: { row: 2, col: 0 },
  },
  {
    name: "West Virginia",
    postalAbbreviation: "WV",
    slug: "west-virginia",
    region: "South",
    tile: { row: 4, col: 6 },
  },
  {
    name: "Wisconsin",
    postalAbbreviation: "WI",
    slug: "wisconsin",
    region: "Midwest",
    tile: { row: 2, col: 5 },
  },
  {
    name: "Wyoming",
    postalAbbreviation: "WY",
    slug: "wyoming",
    region: "West",
    tile: { row: 3, col: 2 },
  },
];

export const READY_STATE_SLUGS = ["california"] as const;

export function getState(slug: string): USState | undefined {
  return STATES.find((state) => state.slug === slug);
}

export function hasStateGuide(slug: string): boolean {
  return READY_STATE_SLUGS.includes(slug as (typeof READY_STATE_SLUGS)[number]);
}
