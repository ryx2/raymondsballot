import { STATES } from "@/data/states";
import { MIDWEST_STATE_GUIDES } from "./midwest";
import { NORTHEAST_STATE_GUIDES } from "./northeast";
import { SOUTH_STATE_GUIDES } from "./south";
import { WEST_STATE_GUIDES } from "./west";
import { StateGuide } from "./types";

export type {
  CandidateParty,
  CandidateStatus,
  StateGuide,
  StateGuideCandidate,
  StateGuideStatus,
} from "./types";

export const STATE_GUIDES: StateGuide[] = [
  ...WEST_STATE_GUIDES,
  ...MIDWEST_STATE_GUIDES,
  ...SOUTH_STATE_GUIDES,
  ...NORTHEAST_STATE_GUIDES,
];

export function getStateGuide(slug: string): StateGuide | undefined {
  return STATE_GUIDES.find((guide) => guide.stateSlug === slug);
}

export function getStateGuideOrFallback(slug: string): StateGuide | undefined {
  const guide = getStateGuide(slug);
  if (guide) return guide;

  const state = STATES.find((item) => item.slug === slug);
  if (!state) return undefined;

  return {
    stateSlug: state.slug,
    stateName: state.name,
    postalAbbreviation: state.postalAbbreviation,
    region: state.region,
    status: "needs-review",
    office: "Governor",
    electionDate: null,
    primaryDate: null,
    summary:
      "Candidate data for this state has not been researched yet. Use the state election office as the source of truth before publishing.",
    candidates: [],
    sourceUrls: [],
    updatedAt: "2026-04-30",
  };
}
