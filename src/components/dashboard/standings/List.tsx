import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Standing } from "@/types";

// we can use suspense in here(to minimize loading states) but it is not too necessary idk

export default function List({ f1Standings }: { f1Standings: Standing[] }) {
  return (
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
                    <img
                      src={standing.carLogo}
                      alt={`${standing.driver} car logo`}
                      className="w-8 h-8 grayscale-100 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="flex gap-1">
                        <span className="font-medium">{standing.driver}</span>

                        <span>
                          {/* It turns 3-letter country names into emojis: */}
                          {standing.nationality
                            .replace(
                              standing.nationality[
                                standing.nationality.length - 1
                              ],
                              ""
                            )
                            .toUpperCase()
                            .split("")
                            .map((char) =>
                              String.fromCodePoint(char.charCodeAt(0) + 0x1f1a5)
                            )
                            .join("")}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {standing.team}
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
  );
}
