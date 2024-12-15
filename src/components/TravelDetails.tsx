import { useState } from "react";
import { pathFinder } from "../utils/pathFinder";
import StationSelect from "../utils/StationSelect";
import { nodesData } from "../nodes/nodeData";

const TravelDetails = () => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleStartInput = (station: string) => {
    setStart(station);
  };
  const handleEndInput = (station: string) => {
    setEnd(station);
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center px-5">
      <p>Enter your Trip Details</p>
      <StationSelect
        inputLabel="Boarding at"
        onStationInput={handleStartInput}
      />
      <StationSelect
        inputLabel="Alighting at"
        onStationInput={handleEndInput}
      />
      <button
        disabled
        onClick={() => console.log(pathFinder(nodesData, start, end))}>
        Get Route
      </button>
    </div>
  );
};

export default TravelDetails;
