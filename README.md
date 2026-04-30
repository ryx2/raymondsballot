# Raymond's Ballot

Address-based ballot lookup for U.S. voters, with state and county maps plus featured candidate guides for major races.

The core flow is state -> county -> residential address. The server-side Google Civic lookup returns contests available for that exact ballot when Google has data for the location/election. Static candidate guides, including the California governor comparison, are supplemental featured-race context.

Built as a Next.js 16 site with a data-journalism aesthetic: data-forward, editorial typography, restrained palette, and an address lookup path for complete local ballot data when Google Civic has coverage.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack, RSC)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Bun](https://bun.com) for install / scripts
- TypeScript

## Run locally

```bash
bun install
bun dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Build

```bash
bun run build      # production build, prerenders all candidate pages
bun start          # serve the production build
```

## Deploy to Vercel

1. Push this directory to a new GitHub repo.
2. In Vercel, **Add New → Project**, import the repo.
3. Framework preset: **Next.js**. Root directory: this folder.
4. Install command: `bun install`. Build command: `bun run build`.
5. Set `GOOGLE_CIVIC_API_KEY` in Vercel for the live ballot lookup route.
6. Deploy.

## Editing the featured race data

California featured-race content lives in [`data/candidates.ts`](data/candidates.ts). Statewide featured-race summaries live in `data/stateGuides/`. These files are not the full local ballot; the full address-based contest list comes from the Google Civic API route.

- Bio, current/past roles, region, lane (Progressive / Mainstream / Moderate / Establishment)
- A signature pitch and the strengths / challenges of their bid
- A position on each of the eight issues, with a stance (`strong-for` / `for` / `mixed` / `against` / `strong-against` / `unclear`), a one-line headline, and a longer detail paragraph
- Notable endorsements and base of support
- Illustrative polling and fundraising figures (replace before publishing)

To add a candidate, append to the `CANDIDATES` array using the `Candidate` interface. The home grid, comparison matrix, and detail pages will pick them up automatically.

To add or rename an issue, edit the `ISSUES` array. TypeScript will surface every position that needs to be filled in.

## Important: data caveats

This prototype ships with **illustrative placeholder figures** for polling and fundraising. Before publishing, replace them with sourced numbers:

- **Polling**: Berkeley IGS, PPIC, and other public polls — averaged with consistent dates.
- **Fundraising**: cumulative receipts from [Cal-Access](https://cal-access.sos.ca.gov).
- **Issue stances**: each headline / detail is reconstructed from public records, voting history, and reported statements. Each should be confirmed against a primary source and ideally citation-linked in production.

The "last updated" stamp in the layout footer should be moved to a `lastUpdated` field on each candidate so updates can be tracked granularly.

## Project structure

```
app/
  layout.tsx              -- header, footer, fonts, theme tokens
  globals.css             -- editorial palette and typography
  page.tsx                -- home: state map plus featured race dashboard
  api/civic/voter-info/route.ts -- server-side Google Civic voterInfo proxy
  about/page.tsx          -- methodology and sourcing notes
  candidate/[slug]/page.tsx  -- profile per candidate
  compare/page.tsx        -- full matrix and stance distribution
components/
  CandidateAvatar.tsx     -- initials avatar in candidate's color
  HBar.tsx                -- horizontal bar chart row
  StanceCell.tsx          -- color-coded stance pill + headline
data/
  candidates.ts           -- California featured race candidate content
  counties.ts             -- county FIPS/slugs for state -> county routing
  stateGuides/            -- featured statewide race context by state
```

## License

MIT — do whatever, but verify the data before you ship.
