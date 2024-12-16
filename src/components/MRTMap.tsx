import { Background, Controls, MiniMap, ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { nodesData } from "../nodes/nodeData";
import { generateEdges } from "../utils/generateEdges";
import CustomNode from "./StationNode";
import TravelDetails from "./TravelDetails";
import { useState } from "react";
import { Edge } from "../types/types";

const MRTMap = () => {
  const [edges, setEdges] = useState<Edge[]>(generateEdges(nodesData));

  const nodeTypes = {
    station: CustomNode,
  };

  const loadEdges = (routePath: string[]) => {
    setEdges(generateEdges(nodesData, routePath));
    console.log(routePath);
  };

  return (
    <div className="w-full h-full flex">
      <div className="w-2/3 h-full">
        <ReactFlow
          minZoom={0.05}
          nodes={nodesData}
          edges={edges}
          fitView
          nodeTypes={nodeTypes}>
          <Background />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
      <div className="w-2/3 h-full">
        <TravelDetails
          onGeneratePath={(routePath: string[]) => {
            loadEdges(routePath);
          }}
        />
      </div>
    </div>
  );
};

export default MRTMap;
