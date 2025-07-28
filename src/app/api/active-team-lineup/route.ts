import { getTeamLineup } from "f1-api-node/dist/scraper/team-lineup.js";

export async function GET(request: Request) {
  const activeTeamLineup = await getTeamLineup();
  return new Response(JSON.stringify(activeTeamLineup), {
    status: 200,
  });
}
