#!/usr/bin/env bun

import { STATES } from "../data/states.ts";
import { STATE_GUIDES } from "../data/stateGuides/index.ts";

const errors = [];
const stateSlugs = new Set(STATES.map((state) => state.slug));
const guideSlugs = new Set();

for (const guide of STATE_GUIDES) {
  if (guideSlugs.has(guide.stateSlug)) {
    errors.push(`Duplicate guide for ${guide.stateSlug}`);
  }
  guideSlugs.add(guide.stateSlug);

  if (!stateSlugs.has(guide.stateSlug)) {
    errors.push(`Unknown state guide slug: ${guide.stateSlug}`);
  }
  if (guide.sourceUrls.length === 0) {
    errors.push(`${guide.stateSlug} has no guide source URLs`);
  }
  if (!guide.updatedAt) {
    errors.push(`${guide.stateSlug} has no updatedAt`);
  }

  for (const candidate of guide.candidates) {
    if (candidate.sourceUrls.length === 0) {
      errors.push(`${guide.stateSlug}/${candidate.id} has no source URLs`);
    }
    if (
      candidate.imageUrl &&
      !candidate.imageUrl.startsWith("https://upload.wikimedia.org/")
    ) {
      errors.push(
        `${guide.stateSlug}/${candidate.id} image is not a Wikimedia URL`
      );
    }
  }
}

for (const state of STATES) {
  if (!guideSlugs.has(state.slug)) {
    errors.push(`Missing guide for ${state.slug}`);
  }
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

const candidateCount = STATE_GUIDES.reduce(
  (sum, guide) => sum + guide.candidates.length,
  0
);

console.log(
  `State guide data valid: ${STATE_GUIDES.length} states, ${candidateCount} candidates`
);
