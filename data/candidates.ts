// 2026 California Democratic Gubernatorial Primary — Candidate Dataset
//
// Issue stances and biographical material reflect each candidate's public record
// and reported positions as best as they can be reconstructed. Numerical fields
// (fundraising, polling) are ILLUSTRATIVE PLACEHOLDERS — replace them with
// sourced figures (CalMatters, AP, Berkeley IGS, PPIC, Cal-Access) before
// publishing. Every claim should be linked to a primary source in production.

export type Stance =
  | "strong-for"
  | "for"
  | "mixed"
  | "against"
  | "strong-against"
  | "unclear";

export type Lane = "Progressive" | "Mainstream" | "Moderate" | "Establishment";

export const ISSUES = [
  { key: "housing", label: "Housing & Cost of Living" },
  { key: "homelessness", label: "Homelessness" },
  { key: "climate", label: "Climate & Environment" },
  { key: "healthcare", label: "Healthcare" },
  { key: "education", label: "Education" },
  { key: "publicSafety", label: "Public Safety" },
  { key: "immigration", label: "Immigration" },
  { key: "economy", label: "Economy & Taxes" },
] as const;

export type IssueKey = (typeof ISSUES)[number]["key"];

export interface IssuePosition {
  stance: Stance;
  headline: string;
  detail: string;
}

export interface Candidate {
  slug: string;
  lastName: string;
  fullName: string;
  currentRole: string;
  pastRoles: string[];
  hometown: string;
  region: string;
  born: number;
  lane: Lane;
  oneLine: string;
  pitch: string;
  bio: string;
  signatureIssue: IssueKey;
  topAccomplishment: string;
  baseConstituency: string;
  notableEndorsements: string[];
  fundraisingMillions: number;
  pollAverage: number;
  websiteUrl: string;
  color: string;
  positions: Record<IssueKey, IssuePosition>;
  strengths: string[];
  challenges: string[];
}

export const CANDIDATES: Candidate[] = [
  {
    slug: "katie-porter",
    lastName: "Porter",
    fullName: "Katie Porter",
    currentRole: "Former U.S. Representative (CA-47)",
    pastRoles: [
      "U.S. House (2019–2025)",
      "UC Irvine Law Professor",
      "California Independent Monitor of Banks (2012–2014)",
    ],
    hometown: "Irvine",
    region: "Orange County",
    born: 1974,
    lane: "Progressive",
    oneLine: "Whiteboard-wielding consumer advocate from the U.S. House.",
    pitch:
      "Porter casts the race as a referendum on corporate power and corruption, leaning on the brand she built grilling executives at congressional hearings.",
    bio:
      "A bankruptcy law scholar and Elizabeth Warren protégée, Porter served three terms in Congress representing Orange County before mounting an unsuccessful 2024 Senate bid. She is the most nationally visible Democrat in the field and has built a small-donor fundraising base unmatched by her rivals.",
    signatureIssue: "economy",
    topAccomplishment:
      "Co-led the House oversight effort that produced legislation strengthening federal whistleblower protections and lower-cost prescription rules.",
    baseConstituency:
      "College-educated suburban Democrats, women, and small-dollar online donors.",
    notableEndorsements: [
      "Sen. Elizabeth Warren",
      "End Citizens United",
      "California Working Families Party",
    ],
    fundraisingMillions: 8.4,
    pollAverage: 21,
    websiteUrl: "https://katieporter.com",
    color: "#d63d2e",
    positions: {
      housing: {
        stance: "strong-for",
        headline: "Build more, cap corporate landlords",
        detail:
          "Backs upzoning, streamlined permitting, and limits on Wall Street ownership of single-family homes. Has criticized 'NIMBY' opposition in coastal cities while pushing rent transparency rules.",
      },
      homelessness: {
        stance: "for",
        headline: "Housing-first plus accountability",
        detail:
          "Supports more permanent supportive housing tied to behavioral-health investment and audits of how state homelessness dollars are spent at the local level.",
      },
      climate: {
        stance: "strong-for",
        headline: "Polluter accountability and oil setbacks",
        detail:
          "Defends California's 2045 carbon neutrality target and SB 1137 setbacks; favors taxing oil-industry windfall profits to fund a just transition.",
      },
      healthcare: {
        stance: "for",
        headline: "Public option, drug price action",
        detail:
          "Backs a state public option as a bridge to universal coverage and the use of California's purchasing power to negotiate drug prices. Skeptical that single-payer can be financed in a single budget cycle.",
      },
      education: {
        stance: "for",
        headline: "Free community college, student debt relief",
        detail:
          "Wants to expand the Cal Grant promise to two free years of community college. Critical of for-profit colleges and predatory student lenders.",
      },
      publicSafety: {
        stance: "mixed",
        headline: "Reform plus enforcement",
        detail:
          "Supports retail-theft prosecutions and fentanyl trafficking penalties while pushing police accountability and an end to qualified immunity in state court.",
      },
      immigration: {
        stance: "strong-for",
        headline: "Defend sanctuary state, expand legal aid",
        detail:
          "Pledges to legally challenge any federal mass-deportation effort and expand California's deportation defense fund.",
      },
      economy: {
        stance: "strong-for",
        headline: "Anti-monopoly, consumer-first",
        detail:
          "Wants the AG to use state antitrust authority more aggressively against grocery and health-system mergers; supports a state-level CFPB.",
      },
    },
    strengths: [
      "Highest name ID and online fundraising in the field",
      "Strong appeal to college-educated suburban voters",
      "Fluent on cost-of-living messaging",
    ],
    challenges: [
      "Lost her 2024 Senate primary; some donors view her as untested in a statewide win",
      "Limited experience running a large executive operation",
      "Cool relations with parts of the labor establishment",
    ],
  },
  {
    slug: "antonio-villaraigosa",
    lastName: "Villaraigosa",
    fullName: "Antonio Villaraigosa",
    currentRole: "Former Mayor of Los Angeles",
    pastRoles: [
      "Mayor of Los Angeles (2005–2013)",
      "Speaker of the California Assembly (1998–2000)",
      "California Assembly (1994–2000)",
    ],
    hometown: "Los Angeles",
    region: "Los Angeles",
    born: 1953,
    lane: "Moderate",
    oneLine: "Two-term LA mayor making a second run at the governorship.",
    pitch:
      "Villaraigosa frames himself as the experienced executive who can deliver on housing, public safety, and the economy without ideological detours.",
    bio:
      "The former Assembly Speaker and two-term mayor of Los Angeles ran for governor in 2018 and finished third behind Gavin Newsom and John Cox. He is making a second attempt with a more centrist, business-friendly profile and significant support from charter-school and building-trades donors.",
    signatureIssue: "housing",
    topAccomplishment:
      "Oversaw a major LA Metro rail expansion and a citywide push to plant a million trees as mayor.",
    baseConstituency:
      "Latino voters, building trades unions, business community, charter-school advocates.",
    notableEndorsements: [
      "California Charter Schools Association Advocates",
      "Several LA-area building trades councils",
      "Former Gov. Gray Davis",
    ],
    fundraisingMillions: 6.2,
    pollAverage: 14,
    websiteUrl: "https://antoniovillaraigosa.com",
    color: "#2c5282",
    positions: {
      housing: {
        stance: "strong-for",
        headline: "Build, build, build — including CEQA reform",
        detail:
          "The most aggressive YIMBY in the field; supports overriding local zoning resistance, streamlining CEQA review for housing, and tying state transportation dollars to housing production.",
      },
      homelessness: {
        stance: "mixed",
        headline: "Services-led but willing to clear encampments",
        detail:
          "Supports court-ordered treatment expansion and clearing encampments tied to shelter offers; critical of LA's pace under Mayor Bass.",
      },
      climate: {
        stance: "for",
        headline: "Mainstream California climate stance",
        detail:
          "Supports the state's 2045 net-zero target, but more open than rivals to keeping in-state oil production during a managed wind-down.",
      },
      healthcare: {
        stance: "mixed",
        headline: "Coverage expansion, not single-payer",
        detail:
          "Supports closing remaining coverage gaps and behavioral-health investment but explicitly opposes single-payer financing.",
      },
      education: {
        stance: "for",
        headline: "Pro-charter, accountability-focused",
        detail:
          "Long-time charter-school supporter; backs expanded teacher pay tied to performance metrics and universal pre-K expansion.",
      },
      publicSafety: {
        stance: "strong-for",
        headline: "More cops, harder on retail theft",
        detail:
          "Supports increasing police staffing, restoring some pre-Prop 47 felony thresholds, and prosecuting organized retail theft rings.",
      },
      immigration: {
        stance: "strong-for",
        headline: "Defend immigrant Californians",
        detail:
          "Has highlighted his upbringing by a single Mexican-American mother; pledges to fight federal mass-deportation efforts.",
      },
      economy: {
        stance: "for",
        headline: "Pro-growth, infrastructure-led",
        detail:
          "Wants a state infrastructure bank, faster permitting for transit and housing, and tax incentives for in-state manufacturing.",
      },
    },
    strengths: [
      "Highest statewide name recognition in the Latino electorate",
      "Strong fundraising network from his mayoral years",
      "Building trades and charter-school support",
    ],
    challenges: [
      "Already lost a gubernatorial primary in 2018",
      "Some progressive activists oppose his charter-school history",
      "Harder to break through with a national-name rival in the race",
    ],
  },
  {
    slug: "eleni-kounalakis",
    lastName: "Kounalakis",
    fullName: "Eleni Kounalakis",
    currentRole: "Lieutenant Governor of California",
    pastRoles: [
      "Lieutenant Governor (2019–present)",
      "U.S. Ambassador to Hungary (2010–2013)",
      "President, AKT Development",
    ],
    hometown: "Sacramento",
    region: "Sacramento",
    born: 1966,
    lane: "Establishment",
    oneLine: "Newsom's lieutenant and the field's reproductive-rights champion.",
    pitch:
      "Kounalakis pitches herself as the candidate ready to defend California from Washington and the natural continuation of the Newsom administration.",
    bio:
      "The first woman elected lieutenant governor of California, Kounalakis was Obama's ambassador to Hungary and the longtime president of her family's Sacramento-area development firm. She launched her campaign earlier than any other major Democrat and has the closest relationships across the state party apparatus.",
    signatureIssue: "healthcare",
    topAccomplishment:
      "Led the campaign for Proposition 1 (2022), enshrining abortion and contraception rights in the California constitution.",
    baseConstituency:
      "Reproductive-rights voters, women, Greek-American community, Sacramento establishment.",
    notableEndorsements: [
      "EMILYs List",
      "Planned Parenthood Affiliates of California",
      "Several State Senate Democrats",
    ],
    fundraisingMillions: 9.1,
    pollAverage: 9,
    websiteUrl: "https://elenifor.ca",
    color: "#7c3aed",
    positions: {
      housing: {
        stance: "for",
        headline: "Pro-build with developer-fluent eye",
        detail:
          "Supports streamlined housing approvals and additional state housing bonds. Opposed by some progressive housing groups over her family's development background.",
      },
      homelessness: {
        stance: "for",
        headline: "Continue the Newsom CARE Court framework",
        detail:
          "Supports expanding CARE Court and the Behavioral Health Bond (Prop 1, 2024) implementation.",
      },
      climate: {
        stance: "strong-for",
        headline: "Continuity with Newsom climate agenda",
        detail:
          "Backs the existing scoping plan, oil-and-gas drilling setbacks, and accelerated EV adoption.",
      },
      healthcare: {
        stance: "for",
        headline: "Universal coverage, defend Medi-Cal",
        detail:
          "Supports closing remaining coverage gaps and protecting expansions for undocumented residents; cautious on single-payer financing.",
      },
      education: {
        stance: "for",
        headline: "Affordability and CSU/UC investment",
        detail:
          "Wants to lock in expanded Cal Grants and increase CSU and community-college funding.",
      },
      publicSafety: {
        stance: "mixed",
        headline: "Law-and-order pragmatism",
        detail:
          "Supports targeted retail-theft enforcement and behavioral-health diversion; declined to endorse defunding-style proposals.",
      },
      immigration: {
        stance: "strong-for",
        headline: "Daughter of immigrants, sanctuary defender",
        detail:
          "Frequently invokes her father's emigration from Greece; pledges to use state legal authority against federal deportation overreach.",
      },
      economy: {
        stance: "for",
        headline: "Maintain California's tax structure",
        detail:
          "Defends Prop 13's residential portion while cautiously open to commercial-property reassessment in some configurations.",
      },
    },
    strengths: [
      "Closest relationships with the state party apparatus",
      "Strong reproductive-rights brand",
      "Has been raising money longest",
    ],
    challenges: [
      "Limited statewide name recognition outside Sacramento and donor circles",
      "Family development background draws affordable-housing scrutiny",
      "Has to differentiate from Newsom without alienating his coalition",
    ],
  },
  {
    slug: "xavier-becerra",
    lastName: "Becerra",
    fullName: "Xavier Becerra",
    currentRole: "Former U.S. Secretary of Health and Human Services",
    pastRoles: [
      "U.S. Secretary of HHS (2021–2025)",
      "California Attorney General (2017–2021)",
      "U.S. House (1993–2017)",
    ],
    hometown: "Sacramento",
    region: "Sacramento",
    born: 1958,
    lane: "Mainstream",
    oneLine: "Biden's HHS secretary returning to California politics.",
    pitch:
      "Becerra argues that with Trump back in the White House, California needs a governor who has already managed a federal agency and litigated against the Trump administration.",
    bio:
      "A 12-term member of Congress and former chair of the House Democratic Caucus, Becerra became California's first Latino attorney general before serving four years as Biden's health secretary. He is the only candidate with cabinet-level executive experience and is leaning hard into healthcare and immigration messaging.",
    signatureIssue: "healthcare",
    topAccomplishment:
      "Filed more than 100 lawsuits against the first Trump administration as California AG, defending the ACA, DACA, and environmental rules.",
    baseConstituency:
      "Latino voters, healthcare advocates, organized labor, Sacramento Democrats.",
    notableEndorsements: [
      "SEIU California (pending state council vote)",
      "Several Latino congressional members",
      "California Labor Federation (leaning)",
    ],
    fundraisingMillions: 5.7,
    pollAverage: 7,
    websiteUrl: "https://xavierbecerra.com",
    color: "#0f766e",
    positions: {
      housing: {
        stance: "for",
        headline: "Federal-tools-first approach",
        detail:
          "Supports leveraging federal LIHTC and HUD funding alongside state production goals; less focused on local zoning fights.",
      },
      homelessness: {
        stance: "for",
        headline: "Healthcare-led approach",
        detail:
          "Wants to integrate Medi-Cal behavioral health coverage with permanent supportive housing — an extension of his HHS work on CalAIM.",
      },
      climate: {
        stance: "for",
        headline: "Defend federal-state climate framework",
        detail:
          "Promises to use state legal authority to defend EV rules and Clean Air Act waivers from federal preemption attempts.",
      },
      healthcare: {
        stance: "strong-for",
        headline: "Defend ACA, push universal coverage",
        detail:
          "His signature lane: protect ACA enrollment, lock in Medi-Cal expansion to undocumented adults, push prescription drug price negotiation.",
      },
      education: {
        stance: "for",
        headline: "DREAMer access, affordable college",
        detail:
          "Supports continued Cal Grant expansion and protects in-state tuition access for undocumented students.",
      },
      publicSafety: {
        stance: "mixed",
        headline: "Civil-rights framing",
        detail:
          "As AG ran investigations into police shootings; supports modest sentencing rebalancing on retail theft.",
      },
      immigration: {
        stance: "strong-for",
        headline: "Sue the federal government",
        detail:
          "Pledges to immediately revive the AG playbook against federal deportation, family-separation, and asylum-restriction policies.",
      },
      economy: {
        stance: "for",
        headline: "Workforce and small-business focused",
        detail:
          "Backs apprenticeship expansion and small-business tax relief; supportive of unionization rights.",
      },
    },
    strengths: [
      "Only candidate with cabinet executive experience",
      "Strong Latino base and bilingual appeal",
      "Trusted by labor and healthcare advocates",
    ],
    challenges: [
      "Mixed reviews of his HHS tenure during COVID rollout",
      "Less natural at retail campaigning than legislative rivals",
      "Has to share Latino vote with Villaraigosa",
    ],
  },
  {
    slug: "toni-atkins",
    lastName: "Atkins",
    fullName: "Toni Atkins",
    currentRole: "Former President pro Tempore of the California Senate",
    pastRoles: [
      "Senate President pro Tempore (2018–2024)",
      "Speaker of the California Assembly (2014–2016)",
      "San Diego City Council (2000–2008)",
    ],
    hometown: "San Diego",
    region: "San Diego",
    born: 1962,
    lane: "Mainstream",
    oneLine: "The legislative architect from San Diego who's quietly shipped more housing law than anyone.",
    pitch:
      "Atkins makes a pragmatic, builder-of-bills case: she has actually written the laws her rivals are debating, and she did it as the first woman and first openly LGBTQ+ pro Tem.",
    bio:
      "Atkins rose from a coal-country childhood in Virginia to become the only Californian to lead both legislative chambers. She authored or helped pass nearly every major housing law of the past decade, and her campaign leans on her behind-the-scenes legislative effectiveness rather than national name ID.",
    signatureIssue: "housing",
    topAccomplishment:
      "Authored SB 9 (2021) and a string of accessory-dwelling-unit and density laws now responsible for tens of thousands of new housing units a year.",
    baseConstituency:
      "LGBTQ+ voters, San Diego County, public-employee unions, women legislators.",
    notableEndorsements: [
      "Equality California",
      "California Federation of Teachers",
      "Several State Senators",
    ],
    fundraisingMillions: 4.9,
    pollAverage: 5,
    websiteUrl: "https://toniatkins.com",
    color: "#d97706",
    positions: {
      housing: {
        stance: "strong-for",
        headline: "More of the housing reforms she already wrote",
        detail:
          "Wants to expand SB 9-style ministerial approvals, fully fund the state's housing element enforcement office, and maintain pressure on cities that miss RHNA targets.",
      },
      homelessness: {
        stance: "for",
        headline: "Behavioral-health investment",
        detail:
          "Helped negotiate Prop 1 (2024) funding; pushes for fast deployment of housing-with-services beds.",
      },
      climate: {
        stance: "strong-for",
        headline: "Strong legislative climate record",
        detail:
          "Supports continuing California's leadership on building decarbonization and offshore wind buildout.",
      },
      healthcare: {
        stance: "for",
        headline: "Universal coverage path",
        detail:
          "Helped expand Medi-Cal to undocumented adults; cautiously supportive of single-payer if financed responsibly.",
      },
      education: {
        stance: "for",
        headline: "TK expansion and union teachers",
        detail:
          "Supports finishing transitional kindergarten rollout and lifting teacher pay floors.",
      },
      publicSafety: {
        stance: "mixed",
        headline: "Calibrated reform",
        detail:
          "Supported Prop 36 (2024) to toughen retail-theft and fentanyl penalties while protecting earlier reforms; backs more behavioral-health crisis response.",
      },
      immigration: {
        stance: "strong-for",
        headline: "Defend sanctuary state",
        detail:
          "Long record of sanctuary-state legislation; pledges to defend in court.",
      },
      economy: {
        stance: "for",
        headline: "Labor-aligned, fiscally measured",
        detail:
          "Supports raising wage floors in healthcare and fast food; cautious on new business taxes during deficit cycles.",
      },
    },
    strengths: [
      "Unmatched legislative track record on housing",
      "Strong with LGBTQ+ and labor coalitions",
      "Geographic anchor in growing San Diego region",
    ],
    challenges: [
      "Low statewide name ID outside political insiders",
      "Trails on fundraising",
      "Quiet style competes with bigger personalities",
    ],
  },
  {
    slug: "betty-yee",
    lastName: "Yee",
    fullName: "Betty Yee",
    currentRole: "Former California State Controller",
    pastRoles: [
      "California State Controller (2015–2023)",
      "Chair, California Democratic Party (2024–present)",
      "Board of Equalization (2005–2015)",
    ],
    hometown: "San Francisco",
    region: "Bay Area",
    born: 1957,
    lane: "Progressive",
    oneLine: "The former state controller running on fiscal credibility and equity.",
    pitch:
      "Yee argues California needs a governor who actually understands the books, with a track record of equitable budgeting and progressive fiscal reform.",
    bio:
      "The first Asian-American woman elected to a constitutional office in California, Yee spent eight years as state controller and now chairs the California Democratic Party. Her bid frames executive competence and fiscal stewardship as progressive virtues.",
    signatureIssue: "economy",
    topAccomplishment:
      "Led modernization of the state controller's office and audited multibillion-dollar contracts that recovered hundreds of millions for taxpayers.",
    baseConstituency:
      "Asian American Pacific Islander voters, Bay Area progressives, Democratic Party regulars.",
    notableEndorsements: [
      "AAPI Victory Fund",
      "Several Bay Area mayors",
      "California Nurses Association (pending)",
    ],
    fundraisingMillions: 2.3,
    pollAverage: 3,
    websiteUrl: "https://bettyyee.com",
    color: "#059669",
    positions: {
      housing: {
        stance: "for",
        headline: "Affordable-first, accountability for spending",
        detail:
          "Wants stronger audit and transparency over state housing dollars and a renewed push on deeply-affordable production.",
      },
      homelessness: {
        stance: "for",
        headline: "Audit before adding programs",
        detail:
          "Calls for performance audits of existing homelessness funding before launching new initiatives.",
      },
      climate: {
        stance: "strong-for",
        headline: "Climate justice framing",
        detail:
          "Supports environmental-justice budgeting and tightening polluter accountability in frontline communities.",
      },
      healthcare: {
        stance: "strong-for",
        headline: "Single-payer supporter",
        detail:
          "Most explicit single-payer champion in the field; argues a unified system is cheaper if properly financed.",
      },
      education: {
        stance: "for",
        headline: "Equitable funding, opposes charter expansion",
        detail:
          "Supports closing the LCFF equity gaps and pausing further charter authorization.",
      },
      publicSafety: {
        stance: "mixed",
        headline: "Reform with mental-health emphasis",
        detail:
          "Supports diversion programs and strengthening crisis response; opposed Prop 36 messaging.",
      },
      immigration: {
        stance: "strong-for",
        headline: "Defend immigrant Californians",
        detail:
          "Standard sanctuary-state defense, with focus on language access and AAPI-immigrant communities.",
      },
      economy: {
        stance: "strong-for",
        headline: "Tax fairness and rainy-day discipline",
        detail:
          "Open to commercial-property reassessment, wealth-tax pilot studies, and stronger reserves.",
      },
    },
    strengths: [
      "Deep budget and audit expertise",
      "Long-standing AAPI base in the Bay Area",
      "Trusted intra-party operator as state chair",
    ],
    challenges: [
      "Lowest name ID of major candidates",
      "Trails badly on fundraising",
      "No prior statewide campaign at this scale of competition",
    ],
  },
];

export const PRIMARY_DATE = "June 2, 2026";
export const RACE_TITLE = "California Governor — Democratic Primary";

// Aggregate "undecided / other" share for charting purposes; illustrative only.
export const UNDECIDED_PCT = 41;

export function getCandidate(slug: string): Candidate | undefined {
  return CANDIDATES.find((c) => c.slug === slug);
}

export function stanceLabel(stance: Stance): string {
  switch (stance) {
    case "strong-for":
      return "Strongly supports";
    case "for":
      return "Supports";
    case "mixed":
      return "Mixed";
    case "against":
      return "Opposes";
    case "strong-against":
      return "Strongly opposes";
    case "unclear":
      return "Unclear";
  }
}

export function stanceShade(stance: Stance): {
  bg: string;
  fg: string;
  bar: number;
} {
  switch (stance) {
    case "strong-for":
      return { bg: "#1d4f3f", fg: "#ffffff", bar: 5 };
    case "for":
      return { bg: "#5fa982", fg: "#0a1f17", bar: 4 };
    case "mixed":
      return { bg: "#e6c46f", fg: "#3d2c00", bar: 3 };
    case "against":
      return { bg: "#e08566", fg: "#3a1304", bar: 2 };
    case "strong-against":
      return { bg: "#a23522", fg: "#ffffff", bar: 1 };
    case "unclear":
      return { bg: "#cccccc", fg: "#333333", bar: 0 };
  }
}
