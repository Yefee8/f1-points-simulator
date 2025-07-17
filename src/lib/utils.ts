import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { getTeamLineup } from "f1-api-node/dist/scraper/team-lineup.js";
import { getDriverStandings } from "f1-api-node/dist/scraper/driver-standings.js";

import { Standing } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getActiveStandings() {
  const activeStandings: Standing[] = await getDriverStandings();
  const activeTeamLineup = await getTeamLineup();

  activeStandings.forEach((standing) => {
    const team = activeTeamLineup.find((team) => team.name === standing.team);
    if (team) {
      standing.carLogo = team.carLogo;
    }
  });
  return activeStandings;
}
