import { StateGuide } from "./types";

const UPDATED_AT = "2026-04-30";
const GENERAL_ELECTION_DATE = "2026-11-03";

const SOURCES = {
  connecticutWiki:
    "https://en.wikipedia.org/wiki/2026_Connecticut_gubernatorial_election",
  connecticutAp:
    "https://apnews.com/article/c25a76be4fbebd9dd923be0b5fca7ec7",
  connecticutQuestionnaire:
    "https://uconnaaup.org/wp-content/uploads/2026/03/UConn_AAUP_Questionnaire.pdf",
  maineWiki: "https://en.wikipedia.org/wiki/2026_Maine_gubernatorial_election",
  mainePublic: "https://www.mainepublic.org/yourvote",
  maineMorningStar:
    "https://mainemorningstar.com/2026/04/22/leaning-in-to-ranked-choice-primary-sierra-club-endorses-three-candidates-for-governor/",
  massachusettsWiki:
    "https://en.wikipedia.org/wiki/2026_Massachusetts_gubernatorial_election",
  massachusettsAxios:
    "https://www.axios.com/local/boston/2026/04/28/minogue-governor-campaign-ad-massachusetts-gop-momentum",
  newHampshireWiki:
    "https://en.wikipedia.org/wiki/2026_New_Hampshire_gubernatorial_election",
  newHampshireCook: "https://www.cookpolitical.com/governor/race/479551",
  newHampshireOverview:
    "https://granitestatereport.com/2026/03/07/new-hampshire-2026-gubernatorial-race-candidates-overview/",
  newJersey2025:
    "https://ballotpedia.org/New_Jersey_gubernatorial_election,_2025",
  gubernatorial2026:
    "https://ballotpedia.org/United_States_gubernatorial_elections,_2026",
  newYorkWiki:
    "https://en.wikipedia.org/wiki/2026_New_York_gubernatorial_election",
  newYorkTime:
    "https://time.com/7332092/elise-stefanik-district-new-york-governor/",
  newYorkAxios:
    "https://www.axios.com/2025/10/30/stefanik-new-york-governor-2026/",
  pennsylvaniaWiki:
    "https://en.wikipedia.org/wiki/2026_Pennsylvania_gubernatorial_election",
  pennsylvaniaAp:
    "https://apnews.com/article/07474793e436b057978da354365a20c1",
  pennsylvaniaInquirer:
    "https://www.inquirer.com/politics/election/pennsylvania-gubernatorial-race-2026-candidates-shapiro-reelection-20260109.html",
  rhodeIslandWiki:
    "https://en.wikipedia.org/wiki/2026_Rhode_Island_gubernatorial_election",
  rhodeIslandPoll:
    "https://rhodeislandcurrent.com/wp-content/uploads/2026/02/Foulkes-Retains-Lead-in-RI-DEM-Gubernatorial-Primary-McKee-Appro.pdf",
  vermontWiki:
    "https://en.wikipedia.org/wiki/2026_Vermont_gubernatorial_election",
  vermontPublic:
    "https://www.vermontpublic.org/local-news/2026-03-10/republican-gov-phil-scott-democratic-challenge-2026",
  vermontDigger:
    "https://vtdigger.org/2026/03/10/first-democratic-challenger-to-phil-scott-enters-governors-race/",
} as const;

export const NORTHEAST_STATE_GUIDES: StateGuide[] = [
  {
    stateSlug: "connecticut",
    stateName: "Connecticut",
    postalAbbreviation: "CT",
    region: "Northeast",
    status: "live",
    office: "Governor",
    electionDate: GENERAL_ELECTION_DATE,
    primaryDate: "2026-08-11",
    summary:
      "Connecticut has a 2026 governor race. Democratic Gov. Ned Lamont is seeking a third term, while the Republican field includes state and local officeholders.",
    candidates: [
      {
        id: "ct-ned-lamont",
        name: "Ned Lamont",
        party: "Democratic",
        status: "declared",
        currentRole: "Governor of Connecticut",
        summary:
          "Lamont filed to seek a third term, an unusual modern bid for a Connecticut governor.",
        imageUrl: null,
        sourceUrls: [SOURCES.connecticutAp, SOURCES.connecticutWiki],
        isIncumbent: true,
      },
      {
        id: "ct-josh-elliott",
        name: "Josh Elliott",
        party: "Democratic",
        status: "declared",
        currentRole: "Connecticut state representative",
        summary:
          "Elliott is a Democratic primary challenger listed in candidate questionnaire materials for the 2026 gubernatorial primary.",
        imageUrl: null,
        sourceUrls: [SOURCES.connecticutQuestionnaire, SOURCES.connecticutWiki],
      },
      {
        id: "ct-ryan-fazio",
        name: "Ryan Fazio",
        party: "Republican",
        status: "declared",
        currentRole: "Connecticut state senator",
        summary:
          "Fazio is one of the best-known Republicans in the developing Connecticut governor field.",
        imageUrl: null,
        sourceUrls: [SOURCES.connecticutWiki],
      },
      {
        id: "ct-erin-stewart",
        name: "Erin Stewart",
        party: "Republican",
        status: "declared",
        currentRole: "Mayor of New Britain",
        summary:
          "Stewart brings municipal executive experience to the Republican primary field.",
        imageUrl: null,
        sourceUrls: [SOURCES.connecticutWiki],
      },
    ],
    sourceUrls: [
      SOURCES.connecticutWiki,
      SOURCES.connecticutAp,
      SOURCES.connecticutQuestionnaire,
    ],
    updatedAt: UPDATED_AT,
  },
  {
    stateSlug: "maine",
    stateName: "Maine",
    postalAbbreviation: "ME",
    region: "Northeast",
    status: "live",
    office: "Governor",
    electionDate: GENERAL_ELECTION_DATE,
    primaryDate: "2026-06-09",
    summary:
      "Maine has an open 2026 governor race because Gov. Janet Mills is term-limited. The Democratic primary is crowded and uses ranked-choice voting.",
    candidates: [
      {
        id: "me-shenna-bellows",
        name: "Shenna Bellows",
        party: "Democratic",
        status: "declared",
        currentRole: "Maine secretary of state",
        summary:
          "Bellows is one of the leading Democrats in the open-seat primary and earned a Sierra Club co-endorsement.",
        imageUrl: null,
        sourceUrls: [SOURCES.maineMorningStar, SOURCES.maineWiki],
      },
      {
        id: "me-troy-jackson",
        name: "Troy Jackson",
        party: "Democratic",
        status: "declared",
        currentRole: "Former Maine Senate president",
        summary:
          "Jackson is a labor-aligned Democrat and former legislative leader running in the ranked-choice primary.",
        imageUrl: null,
        sourceUrls: [SOURCES.mainePublic, SOURCES.maineMorningStar],
      },
      {
        id: "me-hannah-pingree",
        name: "Hannah Pingree",
        party: "Democratic",
        status: "declared",
        currentRole: "Former Maine House speaker",
        summary:
          "Pingree is a former speaker and policy official who has led early fundraising among Democrats.",
        imageUrl: null,
        sourceUrls: [SOURCES.maineMorningStar, SOURCES.maineWiki],
      },
      {
        id: "me-robert-wessels",
        name: "Robert Wessels",
        party: "Republican",
        status: "declared",
        currentRole: "Former Paris selectman",
        summary:
          "Wessels is one of the Republican candidates profiled by Maine Public and listed in race summaries.",
        imageUrl: null,
        sourceUrls: [SOURCES.mainePublic, SOURCES.maineWiki],
      },
    ],
    sourceUrls: [
      SOURCES.maineWiki,
      SOURCES.mainePublic,
      SOURCES.maineMorningStar,
    ],
    updatedAt: UPDATED_AT,
  },
  {
    stateSlug: "massachusetts",
    stateName: "Massachusetts",
    postalAbbreviation: "MA",
    region: "Northeast",
    status: "live",
    office: "Governor",
    electionDate: GENERAL_ELECTION_DATE,
    primaryDate: "2026-09-01",
    summary:
      "Massachusetts has a 2026 governor race. Democratic Gov. Maura Healey is seeking reelection, while Republicans are contesting a September primary.",
    candidates: [
      {
        id: "ma-maura-healey",
        name: "Maura Healey",
        party: "Democratic",
        status: "declared",
        currentRole: "Governor of Massachusetts",
        summary:
          "Healey announced she would run for a second term and faces no major Democratic primary challenge in current reporting.",
        imageUrl: null,
        sourceUrls: [SOURCES.massachusettsWiki],
        isIncumbent: true,
      },
      {
        id: "ma-brian-shortsleeve",
        name: "Brian Shortsleeve",
        party: "Republican",
        status: "declared",
        currentRole: "Former MBTA chief administrator",
        summary:
          "Shortsleeve is running in the Republican primary as a former transportation executive and venture capitalist.",
        imageUrl: null,
        sourceUrls: [SOURCES.massachusettsWiki],
      },
      {
        id: "ma-mike-minogue",
        name: "Mike Minogue",
        party: "Republican",
        status: "declared",
        currentRole: "Businessman",
        summary:
          "Minogue is advertising into the Republican primary and positioning himself as a general-election-ready nominee.",
        imageUrl: null,
        sourceUrls: [SOURCES.massachusettsAxios, SOURCES.massachusettsWiki],
      },
    ],
    sourceUrls: [SOURCES.massachusettsWiki, SOURCES.massachusettsAxios],
    updatedAt: UPDATED_AT,
  },
  {
    stateSlug: "new-hampshire",
    stateName: "New Hampshire",
    postalAbbreviation: "NH",
    region: "Northeast",
    status: "live",
    office: "Governor",
    electionDate: GENERAL_ELECTION_DATE,
    primaryDate: "2026-09-08",
    summary:
      "New Hampshire elects governors every two years. Republican Gov. Kelly Ayotte is eligible for another term, and Democrats are organizing for a competitive race.",
    candidates: [
      {
        id: "nh-kelly-ayotte",
        name: "Kelly Ayotte",
        party: "Republican",
        status: "declared",
        currentRole: "Governor of New Hampshire",
        summary:
          "Ayotte is the first-term Republican governor and the central figure in the 2026 race.",
        imageUrl: null,
        sourceUrls: [SOURCES.newHampshireCook, SOURCES.newHampshireWiki],
        isIncumbent: true,
      },
      {
        id: "nh-cinde-warmington",
        name: "Cinde Warmington",
        party: "Democratic",
        status: "declared",
        currentRole: "Former New Hampshire Executive Council member",
        summary:
          "Warmington is a Democratic candidate and former statewide executive councilor.",
        imageUrl: null,
        sourceUrls: [SOURCES.newHampshireOverview, SOURCES.newHampshireWiki],
      },
      {
        id: "nh-jon-kiper",
        name: "Jon Kiper",
        party: "Democratic",
        status: "declared",
        currentRole: "Small business owner",
        summary:
          "Kiper is running again after a 2024 campaign and is pitching himself as a working-class outsider.",
        imageUrl: null,
        sourceUrls: [SOURCES.newHampshireOverview, SOURCES.newHampshireWiki],
      },
    ],
    sourceUrls: [
      SOURCES.newHampshireWiki,
      SOURCES.newHampshireCook,
      SOURCES.newHampshireOverview,
    ],
    updatedAt: UPDATED_AT,
  },
  {
    stateSlug: "new-jersey",
    stateName: "New Jersey",
    postalAbbreviation: "NJ",
    region: "Northeast",
    status: "no-2026-governor-race",
    office: "Governor",
    electionDate: null,
    primaryDate: null,
    summary:
      "New Jersey does not have a regularly scheduled governor election in 2026. The state holds gubernatorial elections in odd-numbered years.",
    candidates: [],
    sourceUrls: [SOURCES.newJersey2025, SOURCES.gubernatorial2026],
    updatedAt: UPDATED_AT,
  },
  {
    stateSlug: "new-york",
    stateName: "New York",
    postalAbbreviation: "NY",
    region: "Northeast",
    status: "live",
    office: "Governor",
    electionDate: GENERAL_ELECTION_DATE,
    primaryDate: "2026-06-23",
    summary:
      "New York has a 2026 governor race. Democratic Gov. Kathy Hochul is seeking reelection, while Republicans include Elise Stefanik and Bruce Blakeman.",
    candidates: [
      {
        id: "ny-kathy-hochul",
        name: "Kathy Hochul",
        party: "Democratic",
        status: "declared",
        currentRole: "Governor of New York",
        summary:
          "Hochul is seeking another term after winning a full term in 2022.",
        imageUrl: null,
        sourceUrls: [SOURCES.newYorkWiki],
        isIncumbent: true,
      },
      {
        id: "ny-elise-stefanik",
        name: "Elise Stefanik",
        party: "Republican",
        status: "declared",
        currentRole: "U.S. representative",
        summary:
          "Stefanik is a Trump-aligned congresswoman running for the Republican nomination.",
        imageUrl: null,
        sourceUrls: [SOURCES.newYorkTime, SOURCES.newYorkAxios],
      },
      {
        id: "ny-bruce-blakeman",
        name: "Bruce Blakeman",
        party: "Republican",
        status: "declared",
        currentRole: "Nassau County executive",
        summary:
          "Blakeman entered the Republican primary, setting up a contested GOP race.",
        imageUrl: null,
        sourceUrls: [SOURCES.newYorkWiki],
      },
    ],
    sourceUrls: [SOURCES.newYorkWiki, SOURCES.newYorkTime, SOURCES.newYorkAxios],
    updatedAt: UPDATED_AT,
  },
  {
    stateSlug: "pennsylvania",
    stateName: "Pennsylvania",
    postalAbbreviation: "PA",
    region: "Northeast",
    status: "live",
    office: "Governor",
    electionDate: GENERAL_ELECTION_DATE,
    primaryDate: "2026-05-19",
    summary:
      "Pennsylvania has a 2026 governor race. Democratic Gov. Josh Shapiro is seeking reelection, and Republicans have consolidated around state Treasurer Stacy Garrity.",
    candidates: [
      {
        id: "pa-josh-shapiro",
        name: "Josh Shapiro",
        party: "Democratic",
        status: "declared",
        currentRole: "Governor of Pennsylvania",
        summary:
          "Shapiro launched his reelection campaign as a first-term Democratic governor in a presidential battleground state.",
        imageUrl: null,
        sourceUrls: [SOURCES.pennsylvaniaAp, SOURCES.pennsylvaniaWiki],
        isIncumbent: true,
      },
      {
        id: "pa-stacy-garrity",
        name: "Stacy Garrity",
        party: "Republican",
        status: "declared",
        currentRole: "Pennsylvania state treasurer",
        summary:
          "Garrity is the Republican challenger and state-party-backed candidate for governor.",
        imageUrl: null,
        sourceUrls: [SOURCES.pennsylvaniaInquirer, SOURCES.pennsylvaniaWiki],
      },
    ],
    sourceUrls: [
      SOURCES.pennsylvaniaWiki,
      SOURCES.pennsylvaniaAp,
      SOURCES.pennsylvaniaInquirer,
    ],
    updatedAt: UPDATED_AT,
  },
  {
    stateSlug: "rhode-island",
    stateName: "Rhode Island",
    postalAbbreviation: "RI",
    region: "Northeast",
    status: "live",
    office: "Governor",
    electionDate: GENERAL_ELECTION_DATE,
    primaryDate: "2026-09-08",
    summary:
      "Rhode Island has a 2026 governor race. Democratic Gov. Dan McKee is running again, but Helena Foulkes leads early Democratic primary polling.",
    candidates: [
      {
        id: "ri-dan-mckee",
        name: "Dan McKee",
        party: "Democratic",
        status: "declared",
        currentRole: "Governor of Rhode Island",
        summary:
          "McKee is seeking another term after becoming governor in 2021 and winning in 2022.",
        imageUrl: null,
        sourceUrls: [SOURCES.rhodeIslandWiki, SOURCES.rhodeIslandPoll],
        isIncumbent: true,
      },
      {
        id: "ri-helena-foulkes",
        name: "Helena Foulkes",
        party: "Democratic",
        status: "declared",
        currentRole: "Former CVS executive",
        summary:
          "Foulkes is a former CVS executive and 2022 candidate who leads the early Democratic primary polling cited by the Ocean State Poll.",
        imageUrl: null,
        sourceUrls: [SOURCES.rhodeIslandWiki, SOURCES.rhodeIslandPoll],
      },
      {
        id: "ri-gregory-stevens",
        name: "Gregory Stevens",
        party: "Democratic",
        status: "declared",
        currentRole: "Restaurateur",
        summary:
          "Stevens appears in the Democratic primary polling and candidate field.",
        imageUrl: null,
        sourceUrls: [SOURCES.rhodeIslandPoll, SOURCES.rhodeIslandWiki],
      },
    ],
    sourceUrls: [SOURCES.rhodeIslandWiki, SOURCES.rhodeIslandPoll],
    updatedAt: UPDATED_AT,
  },
  {
    stateSlug: "vermont",
    stateName: "Vermont",
    postalAbbreviation: "VT",
    region: "Northeast",
    status: "live",
    office: "Governor",
    electionDate: GENERAL_ELECTION_DATE,
    primaryDate: "2026-08-11",
    summary:
      "Vermont has a 2026 governor race. Republican Gov. Phil Scott has not always moved early, but Democrats Amanda Janoo and Aly Richards have entered the race.",
    candidates: [
      {
        id: "vt-phil-scott",
        name: "Phil Scott",
        party: "Republican",
        status: "declared",
        currentRole: "Governor of Vermont",
        summary:
          "Scott is the popular five-term Republican governor and remains the central figure in the race.",
        imageUrl: null,
        sourceUrls: [SOURCES.vermontWiki, SOURCES.vermontPublic],
        isIncumbent: true,
      },
      {
        id: "vt-amanda-janoo",
        name: "Amanda Janoo",
        party: "Democratic",
        status: "declared",
        currentRole: "Policy advocate",
        summary:
          "Janoo became the first Democrat to announce a 2026 gubernatorial challenge.",
        imageUrl: null,
        sourceUrls: [SOURCES.vermontDigger, SOURCES.vermontPublic],
      },
      {
        id: "vt-aly-richards",
        name: "Aly Richards",
        party: "Democratic",
        status: "declared",
        currentRole: "Child care policy advocate",
        summary:
          "Richards entered the Democratic field after helping lead Vermont child-care policy work.",
        imageUrl: null,
        sourceUrls: [SOURCES.vermontPublic],
      },
    ],
    sourceUrls: [
      SOURCES.vermontWiki,
      SOURCES.vermontPublic,
      SOURCES.vermontDigger,
    ],
    updatedAt: UPDATED_AT,
  },
];
