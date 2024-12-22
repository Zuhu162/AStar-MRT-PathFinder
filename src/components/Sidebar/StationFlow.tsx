import { useEffect, useState } from "react";
import { nodesData } from "../../nodes/nodeData";
import { Node } from "../../types/types";

interface Props {
  path: string[];
}

const StationFlow = ({ path }: Props) => {
  // State to store the matched nodes data
  const [selectedStations, setSelectedStations] = useState<any[]>([]);
  const [totalTime, setTotalTime] = useState<number>(0);

  // Function to fetch nodes data based on path
  const fetchNodesData = (path: string[]) => {
    const matchedNodes = path.map((nodeId) =>
      nodesData.find((node) => node.id === nodeId)
    );
    setSelectedStations(matchedNodes);
  };

  // Function to get color between stations
  const getColorBetweenStations = (
    currentNode: Node,
    nextNode: Node
  ): string | null => {
    if (!currentNode || !nextNode) return null;

    // Find a matching line by comparing the `stationNumber` and `color`
    for (const currentLine of currentNode.data.lines) {
      for (const nextLine of nextNode.data.lines) {
        if (
          currentLine.color === nextLine.color &&
          (currentLine.stationNumber === nextLine.stationNumber + 1 ||
            currentLine.stationNumber === nextLine.stationNumber - 1)
        ) {
          return currentLine.color; // Return the matching color
        }
      }
    }

    return null; // Return null if no matching line is found
  };

  // Use effect to update the state when path changes
  useEffect(() => {
    fetchNodesData(path);
  }, [path]);

  return (
    <div className="w-full">
      <ul className="timeline timeline-snap-icon timeline-vertical">
        {selectedStations.map((station, index) => {
          const nextStation = selectedStations[index + 1];
          const prevStation = selectedStations[index - 1];
          const lineColor = nextStation
            ? getColorBetweenStations(station, nextStation)
            : prevStation
            ? getColorBetweenStations(prevStation, station)
            : null;

          return (
            <li key={station.id}>
              {index !== 0 && (
                <hr
                  style={{
                    borderColor: lineColor || "black",
                    borderWidth: "2px",
                  }}
                />
              )}

              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill={lineColor || "black"}
                  viewBox="0 0 24 24"
                  className="size-6">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end">
                {index + 1}
              </div>

              <div className="timeline-end timeline-box mb-2">
                {station.data.label}
              </div>
              {index !== selectedStations.length - 1 && (
                <hr
                  style={{
                    borderColor: lineColor || "black",
                    borderWidth: "2px",
                  }}
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StationFlow;
