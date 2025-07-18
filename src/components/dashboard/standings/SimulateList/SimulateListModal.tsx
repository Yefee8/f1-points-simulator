import { Modal } from "@/components/ui/modal";
import { RaceResultDriver, Schedule, Standing } from "@/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

export default function SimulateListModal({
  activeSchedule,
  activeRaceWeekendIndex,
  setShowModal,
  showModal,
  changeableStandings,
  updateStandings,
}: {
  activeSchedule: Schedule[];
  activeRaceWeekendIndex: number;
  setShowModal: (show: boolean) => void;
  showModal: boolean;
  changeableStandings: Standing[];
  updateStandings: Function;
}) {
  const emptyDrivers: RaceResultDriver[] = Array.from({ length: 10 }, () => ({
    driver: "Sebastian Vettel",
    team: "Ferrari",
    carLogo: "",
  }));

  const [raceResults, setRaceResults] =
    useState<RaceResultDriver[]>(emptyDrivers);

  const pointSystem = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];

  console.log("TEST", raceResults);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="p-1.5 h-auto bg-muted/50 hover:bg-muted duration-150 rounded-lg font-semibold cursor-pointer text-base"
      >
        Simulate from "{activeSchedule[activeRaceWeekendIndex].eventTitle}"
      </button>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className="flex relative flex-col items-center gap-4 w-full">
          <div className="flex items-center gap-4 justify-between w-full">
            <h2 className="text-2xl font-semibold text-foreground">
              Simulate {activeSchedule[activeRaceWeekendIndex].eventTitle}
            </h2>

            <button
              onClick={() => setShowModal(false)}
              className="text-muted-foreground duration-100 hover:text-foreground text-2xl"
            >
              &times;
            </button>
          </div>

          <div className="w-full flex max-md:flex-col gap-4">
            <div className="w-1/2 h-[610px]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-16">Position</TableHead>
                    <TableHead>Driver</TableHead>
                    <TableHead className="text-right">Points</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {raceResults.map((result, i) => (
                    <TableRow key={i} className="hover:bg-muted/50">
                      <TableCell className="font-medium text-left pl-4">
                        {i + 1}
                      </TableCell>

                      <TableCell>
                        <div className="flex items-center gap-3">
                          <img
                            src={
                              result.carLogo
                                ? result.carLogo
                                : "https://placehold.co/400"
                            }
                            alt={`${result.driver} car logo`}
                            className="w-8 h-8 grayscale-100 rounded-full"
                          />
                          <div className="flex flex-col">
                            <div className="flex gap-1">
                              <span className="font-medium">
                                {result.driver}
                              </span>
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {result.team}
                            </span>
                          </div>
                        </div>
                      </TableCell>

                      <TableCell className="text-right pr-4 font-medium">
                        {pointSystem[i]}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="w-1/2 flex flex-wrap gap-4  max-h-[610px] overflow-y-auto">
              {changeableStandings.map((driver: Standing, i: number) => (
                <div className="flex flex-col justify-center p-2 rounded-lg bg-muted/50 hover:bg-muted cursor-pointer gap-2 h-[84px]">
                  <span className="font-medium">{driver.driver}</span>
                  <span className="text-sm text-muted-foreground">
                    {driver.team}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
