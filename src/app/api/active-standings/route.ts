import { Standing } from "@/types";
import { getDriverStandings } from "f1-api-node/dist/scraper/driver-standings.js";

export async function GET(request: Request) {
  const activeStandings: Standing[] = await getDriverStandings();
  return new Response(JSON.stringify(activeStandings), {
    status: 200,
  });
}
