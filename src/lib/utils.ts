import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { Schedule, Standing } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const toSlug = (str: string) => str.replaceAll(" ", "").toLowerCase();

const ERGAST_BASE = "https://api.jolpi.ca/ergast/f1";
export async function getActiveStandings(): Promise<Standing[]> {
  const currentYear = new Date().getFullYear();

  // Try current year first, fallback to previous year if no data yet
  let data = await fetchDriverStandings(currentYear);
  if (data.MRData.total === "0") {
    data = await fetchDriverStandings(currentYear - 1);
  }

  const standingsList =
    data.MRData.StandingsTable.StandingsLists[0]?.DriverStandings ?? [];

  const activeStandings: Standing[] = standingsList.map((ds: any) => {
    let teamNameForImage = ds.Constructors[0]?.name;
    switch (teamNameForImage) {
      case "Alpine F1 Team":
        teamNameForImage = "Alpine";
        break;
      case "Sauber":
        teamNameForImage = "Audi";
        break;
      case "Red Bull":
        teamNameForImage = "Red Bull Racing";
        break;
      case "RB F1 Team":
        teamNameForImage = "Racing Bulls";
        break;
    }
    // example car logo https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2026/alpine/2026alpinelogowhite.webp
    // example driver image https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000000/common/f1/2026/ferrari/chalec01/2026ferrarichalec01right.webp
    return {
      position: Number(ds.position),
      driver: `${ds.Driver.givenName} ${ds.Driver.familyName}`,
      nationality: ds.Driver.nationality,
      team: teamNameForImage,
      points: Number(ds.points),
      carLogo: `https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/${currentYear}/${toSlug(teamNameForImage)}/${currentYear}${toSlug(teamNameForImage)}logowhite.webp`,
      driverImage: `https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:${currentYear}:fallback:driver:${currentYear}fallbackdriverright.webp/v1740000000/common/f1/${currentYear}/${toSlug(teamNameForImage)}/${ds.Driver.givenName.toLowerCase().slice(0, 3)}${ds.Driver.familyName.toLowerCase().slice(0, 3)}01/${currentYear}${toSlug(teamNameForImage)}${ds.Driver.givenName.toLowerCase().slice(0, 3)}${ds.Driver.familyName.toLowerCase().slice(0, 3)}01right.webp`,
    };
  });

  return activeStandings;
}

async function fetchDriverStandings(year: number) {
  const res = await fetch(
    `${ERGAST_BASE}/${year}/driverstandings/?format=json`,
    { cache: "no-cache" },
  );
  return res.json();
}

export async function getActiveSchedule(): Promise<Schedule[]> {
  let currentYear = new Date().getFullYear();


  let dataForChecking = await fetchDriverStandings(currentYear);
  if (dataForChecking.MRData.total === "0") {
    currentYear = currentYear - 1;
  }
  const res = await fetch(`${ERGAST_BASE}/${currentYear}/races/?format=json`, {
    cache: "no-cache",
  });

  const data = await res.json();

  const races = data.MRData.RaceTable.Races ?? [];

  const activeSchedule: Schedule[] = races.map((race: any) => ({
    round: race.round,
    date: race.date, // YYYY-MM-DD format
    raceCountry: race.Circuit.Location.country,
    eventTitle: race.raceName,
  }));

  return activeSchedule;
}

export const pointSystem = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];
