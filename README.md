# Raymond's Ballot — California Democratic Primary for Governor 2026

A side-by-side comparison of the Democratic candidates running for Governor of California in the **June 2, 2026** primary.

Built as a static Next.js 16 site in the spirit of FiveThirtyEight: data-forward, editorial typography, restrained palette, every candidate scored on the same eight issues so they can be read apples-to-apples.

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
5. Deploy. No environment variables required.

## Editing the data

All candidate content lives in [`data/candidates.ts`](data/candidates.ts). Each candidate has:

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
  page.tsx                -- home: hero, polling chart, fundraising, candidate grid
  about/page.tsx          -- methodology and sourcing notes
  candidate/[slug]/page.tsx  -- profile per candidate
  compare/page.tsx        -- full matrix and stance distribution
components/
  CandidateAvatar.tsx     -- initials avatar in candidate's color
  HBar.tsx                -- horizontal bar chart row
  StanceCell.tsx          -- color-coded stance pill + headline
data/
  candidates.ts           -- all candidate content + issue schema
```

## License

MIT — do whatever, but verify the data before you ship.
