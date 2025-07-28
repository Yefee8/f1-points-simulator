import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { getRaceSchedule } from "f1-api-node/dist/scraper/race-schedule.js";

import { Schedule, Standing } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getActiveStandings() {
  // we could've use .env and stuff but it's already open-source. feel free to use :)
  const activeStandingsReq = await fetch(
    "https://f1-points-simulator.vercel.app/api/active-standings",
    {
      method: "GET",
      cache: "no-cache",
    }
  );
  const activeStandings: Standing[] = await activeStandingsReq.json();

  const activeTeamLineupReq = await fetch(
    "https://f1-points-simulator.vercel.app/api/active-team-lineup",
    {
      method: "GET",
      cache: "no-cache",
    }
  );

  const activeTeamLineup = await activeTeamLineupReq.json();

  activeStandings.forEach((standing) => {
    const team = activeTeamLineup.find(
      (team: any) => team.name === standing.team
    );
    if (team) {
      standing.carLogo = team.carLogo;
    }
  });


  return activeStandings;
}

export async function getActiveSchedule() {
  const activeSchedule: Schedule[] = await getRaceSchedule();
  return activeSchedule;
}

export const pointSystem = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];
