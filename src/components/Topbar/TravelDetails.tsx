import { useEffect, useState } from "react";
import { pathFinder } from "../../utils/pathFinder";
import StationSelect from "./StationSelect";
import { nodesData } from "../../nodes/nodeData";
import GithubIcon from "../../assets/svgs/GithubIcon";

interface props {
  onGeneratePath: Function;
}

const TravelDetails = ({ onGeneratePath }: props) => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [path, setPath] = useState<string[] | null>(null);

  useEffect(() => {
    if (start && end) {
      generatePath();
    }
  }, [start, end]);

  const handleStartInput = (station: string) => {
    setStart(station);
    console.log(station);
  };
  const handleEndInput = (station: string) => {
    setEnd(station);
    console.log(station);
  };

  const switchStartEnd = () => {
    const temp = start;
    setStart(end);
    setEnd(temp);
  };

  const generatePath = () => {
    if (!start || !end) return;

    const result = pathFinder(nodesData, start, end);
    if (result && result.path) {
      setPath(result.path); // Set the path array if result is valid
      onGeneratePath(result.path);
    } else {
      setPath(null); // Set to null if result is invalid
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-3 bg-accent-content">
      <div className="w-full flex flex-col md:flex-row items-center justify-center md:space-x-5">
        <div className="mt-4 w-1/4">
          <a href="https://github.com/Zuhu162" target="_blank">
            <button className="btn btn-circle btn-neutral">
              <GithubIcon />
            </button>
          </a>
        </div>
        <div className="w-3/4 flex space-x-5">
          <StationSelect
            inputLabel="Boarding at"
            onStationInput={handleStartInput}
            value={start}
          />
          <button
            onClick={switchStartEnd}
            className="btn rounded-full btn-accent mt-7"
            disabled={!start || !end || start === end}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
              />
            </svg>
          </button>
          <StationSelect
            inputLabel="Alighting at"
            onStationInput={handleEndInput}
            value={end}
          />
          {/* <button
            className="btn rounded-full btn-primary mt-7"
            disabled={!start || !end || start === end}
            onClick={() => generatePath()}>
            Get Route
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default TravelDetails;
