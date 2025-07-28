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
                        width={16}
                        height={16}
                        alt={standing.driver}
                        src={
                          standing.driverImage
                            ? standing.driverImage
                            : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                        }
                        className="w-8 h-8 object-cover object-top rounded-full"
                      />
                      <div className="flex flex-col">
                        <span className="font-medium">{standing.driver}</span>

                        <div className="flex gap-1 items-center">
                          <span className="text-sm text-muted-foreground">
                            {standing.team}
                          </span>
                          <img
                            src={standing.carLogo}
                            alt={`${standing.driver} car logo`}
                            className="w-4 h-4 grayscale-100 rounded-full"
                          />
                        </div>
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
