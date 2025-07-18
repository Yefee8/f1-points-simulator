"use client";

import { Modal } from "@/components/ui/modal";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Schedule, Standing } from "@/types";
import { useState } from "react";
import SimulateListModal from "./SimulateListModal";

// we can use suspense in here(to minimize loading states) but it is not too necessary idk

const date = new Date();
export default function SimulateList({
  f1Standings,
  activeSchedule,
}: {
  f1Standings: Standing[];
  activeSchedule: Schedule[];
}) {
  const [changeableStandings, setChangeableStandings]: [Standing[], Function] =
    useState(f1Standings);

  const getActiveRaceWeekend = () => {
    let scheduleIndex = 0;
    activeSchedule.map((schedule, i) => {
      const [_, scheduleString] = schedule.date.split("-");

      const dateString = `${scheduleString[0]}${
        scheduleString[1]
      } ${scheduleString.replace(
        `${scheduleString[0]}${scheduleString[1]}`,
        ""
      )} ${date.getFullYear()}`;
      const scheduleDate = new Date(dateString);
      if (date < scheduleDate) {
        scheduleIndex = i;
        return;
      }
    });

    return scheduleIndex;
  };

  const activeRaceWeekendIndex = getActiveRaceWeekend();
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <SimulateListModal
        changeableStandings={changeableStandings}
        updateStandings={() => console.log("Update Standings")}
        activeSchedule={activeSchedule}
        activeRaceWeekendIndex={activeRaceWeekendIndex}
        setShowModal={setShowModal}
        showModal={showModal}
      />

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
              {changeableStandings.map((standing) => (
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
                                String.fromCodePoint(
                                  char.charCodeAt(0) + 0x1f1a5
                                )
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
    </div>
  );
}
