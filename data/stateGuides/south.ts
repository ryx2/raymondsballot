import { StateGuide } from "./types";

const UPDATED_AT = "2026-04-30";
const GENERAL_ELECTION_DATE = "2026-11-03";

const ALABAMA_SOURCES = [
  "https://www.sos.alabama.gov/alabama-votes/voter/election-information/2026",
  "https://www.sos.alabama.gov/sites/default/files/election-2026/2026RepublicanCertification.pdf",
  "https://aldemocrats.org/2026-qualified-candidates",
  "https://www.sos.alabama.gov/sites/default/files/election-2026/2026-VoterGuide.pdf",
];

const ARKANSAS_SOURCES = [
  "https://www.sos.arkansas.gov/elections/for-candidates",
  "https://apnews.com/article/arkansas-governor-fred-love-sarah-huckabee-sanders-18e075a95a047f0093dd6669370d5cd8",
  "https://arkansasadvocate.com/2026/03/03/love-wins-democratic-nomination-for-arkansas-governor/",
];

const FLORIDA_SOURCES = [
  "https://dos.elections.myflorida.com/candidates/CanList.asp?OfficeCode=GOV&elecid=20261103-GEN",
  "https://dos.myflorida.com/elections/for-voters/election-dates/",
];

const GEORGIA_SOURCES = [
  "https://sos.ga.gov/candidate-qualifying-elected-office",
  "https://www.wrdw.com/2026/03/07/heres-list-whos-filed-run-top-offices-georgia/",
  "https://www.wabe.org/2026georgiacandidates/",
];

const MARYLAND_SOURCES = [
  "https://www.elections.maryland.gov/elections/2026/Primary_candidates/2026_GP_statewide_candidatelist.html",
];

const OKLAHOMA_SOURCES = [
  "https://oklahoma.gov/elections/candidates/2026-candidate-filing-information.html",
  "https://oklahoma.gov/content/dam/ok/en/elections/candidate-filing-archives/2026-candidate-filing-archives/2026-candidate-list-book.pdf",
];

const SOUTH_CAROLINA_SOURCES = [
  "https://scvotes.gov/candidates/2026-candidate-information/",
  "https://vrems.scvotes.sc.gov/Candidate/SelectElection",
  "https://www.foxcarolina.com/2026/03/26/6-republican-candidates-sc-governors-race-lt-gov-evette-officially-files/",
  "https://greenvillegop.com/wp-content/uploads/2025/10/2026-03-30-Greenville-County-Candiates-Filed-SC-Votes-1pm.pdf",
];

const TENNESSEE_SOURCES = [
  "https://sos.tn.gov/elections/2026-candidate-lists",
  "https://sos-prod.tnsosgovfiles.com/s3fs-public/document/Governor_Filed_2026-03-24.pdf",
];

const TEXAS_SOURCES = [
  "https://www.sos.texas.gov/elections/candidates/guide/2026/dates2026.shtml",
  "https://www.texasstandard.org/stories/texas-primary-results-2026-governors-race-abbott-hinojosa/",
  "https://www.texastribune.org/2026/03/03/texas-greg-abbott-governor-republican-primary-lt-gov-dan-patrick/",
];

const NO_RACE_SOURCES = {
  delaware: [
    "https://elections.delaware.gov/calendar/2026ElectionCalendar.shtml",
    "https://ballotpedia.org/United_States_gubernatorial_elections,_2026",
  ],
  kentucky: [
    "https://elect.ky.gov/Resources/Pages/Calendar.aspx",
    "https://ballotpedia.org/United_States_gubernatorial_elections,_2026",
  ],
  louisiana: [
    "https://www.sos.la.gov/ElectionsAndVoting/GetElectionInformation/SearchElectionDates/Pages/default.aspx",
    "https://ballotpedia.org/United_States_gubernatorial_elections,_2026",
  ],
  mississippi: [
    "https://www.sos.ms.gov/elections-voting/election-calendar",
    "https://ballotpedia.org/United_States_gubernatorial_elections,_2026",
  ],
  northCarolina: [
    "https://www.ncsbe.gov/voting/upcoming-election",
    "https://ballotpedia.org/United_States_gubernatorial_elections,_2026",
  ],
  virginia: [
    "https://www.elections.virginia.gov/casting-a-ballot/calendars-schedules/upcoming-elections.html",
    "https://ballotpedia.org/United_States_gubernatorial_elections,_2026",
  ],
  westVirginia: [
    "https://sos.wv.gov/elections/Pages/ElectionCalendar.aspx",
    "https://ballotpedia.org/United_States_gubernatorial_elections,_2026",
  ],
};

export const SOUTH_STATE_GUIDES: StateGuide[] = [
  {
    stateSlug: "alabama",
    stateName: "Alabama",
    postalAbbreviation: "AL",
    region: "South",
    status: "live",
    office: "Governor",
    electionDate: GENERAL_ELECTION_DATE,
    primaryDate: "2026-05-19",
    summary:
      "Alabama has an open 2026 governor race because Gov. Kay Ivey is term-limited. The May 19 primary ballot is set from party certifications, with a June 16 runoff if needed and the general election on November 3.",
    candidates: [
      {
        id: "al-ken-mcfeeters",
        name: "Ken McFeeters",
        party: "Republican",
        status: "qualified",
        currentRole: "Former congressional candidate",
        summary:
          "Qualified for the Republican primary for Alabama governor after previously running for Congress.",
        imageUrl: null,
        sourceUrls: ALABAMA_SOURCES,
      },
      {
        id: "al-tommy-tuberville",
        name: "Tommy Tuberville",
        party: "Republican",
        status: "qualified",
        currentRole: "U.S. senator",
        summary:
          "Qualified for the Republican primary after choosing to run for governor rather than seek another U.S. Senate term.",
        imageUrl: null,
        sourceUrls: ALABAMA_SOURCES,
      },
      {
        id: "al-will-santivasci",
        name: '"Alabama" Will Santivasci',
        party: "Republican",
        status: "qualified",
        currentRole: "Republican candidate",
        summary:
          "Qualified for the Republican primary and appears on Alabama's certified 2026 candidate list for governor.",
        imageUrl: null,
        sourceUrls: ALABAMA_SOURCES,
      },
      {
        id: "al-will-boyd",
        name: "Will Boyd",
        party: "Democratic",
        status: "qualified",
        currentRole: "Businessman, engineer, and minister",
        summary:
          "Qualified for the Democratic primary after previous statewide and federal campaigns in Alabama.",
        imageUrl: null,
        sourceUrls: ALABAMA_SOURCES,
      },
      {
        id: "al-jamel-brown",
        name: "Jamel J. Brown",
        party: "Democratic",
        status: "qualified",
        currentRole: "Pastor and talk show host",
        summary:
          "Qualified for the Democratic primary for the open governor seat.",
        imageUrl: null,
        sourceUrls: ALABAMA_SOURCES,
      },
      {
        id: "al-yolanda-flowers",
        name: "Yolanda Rochelle Flowers",
        party: "Democratic",
        status: "qualified",
        currentRole: "2022 Democratic nominee for governor",
        summary:
          "Qualified for the Democratic primary after serving as the party's 2022 nominee for Alabama governor.",
        imageUrl: null,
        sourceUrls: ALABAMA_SOURCES,
      },
      {
        id: "al-doug-jones",
        name: "Doug Jones",
        party: "Democratic",
        status: "qualified",
        currentRole: "Former U.S. senator",
        summary:
          "Qualified for the Democratic primary and brings statewide experience from his service in the U.S. Senate.",
        imageUrl: null,
        sourceUrls: ALABAMA_SOURCES,
      },
      {
        id: "al-chad-martin",
        name: "Chad Chig Martin",
        party: "Democratic",
        status: "qualified",
        currentRole: "Business owner",
        summary:
          "Qualified for the Democratic primary for Alabama's open governor race.",
        imageUrl: null,
        sourceUrls: ALABAMA_SOURCES,
      },
      {
        id: "al-nathan-mathis",
        name: 'Nathan "Nate" Mathis',
        party: "Democratic",
        status: "qualified",
        currentRole: "Former state representative",
        summary:
          "Qualified for the Democratic primary and previously served in the Alabama House of Representatives.",
        imageUrl: null,
        sourceUrls: ALABAMA_SOURCES,
      },
    ],
    sourceUrls: ALABAMA_SOURCES,
    updatedAt: UPDATED_AT,
  },
  {
    stateSlug: "arkansas",
    stateName: "Arkansas",
    postalAbbreviation: "AR",
    region: "South",
    status: "live",
    office: "Governor",
    electionDate: GENERAL_ELECTION_DATE,
    primaryDate: "2026-03-03",
    summary:
      "Arkansas held its 2026 gubernatorial primaries on March 3. Incumbent Republican Sarah Huckabee Sanders advanced without a primary opponent, while Democrat Fred Love won his party's nomination.",
    candidates: [
      {
        id: "ar-sarah-huckabee-sanders",
        name: "Sarah Huckabee Sanders",
        party: "Republican",
        status: "qualified",
        currentRole: "Governor of Arkansas",
        summary:
          "The incumbent governor is seeking a second term after advancing from the Republican primary unopposed.",
        imageUrl: null,
        sourceUrls: ARKANSAS_SOURCES,
        isIncumbent: true,
      },
      {
        id: "ar-fred-love",
        name: "Fred Love",
        party: "Democratic",
        status: "qualified",
        currentRole: "Arkansas state senator",
        summary:
          "Won the Democratic primary for governor and will challenge Sanders in the November general election.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/d/da/Rep_Fredrick_J_Love.jpg",
        imageAttribution:
          "Arkansas House of Representatives, via Wikimedia Commons",
        sourceUrls: ARKANSAS_SOURCES,
      },
    ],
    sourceUrls: ARKANSAS_SOURCES,
    updatedAt: UPDATED_AT,
  },
  {
    stateSlug: "delaware",
    stateName: "Delaware",
    postalAbbreviation: "DE",
    region: "South",
    status: "no-2026-governor-race",
    office: "Governor",
    electionDate: null,
    primaryDate: null,
    summary:
      "Delaware does not have a regular governor election in 2026. The state last held a governor election in 2024, and the next regular contest is expected in 2028.",
    candidates: [],
    sourceUrls: NO_RACE_SOURCES.delaware,
    updatedAt: UPDATED_AT,
  },
  {
    stateSlug: "florida",
    stateName: "Florida",
    postalAbbreviation: "FL",
    region: "South",
    status: "live",
    office: "Governor",
    electionDate: GENERAL_ELECTION_DATE,
    primaryDate: "2026-08-18",
    summary:
      "Florida has an open 2026 governor race because Gov. Ron DeSantis is term-limited. The Division of Elections candidate tracker lists active candidates ahead of the August 18 primary and November 3 general election.",
    candidates: [
      {
        id: "fl-jay-collins",
        name: "Jay Collins",
        party: "Republican",
        status: "filed",
        currentRole: "Florida lieutenant governor",
        summary:
          "Listed as an active Republican candidate in the Florida Division of Elections candidate tracker.",
        imageUrl: null,
        sourceUrls: FLORIDA_SOURCES,
      },
      {
        id: "fl-byron-donalds",
        name: "Byron Donalds",
        party: "Republican",
        status: "filed",
        currentRole: "U.S. representative",
        summary:
          "A Naples-area congressman and active Republican candidate for Florida governor.",
        imageUrl: null,
        sourceUrls: FLORIDA_SOURCES,
      },
      {
        id: "fl-james-fishback",
        name: "James Fishback",
        party: "Republican",
        status: "filed",
        currentRole: "Investment firm executive",
        summary:
          "Listed as an active Republican candidate in the Florida candidate tracker.",
        imageUrl: null,
        sourceUrls: FLORIDA_SOURCES,
      },
      {
        id: "fl-paul-renner",
        name: "Paul Renner",
        party: "Republican",
        status: "filed",
        currentRole: "Former Florida House speaker",
        summary:
          "Listed as an active Republican candidate after serving as speaker of the Florida House.",
        imageUrl: null,
        sourceUrls: FLORIDA_SOURCES,
      },
      {
        id: "fl-jerry-demings",
        name: "Jerry Demings",
        party: "Democratic",
        status: "filed",
        currentRole: "Orange County mayor",
        summary:
          "Listed as an active Democratic candidate and is a former sheriff and current Orange County mayor.",
        imageUrl: null,
        sourceUrls: FLORIDA_SOURCES,
      },
      {
        id: "fl-david-jolly",
        name: "David Jolly",
        party: "Democratic",
        status: "filed",
        currentRole: "Former U.S. representative",
        summary:
          "Listed as an active Democratic candidate and previously represented Florida in Congress.",
        imageUrl: null,
        sourceUrls: FLORIDA_SOURCES,
      },
    ],
    sourceUrls: FLORIDA_SOURCES,
    updatedAt: UPDATED_AT,
  },
  {
    stateSlug: "georgia",
    stateName: "Georgia",
    postalAbbreviation: "GA",
    region: "South",
    status: "live",
    office: "Governor",
    electionDate: GENERAL_ELECTION_DATE,
    primaryDate: "2026-05-19",
    summary:
      "Georgia has an open 2026 governor race because Gov. Brian Kemp is term-limited. Candidate qualifying ran March 2-6, and the May 19 primary fields are crowded in both major parties.",
    candidates: [
      {
        id: "ga-keisha-lance-bottoms",
        name: "Keisha Lance Bottoms",
        party: "Democratic",
        status: "qualified",
        currentRole: "Former Atlanta mayor",
        summary:
          "Qualified for the Democratic primary after serving as Atlanta mayor and later in the Biden administration.",
        imageUrl: null,
        sourceUrls: GEORGIA_SOURCES,
      },
      {
        id: "ga-olu-brown",
        name: "Olu Brown",
        party: "Democratic",
        status: "qualified",
        currentRole: "Pastor and author",
        summary:
          "Qualified for the Democratic primary for Georgia's open governor seat.",
        imageUrl: null,
        sourceUrls: GEORGIA_SOURCES,
      },
      {
        id: "ga-amanda-duffy",
        name: "Amanda Duffy",
        party: "Democratic",
        status: "qualified",
        currentRole: "Democratic candidate",
        summary:
          "Qualified for the Democratic primary for governor.",
        imageUrl: null,
        sourceUrls: GEORGIA_SOURCES,
      },
      {
        id: "ga-geoff-duncan",
        name: "Geoff Duncan",
        party: "Democratic",
        status: "qualified",
        currentRole: "Former Georgia lieutenant governor",
        summary:
          "Qualified for the Democratic primary after previously serving as Georgia's Republican lieutenant governor.",
        imageUrl: null,
        sourceUrls: GEORGIA_SOURCES,
      },
      {
        id: "ga-jason-esteves",
        name: "Jason Esteves",
        party: "Democratic",
        status: "qualified",
        currentRole: "Georgia state senator",
        summary:
          "Qualified for the Democratic primary and represents parts of metro Atlanta in the state Senate.",
        imageUrl: null,
        sourceUrls: GEORGIA_SOURCES,
      },
      {
        id: "ga-derrick-jackson",
        name: "Derrick Jackson",
        party: "Democratic",
        status: "qualified",
        currentRole: "Georgia state representative",
        summary:
          "Qualified for the Democratic primary while serving in the Georgia House.",
        imageUrl: null,
        sourceUrls: GEORGIA_SOURCES,
      },
      {
        id: "ga-michael-thurmond",
        name: "Michael Thurmond",
        party: "Democratic",
        status: "qualified",
        currentRole: "Former DeKalb County CEO",
        summary:
          "Qualified for the Democratic primary after prior service as DeKalb County chief executive and state labor commissioner.",
        imageUrl: null,
        sourceUrls: GEORGIA_SOURCES,
      },
      {
        id: "ga-chris-carr",
        name: "Chris Carr",
        party: "Republican",
        status: "qualified",
        currentRole: "Georgia attorney general",
        summary:
          "Qualified for the Republican primary after serving as Georgia attorney general.",
        imageUrl: null,
        sourceUrls: GEORGIA_SOURCES,
      },
      {
        id: "ga-clark-headrick-dean",
        name: "Clark Headrick Dean",
        party: "Republican",
        status: "qualified",
        currentRole: "Republican candidate",
        summary:
          "Qualified for the Republican primary for governor.",
        imageUrl: null,
        sourceUrls: GEORGIA_SOURCES,
      },
      {
        id: "ga-rick-jackson",
        name: "Rick Jackson",
        party: "Republican",
        status: "qualified",
        currentRole: "Health care executive",
        summary:
          "Qualified for the Republican primary and is running as a self-funded business executive.",
        imageUrl: null,
        sourceUrls: GEORGIA_SOURCES,
      },
      {
        id: "ga-burt-jones",
        name: "Burt Jones",
        party: "Republican",
        status: "qualified",
        currentRole: "Georgia lieutenant governor",
        summary:
          "Qualified for the Republican primary while serving as lieutenant governor.",
        imageUrl: null,
        sourceUrls: GEORGIA_SOURCES,
      },
      {
        id: "ga-gregg-kirkpatrick",
        name: "Gregg Kirkpatrick",
        party: "Republican",
        status: "qualified",
        currentRole: "Republican candidate",
        summary:
          "Qualified for the Republican primary for the open governor race.",
        imageUrl: null,
        sourceUrls: GEORGIA_SOURCES,
      },
      {
        id: "ga-brad-raffensperger",
        name: "Brad Raffensperger",
        party: "Republican",
        status: "qualified",
        currentRole: "Georgia secretary of state",
        summary:
          "Qualified for the Republican primary after serving as secretary of state.",
        imageUrl: null,
        sourceUrls: GEORGIA_SOURCES,
      },
      {
        id: "ga-thomas-williams",
        name: "Thomas Williams",
        party: "Republican",
        status: "qualified",
        currentRole: "Republican candidate",
        summary:
          "Qualified for the Republican primary for governor.",
        imageUrl: null,
        sourceUrls: GEORGIA_SOURCES,
      },
      {
        id: "ga-ken-yasger",
        name: "Ken Yasger",
        party: "Republican",
        status: "qualified",
        currentRole: "Republican candidate",
        summary:
          "Qualified for the Republican primary for Georgia governor.",
        imageUrl: null,
        sourceUrls: GEORGIA_SOURCES,
      },
    ],
    sourceUrls: GEORGIA_SOURCES,
    updatedAt: UPDATED_AT,
  },
  {
    stateSlug: "kentucky",
    stateName: "Kentucky",
    postalAbbreviation: "KY",
    region: "South",
    status: "no-2026-governor-race",
    office: "Governor",
    electionDate: null,
    primaryDate: null,
    summary:
      "Kentucky does not have a governor election in 2026. The commonwealth elects governors in odd-numbered years, and the next regular race is expected in 2027.",
    candidates: [],
    sourceUrls: NO_RACE_SOURCES.kentucky,
    updatedAt: UPDATED_AT,
  },
  {
    stateSlug: "louisiana",
    stateName: "Louisiana",
    postalAbbreviation: "LA",
    region: "South",
    status: "no-2026-governor-race",
    office: "Governor",
    electionDate: null,
    primaryDate: null,
    summary:
      "Louisiana does not have a regular governor election in 2026. The state last elected a governor in 2023, and the next regular contest is expected in 2027.",
    candidates: [],
    sourceUrls: NO_RACE_SOURCES.louisiana,
    updatedAt: UPDATED_AT,
  },
  {
    stateSlug: "maryland",
    stateName: "Maryland",
    postalAbbreviation: "MD",
    region: "South",
    status: "live",
    office: "Governor",
    electionDate: GENERAL_ELECTION_DATE,
    primaryDate: "2026-06-23",
    summary:
      "Maryland's 2026 governor race includes incumbent Democrat Wes Moore and a Republican field led by 2022 nominee Dan Cox on the State Board of Elections candidate list.",
    candidates: [
      {
        id: "md-eric-felber",
        name: "Eric S. Felber",
        party: "Democratic",
        status: "filed",
        currentRole: "Attorney",
        summary:
          "Filed for the Democratic primary with LaTrece Hawkins Lytes listed as the related lieutenant governor candidate.",
        websiteUrl: "https://www.felberforgovernor.org",
        imageUrl: null,
        sourceUrls: MARYLAND_SOURCES,
      },
      {
        id: "md-wes-moore",
        name: "Wes Moore",
        party: "Democratic",
        status: "filed",
        currentRole: "Governor of Maryland",
        summary:
          "The incumbent governor filed for reelection with Lt. Gov. Aruna Miller on the Democratic ticket.",
        websiteUrl: "https://www.wesmoore.com",
        imageUrl: null,
        sourceUrls: MARYLAND_SOURCES,
        isIncumbent: true,
      },
      {
        id: "md-dan-cox",
        name: "Dan Cox",
        party: "Republican",
        status: "filed",
        currentRole: "Former state delegate and 2022 nominee",
        summary:
          "Filed for the Republican primary after serving as the party's 2022 nominee for governor.",
        websiteUrl: "https://www.dancoxforgovernor.com",
        imageUrl: null,
        sourceUrls: MARYLAND_SOURCES,
      },
      {
        id: "md-ed-hale",
        name: "Ed Hale",
        party: "Republican",
        status: "filed",
        currentRole: "Businessman",
        summary:
          "Filed for the Republican primary with Tyrone Keys Jr. listed as the related lieutenant governor candidate.",
        websiteUrl: "https://www.haleforgov.com",
        imageUrl: null,
        sourceUrls: MARYLAND_SOURCES,
      },
      {
        id: "md-douglas-larcomb",
        name: "Douglas Larcomb",
        party: "Republican",
        status: "filed",
        currentRole: "Republican candidate",
        summary:
          "Filed for the Republican primary with Martina D. Duncan listed as the related lieutenant governor candidate.",
        imageUrl: null,
        sourceUrls: MARYLAND_SOURCES,
      },
      {
        id: "md-john-myrick",
        name: "John A. Myrick",
        party: "Republican",
        status: "filed",
        currentRole: "Republican candidate",
        summary:
          "Filed for the Republican primary with Brenda J. Thiam listed as the related lieutenant governor candidate.",
        websiteUrl: "https://www.johnmyrickformdgovernor.org",
        imageUrl: null,
        sourceUrls: MARYLAND_SOURCES,
      },
      {
        id: "md-michael-oakes",
        name: "Michael Oakes",
        party: "Republican",
        status: "filed",
        currentRole: "Republican candidate",
        summary:
          "Filed for the Republican primary with Ronald W. Abend listed as the related lieutenant governor candidate.",
        imageUrl: null,
        sourceUrls: MARYLAND_SOURCES,
      },
      {
        id: "md-nancy-jane-taylor",
        name: "Nancy Jane Taylor",
        party: "Republican",
        status: "filed",
        currentRole: "Republican candidate",
        summary:
          "Filed for the Republican primary for Maryland governor.",
        imageUrl: null,
        sourceUrls: MARYLAND_SOURCES,
      },
    ],
    sourceUrls: MARYLAND_SOURCES,
    updatedAt: UPDATED_AT,
  },
  {
    stateSlug: "mississippi",
    stateName: "Mississippi",
    postalAbbreviation: "MS",
    region: "South",
    status: "no-2026-governor-race",
    office: "Governor",
    electionDate: null,
    primaryDate: null,
    summary:
      "Mississippi does not have a governor election in 2026. Mississippi elects governors in odd-numbered years, with the next regular race expected in 2027.",
    candidates: [],
    sourceUrls: NO_RACE_SOURCES.mississippi,
    updatedAt: UPDATED_AT,
  },
  {
    stateSlug: "north-carolina",
    stateName: "North Carolina",
    postalAbbreviation: "NC",
    region: "South",
    status: "no-2026-governor-race",
    office: "Governor",
    electionDate: null,
    primaryDate: null,
    summary:
      "North Carolina does not have a governor election in 2026. The state last elected a governor in 2024, and the next regular race is expected in 2028.",
    candidates: [],
    sourceUrls: NO_RACE_SOURCES.northCarolina,
    updatedAt: UPDATED_AT,
  },
  {
    stateSlug: "oklahoma",
    stateName: "Oklahoma",
    postalAbbreviation: "OK",
    region: "South",
    status: "live",
    office: "Governor",
    electionDate: GENERAL_ELECTION_DATE,
    primaryDate: "2026-06-16",
    summary:
      "Oklahoma has an open 2026 governor race because Gov. Kevin Stitt is term-limited. The State Election Board's April 1-3 filing list includes Republican, Democratic, and independent candidates.",
    candidates: [
      {
        id: "ok-charles-mccall",
        name: "Charles McCall",
        party: "Republican",
        status: "qualified",
        currentRole: "Former Oklahoma House speaker",
        summary:
          "Filed for the Republican primary after leading the Oklahoma House.",
        imageUrl: null,
        sourceUrls: OKLAHOMA_SOURCES,
      },
      {
        id: "ok-mike-mazzei",
        name: "Mike Mazzei",
        party: "Republican",
        status: "qualified",
        currentRole: "Former state senator",
        summary:
          "Filed for the Republican primary for Oklahoma governor.",
        imageUrl: null,
        sourceUrls: OKLAHOMA_SOURCES,
      },
      {
        id: "ok-leisa-mitchell-haynes",
        name: "Leisa Mitchell Haynes",
        party: "Republican",
        status: "qualified",
        currentRole: "Republican candidate",
        summary:
          "Filed for the Republican primary for governor.",
        imageUrl: null,
        sourceUrls: OKLAHOMA_SOURCES,
      },
      {
        id: "ok-gentner-drummond",
        name: "Gentner Drummond",
        party: "Republican",
        status: "qualified",
        currentRole: "Oklahoma attorney general",
        summary:
          "Filed for the Republican primary while serving as attorney general.",
        imageUrl: null,
        sourceUrls: OKLAHOMA_SOURCES,
      },
      {
        id: "ok-kenneth-sturgell",
        name: "Kenneth Sturgell",
        party: "Republican",
        status: "qualified",
        currentRole: "Republican candidate",
        summary:
          "Filed for the Republican primary for Oklahoma governor.",
        imageUrl: null,
        sourceUrls: OKLAHOMA_SOURCES,
      },
      {
        id: "ok-jennifer-domenico",
        name: "Jennifer Domenico",
        party: "Republican",
        status: "qualified",
        currentRole: "Republican candidate",
        summary:
          "Filed for the Republican primary for governor.",
        imageUrl: null,
        sourceUrls: OKLAHOMA_SOURCES,
      },
      {
        id: "ok-chip-keating",
        name: "Chip Keating",
        party: "Republican",
        status: "qualified",
        currentRole: "Businessman",
        summary:
          "Filed for the Republican primary for governor.",
        imageUrl: null,
        sourceUrls: OKLAHOMA_SOURCES,
      },
      {
        id: "ok-calup-anthony-taylor",
        name: "Calup Anthony Taylor",
        party: "Republican",
        status: "qualified",
        currentRole: "Republican candidate",
        summary:
          "Filed for the Republican primary for Oklahoma governor.",
        imageUrl: null,
        sourceUrls: OKLAHOMA_SOURCES,
      },
      {
        id: "ok-jake-merrick",
        name: "Jake A. Merrick",
        party: "Republican",
        status: "qualified",
        currentRole: "Former state senator",
        summary:
          "Filed for the Republican primary after prior service in the Oklahoma Senate.",
        imageUrl: null,
        sourceUrls: OKLAHOMA_SOURCES,
      },
      {
        id: "ok-cyndi-munson",
        name: "Cyndi Munson",
        party: "Democratic",
        status: "qualified",
        currentRole: "Oklahoma House minority leader",
        summary:
          "Filed for the Democratic primary while serving as House minority leader.",
        imageUrl: null,
        sourceUrls: OKLAHOMA_SOURCES,
      },
      {
        id: "ok-arya",
        name: "Arya",
        party: "Democratic",
        status: "qualified",
        currentRole: "Democratic candidate",
        summary:
          "Filed for the Democratic primary for Oklahoma governor.",
        imageUrl: null,
        sourceUrls: OKLAHOMA_SOURCES,
      },
      {
        id: "ok-connie-johnson",
        name: "Connie Johnson",
        party: "Democratic",
        status: "qualified",
        currentRole: "Former state senator",
        summary:
          "Filed for the Democratic primary after previous service in the Oklahoma Senate.",
        imageUrl: null,
        sourceUrls: OKLAHOMA_SOURCES,
      },
      {
        id: "ok-jerry-griffin",
        name: "Jerry Griffin",
        party: "Independent",
        status: "qualified",
        currentRole: "Independent candidate",
        summary:
          "Filed as an independent candidate for Oklahoma governor.",
        imageUrl: null,
        sourceUrls: OKLAHOMA_SOURCES,
      },
      {
        id: "ok-robert-brooks",
        name: "Robert E. Brooks Sr.",
        party: "Independent",
        status: "qualified",
        currentRole: "Independent candidate",
        summary:
          "Filed as an independent candidate for governor.",
        imageUrl: null,
        sourceUrls: OKLAHOMA_SOURCES,
      },
      {
        id: "ok-orlando-lynn-bush",
        name: "Orlando Lynn Bush",
        party: "Independent",
        status: "qualified",
        currentRole: "Independent candidate",
        summary:
          "Filed as an independent candidate for Oklahoma governor.",
        imageUrl: null,
        sourceUrls: OKLAHOMA_SOURCES,
      },
    ],
    sourceUrls: OKLAHOMA_SOURCES,
    updatedAt: UPDATED_AT,
  },
  {
    stateSlug: "south-carolina",
    stateName: "South Carolina",
    postalAbbreviation: "SC",
    region: "South",
    status: "live",
    office: "Governor",
    electionDate: GENERAL_ELECTION_DATE,
    primaryDate: "2026-06-09",
    summary:
      "South Carolina has an open 2026 governor race because Gov. Henry McMaster is term-limited. Candidate filing closed March 30, and the June 9 primary features large Republican and Democratic fields plus minor-party candidates.",
    candidates: [
      {
        id: "sc-michael-addison",
        name: "Michael Addison",
        party: "Other",
        status: "qualified",
        currentRole: "United Citizens candidate",
        summary:
          "Listed as an active United Citizens candidate for governor with Candace Brewer as running mate.",
        imageUrl: null,
        sourceUrls: SOUTH_CAROLINA_SOURCES,
      },
      {
        id: "sc-jacqueline-hicks-dubose",
        name: "Jacqueline Hicks DuBose",
        party: "Republican",
        status: "qualified",
        currentRole: "Republican candidate",
        summary:
          "Listed as an active Republican candidate for governor.",
        imageUrl: null,
        sourceUrls: SOUTH_CAROLINA_SOURCES,
      },
      {
        id: "sc-pamela-evette",
        name: "Pamela Evette",
        party: "Republican",
        status: "qualified",
        currentRole: "Lieutenant governor of South Carolina",
        summary:
          "Filed for the Republican primary after serving as lieutenant governor since 2019.",
        imageUrl: null,
        sourceUrls: SOUTH_CAROLINA_SOURCES,
      },
      {
        id: "sc-walid-hakim",
        name: "Walid Hakim",
        party: "Green",
        status: "qualified",
        currentRole: "Green candidate",
        summary:
          "Listed as an active Green Party candidate for governor.",
        imageUrl: null,
        sourceUrls: SOUTH_CAROLINA_SOURCES,
      },
      {
        id: "sc-jermaine-johnson",
        name: "Jermaine Johnson",
        party: "Democratic",
        status: "qualified",
        currentRole: "South Carolina state representative",
        summary:
          "Running in the Democratic primary while serving in the South Carolina House.",
        imageUrl: null,
        sourceUrls: SOUTH_CAROLINA_SOURCES,
      },
      {
        id: "sc-joshua-kimbrell",
        name: "Joshua Kimbrell",
        party: "Republican",
        status: "qualified",
        currentRole: "South Carolina state senator",
        summary:
          "Running in the Republican primary while serving in the South Carolina Senate.",
        imageUrl: null,
        sourceUrls: SOUTH_CAROLINA_SOURCES,
      },
      {
        id: "sc-nancy-mace",
        name: "Nancy Mace",
        party: "Republican",
        status: "qualified",
        currentRole: "U.S. representative",
        summary:
          "Running in the Republican primary after representing the Charleston-area 1st Congressional District.",
        imageUrl: null,
        sourceUrls: SOUTH_CAROLINA_SOURCES,
      },
      {
        id: "sc-mullins-mcleod",
        name: "Mullins McLeod",
        party: "Democratic",
        status: "qualified",
        currentRole: "Attorney",
        summary:
          "Listed as an active Democratic candidate for governor.",
        imageUrl: null,
        sourceUrls: SOUTH_CAROLINA_SOURCES,
      },
      {
        id: "sc-ralph-norman",
        name: "Ralph W. Norman",
        party: "Republican",
        status: "qualified",
        currentRole: "U.S. representative",
        summary:
          "Running in the Republican primary after representing South Carolina's 5th Congressional District.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/1/1e/Ralph_Norman_official_photo_%28cropped_3%29.jpg",
        imageAttribution:
          "U.S. House Office of Photography, public domain, via Wikimedia Commons",
        sourceUrls: SOUTH_CAROLINA_SOURCES,
      },
      {
        id: "sc-rom-reddy",
        name: "Rom Reddy",
        party: "Republican",
        status: "qualified",
        currentRole: "Businessman",
        summary:
          "Listed as an active Republican candidate for governor.",
        imageUrl: null,
        sourceUrls: SOUTH_CAROLINA_SOURCES,
      },
      {
        id: "sc-gary-votour",
        name: "Gary Votour",
        party: "Other",
        status: "qualified",
        currentRole: "Workers Party candidate",
        summary:
          "Listed as an active Workers Party candidate for governor.",
        imageUrl: null,
        sourceUrls: SOUTH_CAROLINA_SOURCES,
      },
      {
        id: "sc-billy-webster",
        name: "Billy Webster",
        party: "Democratic",
        status: "qualified",
        currentRole: "Businessman",
        summary:
          "Listed as an active Democratic candidate for governor.",
        imageUrl: null,
        sourceUrls: SOUTH_CAROLINA_SOURCES,
      },
      {
        id: "sc-alan-wilson",
        name: "Alan Wilson",
        party: "Republican",
        status: "qualified",
        currentRole: "South Carolina attorney general",
        summary:
          "Running in the Republican primary after serving as South Carolina attorney general.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/e/ee/JAG_Passing_Alan_Wilson.jpg",
        imageAttribution:
          "South Carolina National Guard, via Wikimedia Commons",
        sourceUrls: SOUTH_CAROLINA_SOURCES,
      },
    ],
    sourceUrls: SOUTH_CAROLINA_SOURCES,
    updatedAt: UPDATED_AT,
  },
  {
    stateSlug: "tennessee",
    stateName: "Tennessee",
    postalAbbreviation: "TN",
    region: "South",
    status: "live",
    office: "Governor",
    electionDate: GENERAL_ELECTION_DATE,
    primaryDate: "2026-08-06",
    summary:
      "Tennessee has an open 2026 governor race because Gov. Bill Lee is term-limited. The Secretary of State's final candidate list shows candidates whose signatures were approved after the March 10 qualifying deadline.",
    candidates: [
      {
        id: "tn-marsha-blackburn",
        name: "Marsha Blackburn",
        party: "Republican",
        status: "qualified",
        currentRole: "U.S. senator",
        summary:
          "Qualified for the Republican primary after representing Tennessee in the U.S. Senate.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/c/c2/Sen._Marsha_Blackburn_%28R-TN%29_official_headshot_-_116th_Congress.jpg",
        imageAttribution:
          "U.S. Senate, public domain, via Wikimedia Commons",
        sourceUrls: TENNESSEE_SOURCES,
      },
      {
        id: "tn-monty-fritts",
        name: "Monty Fritts",
        party: "Republican",
        status: "qualified",
        currentRole: "Tennessee state representative",
        summary:
          "Qualified for the Republican primary for the open governor race.",
        imageUrl: null,
        sourceUrls: TENNESSEE_SOURCES,
      },
      {
        id: "tn-john-rose",
        name: "John Rose",
        party: "Republican",
        status: "qualified",
        currentRole: "U.S. representative",
        summary:
          "Qualified for the Republican primary after representing Tennessee's 6th Congressional District.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/c/c2/John_Rose_118th_Congress.jpeg",
        imageAttribution:
          "U.S. House Office of Photography, public domain, via Wikimedia Commons",
        sourceUrls: TENNESSEE_SOURCES,
      },
      {
        id: "tn-carnita-atwater",
        name: "Carnita Atwater",
        party: "Democratic",
        status: "qualified",
        currentRole: "Museum president",
        summary:
          "Qualified for the Democratic primary after previous Tennessee campaigns.",
        imageUrl: null,
        sourceUrls: TENNESSEE_SOURCES,
      },
      {
        id: "tn-tim-cyr",
        name: "Tim Cyr",
        party: "Democratic",
        status: "qualified",
        currentRole: "Democratic candidate",
        summary:
          "Qualified for the Democratic primary for Tennessee governor.",
        imageUrl: null,
        sourceUrls: TENNESSEE_SOURCES,
      },
      {
        id: "tn-jerri-green",
        name: "Jerri Green",
        party: "Democratic",
        status: "qualified",
        currentRole: "Memphis city council member",
        summary:
          "Qualified for the Democratic primary after service on the Memphis City Council.",
        imageUrl: null,
        sourceUrls: TENNESSEE_SOURCES,
      },
      {
        id: "tn-adam-kurtz",
        name: 'Adam "Ditch" Kurtz',
        party: "Democratic",
        status: "qualified",
        currentRole: "Musician",
        summary:
          "Qualified for the Democratic primary for the open governor race.",
        imageUrl: null,
        sourceUrls: TENNESSEE_SOURCES,
      },
      {
        id: "tn-kevin-lee-mccants",
        name: "Kevin Lee McCants",
        party: "Democratic",
        status: "qualified",
        currentRole: "Democratic candidate",
        summary:
          "Qualified for the Democratic primary for Tennessee governor.",
        imageUrl: null,
        sourceUrls: TENNESSEE_SOURCES,
      },
      {
        id: "tn-misam-abidi",
        name: "Misam Abidi",
        party: "Independent",
        status: "qualified",
        currentRole: "Independent candidate",
        summary:
          "Qualified as an independent candidate with approved signatures.",
        imageUrl: null,
        sourceUrls: TENNESSEE_SOURCES,
      },
      {
        id: "tn-dean-brewer",
        name: "Dean Brewer",
        party: "Independent",
        status: "qualified",
        currentRole: "Independent candidate",
        summary:
          "Qualified as an independent candidate with approved signatures.",
        imageUrl: null,
        sourceUrls: TENNESSEE_SOURCES,
      },
      {
        id: "tn-ray-brown",
        name: "Ray Brown",
        party: "Independent",
        status: "qualified",
        currentRole: "Independent candidate",
        summary:
          "Qualified as an independent candidate with approved signatures.",
        imageUrl: null,
        sourceUrls: TENNESSEE_SOURCES,
      },
      {
        id: "tn-david-hatley",
        name: "David Hatley",
        party: "Independent",
        status: "qualified",
        currentRole: "Independent candidate",
        summary:
          "Qualified as an independent candidate with approved signatures.",
        imageUrl: null,
        sourceUrls: TENNESSEE_SOURCES,
      },
      {
        id: "tn-wendell-jackson",
        name: "Wendell Jackson",
        party: "Independent",
        status: "qualified",
        currentRole: "Independent candidate",
        summary:
          "Qualified as an independent candidate with approved signatures.",
        imageUrl: null,
        sourceUrls: TENNESSEE_SOURCES,
      },
      {
        id: "tn-charles-van-morgan",
        name: "Charles Van Morgan",
        party: "Independent",
        status: "qualified",
        currentRole: "Independent candidate",
        summary:
          "Qualified as an independent candidate with approved signatures.",
        imageUrl: null,
        sourceUrls: TENNESSEE_SOURCES,
      },
      {
        id: "tn-eddie-lee-murphy",
        name: "Eddie Lee Murphy",
        party: "Independent",
        status: "qualified",
        currentRole: "Independent candidate",
        summary:
          "Qualified as an independent candidate with approved signatures.",
        imageUrl: null,
        sourceUrls: TENNESSEE_SOURCES,
      },
      {
        id: "tn-lauren-pinkston",
        name: "Lauren Pinkston",
        party: "Independent",
        status: "qualified",
        currentRole: "Independent candidate",
        summary:
          "Qualified as an independent candidate with approved signatures.",
        imageUrl: null,
        sourceUrls: TENNESSEE_SOURCES,
      },
      {
        id: "tn-victor-scoggin",
        name: "Victor L. Scoggin",
        party: "Independent",
        status: "qualified",
        currentRole: "Independent candidate",
        summary:
          "Qualified as an independent candidate with approved signatures.",
        imageUrl: null,
        sourceUrls: TENNESSEE_SOURCES,
      },
      {
        id: "tn-dave-seeman",
        name: "Dave Seeman",
        party: "Independent",
        status: "qualified",
        currentRole: "Independent candidate",
        summary:
          "Qualified as an independent candidate with approved signatures.",
        imageUrl: null,
        sourceUrls: TENNESSEE_SOURCES,
      },
      {
        id: "tn-karl-knox-smithson",
        name: "Karl Knox Smithson",
        party: "Independent",
        status: "qualified",
        currentRole: "Independent candidate",
        summary:
          "Qualified as an independent candidate with approved signatures.",
        imageUrl: null,
        sourceUrls: TENNESSEE_SOURCES,
      },
      {
        id: "tn-l-webb-taylor",
        name: "L. Webb Taylor",
        party: "Independent",
        status: "qualified",
        currentRole: "Independent candidate",
        summary:
          "Qualified as an independent candidate with approved signatures.",
        imageUrl: null,
        sourceUrls: TENNESSEE_SOURCES,
      },
      {
        id: "tn-robert-vick",
        name: "Robert C. Vick",
        party: "Independent",
        status: "qualified",
        currentRole: "Independent candidate",
        summary:
          "Qualified as an independent candidate with approved signatures.",
        imageUrl: null,
        sourceUrls: TENNESSEE_SOURCES,
      },
    ],
    sourceUrls: TENNESSEE_SOURCES,
    updatedAt: UPDATED_AT,
  },
  {
    stateSlug: "texas",
    stateName: "Texas",
    postalAbbreviation: "TX",
    region: "South",
    status: "live",
    office: "Governor",
    electionDate: GENERAL_ELECTION_DATE,
    primaryDate: "2026-03-03",
    summary:
      "Texas held its governor primaries on March 3, 2026. Incumbent Republican Greg Abbott won renomination and Democrat Gina Hinojosa won her primary, setting up the November general election matchup.",
    candidates: [
      {
        id: "tx-greg-abbott",
        name: "Greg Abbott",
        party: "Republican",
        status: "qualified",
        currentRole: "Governor of Texas",
        summary:
          "The incumbent governor won the Republican primary and is seeking a fourth term.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/3/32/2024-GovernorAbbott-Portrait.jpg",
        imageAttribution:
          "Office of the Governor of Texas, via Wikimedia Commons",
        sourceUrls: TEXAS_SOURCES,
        isIncumbent: true,
      },
      {
        id: "tx-gina-hinojosa",
        name: "Gina Hinojosa",
        party: "Democratic",
        status: "qualified",
        currentRole: "Texas state representative",
        summary:
          "Won the Democratic primary and will challenge Abbott in the November general election.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/1/13/Gina_Hinojosa_at_LBJ_Library_Forum_%283x4_cropped%29.jpg",
        imageAttribution:
          "LBJ Library, via Wikimedia Commons",
        sourceUrls: TEXAS_SOURCES,
      },
    ],
    sourceUrls: TEXAS_SOURCES,
    updatedAt: UPDATED_AT,
  },
  {
    stateSlug: "virginia",
    stateName: "Virginia",
    postalAbbreviation: "VA",
    region: "South",
    status: "no-2026-governor-race",
    office: "Governor",
    electionDate: null,
    primaryDate: null,
    summary:
      "Virginia does not have a governor election in 2026. The commonwealth holds governor elections in odd-numbered years, with the next regular race expected in 2029 after the 2025 election cycle.",
    candidates: [],
    sourceUrls: NO_RACE_SOURCES.virginia,
    updatedAt: UPDATED_AT,
  },
  {
    stateSlug: "west-virginia",
    stateName: "West Virginia",
    postalAbbreviation: "WV",
    region: "South",
    status: "no-2026-governor-race",
    office: "Governor",
    electionDate: null,
    primaryDate: null,
    summary:
      "West Virginia does not have a governor election in 2026. The state last elected a governor in 2024, and the next regular race is expected in 2028.",
    candidates: [],
    sourceUrls: NO_RACE_SOURCES.westVirginia,
    updatedAt: UPDATED_AT,
  },
];
