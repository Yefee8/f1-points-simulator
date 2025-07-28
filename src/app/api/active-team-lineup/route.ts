import { getTeamLineup } from "f1-api-node/dist/scraper/team-lineup.js";

export async function GET(request: Request) {
  const activeStandings = await getTeamLineup();
  return new Response(JSON.stringify(activeStandings), {
    status: 200,
  });
}
