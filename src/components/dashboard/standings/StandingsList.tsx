import Link from "next/link";
import List from "./List";
import { getActiveStandings } from "@/lib/utils";

export async function StandingsList() {
  const year = new Date().getFullYear();
  const data = await getActiveStandings();
  return (
    <div className="flex flex-col gap-2rem">
      <div className="flex gap-4 justify-between">
        <h2 className="text-2rem font-semibold text-foreground">
          {year} Standings
        </h2>

        <Link href="/simulate">
          <button className="p-1.5 h-auto bg-muted/50 hover:bg-muted duration-150 rounded-lg font-semibold cursor-pointer text-base">
            Start Simulating
          </button>
        </Link>
      </div>

      <List f1Standings={data} />
    </div>
  );
}
