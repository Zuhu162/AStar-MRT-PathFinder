import { Background, Controls, MiniMap, ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { nodesData } from "../nodes/nodeData";
import { generateEdges } from "../utils/generateEdges";
import CustomNode from "./StationNode";

const MRTMap = () => {
  const edges = generateEdges(nodesData);
  const nodeTypes = {
    station: CustomNode,
  };

  return (
    <div className="w-full h-full">
      <ReactFlow
        minZoom={0.001}
        nodes={nodesData}
        edges={edges}
        fitView
        nodeTypes={nodeTypes}>
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};

export default MRTMap;
