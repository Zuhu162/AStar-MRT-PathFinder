import { useState } from "react";
import { nodesData } from "../nodes/nodeData";

interface props {
  inputLabel: string;
  onStationInput: Function;
}

const StationSelect = ({ inputLabel, onStationInput }: props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStations = nodesData.filter((station) =>
    station.data.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative w-64">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {inputLabel}
      </label>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center input input-bordered w-full rounded-md p-2 cursor-pointer">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsOpen(true);
          }}
          placeholder="Select or search station"
          className="w-full outline-none"
        />
        {/* <ChevronDown className="ml-2 text-gray-500" size={20} /> */}
      </div>

      {isOpen && (
        <ul className="absolute z-10 w-full max-h-60 overflow-y-auto border border-gray-300 rounded-md mt-1 bg-white shadow-lg">
          {filteredStations.map((station) => (
            <li
              key={station.id}
              onClick={() => {
                setSearchTerm(station.data.label);
                setIsOpen(false);
                onStationInput(station.id);
              }}
              className="p-2 hover:bg-gray-100 cursor-pointer">
              {station.data.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StationSelect;
