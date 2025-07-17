import List from "@/components/dashboard/standings/List";
import { getActiveSchedule, getActiveStandings } from "@/lib/utils";

export default async function SimulatePage() {
  const f1Standings = await getActiveStandings();
  const activeSchedule = await getActiveSchedule();
  return (
    <div className="flex flex-col min-h-screen w-full gap-2rem p-2rem max-w-6xl mx-auto">
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold text-foreground">
          Simulate Season
        </h1>
        <p className="text-muted-foreground">
          Use the form below to simulate a season of Formula 1.
        </p>
      </div>

      <main className="flex-1 flex flex-col gap-2rem">
        <List f1Standings={f1Standings} />
      </main>
    </div>
  );
}
