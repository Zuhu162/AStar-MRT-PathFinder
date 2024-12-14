import { Node as NodeType, Edge as EdgeType } from "../types/types";

export const generateEdges = (nodes: NodeType[]): EdgeType[] => {
  const edges: EdgeType[] = [];
  const edgeSet = new Set<string>(); // To track unique edges

  nodes.forEach((node) => {
    const { connectedStations } = node.data;

    connectedStations.forEach((connectedStation) => {
      // Find the connected node
      const targetNode = nodes.find((n) => n.id === connectedStation);

      if (!targetNode) return;

      // Find all the line colors connecting the two nodes
      const commonLines = node.data.lines.filter((line) =>
        targetNode.data.lines.some(
          (targetLine) => targetLine.color === line.color
        )
      );

      // Create an edge for each common line
      commonLines.forEach((line) => {
        const edgeId = `${node.id}-${connectedStation}-${line.color}`;
        const reverseEdgeId = `${connectedStation}-${node.id}-${line.color}`;

        // Avoid adding duplicate edges (even in reverse direction)
        if (!edgeSet.has(edgeId) && !edgeSet.has(reverseEdgeId)) {
          edges.push({
            id: edgeId,
            source: node.id,
            target: connectedStation,
            type: "smoothstep",
            sourceHandle: `${node.data.label}-${line.color}-source`,
            targetHandle: `${targetNode.data.label}-${line.color}-target`,
            style: {
              stroke: line.color,
              strokeWidth: 5,
            },
          });
          edgeSet.add(edgeId); // Mark edge as added
        }
      });
    });
  });

  return edges;
};
