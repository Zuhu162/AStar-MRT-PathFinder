import "@xyflow/react/dist/style.css";

import { ReactFlow, Background, Controls, MiniMap } from "@xyflow/react";
import { Edge } from "../../types/types";
import { AnimatedSVGEdge } from "./MapComponents/AnimatedEdge";
import CustomNode from "./MapComponents/StationNode";

interface props {
  nodes: any[];
  edges: Edge[];
}

const edgeTypes = {
  animatedSvg: AnimatedSVGEdge,
};

const nodeTypes = {
  station: CustomNode,
};

const MRTFlowMap = ({ nodes, edges }: props) => {
  return (
    <ReactFlow
      minZoom={0.05}
      nodes={nodes}
      edges={edges}
      edgeTypes={edgeTypes}
      fitView
      nodeTypes={nodeTypes}>
      <Background />
      <Controls />
      <MiniMap />
    </ReactFlow>
  );
};

export default MRTFlowMap;
