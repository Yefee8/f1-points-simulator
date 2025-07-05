import { Standing } from "@/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getActiveStandings } from "@/lib/utils";

const f1Standings: Standing[] = getActiveStandings();

export function StandingsList() {
  return (
    <div className="flex flex-col gap-2rem">
      <h2 className="text-2rem font-semibold text-foreground">
        2025 Standings
      </h2>

      <div className="rounded-lg border border-border bg-card shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-16">Rank</TableHead>
                <TableHead>Driver</TableHead>
                <TableHead className="text-right">Points</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {f1Standings.map((standing) => (
                <TableRow key={standing.position} className="hover:bg-muted/50">
                  <TableCell className="font-medium text-left pl-4">
                    {standing.position}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div
                        className="w-1 h-8 rounded-full flex-shrink-0"
                        style={{ backgroundColor: standing.team.color }}
                      />
                      <span className="text-lg">{standing.driver.country}</span>
                      <div className="flex flex-col">
                        <span className="font-medium">
                          {standing.driver.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {standing.team.name}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-semibold pr-4">
                    {standing.points}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
