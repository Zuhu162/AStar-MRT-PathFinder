import { useState } from "react";
import { pathFinder } from "../../utils/pathFinder";
import StationSelect from "../../utils/StationSelect";
import { nodesData } from "../../nodes/nodeData";

interface props {
  onGeneratePath: Function;
}

const TravelDetails = ({ onGeneratePath }: props) => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [path, setPath] = useState<string[] | null>(null);

  const handleStartInput = (station: string) => {
    setStart(station);
    console.log(station);
  };
  const handleEndInput = (station: string) => {
    setEnd(station);
    console.log(station);
  };

  const generatePath = () => {
    const result = pathFinder(nodesData, start, end);
    if (result && result.path) {
      setPath(result.path); // Set the path array if result is valid
      onGeneratePath(result.path);
    } else {
      setPath(null); // Set to null if result is invalid
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-around items-center py-1 bg-accent-content">
      <div className="w-full flex flex-col md:flex-row items-center justify-center md:space-x-5">
        <StationSelect
          inputLabel="Boarding at"
          onStationInput={handleStartInput}
        />
        <StationSelect
          inputLabel="Alighting at"
          onStationInput={handleEndInput}
        />
        <button
          className="btn rounded-full btn-primary mt-7"
          disabled={!start || !end} // Disable if either start or end is not selected
          onClick={() => generatePath()}>
          Get Route
        </button>
      </div>
    </div>
  );
};

export default TravelDetails;
