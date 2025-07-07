import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { getDriverStandings, getTeamLineup } from "./f1-api/src/server";
import { isDriverStanding } from "./f1-api/src/types/types";
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
