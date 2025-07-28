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
import { pointSystem } from "@/lib/utils";
import Image from "next/image";

export default function SimulateListModal({
  endOfSchedule,
  activeSchedule,
  activeRaceWeekendIndex,
  setShowModal,
  showModal,
  standings,
  updateStandings,
}: {
  endOfSchedule: boolean;
  activeSchedule: Schedule[];
  activeRaceWeekendIndex: number;
  setShowModal: (show: boolean) => void;
  showModal: boolean;
  standings: Standing[];
  updateStandings: Function;
}) {
  const emptyDrivers: RaceResultDriver[] = Array.from({ length: 10 }, () => ({
    driver: "Sebastian Vettel",
    team: "Ferrari",
    carLogo: "",
  }));

  const [raceResults, setRaceResults] =
    useState<RaceResultDriver[]>(emptyDrivers);

  const [draggedDriver, setDraggedDriver] = useState<Standing | null>(null);

  const handleDragStart = (driver: Standing) => {
    setDraggedDriver(driver);
  };

  const [localChangeableStandings, setLocalChangeableStandings] =
    useState(standings);

  const handleDrop = (index: number) => {
    if (!draggedDriver) return;

    const existingDriver = raceResults[index];
    const newRaceResults = [...raceResults];

    newRaceResults[index] = {
      driver: draggedDriver.driver,
      team: draggedDriver.team,
      carLogo: draggedDriver.carLogo ?? "",
    };

    const isPlaceholder = existingDriver.driver === "Sebastian Vettel";

    let updatedChangeableStandings: any[] = [...localChangeableStandings];

    updatedChangeableStandings = updatedChangeableStandings.filter(
      (d) => d.driver !== draggedDriver.driver
    );

    if (!isPlaceholder) {
      updatedChangeableStandings = [
        {
          driver: existingDriver.driver,
          team: existingDriver.team,
          carLogo: existingDriver.carLogo,
        },
        ...updatedChangeableStandings,
      ];
    }

    setRaceResults(newRaceResults);
    setLocalChangeableStandings(updatedChangeableStandings);
    setDraggedDriver(null);
  };

  return (
    <>
      {!endOfSchedule && (
        <button
          onClick={() => setShowModal(true)}
          className="p-1.5 h-auto bg-muted/50 hover:bg-muted duration-150 rounded-lg font-semibold cursor-pointer text-base"
        >
          Simulate from "{activeSchedule[activeRaceWeekendIndex].eventTitle}"
        </button>
      )}

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className="flex relative max-md:justify-evenly flex-col items-center gap-4 w-full max-md:h-screen overflow-y-scroll">
          <div className="flex items-center gap-4 justify-between w-full">
            <div className="flex gap-4 flex-wrap items-center">
              <h2 className="text-2xl font-semibold text-foreground">
                Simulate {activeSchedule[activeRaceWeekendIndex].eventTitle}
              </h2>

              <button
                disabled={
                  raceResults.filter((r) => r.driver === "Sebastian Vettel")
                    .length > 0
                }
                onClick={() => {
                  if (
                    raceResults.filter((r) => r.driver === "Sebastian Vettel")
                      .length == 0
                  ) {
                    updateStandings(raceResults);
                    setShowModal(false);
                    setRaceResults(emptyDrivers);
                    setLocalChangeableStandings(standings);
                  }
                }}
                className="p-1.5 disabled:cursor-not-allowed disabled:opacity-25 h-auto bg-muted/50 hover:bg-muted duration-150 rounded-lg font-semibold cursor-pointer text-base"
              >
                Simulate It
              </button>
            </div>

            <button
              onClick={() => setShowModal(false)}
              className="text-muted-foreground duration-100 hover:text-foreground text-2xl"
            >
              &times;
            </button>
          </div>

          <div className="w-full flex gap-4">
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
                    <TableRow
                      onClick={() => {
                        if (result.carLogo) {
                          setLocalChangeableStandings((prev: any[]) => {
                            const updatedStandings = [result, ...prev];
                            return updatedStandings;
                          });

                          setRaceResults((prev) => {
                            const updatedResults = [...prev];
                            updatedResults[i] = {
                              driver: "Sebastian Vettel",
                              team: "Ferrari",
                              carLogo: "",
                            };
                            return updatedResults;
                          });
                        }
                      }}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={() => handleDrop(i)}
                      key={i}
                      className="hover:bg-muted/50"
                    >
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

            <div className="w-1/2 flex flex-wrap gap-4 items-start max-h-[610px] overflow-y-auto">
              {localChangeableStandings.map((driver: Standing, i: number) => (
                <div
                  key={i}
                  draggable
                  onDragStart={() => handleDragStart(driver)}
                  className="flex flex-col justify-center p-2 rounded-lg bg-muted/50 hover:bg-muted cursor-pointer gap-2 h-[84px]"
                >
                  <div className="flex gap-2 items-center">
                    <img
                      width={36}
                      height={36}
                      alt={driver.driver}
                      src={
                        driver.driverImage
                          ? driver.driverImage
                          : "https://placehold.co/400"
                      }
                      className="w-9 h-9 object-cover object-top rounded-full"
                    />
                    <span className="font-medium">{driver.driver}</span>
                  </div>
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
