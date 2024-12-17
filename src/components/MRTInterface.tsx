import { nodesData } from "../nodes/nodeData";
import { generateEdges } from "../utils/generateEdges";
import TravelDetails from "./Topbar/TravelDetails";
import { useState } from "react";
import { Edge } from "../types/types";
import MRTFlowMap from "./MainMap/MRTFlowMap";
import StationFlow from "./Sidebar/StationFlow";

const MRTInterface = () => {
  const [edges, setEdges] = useState<Edge[]>(generateEdges(nodesData));
  const [generatedPath, setGeneratedPath] = useState<string[]>([]);

  const loadEdges = (routePath: string[]) => {
    setGeneratedPath(routePath);
    setEdges(generateEdges(nodesData, routePath));
    console.log(routePath);
  };

  return (
    <div className="w-full h-screen flex flex-col">
      {/* Top Section */}
      <div className="w-full h-[15%]">
        <TravelDetails
          onGeneratePath={(routePath: string[]) => {
            loadEdges(routePath);
          }}
        />
      </div>

      {/* Main Content */}
      <div className="w-full h-[85%] flex">
        {/* Map Section */}
        <div className="w-[75%] h-full">
          <MRTFlowMap edges={edges} nodes={nodesData} />
        </div>

        {/* Sidebar Section */}
        <div className="w-[25%] h-full bg-base-200 overflow-y-auto">
          <StationFlow path={generatedPath} />
        </div>
      </div>
    </div>
  );
};

export default MRTInterface;
