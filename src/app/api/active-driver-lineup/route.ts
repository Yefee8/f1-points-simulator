import { getDriverLineup } from "f1-api-node/dist/scraper/driver-lineup.js";

export async function GET(request: Request) {
  const activeDriverLineup = await getDriverLineup();
  return new Response(JSON.stringify(activeDriverLineup), {
    status: 200,
  });
}