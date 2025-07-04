import { StandingsList } from './standings/StandingsList';

export function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen w-full gap-2rem p-2rem max-w-6xl mx-auto">
      <header className="flex flex-col gap-1rem text-center">
        <h1 className="text-4rem font-bold text-foreground">
          F1 Points Simulator
        </h1>
        <p className="text-1.25rem text-muted-foreground">
          2025 Formula 1 Championship Standings
        </p>
      </header>
      
      <main className="flex-1 flex flex-col gap-2rem">
        <StandingsList />
      </main>
    </div>
  );
} 