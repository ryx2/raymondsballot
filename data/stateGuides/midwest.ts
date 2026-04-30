import { StateGuide } from "./types";

const UPDATED_AT = "2026-04-30";

const SOURCES = {
  illinoisCandidateList:
    "https://www.lakecountyil.gov/DocumentCenter/View/13059/Candidate-List",
  illinoisPrimaryResult:
    "https://www.axios.com/local/chicago/2026/03/18/bailey-wins-gop-primary-pritzker-rematch-illinois-governor",
  indiana2024: "https://ballotpedia.org/Indiana_gubernatorial_election,_2024",
  indiana2028: "https://ballotpedia.org/Indiana_gubernatorial_election,_2028",
  iowaCandidateList:
    "https://sos.iowa.gov/sites/default/files/2026-04/2026%20Primary%20-%20Candidate%20List%20Database%20-%20All%20Elections_0.pdf",
  iowaPublicRadio:
    "https://www.iowapublicradio.org/political-news/2026-03-10/iowa-governor-candidates-rob-sand-randy-feestra-2026-primary-ballot",
  kansasCandidateInfo:
    "https://sos.ks.gov/elections/candidate-information.html",
  kansasCandidateGuide:
    "https://www.kcur.org/politics-elections-and-government/2025-07-24/kansas-governor-race-2026-election-candidates",
  kansasDemocraticForum:
    "https://kansasreflector.com/2026/04/26/kansas-democrats-running-for-governor-clash-on-corecivic-party-establishment-in-forum/",
  kansasGopDebate:
    "https://kansasreflector.com/2026/01/30/six-kansas-gop-candidates-for-governor-toss-haymakers-in-first-debate-find-unity-on-key-issues/",
  michiganCandidateList:
    "https://mi-boe.entellitrak.com/etk-mi-boe-prod/page.request.do?page=page.miboePublicReport&electionType=PRI&electionYear=2026",
  michiganBridge:
    "https://civicmedia.us/news/2026/04/22/9-governor-hopefuls-to-make-michigan-ballot-if-their-signatures-are-valid",
  michiganDuggan:
    "https://www.nytimes.com/2024/12/04/us/politics/mike-duggan-michigan-governor.html",
  minnesotaFilingInfo:
    "https://www.sos.mn.gov/election-administration-campaigns/become-a-candidate/filing-for-governor-and-lieutenant-governor/",
  minnesotaKlobuchar:
    "https://www.axios.com/2026/01/29/klobuchar-minnesota-governor-walz",
  minnesotaDemuth:
    "https://www.axios.com/local/twin-cities/2025/11/02/lisa-demuth-minnesota-governor-republican-primary-tim-walz",
  minnesotaGopField:
    "https://www.axios.com/local/twin-cities/2026/02/03/minnesota-dfl-walz-campaign-account-party-spending-limits",
  missouriCalendar: "https://www.sos.mo.gov/elections/calendar/2026cal",
  missouri2024: "https://ballotpedia.org/Missouri_gubernatorial_election,_2024",
  missouri2028: "https://ballotpedia.org/Missouri_gubernatorial_election,_2028",
  nebraskaElectionInfo: "https://sos.nebraska.gov/elections",
  nebraskaCandidateList:
    "https://sos.nebraska.gov/sites/default/files/doc/elections/2026/Final_Statewide_Primary_Candidate_Filing_List_3.23.26.pdf",
  northDakota2024:
    "https://ballotpedia.org/North_Dakota_gubernatorial_election,_2024",
  northDakota2028:
    "https://ballotpedia.org/North_Dakota_gubernatorial_election,_2028",
  ohioCandidateList:
    "https://www.lakecountyohio.gov/boe/wp-content/uploads/sites/12/2026/03/2026-Candidate-Filings.pdf",
  ohioAp:
    "https://apnews.com/article/c1701e873697a133f11d95a3fefdeaf5",
  ohioCapitalJournal:
    "https://ohiocapitaljournal.com/2026/01/05/what-candidates-are-running-for-statewide-office-in-ohio-in-2026/",
  southDakotaCandidateList:
    "https://vip.sdsos.gov/candidatelist.aspx?eid=773",
  southDakotaDustyValidation:
    "https://sdsos.gov/about-the-office/assets/Press%20Releases/DustyValidationPressRelease.pdf",
  southDakotaGopCandidates:
    "https://www.sdgop.com/2026-republican-candidates/",
  wisconsinCandidateGuide:
    "https://www.wuwm.com/2026-wisconsin-governor-race-candidates",
  wisconsinEvers:
    "https://apnews.com/article/9936e2a1db5c7be26fd0183ab55c50f0",
  wisconsinBrennan:
    "https://apnews.com/article/1c9436edec41cff84abcafc536183034",
} as const;

export const MIDWEST_STATE_GUIDES: StateGuide[] = [
  {
    stateSlug: "illinois",
    stateName: "Illinois",
    postalAbbreviation: "IL",
    region: "Midwest",
    status: "live",
    office: "Governor",
    electionDate: "2026-11-03",
    primaryDate: "2026-03-17",
    summary:
      "Illinois has a 2026 governor race. The March 17 primary set up a general-election rematch between Democratic Gov. JB Pritzker and Republican Darren Bailey.",
    candidates: [
      {
        id: "jb-pritzker",
        name: "JB Pritzker",
        party: "Democratic",
        status: "qualified",
        currentRole: "Governor of Illinois",
        summary:
          "Pritzker is the Democratic incumbent seeking a third term. He advanced from the March primary with former deputy governor Christian Mitchell as his running mate.",
        imageUrl: null,
        sourceUrls: [SOURCES.illinoisCandidateList, SOURCES.illinoisPrimaryResult],
        isIncumbent: true,
      },
      {
        id: "darren-bailey",
        name: "Darren Bailey",
        party: "Republican",
        status: "qualified",
        currentRole: "Former Illinois state senator",
        summary:
          "Bailey won the Republican primary, defeating Ted Dabrowski, James Mendrick, and Rick Heidner. He was also the Republican nominee for governor in 2022.",
        imageUrl: null,
        sourceUrls: [SOURCES.illinoisPrimaryResult, SOURCES.illinoisCandidateList],
      },
    ],
    sourceUrls: [SOURCES.illinoisCandidateList, SOURCES.illinoisPrimaryResult],
    updatedAt: UPDATED_AT,
  },
  {
    stateSlug: "indiana",
    stateName: "Indiana",
    postalAbbreviation: "IN",
    region: "Midwest",
    status: "no-2026-governor-race",
    office: "Governor",
    electionDate: null,
    primaryDate: null,
    summary:
      "Indiana does not have a regularly scheduled governor election in 2026. The state elected a governor in 2024, and the next regular gubernatorial election is scheduled for 2028.",
    candidates: [],
    sourceUrls: [SOURCES.indiana2024, SOURCES.indiana2028],
    updatedAt: UPDATED_AT,
  },
  {
    stateSlug: "iowa",
    stateName: "Iowa",
    postalAbbreviation: "IA",
    region: "Midwest",
    status: "live",
    office: "Governor",
    electionDate: "2026-11-03",
    primaryDate: "2026-06-02",
    summary:
      "Iowa has an open 2026 governor race after Gov. Kim Reynolds declined to seek another term. The Secretary of State's final primary list includes five Republicans and one Democrat for governor.",
    candidates: [
      {
        id: "eddie-andrews",
        name: "Eddie Andrews",
        party: "Republican",
        status: "qualified",
        currentRole: "Iowa state representative",
        summary:
          "Andrews qualified for the Republican primary ballot in the open governor race and is listed on the final Iowa Secretary of State primary candidate list.",
        imageUrl: null,
        sourceUrls: [SOURCES.iowaCandidateList, SOURCES.iowaPublicRadio],
      },
      {
        id: "randy-feenstra",
        name: "Randy Feenstra",
        party: "Republican",
        status: "qualified",
        currentRole: "U.S. representative for Iowa's 4th District",
        summary:
          "Feenstra qualified for the Republican primary ballot after filing petitions for governor. He is one of five Republicans on Iowa's final primary list.",
        imageUrl: null,
        sourceUrls: [SOURCES.iowaCandidateList, SOURCES.iowaPublicRadio],
      },
      {
        id: "zach-lahn",
        name: "Zach Lahn",
        party: "Republican",
        status: "qualified",
        currentRole: "Businessman and farmer",
        summary:
          "Lahn qualified for the Republican primary ballot. Iowa Public Radio described his campaign as focused in part on health and water-quality issues.",
        imageUrl: null,
        sourceUrls: [SOURCES.iowaCandidateList, SOURCES.iowaPublicRadio],
      },
      {
        id: "brad-sherman",
        name: "Brad Sherman",
        party: "Republican",
        status: "qualified",
        currentRole: "Former Iowa state representative and pastor",
        summary:
          "Sherman qualified for the Republican primary ballot and is listed on the final Iowa Secretary of State candidate list for governor.",
        imageUrl: null,
        sourceUrls: [SOURCES.iowaCandidateList, SOURCES.iowaPublicRadio],
      },
      {
        id: "adam-steen",
        name: "Adam Steen",
        party: "Republican",
        status: "qualified",
        currentRole: "Former Iowa Department of Administrative Services director",
        summary:
          "Steen qualified for the Republican primary ballot after filing petitions with the Secretary of State. He is campaigning as a former business and state-agency leader.",
        imageUrl: null,
        sourceUrls: [SOURCES.iowaCandidateList, SOURCES.iowaPublicRadio],
      },
      {
        id: "rob-sand",
        name: "Rob Sand",
        party: "Democratic",
        status: "qualified",
        currentRole: "Iowa state auditor",
        summary:
          "Sand is the only Democratic candidate who qualified for Iowa's June primary ballot, giving him a clear path to the Democratic nomination.",
        imageUrl: null,
        sourceUrls: [SOURCES.iowaCandidateList, SOURCES.iowaPublicRadio],
      },
    ],
    sourceUrls: [SOURCES.iowaCandidateList, SOURCES.iowaPublicRadio],
    updatedAt: UPDATED_AT,
  },
  {
    stateSlug: "kansas",
    stateName: "Kansas",
    postalAbbreviation: "KS",
    region: "Midwest",
    status: "live",
    office: "Governor",
    electionDate: "2026-11-03",
    primaryDate: "2026-08-04",
    summary:
      "Kansas has an open 2026 governor race because Democratic Gov. Laura Kelly is term-limited. The filing deadline is June 1, so this guide tracks the best-known declared candidates reported before the ballot is finalized.",
    candidates: [
      {
        id: "ethan-corson",
        name: "Ethan Corson",
        party: "Democratic",
        status: "declared",
        currentRole: "Kansas state senator",
        summary:
          "Corson is seeking the Democratic nomination and has emphasized public schools, middle-class tax relief, and economic development.",
        imageUrl: null,
        sourceUrls: [
          SOURCES.kansasCandidateGuide,
          SOURCES.kansasDemocraticForum,
          SOURCES.kansasCandidateInfo,
        ],
      },
      {
        id: "cindy-holscher",
        name: "Cindy Holscher",
        party: "Democratic",
        status: "declared",
        currentRole: "Kansas state senator",
        summary:
          "Holscher is running in the Democratic primary after serving in both chambers of the Kansas Legislature, with a campaign focused on affordability and public services.",
        imageUrl: null,
        sourceUrls: [
          SOURCES.kansasCandidateGuide,
          SOURCES.kansasDemocraticForum,
          SOURCES.kansasCandidateInfo,
        ],
      },
      {
        id: "marty-tuley",
        name: "Marty Tuley",
        party: "Democratic",
        status: "declared",
        currentRole: "Teacher and personal trainer",
        summary:
          "Tuley is a Lawrence Democrat in the governor field. KCUR and Kansas Reflector identify him as part of the Democratic primary lineup.",
        imageUrl: null,
        sourceUrls: [
          SOURCES.kansasCandidateGuide,
          SOURCES.kansasDemocraticForum,
          SOURCES.kansasCandidateInfo,
        ],
      },
      {
        id: "jeff-colyer",
        name: "Jeff Colyer",
        party: "Republican",
        status: "declared",
        currentRole: "Former governor of Kansas",
        summary:
          "Colyer served as governor from 2018 to 2019 and is back in the Republican primary for the open 2026 race.",
        imageUrl: null,
        sourceUrls: [
          SOURCES.kansasCandidateGuide,
          SOURCES.kansasGopDebate,
          SOURCES.kansasCandidateInfo,
        ],
      },
      {
        id: "joy-eakins",
        name: "Joy Eakins",
        party: "Republican",
        status: "declared",
        currentRole: "Data company president and former Wichita school board member",
        summary:
          "Eakins is running in the Republican primary after serving on the Wichita school board and leading a data consulting firm.",
        imageUrl: null,
        sourceUrls: [
          SOURCES.kansasCandidateGuide,
          SOURCES.kansasGopDebate,
          SOURCES.kansasCandidateInfo,
        ],
      },
      {
        id: "ty-masterson",
        name: "Ty Masterson",
        party: "Republican",
        status: "declared",
        currentRole: "Kansas Senate president",
        summary:
          "Masterson is a Republican candidate and the top leader of the Kansas Senate, where he has been a central figure in conservative legislative priorities.",
        imageUrl: null,
        sourceUrls: [
          SOURCES.kansasCandidateGuide,
          SOURCES.kansasGopDebate,
          SOURCES.kansasCandidateInfo,
        ],
      },
      {
        id: "charlotte-ohara",
        name: "Charlotte O'Hara",
        party: "Republican",
        status: "declared",
        currentRole: "Former Johnson County commissioner",
        summary:
          "O'Hara is seeking the Republican nomination after serving on the Johnson County Commission and previously in the Kansas House.",
        imageUrl: null,
        sourceUrls: [
          SOURCES.kansasCandidateGuide,
          SOURCES.kansasGopDebate,
          SOURCES.kansasCandidateInfo,
        ],
      },
      {
        id: "stacy-rogers",
        name: "Stacy Rogers",
        party: "Republican",
        status: "declared",
        currentRole: "Business owner",
        summary:
          "Rogers is a Wichita-area Republican candidate who owns multiple businesses and is campaigning on government efficiency.",
        imageUrl: null,
        sourceUrls: [SOURCES.kansasCandidateGuide, SOURCES.kansasCandidateInfo],
      },
      {
        id: "philip-sarnecki",
        name: "Philip Sarnecki",
        party: "Republican",
        status: "declared",
        currentRole: "Financial services executive",
        summary:
          "Sarnecki is a Republican candidate and business executive whose campaign has emphasized taxes, regulation, and small business.",
        imageUrl: null,
        sourceUrls: [SOURCES.kansasCandidateGuide, SOURCES.kansasCandidateInfo],
      },
      {
        id: "vicki-schmidt",
        name: "Vicki Schmidt",
        party: "Republican",
        status: "declared",
        currentRole: "Kansas insurance commissioner",
        summary:
          "Schmidt is a statewide Republican officeholder and former state senator running for governor in the open-seat primary.",
        imageUrl: null,
        sourceUrls: [
          SOURCES.kansasCandidateGuide,
          SOURCES.kansasGopDebate,
          SOURCES.kansasCandidateInfo,
        ],
      },
      {
        id: "scott-schwab",
        name: "Scott Schwab",
        party: "Republican",
        status: "declared",
        currentRole: "Kansas secretary of state",
        summary:
          "Schwab is Kansas's secretary of state and a former state representative running in the Republican gubernatorial primary.",
        imageUrl: null,
        sourceUrls: [
          SOURCES.kansasCandidateGuide,
          SOURCES.kansasGopDebate,
          SOURCES.kansasCandidateInfo,
        ],
      },
    ],
    sourceUrls: [
      SOURCES.kansasCandidateInfo,
      SOURCES.kansasCandidateGuide,
      SOURCES.kansasDemocraticForum,
      SOURCES.kansasGopDebate,
    ],
    updatedAt: UPDATED_AT,
  },
  {
    stateSlug: "michigan",
    stateName: "Michigan",
    postalAbbreviation: "MI",
    region: "Midwest",
    status: "live",
    office: "Governor",
    electionDate: "2026-11-03",
    primaryDate: "2026-08-04",
    summary:
      "Michigan has an open 2026 governor race because Democratic Gov. Gretchen Whitmer is term-limited. The state candidate listing shows filed Democratic and Republican primary candidates, while former Detroit Mayor Mike Duggan is running as a major independent.",
    candidates: [
      {
        id: "jocelyn-benson",
        name: "Jocelyn Benson",
        party: "Democratic",
        status: "filed",
        currentRole: "Michigan secretary of state",
        summary:
          "Benson filed petitions for the Democratic primary and is one of the best-known Democrats seeking to succeed Gov. Gretchen Whitmer.",
        imageUrl: null,
        sourceUrls: [SOURCES.michiganCandidateList, SOURCES.michiganBridge],
      },
      {
        id: "chris-swanson",
        name: "Chris Swanson",
        party: "Democratic",
        status: "filed",
        currentRole: "Genesee County sheriff",
        summary:
          "Swanson filed petitions for the Democratic primary and is campaigning from his law-enforcement role in Genesee County.",
        imageUrl: null,
        sourceUrls: [SOURCES.michiganCandidateList, SOURCES.michiganBridge],
      },
      {
        id: "kim-thomas",
        name: "Kim Thomas",
        party: "Democratic",
        status: "filed",
        currentRole: "Auditor",
        summary:
          "Thomas is listed by the Michigan Department of State as a Democratic candidate who filed petitions for the 2026 governor primary.",
        imageUrl: null,
        sourceUrls: [SOURCES.michiganCandidateList, SOURCES.michiganBridge],
      },
      {
        id: "ralph-rebandt",
        name: "Ralph Rebandt",
        party: "Republican",
        status: "filed",
        currentRole: "Pastor and former gubernatorial candidate",
        summary:
          "Rebandt filed petitions for the Republican primary after previously running for Michigan governor in 2022.",
        imageUrl: null,
        sourceUrls: [SOURCES.michiganCandidateList, SOURCES.michiganBridge],
      },
      {
        id: "mike-cox",
        name: "Mike Cox",
        party: "Republican",
        status: "filed",
        currentRole: "Former Michigan attorney general",
        summary:
          "Cox filed petitions for the Republican primary. He previously served two terms as Michigan attorney general.",
        imageUrl: null,
        sourceUrls: [SOURCES.michiganCandidateList, SOURCES.michiganBridge],
      },
      {
        id: "john-james",
        name: "John James",
        party: "Republican",
        status: "filed",
        currentRole: "U.S. representative for Michigan's 10th District",
        summary:
          "James filed petitions for the Republican primary and entered the governor race after serving in Congress and twice running for U.S. Senate.",
        imageUrl: null,
        sourceUrls: [SOURCES.michiganCandidateList, SOURCES.michiganBridge],
      },
      {
        id: "aric-nesbitt",
        name: "Aric Nesbitt",
        party: "Republican",
        status: "filed",
        currentRole: "Michigan Senate minority leader",
        summary:
          "Nesbitt filed petitions for the Republican primary and is running as a top state legislative Republican.",
        imageUrl: null,
        sourceUrls: [SOURCES.michiganCandidateList, SOURCES.michiganBridge],
      },
      {
        id: "perry-johnson",
        name: "Perry Johnson",
        party: "Republican",
        status: "filed",
        currentRole: "Businessman and former presidential candidate",
        summary:
          "Johnson filed petitions for the Republican primary after prior campaigns for Michigan governor and president.",
        imageUrl: null,
        sourceUrls: [SOURCES.michiganCandidateList, SOURCES.michiganBridge],
      },
      {
        id: "mike-duggan",
        name: "Mike Duggan",
        party: "Independent",
        status: "declared",
        currentRole: "Former mayor of Detroit",
        summary:
          "Duggan is running for governor as an independent after serving as Detroit mayor. He is not on the partisan primary list because independent candidates do not run in the August partisan primary.",
        imageUrl: null,
        sourceUrls: [SOURCES.michiganDuggan, SOURCES.michiganCandidateList],
      },
    ],
    sourceUrls: [
      SOURCES.michiganCandidateList,
      SOURCES.michiganBridge,
      SOURCES.michiganDuggan,
    ],
    updatedAt: UPDATED_AT,
  },
  {
    stateSlug: "minnesota",
    stateName: "Minnesota",
    postalAbbreviation: "MN",
    region: "Midwest",
    status: "live",
    office: "Governor",
    electionDate: "2026-11-03",
    primaryDate: "2026-08-11",
    summary:
      "Minnesota has a 2026 governor race. Official candidate filing runs May 19 through June 2, so this guide tracks leading and well-known declared candidates reported before filings open.",
    candidates: [
      {
        id: "amy-klobuchar",
        name: "Amy Klobuchar",
        party: "Democratic",
        status: "declared",
        currentRole: "U.S. senator from Minnesota",
        summary:
          "Klobuchar entered the race after Gov. Tim Walz ended his reelection bid, immediately becoming the most prominent Democratic candidate.",
        imageUrl: null,
        sourceUrls: [SOURCES.minnesotaKlobuchar, SOURCES.minnesotaFilingInfo],
      },
      {
        id: "lisa-demuth",
        name: "Lisa Demuth",
        party: "Republican",
        status: "declared",
        currentRole: "Speaker of the Minnesota House",
        summary:
          "Demuth is the highest-ranking Republican state lawmaker in the race and launched her governor bid while serving as House speaker.",
        imageUrl: null,
        sourceUrls: [SOURCES.minnesotaDemuth, SOURCES.minnesotaGopField],
      },
      {
        id: "kendall-qualls",
        name: "Kendall Qualls",
        party: "Republican",
        status: "declared",
        currentRole: "Healthcare technology executive",
        summary:
          "Qualls, a 2022 Republican candidate for governor, is again seeking the GOP nomination and is one of the better-funded Republicans in the field.",
        imageUrl: null,
        sourceUrls: [SOURCES.minnesotaGopField, SOURCES.minnesotaFilingInfo],
      },
      {
        id: "kristin-robbins",
        name: "Kristin Robbins",
        party: "Republican",
        status: "declared",
        currentRole: "Minnesota state representative",
        summary:
          "Robbins is a Republican state representative running for governor and was named by Axios among the stronger early GOP fundraisers.",
        imageUrl: null,
        sourceUrls: [SOURCES.minnesotaGopField, SOURCES.minnesotaFilingInfo],
      },
      {
        id: "mike-lindell",
        name: "Mike Lindell",
        party: "Republican",
        status: "declared",
        currentRole: "MyPillow CEO",
        summary:
          "Lindell is a well-known Republican candidate in the Minnesota governor field and appears in current reporting on the GOP primary lineup.",
        imageUrl: null,
        sourceUrls: [SOURCES.minnesotaGopField, SOURCES.minnesotaFilingInfo],
      },
    ],
    sourceUrls: [
      SOURCES.minnesotaFilingInfo,
      SOURCES.minnesotaKlobuchar,
      SOURCES.minnesotaDemuth,
      SOURCES.minnesotaGopField,
    ],
    updatedAt: UPDATED_AT,
  },
  {
    stateSlug: "missouri",
    stateName: "Missouri",
    postalAbbreviation: "MO",
    region: "Midwest",
    status: "no-2026-governor-race",
    office: "Governor",
    electionDate: null,
    primaryDate: null,
    summary:
      "Missouri does not have a regularly scheduled governor election in 2026. The state elected a governor in 2024, and the next regular gubernatorial election is scheduled for 2028.",
    candidates: [],
    sourceUrls: [SOURCES.missouriCalendar, SOURCES.missouri2024, SOURCES.missouri2028],
    updatedAt: UPDATED_AT,
  },
  {
    stateSlug: "nebraska",
    stateName: "Nebraska",
    postalAbbreviation: "NE",
    region: "Midwest",
    status: "live",
    office: "Governor",
    electionDate: "2026-11-03",
    primaryDate: "2026-05-12",
    summary:
      "Nebraska has a 2026 governor race. The Secretary of State's final statewide primary list includes Republican incumbent Jim Pillen, multiple Republican challengers, two Democrats, and two Legal Marijuana NOW candidates.",
    candidates: [
      {
        id: "sheila-korth-focken",
        name: "Sheila J. Korth-Focken",
        party: "Republican",
        status: "qualified",
        currentRole: "Republican primary candidate",
        summary:
          "Korth-Focken is listed on Nebraska's final statewide primary candidate list as a Republican candidate for governor.",
        imageUrl: null,
        sourceUrls: [SOURCES.nebraskaCandidateList],
      },
      {
        id: "gary-rogge",
        name: "Gary L. Rogge",
        party: "Republican",
        status: "qualified",
        currentRole: "Republican primary candidate",
        summary:
          "Rogge is listed on Nebraska's final statewide primary candidate list as a Republican candidate for governor.",
        imageUrl: null,
        sourceUrls: [SOURCES.nebraskaCandidateList],
      },
      {
        id: "jim-pillen",
        name: "Jim Pillen",
        party: "Republican",
        status: "qualified",
        currentRole: "Governor of Nebraska",
        summary:
          "Pillen is Nebraska's Republican incumbent governor and is listed on the final statewide primary candidate list.",
        imageUrl: null,
        sourceUrls: [SOURCES.nebraskaCandidateList, SOURCES.nebraskaElectionInfo],
        isIncumbent: true,
      },
      {
        id: "jacy-todd",
        name: "Jacy Todd",
        party: "Republican",
        status: "qualified",
        currentRole: "Republican primary candidate",
        summary:
          "Todd is listed on Nebraska's final statewide primary candidate list as a Republican candidate for governor.",
        imageUrl: null,
        sourceUrls: [SOURCES.nebraskaCandidateList],
      },
      {
        id: "sal-holguin",
        name: "Sal Holguin",
        party: "Republican",
        status: "qualified",
        currentRole: "Republican primary candidate",
        summary:
          "Holguin is listed on Nebraska's final statewide primary candidate list as a Republican candidate for governor.",
        imageUrl: null,
        sourceUrls: [SOURCES.nebraskaCandidateList],
      },
      {
        id: "john-walz",
        name: "John Walz",
        party: "Republican",
        status: "qualified",
        currentRole: "Republican primary candidate",
        summary:
          "Walz is listed on Nebraska's final statewide primary candidate list as a Republican candidate for governor.",
        imageUrl: null,
        sourceUrls: [SOURCES.nebraskaCandidateList],
      },
      {
        id: "lynne-walz",
        name: "Lynne Walz",
        party: "Democratic",
        status: "qualified",
        currentRole: "Former Nebraska state senator",
        summary:
          "Walz, a former state senator from Fremont, is one of two Democrats listed for governor on Nebraska's final statewide primary list.",
        imageUrl: null,
        sourceUrls: [SOURCES.nebraskaCandidateList, SOURCES.nebraskaElectionInfo],
      },
      {
        id: "larry-marvin",
        name: "Larry Marvin",
        party: "Democratic",
        status: "qualified",
        currentRole: "Democratic primary candidate",
        summary:
          "Marvin is listed on Nebraska's final statewide primary candidate list as a Democratic candidate for governor.",
        imageUrl: null,
        sourceUrls: [SOURCES.nebraskaCandidateList],
      },
      {
        id: "rick-beard",
        name: "Rick Beard",
        party: "Other",
        status: "qualified",
        currentRole: "Legal Marijuana NOW primary candidate",
        summary:
          "Beard is listed on Nebraska's final statewide primary candidate list as a Legal Marijuana NOW candidate for governor.",
        imageUrl: null,
        sourceUrls: [SOURCES.nebraskaCandidateList],
      },
      {
        id: "james-charvat",
        name: "James J. Charvat III",
        party: "Other",
        status: "qualified",
        currentRole: "Legal Marijuana NOW primary candidate",
        summary:
          "Charvat is listed on Nebraska's final statewide primary candidate list as a Legal Marijuana NOW candidate for governor.",
        imageUrl: null,
        sourceUrls: [SOURCES.nebraskaCandidateList],
      },
    ],
    sourceUrls: [SOURCES.nebraskaElectionInfo, SOURCES.nebraskaCandidateList],
    updatedAt: UPDATED_AT,
  },
  {
    stateSlug: "north-dakota",
    stateName: "North Dakota",
    postalAbbreviation: "ND",
    region: "Midwest",
    status: "no-2026-governor-race",
    office: "Governor",
    electionDate: null,
    primaryDate: null,
    summary:
      "North Dakota does not have a regularly scheduled governor election in 2026. The state elected a governor in 2024, and the next regular gubernatorial election is scheduled for 2028.",
    candidates: [],
    sourceUrls: [SOURCES.northDakota2024, SOURCES.northDakota2028],
    updatedAt: UPDATED_AT,
  },
  {
    stateSlug: "ohio",
    stateName: "Ohio",
    postalAbbreviation: "OH",
    region: "Midwest",
    status: "live",
    office: "Governor",
    electionDate: "2026-11-03",
    primaryDate: "2026-05-05",
    summary:
      "Ohio has an open 2026 governor race because Gov. Mike DeWine is term-limited. The May 5 primary features Democrat Amy Acton, Republicans Vivek Ramaswamy and Casey Putsch, and Libertarian Don Kissick on certified candidate lists.",
    candidates: [
      {
        id: "amy-acton",
        name: "Amy Acton",
        party: "Democratic",
        status: "qualified",
        currentRole: "Physician and former Ohio health director",
        summary:
          "Acton is the lone Democratic gubernatorial candidate certified for the May primary and is running with David Pepper for lieutenant governor.",
        imageUrl: null,
        sourceUrls: [SOURCES.ohioCandidateList, SOURCES.ohioCapitalJournal],
      },
      {
        id: "vivek-ramaswamy",
        name: "Vivek Ramaswamy",
        party: "Republican",
        status: "qualified",
        currentRole: "Entrepreneur and former presidential candidate",
        summary:
          "Ramaswamy is the best-known Republican in the May primary and is running with Ohio Senate President Rob McColley.",
        imageUrl: null,
        sourceUrls: [SOURCES.ohioCandidateList, SOURCES.ohioAp],
      },
      {
        id: "casey-putsch",
        name: "Casey Putsch",
        party: "Republican",
        status: "qualified",
        currentRole: "Republican primary candidate",
        summary:
          "Putsch is certified for the Republican primary and is challenging Ramaswamy for the GOP nomination.",
        imageUrl: null,
        sourceUrls: [SOURCES.ohioCandidateList, SOURCES.ohioCapitalJournal],
      },
      {
        id: "don-kissick",
        name: "Don Kissick",
        party: "Libertarian",
        status: "qualified",
        currentRole: "Libertarian candidate",
        summary:
          "Kissick is listed as a Libertarian candidate for governor on certified Ohio primary candidate lists.",
        imageUrl: null,
        sourceUrls: [SOURCES.ohioCandidateList],
      },
    ],
    sourceUrls: [
      SOURCES.ohioCandidateList,
      SOURCES.ohioAp,
      SOURCES.ohioCapitalJournal,
    ],
    updatedAt: UPDATED_AT,
  },
  {
    stateSlug: "south-dakota",
    stateName: "South Dakota",
    postalAbbreviation: "SD",
    region: "Midwest",
    status: "live",
    office: "Governor",
    electionDate: "2026-11-03",
    primaryDate: "2026-06-02",
    summary:
      "South Dakota has a 2026 governor race. The Secretary of State's primary list includes Democrat Dan Ahlers and a Republican primary with incumbent Gov. Larry Rhoden, Jon Hansen, Dusty Johnson, and Toby Doeden.",
    candidates: [
      {
        id: "dan-ahlers",
        name: "Dan Ahlers",
        party: "Democratic",
        status: "qualified",
        currentRole: "Former South Dakota legislator",
        summary:
          "Ahlers is listed by the South Dakota Secretary of State as the Democratic candidate in the June governor primary.",
        imageUrl: null,
        sourceUrls: [SOURCES.southDakotaCandidateList],
      },
      {
        id: "larry-rhoden",
        name: "Larry Rhoden",
        party: "Republican",
        status: "qualified",
        currentRole: "Governor of South Dakota",
        summary:
          "Rhoden is the Republican incumbent governor and is listed first in ballot order among Republican gubernatorial candidates for the June primary.",
        imageUrl: null,
        sourceUrls: [
          SOURCES.southDakotaCandidateList,
          SOURCES.southDakotaGopCandidates,
        ],
        isIncumbent: true,
      },
      {
        id: "jon-hansen",
        name: "Jon Hansen",
        party: "Republican",
        status: "qualified",
        currentRole: "South Dakota House speaker",
        summary:
          "Hansen is listed by the South Dakota Secretary of State as a Republican candidate for governor in the June primary.",
        imageUrl: null,
        sourceUrls: [SOURCES.southDakotaCandidateList],
      },
      {
        id: "dusty-johnson",
        name: "Dusty Johnson",
        party: "Republican",
        status: "qualified",
        currentRole: "U.S. representative from South Dakota",
        summary:
          "Johnson is South Dakota's at-large member of Congress and is listed as a Republican candidate for governor in the June primary.",
        imageUrl: null,
        sourceUrls: [
          SOURCES.southDakotaCandidateList,
          SOURCES.southDakotaDustyValidation,
          SOURCES.southDakotaGopCandidates,
        ],
      },
      {
        id: "toby-doeden",
        name: "Toby Doeden",
        party: "Republican",
        status: "qualified",
        currentRole: "Businessman",
        summary:
          "Doeden is listed by the South Dakota Secretary of State as a Republican candidate for governor in the June primary.",
        imageUrl: null,
        sourceUrls: [SOURCES.southDakotaCandidateList],
      },
    ],
    sourceUrls: [
      SOURCES.southDakotaCandidateList,
      SOURCES.southDakotaDustyValidation,
      SOURCES.southDakotaGopCandidates,
    ],
    updatedAt: UPDATED_AT,
  },
  {
    stateSlug: "wisconsin",
    stateName: "Wisconsin",
    postalAbbreviation: "WI",
    region: "Midwest",
    status: "live",
    office: "Governor",
    electionDate: "2026-11-03",
    primaryDate: "2026-08-11",
    summary:
      "Wisconsin has an open 2026 governor race after Democratic Gov. Tony Evers announced he would not seek a third term. Candidate filing is not final yet, so this guide tracks the major declared candidates in current election reporting.",
    candidates: [
      {
        id: "tom-tiffany",
        name: "Tom Tiffany",
        party: "Republican",
        status: "declared",
        currentRole: "U.S. representative for Wisconsin's 7th District",
        summary:
          "Tiffany is the most prominent Republican currently listed in WUWM's 2026 governor candidate guide and represents northern Wisconsin in Congress.",
        imageUrl: null,
        sourceUrls: [SOURCES.wisconsinCandidateGuide],
      },
      {
        id: "david-crowley",
        name: "David Crowley",
        party: "Democratic",
        status: "declared",
        currentRole: "Milwaukee County executive",
        summary:
          "Crowley is running for the Democratic nomination after serving as Milwaukee County executive and previously in the Wisconsin Assembly.",
        imageUrl: null,
        sourceUrls: [SOURCES.wisconsinCandidateGuide],
      },
      {
        id: "sara-rodriguez",
        name: "Sara Rodriguez",
        party: "Democratic",
        status: "declared",
        currentRole: "Lieutenant governor of Wisconsin",
        summary:
          "Rodriguez is Wisconsin's lieutenant governor and a former state representative seeking the Democratic nomination for governor.",
        imageUrl: null,
        sourceUrls: [SOURCES.wisconsinCandidateGuide],
      },
      {
        id: "missy-hughes",
        name: "Missy Hughes",
        party: "Democratic",
        status: "declared",
        currentRole: "Former Wisconsin Economic Development Corporation CEO",
        summary:
          "Hughes stepped down from leading the Wisconsin Economic Development Corporation to run for governor.",
        imageUrl: null,
        sourceUrls: [SOURCES.wisconsinCandidateGuide],
      },
      {
        id: "francesca-hong",
        name: "Francesca Hong",
        party: "Democratic",
        status: "declared",
        currentRole: "Wisconsin state representative",
        summary:
          "Hong is a Madison-area state representative and former chef running on working-class economic priorities.",
        imageUrl: null,
        sourceUrls: [SOURCES.wisconsinCandidateGuide],
      },
      {
        id: "kelda-roys",
        name: "Kelda Roys",
        party: "Democratic",
        status: "declared",
        currentRole: "Wisconsin state senator",
        summary:
          "Roys is a Madison-area state senator and attorney who previously served in the Wisconsin Assembly.",
        imageUrl: null,
        sourceUrls: [SOURCES.wisconsinCandidateGuide],
      },
      {
        id: "mandela-barnes",
        name: "Mandela Barnes",
        party: "Democratic",
        status: "declared",
        currentRole: "Former Wisconsin lieutenant governor",
        summary:
          "Barnes previously served as lieutenant governor and was the Democratic nominee for U.S. Senate in 2022.",
        imageUrl: null,
        sourceUrls: [SOURCES.wisconsinCandidateGuide],
      },
      {
        id: "joel-brennan",
        name: "Joel Brennan",
        party: "Democratic",
        status: "declared",
        currentRole: "Former Wisconsin Department of Administration secretary",
        summary:
          "Brennan served in Gov. Tony Evers' administration and later led the Greater Milwaukee Committee before entering the race.",
        imageUrl: null,
        sourceUrls: [SOURCES.wisconsinCandidateGuide, SOURCES.wisconsinBrennan],
      },
    ],
    sourceUrls: [
      SOURCES.wisconsinCandidateGuide,
      SOURCES.wisconsinEvers,
      SOURCES.wisconsinBrennan,
    ],
    updatedAt: UPDATED_AT,
  },
];
