import { StateRegion } from "@/data/states";

export type CandidateParty =
  | "Democratic"
  | "Republican"
  | "Independent"
  | "Libertarian"
  | "Green"
  | "Other";

export type CandidateStatus =
  | "filed"
  | "qualified"
  | "declared"
  | "rumored"
  | "withdrawn";

export type StateGuideStatus =
  | "live"
  | "researched"
  | "no-2026-governor-race"
  | "needs-review";

export interface StateGuideCandidate {
  id: string;
  name: string;
  party: CandidateParty;
  status: CandidateStatus;
  currentRole: string;
  summary: string;
  websiteUrl?: string;
  imageUrl: string | null;
  imageAttribution?: string;
  sourceUrls: string[];
  isIncumbent?: boolean;
}

export interface StateGuide {
  stateSlug: string;
  stateName: string;
  postalAbbreviation: string;
  region: StateRegion;
  status: StateGuideStatus;
  office: "Governor";
  electionDate: string | null;
  primaryDate: string | null;
  summary: string;
  candidates: StateGuideCandidate[];
  sourceUrls: string[];
  updatedAt: string;
}
