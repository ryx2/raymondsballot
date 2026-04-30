// 2026 California Gubernatorial Primary — Candidate Dataset
//
// Issue stances and biographical material reflect each candidate's public
// record and reported positions as best as they can be reconstructed at the
// time of writing. Polling and fundraising figures are GROUNDED ESTIMATES
// drawn from late-April 2026 public reporting; for production they should be
// replaced with sourced figures (Berkeley IGS, PPIC, Cal-Access, CalMatters).
//
// Photos are sourced from Wikimedia Commons; each candidate retains an
// `imageAttribution` field with the proper credit per CC license terms.
//
// Field reflects the eight candidates who qualified for the May 5, 2026 CNN
// debate plus Tony Thurmond. Eric Swalwell suspended his campaign on April 12,
// 2026 and Betty Yee suspended hers on April 20, 2026.

export type Stance =
  | "strong-for"
  | "for"
  | "mixed"
  | "against"
  | "strong-against"
  | "unclear";

export type Party = "Democratic" | "Republican";

export type Lane =
  | "Progressive"
  | "Mainstream"
  | "Moderate"
  | "Conservative"
  | "Trumpist";

export const ISSUES = [
  { key: "housing", label: "Housing & Cost of Living", icon: "🏠" },
  { key: "homelessness", label: "Homelessness", icon: "⛺" },
  { key: "climate", label: "Climate & Environment", icon: "🌲" },
  { key: "healthcare", label: "Healthcare", icon: "⚕" },
  { key: "education", label: "Education", icon: "🎓" },
  { key: "publicSafety", label: "Public Safety", icon: "🛡" },
  { key: "immigration", label: "Immigration", icon: "🌐" },
  { key: "economy", label: "Economy & Taxes", icon: "💰" },
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
  party: Party;
  currentRole: string;
  pastRoles: string[];
  hometown: string;
  region: string;
  born: number;
  lane: Lane;
  imageUrl: string | null;
  imageAttribution: string;
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
  // Ideological grid: -1 (left) to +1 (right) and -1 (outsider) to +1 (establishment)
  positionX: number;
  positionY: number;
  positions: Record<IssueKey, IssuePosition>;
  strengths: string[];
  challenges: string[];
}

export const CANDIDATES: Candidate[] = [
  // ───────────────────────── DEMOCRATS ─────────────────────────
  {
    slug: "katie-porter",
    lastName: "Porter",
    fullName: "Katie Porter",
    party: "Democratic",
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
    imageUrl: "/candidates/cache/katie-porter.webp",
    imageAttribution: "Official congressional portrait, 2019 / Wikimedia Commons",
    oneLine: "Whiteboard-wielding consumer advocate from the U.S. House.",
    pitch:
      "Porter casts the race as a referendum on corporate power and corruption, leaning on the brand she built grilling executives at congressional hearings.",
    bio:
      "A bankruptcy law scholar and Elizabeth Warren protégée, Porter served three terms in Congress representing Orange County before mounting an unsuccessful 2024 Senate bid. She is one of the most nationally visible Democrats in the field and has built a small-donor fundraising base unmatched by any other Democrat besides Steyer.",
    signatureIssue: "economy",
    topAccomplishment:
      "Co-led House oversight efforts that produced legislation strengthening federal whistleblower protections and lower-cost prescription rules.",
    baseConstituency:
      "College-educated suburban Democrats, women, and small-dollar online donors.",
    notableEndorsements: [
      "Sen. Elizabeth Warren",
      "End Citizens United",
      "California Working Families Party",
    ],
    fundraisingMillions: 8.4,
    pollAverage: 10,
    websiteUrl: "https://katieporter.com",
    color: "#d63d2e",
    positionX: -0.55,
    positionY: -0.3,
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
      "Highest national name recognition of any Democrat in the field",
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
    slug: "tom-steyer",
    lastName: "Steyer",
    fullName: "Tom Steyer",
    party: "Democratic",
    currentRole: "Founder, NextGen America",
    pastRoles: [
      "2020 U.S. Presidential candidate",
      "Founder, Farallon Capital",
      "Founder, Beneficial State Bank",
    ],
    hometown: "San Francisco",
    region: "Bay Area",
    born: 1957,
    lane: "Progressive",
    imageUrl: "/candidates/cache/tom-steyer.webp",
    imageAttribution: "NYC Climate Week 2025 / Wikimedia Commons",
    oneLine: "Billionaire climate organizer turned self-funded gubernatorial candidate.",
    pitch:
      "Steyer pitches a state-level Green New Deal funded by his own checkbook, arguing only an outsider with money can break the donor class's grip on Sacramento.",
    bio:
      "A former hedge fund founder turned climate philanthropist, Steyer founded NextGen America and ran an unsuccessful 2020 Democratic presidential bid. He has now poured tens of millions into his California campaign, neutralizing his rivals' fundraising advantages and saturating TV markets with climate-and-cost-of-living spots.",
    signatureIssue: "climate",
    topAccomplishment:
      "Founded NextGen America, which mobilized millions of young voters for climate-focused organizing in the 2018 and 2020 cycles.",
    baseConstituency:
      "Climate voters, Bay Area progressives, donors in tech and finance, organized labor still deciding.",
    notableEndorsements: [
      "League of Conservation Voters California",
      "Several climate-focused unions",
      "Former Sen. Barbara Boxer",
    ],
    fundraisingMillions: 52.0,
    pollAverage: 15,
    websiteUrl: "https://tomsteyer.com",
    color: "#0f766e",
    positionX: -0.6,
    positionY: -0.1,
    positions: {
      housing: {
        stance: "for",
        headline: "Green-build housing at scale",
        detail:
          "Wants the state to act as a developer-of-last-resort for affordable housing on public land, paired with construction-trades wage floors and electrification mandates for new builds.",
      },
      homelessness: {
        stance: "for",
        headline: "Housing-first with billions in new spending",
        detail:
          "Proposes a $25B state homelessness bond focused on permanent supportive housing tied to behavioral-health services.",
      },
      climate: {
        stance: "strong-for",
        headline: "Net zero by 2035 — the field's most aggressive",
        detail:
          "Wants to move California's carbon-neutrality date forward a full decade and create a state Green Bank that finances rapid grid decarbonization.",
      },
      healthcare: {
        stance: "strong-for",
        headline: "Single-payer with self-funded campaign cover",
        detail:
          "Most explicit single-payer supporter in the top tier of the field. Argues his independence from healthcare donors lets him push reforms others won't.",
      },
      education: {
        stance: "for",
        headline: "Universal pre-K and climate curriculum",
        detail:
          "Supports universal pre-K, full TK rollout, and climate-science requirements in K-12 standards.",
      },
      publicSafety: {
        stance: "mixed",
        headline: "Mental-health-first response",
        detail:
          "Wants to expand non-police crisis response and gun-violence prevention; cautious on rolling back recent retail-theft penalties.",
      },
      immigration: {
        stance: "strong-for",
        headline: "Defend immigrant California, expand workforce",
        detail:
          "Pledges to challenge federal deportation efforts and expand state-funded legal aid; frames immigration as climate adaptation policy.",
      },
      economy: {
        stance: "strong-for",
        headline: "Tax the very rich (including himself)",
        detail:
          "Backs a millionaire surtax to fund climate, housing, and homelessness investment — and notes he would pay it.",
      },
    },
    strengths: [
      "Self-funded — no fundraising ceiling",
      "Best-organized climate-voter operation in the state",
      "Polling neck-and-neck with Hilton for the second runoff slot",
    ],
    challenges: [
      "Billionaire framing complicates populist messaging",
      "No prior elected office at any level",
      "His 2020 presidential bid faded after early-state spending sprees",
    ],
  },
  {
    slug: "xavier-becerra",
    lastName: "Becerra",
    fullName: "Xavier Becerra",
    party: "Democratic",
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
    imageUrl: "/candidates/cache/xavier-becerra.webp",
    imageAttribution: "U.S. Department of Health & Human Services official portrait, 2021",
    oneLine: "Biden's HHS secretary returning to California politics.",
    pitch:
      "Becerra argues that with Trump back in the White House, California needs a governor who has already managed a federal agency and litigated against the Trump administration.",
    bio:
      "A 12-term member of Congress and former chair of the House Democratic Caucus, Becerra became California's first Latino attorney general before serving four years as Biden's health secretary. He is the only candidate with cabinet-level executive experience and is leaning hard into healthcare and immigration messaging — and the only one to publicly benefit from Eric Swalwell's April 12 exit.",
    signatureIssue: "healthcare",
    topAccomplishment:
      "Filed more than 100 lawsuits against the first Trump administration as California AG, defending the ACA, DACA, and environmental rules.",
    baseConstituency:
      "Latino voters, healthcare advocates, organized labor, Sacramento Democrats.",
    notableEndorsements: [
      "SEIU California (state council vote)",
      "California Labor Federation (leaning)",
      "Several Latino congressional members",
    ],
    fundraisingMillions: 6.8,
    pollAverage: 8,
    websiteUrl: "https://xavierbecerra.com",
    color: "#2c5282",
    positionX: -0.3,
    positionY: 0.7,
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
    slug: "antonio-villaraigosa",
    lastName: "Villaraigosa",
    fullName: "Antonio Villaraigosa",
    party: "Democratic",
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
    imageUrl: "/candidates/cache/antonio-villaraigosa.webp",
    imageAttribution: "Hollywood Walk of Fame ceremony, 2013 / Wikimedia Commons",
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
    pollAverage: 6,
    websiteUrl: "https://antoniovillaraigosa.com",
    color: "#7c3aed",
    positionX: 0.1,
    positionY: 0.45,
    positions: {
      housing: {
        stance: "strong-for",
        headline: "Build, build, build — including CEQA reform",
        detail:
          "The most aggressive YIMBY among Democrats; supports overriding local zoning resistance, streamlining CEQA review for housing, and tying state transportation dollars to housing production.",
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
      "Has to share Latino base with Becerra",
    ],
  },
  {
    slug: "matt-mahan",
    lastName: "Mahan",
    fullName: "Matt Mahan",
    party: "Democratic",
    currentRole: "Mayor of San Jose",
    pastRoles: [
      "San Jose City Council (2020–2023)",
      "CEO, Brigade (civic-tech startup)",
      "Teach for America corps member",
    ],
    hometown: "Watsonville",
    region: "Bay Area",
    born: 1982,
    lane: "Moderate",
    imageUrl: "/candidates/cache/matt-mahan.webp",
    imageAttribution: "Farmer's market appearance, April 2026 / Wikimedia Commons",
    oneLine: "Tech-Democrat mayor of San Jose with a tough-love homelessness pitch.",
    pitch:
      "Mahan pitches a results-obsessed governorship — outcomes-based contracting, accountable nonprofits, and willingness to enforce public-space rules — as the only Democratic answer to homelessness politics.",
    bio:
      "Mahan founded a civic-tech company before running for San Jose City Council and winning the mayoralty in 2022 on a centrist platform. He is the youngest candidate in the field and has built a national profile with op-eds arguing that Democrats lose if they cede public-safety and homelessness politics to Republicans.",
    signatureIssue: "homelessness",
    topAccomplishment:
      "As mayor, restructured San Jose's homelessness response around outcomes-based contracts and rapid-shelter buildouts.",
    baseConstituency:
      "Bay Area moderates, tech sector, suburban Democrats frustrated with status quo.",
    notableEndorsements: [
      "Several Silicon Valley mayors",
      "Bay Area Council",
      "Common Sense Democrats",
    ],
    fundraisingMillions: 3.5,
    pollAverage: 4,
    websiteUrl: "https://mahanforca.com",
    color: "#d97706",
    positionX: -0.05,
    positionY: -0.2,
    positions: {
      housing: {
        stance: "strong-for",
        headline: "Permitting reform, ministerial approvals",
        detail:
          "Wants a hard cap on multi-year housing approvals and ministerial review for any project meeting density and affordability rules.",
      },
      homelessness: {
        stance: "for",
        headline: "Tough love: shelter offers tied to enforcement",
        detail:
          "Signature issue. Supports clearing encampments when shelter is offered, outcomes-based nonprofit contracts, and behavioral-health diversion. Has feuded with progressive councilmembers over this approach.",
      },
      climate: {
        stance: "for",
        headline: "Pragmatic decarbonization",
        detail:
          "Supports the state climate framework but emphasizes affordability — opposes near-term gas-stove bans and aggressive building electrification mandates that raise costs.",
      },
      healthcare: {
        stance: "for",
        headline: "Mainstream coverage expansion",
        detail:
          "Supports closing remaining coverage gaps; skeptical that single-payer is financeable in a deficit cycle.",
      },
      education: {
        stance: "for",
        headline: "Math standards and accountability",
        detail:
          "Backs raising K-12 math performance with tutoring funding and explicit performance accountability for districts.",
      },
      publicSafety: {
        stance: "strong-for",
        headline: "Backed Prop 36, supports more cops",
        detail:
          "Endorsed Prop 36 (2024) tougher penalties on retail theft and fentanyl; supports state funding to expand police hiring.",
      },
      immigration: {
        stance: "for",
        headline: "Sanctuary state, but workforce-focused",
        detail:
          "Defends sanctuary protections; emphasizes immigrant workforce contributions to housing and care economies.",
      },
      economy: {
        stance: "mixed",
        headline: "Worker rights with tax restraint",
        detail:
          "Supports unionization and wage floors; wary of new taxes during deficit cycles. Tech-friendly tone.",
      },
    },
    strengths: [
      "Youngest candidate; generational-change brand",
      "Has actually run a city; fluent on cost-of-living politics",
      "Op-ed presence has built national center-Democratic profile",
    ],
    challenges: [
      "Fundraising trails the top tier",
      "Tough-love homelessness politics alienates some progressives",
      "Limited statewide name recognition outside the Bay Area",
    ],
  },
  {
    slug: "tony-thurmond",
    lastName: "Thurmond",
    fullName: "Tony Thurmond",
    party: "Democratic",
    currentRole: "California Superintendent of Public Instruction",
    pastRoles: [
      "Superintendent of Public Instruction (2019–present)",
      "California Assembly (2014–2018)",
      "Richmond City Council (2008–2014)",
    ],
    hometown: "Richmond",
    region: "Bay Area",
    born: 1968,
    lane: "Progressive",
    imageUrl: "/candidates/cache/tony-thurmond.webp",
    imageAttribution: "Official Assembly portrait / Wikimedia Commons",
    oneLine: "The schools-first progressive trying to break out of single digits.",
    pitch:
      "Thurmond — a former social worker who became California's chief K-12 officer — pitches a governorship anchored in education, social safety net expansion, and protecting young people from federal rollbacks.",
    bio:
      "Raised in foster care, Thurmond rose through Richmond city government and the state Assembly before winning two statewide terms as Superintendent of Public Instruction. The first Black candidate in the top tier of the 2026 field, he is term-limited at SPI and has been running for governor since September 2023.",
    signatureIssue: "education",
    topAccomplishment:
      "Implemented universal transitional kindergarten across California's public school system.",
    baseConstituency:
      "Black voters, public-school teachers and unions, progressive Democrats, faith communities.",
    notableEndorsements: [
      "California Federation of Teachers (pending)",
      "Black American Political Action Committee of California",
      "Several State Senate Democrats",
    ],
    fundraisingMillions: 2.1,
    pollAverage: 3,
    websiteUrl: "https://tonythurmond.com",
    color: "#a82a1d",
    positionX: -0.55,
    positionY: 0.2,
    positions: {
      housing: {
        stance: "for",
        headline: "Affordable housing first, equity-driven",
        detail:
          "Prioritizes deeply-affordable production over market-rate streamlining; supports housing trust funds and community land trusts.",
      },
      homelessness: {
        stance: "for",
        headline: "Services-led, child-focused",
        detail:
          "Emphasizes prevention for families and unhoused students; supports rapid rehousing tied to school stability.",
      },
      climate: {
        stance: "strong-for",
        headline: "Environmental justice in frontline communities",
        detail:
          "Backs the state climate framework with stronger investment in disadvantaged communities most exposed to pollution.",
      },
      healthcare: {
        stance: "strong-for",
        headline: "Single-payer supporter",
        detail:
          "Most explicit single-payer supporter besides Steyer; argues a unified system is more efficient and equitable.",
      },
      education: {
        stance: "strong-for",
        headline: "Universal pre-K, teacher pay, anti-vouchers",
        detail:
          "Signature issue. Wants to lock in universal pre-K, raise teacher salary floors, expand mental-health staff in schools, and oppose any school-voucher expansion.",
      },
      publicSafety: {
        stance: "mixed",
        headline: "Reform-oriented, opposed Prop 36",
        detail:
          "Critical of mass-incarceration approaches; supports community-led safety investment and re-entry funding.",
      },
      immigration: {
        stance: "strong-for",
        headline: "Sanctuary schools, defend students",
        detail:
          "Pledges to use state authority to keep federal immigration enforcement out of schools and expand legal-aid funding for students' families.",
      },
      economy: {
        stance: "for",
        headline: "Tax fairness, social investment",
        detail:
          "Supports progressive tax adjustments to fund education and social services.",
      },
    },
    strengths: [
      "Only Black candidate in the top tier",
      "Education brand resonates with parents and teachers",
      "Earliest entrant in the race — ground game in the Bay Area",
    ],
    challenges: [
      "Fundraising is well behind the field",
      "Limited statewide name recognition outside the education world",
      "Polling near the bottom of the qualifiers",
    ],
  },

  // ───────────────────────── REPUBLICANS ─────────────────────────
  {
    slug: "steve-hilton",
    lastName: "Hilton",
    fullName: "Steve Hilton",
    party: "Republican",
    currentRole: "Fox News contributor; founder, Golden Together",
    pastRoles: [
      "Host, The Next Revolution on Fox News (2017–2023)",
      "Director of Strategy to UK PM David Cameron (2010–2012)",
      "Co-founder, Crowdpac",
    ],
    hometown: "Atherton",
    region: "Bay Area",
    born: 1969,
    lane: "Trumpist",
    imageUrl: "/candidates/cache/steve-hilton.webp",
    imageAttribution: "Public appearance, 2024 / Wikimedia Commons",
    oneLine: "British-born Fox News populist with a Trump endorsement and a housing pitch.",
    pitch:
      "Hilton frames the race as a chance for California to break with its 'failed elite consensus' — leading on housing deregulation, immigration enforcement, and what he calls 'positive populism.'",
    bio:
      "A former strategist for UK Prime Minister David Cameron who became a U.S. citizen in 2021, Hilton built a national profile hosting The Next Revolution on Fox News and now leads the Republican field with a Trump endorsement secured April 6, 2026. His campaign centers on a CEQA-gutting housing ballot initiative and an unusually granular policy book for a non-incumbent.",
    signatureIssue: "housing",
    topAccomplishment:
      "Authored a 2025 ballot initiative to restrict private CEQA lawsuits and cap municipal developer fees.",
    baseConstituency:
      "Reagan-Trump Republicans, suburban moderates frustrated on cost-of-living, anti-CEQA business interests.",
    notableEndorsements: [
      "President Donald Trump (April 6, 2026)",
      "Several California Republican Assembly members",
      "Howard Jarvis Taxpayers Association",
    ],
    fundraisingMillions: 6.6,
    pollAverage: 16,
    websiteUrl: "https://hiltonforgovernor.com",
    color: "#b91c1c",
    positionX: 0.55,
    positionY: -0.45,
    positions: {
      housing: {
        stance: "strong-for",
        headline: "Gut CEQA, cap fees, override local vetoes",
        detail:
          "Signature issue. Most aggressive housing platform in the field — wants to bar private CEQA suits over housing, cap impact fees statewide, and create a state override for cities that fail to permit.",
      },
      homelessness: {
        stance: "for",
        headline: "Enforcement plus mandated treatment",
        detail:
          "Supports clearing encampments and conservatorship expansion; favors ending what he calls 'permissive open-air drug markets.'",
      },
      climate: {
        stance: "against",
        headline: "Roll back state climate spending and CARB authority",
        detail:
          "Wants to repeal the cap-and-trade program, rein in CARB rulemaking, and reverse the 2035 internal-combustion-engine sales ban.",
      },
      healthcare: {
        stance: "against",
        headline: "Reverse Medi-Cal expansion to undocumented adults",
        detail:
          "Opposes single-payer; would reverse the Newsom-era expansion of Medi-Cal coverage to undocumented adults and push price transparency reforms.",
      },
      education: {
        stance: "for",
        headline: "School choice and parental rights",
        detail:
          "Supports an expansion of charter authorization, education savings accounts, and parental-notification policies on school instruction.",
      },
      publicSafety: {
        stance: "strong-for",
        headline: "More cops, repeal Prop 47 remnants",
        detail:
          "Supports increasing prosecutor and police staffing and rolling back remaining Prop 47-era thresholds.",
      },
      immigration: {
        stance: "strong-against",
        headline: "End sanctuary state, cooperate with ICE",
        detail:
          "Pledges to end California's sanctuary policies and direct state agencies to cooperate with federal immigration enforcement.",
      },
      economy: {
        stance: "for",
        headline: "Tax cuts and deregulation",
        detail:
          "Wants to cut state income tax brackets, eliminate the corporate franchise tax floor, and audit state agencies for elimination.",
      },
    },
    strengths: [
      "Only major Republican with a Trump endorsement",
      "TV-ready and a fluent communicator",
      "Most-developed policy book of any non-incumbent in the race",
    ],
    challenges: [
      "British accent and biography complicate retail politics in California",
      "Trump endorsement is double-edged in a state Trump lost by 20+ points",
      "Has never held elected office",
    ],
  },
  {
    slug: "chad-bianco",
    lastName: "Bianco",
    fullName: "Chad Bianco",
    party: "Republican",
    currentRole: "Sheriff of Riverside County",
    pastRoles: [
      "Riverside County Sheriff (2019–present)",
      "Riverside County Sheriff's Department (sworn 1993)",
    ],
    hometown: "Riverside",
    region: "Inland Empire",
    born: 1966,
    lane: "Trumpist",
    imageUrl: "/candidates/cache/chad-bianco.webp",
    imageAttribution: "Official sheriff's portrait, 2025 / Wikimedia Commons",
    oneLine: "Riverside sheriff who defied COVID rules now running on law-and-order.",
    pitch:
      "Bianco runs as an outsider lawman — pledging to declare a homelessness emergency on day one, end sanctuary cooperation, and make California 'safe again.'",
    bio:
      "A career deputy elected sheriff of Riverside County in 2018 and reelected in 2022, Bianco rose to statewide profile by refusing to enforce some COVID-era public-health orders and feuding with progressive prosecutors. His campaign is anchored in public-safety messaging and skepticism of California's homelessness response.",
    signatureIssue: "publicSafety",
    topAccomplishment:
      "Built Riverside County into a national talking point on sheriff's-office homelessness enforcement and immigration cooperation.",
    baseConstituency:
      "Inland Empire and Central Valley Republicans, law enforcement, anti-establishment conservatives.",
    notableEndorsements: [
      "California State Sheriffs' Association leadership",
      "California Rifle and Pistol Association",
      "Several Inland Empire elected Republicans",
    ],
    fundraisingMillions: 2.8,
    pollAverage: 11,
    websiteUrl: "https://chadbianco.com",
    color: "#7f1d1d",
    positionX: 0.85,
    positionY: -0.3,
    positions: {
      housing: {
        stance: "for",
        headline: "Less regulation, more local control",
        detail:
          "Backs streamlined permitting and lower fees but opposes state preemption of local zoning. Less central to his platform than for Hilton.",
      },
      homelessness: {
        stance: "strong-for",
        headline: "Enforcement, jail, mandated treatment",
        detail:
          "Wants to declare a state homelessness emergency, expand conservatorship, and use law enforcement to clear encampments — a continuation of his Riverside County approach.",
      },
      climate: {
        stance: "strong-against",
        headline: "Repeal CARB rules, expand in-state oil",
        detail:
          "Opposes the 2035 EV mandate and most state climate spending; supports expanding California's in-state oil production.",
      },
      healthcare: {
        stance: "against",
        headline: "Reverse undocumented-adult Medi-Cal expansion",
        detail:
          "Opposes single-payer and the Newsom-era expansion of Medi-Cal benefits to undocumented adults.",
      },
      education: {
        stance: "for",
        headline: "Parental rights and school choice",
        detail:
          "Supports parental-notification policies and education savings accounts; opposes statewide LGBTQ+ curriculum mandates.",
      },
      publicSafety: {
        stance: "strong-for",
        headline: "Repeal Prop 47, more cops, end DA reform",
        detail:
          "Signature issue. Wants to fully repeal Prop 47, expand police funding, and use state authority against progressive county prosecutors.",
      },
      immigration: {
        stance: "strong-against",
        headline: "End sanctuary, mandate ICE cooperation",
        detail:
          "Pledges to end the state sanctuary law and require local law enforcement to honor federal immigration detainers.",
      },
      economy: {
        stance: "for",
        headline: "Tax cuts and rural priorities",
        detail:
          "Supports broad tax cuts, regulatory rollback, and infrastructure investment focused on Inland Empire and Central Valley.",
      },
    },
    strengths: [
      "Strongest Republican brand on public safety",
      "Inland Empire and Central Valley base — the GOP's votes",
      "Has actually held elected office, unlike Hilton",
    ],
    challenges: [
      "Past Oath Keepers membership remains a recurring controversy",
      "Trump did not endorse him — rival Hilton secured it",
      "Limited fundraising compared to Hilton's TV-driven operation",
    ],
  },
];

export const PRIMARY_DATE = "June 2, 2026";
export const RACE_TITLE = "California Governor — Top-Two Primary";
export const UNDECIDED_PCT = 27;

export const DEMS = CANDIDATES.filter((c) => c.party === "Democratic");
export const REPS = CANDIDATES.filter((c) => c.party === "Republican");

export function getCandidate(slug: string): Candidate | undefined {
  return CANDIDATES.find((c) => c.slug === slug);
}

export function candidatesByParty(party: Party): Candidate[] {
  return CANDIDATES.filter((c) => c.party === party);
}

export function partyColor(party: Party): string {
  return party === "Democratic" ? "#1d4ed8" : "#b91c1c";
}

export function partyColorSoft(party: Party): string {
  return party === "Democratic" ? "#dbeafe" : "#fee2e2";
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
