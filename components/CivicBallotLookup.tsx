"use client";

import { FormEvent, useState } from "react";

interface CivicCandidate {
  name?: string;
  party?: string;
  candidateUrl?: string;
  photoUrl?: string;
  email?: string;
  orderOnBallot?: number;
}

interface CivicContest {
  type?: string;
  office?: string;
  ballotTitle?: string;
  district?: {
    name?: string;
    scope?: string;
    id?: string;
  };
  numberVotingFor?: number;
  candidates?: CivicCandidate[];
  referendumTitle?: string;
  referendumSubtitle?: string;
  referendumUrl?: string;
  referendumBrief?: string;
  referendumText?: string;
  referendumBallotResponses?: string[];
}

interface CivicElection {
  id?: string;
  name?: string;
  electionDay?: string;
}

interface CivicResponse {
  election?: CivicElection;
  otherElections?: CivicElection[];
  normalizedInput?: {
    line1?: string;
    city?: string;
    state?: string;
    zip?: string;
  };
  contests?: CivicContest[];
  pollingLocations?: unknown[];
  earlyVoteSites?: unknown[];
  dropOffLocations?: unknown[];
  error?: string;
}

interface Props {
  countyName: string;
  stateName: string;
  statePostalAbbreviation: string;
}

export default function CivicBallotLookup({
  countyName,
  stateName,
  statePostalAbbreviation,
}: Props) {
  const [address, setAddress] = useState("");
  const [electionId, setElectionId] = useState("");
  const [officialOnly, setOfficialOnly] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<CivicResponse | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await fetch("/api/civic/voter-info", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          address,
          electionId: electionId.trim() || undefined,
          officialOnly,
        }),
      });
      const payload = (await response.json()) as CivicResponse;
      if (!response.ok) {
        setError(payload.error ?? "Google Civic lookup failed.");
        return;
      }
      setData(payload);
    } catch {
      setError("Could not reach the Civic lookup endpoint.");
    } finally {
      setIsLoading(false);
    }
  }

  const contests = data?.contests ?? [];
  const otherElections = data?.otherElections ?? [];

  return (
    <section className="border-t-2 border-ink pt-5">
      <div className="mb-5">
        <div className="eyebrow mb-2">Exact ballot lookup</div>
        <h2 className="font-display text-3xl font-black tracking-tight">
          Pull races for an address in {countyName}.
        </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid gap-3 border border-rule-soft bg-paper p-4 md:grid-cols-[1fr_auto]"
      >
        <label className="block">
          <span className="sr-only">Residential address</span>
          <input
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            placeholder={`Street address, city, ${statePostalAbbreviation}`}
            className="w-full border-2 border-ink bg-paper px-3 py-2 text-sm outline-none placeholder:text-ink-faint focus:bg-paper-deep"
          />
        </label>
        <button
          type="submit"
          disabled={isLoading}
          className="border border-ink bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-paper hover:text-ink disabled:cursor-wait disabled:opacity-60"
        >
          {isLoading ? "Looking up..." : "Lookup ballot"}
        </button>

        <div className="flex flex-col gap-3 md:col-span-2 md:flex-row md:items-center">
          <label className="flex-1">
            <span className="sr-only">Election ID</span>
            <input
              value={electionId}
              onChange={(event) => setElectionId(event.target.value)}
              placeholder="Election ID (optional)"
              className="w-full border border-rule-soft bg-paper px-3 py-2 font-data text-xs outline-none placeholder:text-ink-faint focus:border-ink"
            />
          </label>
          <label className="flex items-center gap-2 text-xs text-ink-muted">
            <input
              type="checkbox"
              checked={officialOnly}
              onChange={(event) => setOfficialOnly(event.target.checked)}
            />
            Official sources only
          </label>
        </div>
      </form>

      <p className="mt-3 text-xs leading-relaxed text-ink-faint">
        Google Civic is address-based. A county can contain many districts, so a
        street address is needed for the complete ballot. The address is sent to
        Google Civic through this server and is not stored by this app.
      </p>

      {error && (
        <div className="mt-4 border-l-4 border-accent pl-4 text-sm text-accent">
          {error}
        </div>
      )}

      {data && (
        <div className="mt-6 space-y-6">
          <div className="grid gap-4 border-y-2 border-ink py-4 md:grid-cols-4">
            <Metric label="Election" value={data.election?.name ?? "Unknown"} />
            <Metric
              label="Election day"
              value={data.election?.electionDay ?? "Unknown"}
            />
            <Metric label="Contests" value={contests.length.toString()} />
            <Metric
              label="Locations"
              value={(
                (data.pollingLocations?.length ?? 0) +
                (data.earlyVoteSites?.length ?? 0) +
                (data.dropOffLocations?.length ?? 0)
              ).toString()}
            />
          </div>

          {otherElections.length > 0 && (
            <div className="border border-rule-soft bg-paper p-4">
              <div className="eyebrow mb-2">Other elections returned</div>
              <div className="space-y-2">
                {otherElections.map((election) => (
                  <button
                    key={election.id}
                    type="button"
                    onClick={() => setElectionId(election.id ?? "")}
                    className="block text-left text-sm font-medium text-accent hover:underline"
                  >
                    {election.name}{" "}
                    <span className="font-data text-xs text-ink-muted">
                      {election.electionDay} / ID {election.id}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {contests.length > 0 ? (
            <div className="space-y-5">
              {contests.map((contest, index) => (
                <ContestCard
                  key={`${contest.office ?? contest.referendumTitle ?? index}-${index}`}
                  contest={contest}
                />
              ))}
            </div>
          ) : (
            <div className="border-l-4 border-rule-soft pl-4 text-sm text-ink-muted">
              No contests were returned for this address/election.
            </div>
          )}
        </div>
      )}

      <div className="mt-3 text-xs text-ink-faint">
        Civic source:{" "}
        <a
          href="https://developers.google.com/civic-information/docs/v2/elections/voterInfoQuery"
          className="text-accent hover:underline"
        >
          Google Civic Information API
        </a>{" "}
        / {stateName}
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="eyebrow mb-1 text-[10px]">{label}</div>
      <div className="font-display text-xl font-black leading-tight tracking-tight">
        {value}
      </div>
    </div>
  );
}

function ContestCard({ contest }: { contest: CivicContest }) {
  const title =
    contest.office ??
    contest.referendumTitle ??
    contest.ballotTitle ??
    "Ballot contest";
  const candidates = contest.candidates ?? [];

  return (
    <article className="border-t-2 border-ink pt-4">
      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="font-display text-2xl font-black leading-tight tracking-tight">
            {title}
          </h3>
          {(contest.district?.name || contest.type) && (
            <div className="mt-1 font-data text-xs uppercase tracking-wider text-ink-faint">
              {contest.type}
              {contest.district?.name ? ` / ${contest.district.name}` : ""}
            </div>
          )}
        </div>
        {contest.numberVotingFor && (
          <div className="font-data text-xs text-ink-muted">
            Vote for {contest.numberVotingFor}
          </div>
        )}
      </div>

      {candidates.length > 0 && (
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {candidates.map((candidate, index) => (
            <div
              key={`${candidate.name ?? index}-${index}`}
              className="flex items-start gap-3 border border-rule-soft p-3"
            >
              {candidate.photoUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={candidate.photoUrl}
                  alt={candidate.name ?? "Candidate"}
                  className="h-12 w-12 shrink-0 object-cover"
                />
              ) : (
                <div className="initials flex h-12 w-12 shrink-0 items-center justify-center bg-ink text-paper">
                  {(candidate.name ?? "?")
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </div>
              )}
              <div className="min-w-0">
                <div className="font-display text-lg font-black leading-tight tracking-tight">
                  {candidate.name ?? "Candidate"}
                </div>
                {candidate.party && (
                  <div className="font-data text-xs uppercase tracking-wider text-ink-muted">
                    {candidate.party}
                  </div>
                )}
                {candidate.candidateUrl && (
                  <a
                    href={candidate.candidateUrl}
                    className="mt-1 inline-block text-xs font-medium text-accent hover:underline"
                  >
                    Campaign site
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {(contest.referendumBrief || contest.referendumText) && (
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          {contest.referendumBrief ?? contest.referendumText}
        </p>
      )}

      {contest.referendumBallotResponses && (
        <div className="mt-3 flex flex-wrap gap-2">
          {contest.referendumBallotResponses.map((response) => (
            <span
              key={response}
              className="border border-rule-soft px-2 py-1 font-data text-xs"
            >
              {response}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
