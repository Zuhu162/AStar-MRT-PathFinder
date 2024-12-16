import { Node as NodeType, Edge as EdgeType } from "../types/types";

export const generateEdges = (
  nodes: NodeType[],
  selected?: string[]
): EdgeType[] => {
  const edges: EdgeType[] = [];
  const edgeSet = new Set<string>(); // To track unique edges

  nodes.forEach((node) => {
    const { connectedStations, lines } = node.data;

    connectedStations.forEach((connectedStation) => {
      // Find the connected node
      const targetNode = nodes.find((n) => n.id === connectedStation.id);

      if (!targetNode) return;

      // Explicitly match sequential station connections
      lines.forEach((nodeLine) => {
        const targetLines = targetNode.data.lines;
        const matchingTargetLine = targetLines.find(
          (targetLine) =>
            targetLine.color === nodeLine.color &&
            (targetLine.stationNumber === nodeLine.stationNumber + 1 ||
              targetLine.stationNumber === nodeLine.stationNumber - 1)
        );

        // Only create an edge if the connecting line is sequentially matched
        if (matchingTargetLine) {
          const edgeId = `${node.id}-${connectedStation.id}-${nodeLine.color}-${nodeLine.stationNumber}`;
          const reverseEdgeId = `${connectedStation.id}-${node.id}-${nodeLine.color}-${nodeLine.stationNumber}`;

          // Avoid adding duplicate edges
          if (!edgeSet.has(edgeId) && !edgeSet.has(reverseEdgeId)) {
            if (
              selected?.includes(node.id) &&
              selected?.includes(connectedStation.id)
            ) {
              edges.push({
                id: edgeId,
                source: node.id,
                target: connectedStation.id,
                type: "smoothstep",
                sourceHandle: `${node.data.label}-${nodeLine.color}-source`,
                targetHandle: `${targetNode.data.label}-${nodeLine.color}-target`,
                style: {
                  stroke: nodeLine.color,
                  strokeWidth: 20,
                },
              });
              edgeSet.add(edgeId);
            } else {
              edges.push({
                id: edgeId,
                source: node.id,
                target: connectedStation.id,
                type: "smoothstep",
                sourceHandle: `${node.data.label}-${nodeLine.color}-source`,
                targetHandle: `${targetNode.data.label}-${nodeLine.color}-target`,
                style: {
                  stroke: nodeLine.color,
                  strokeWidth: 5,
                },
              });
              edgeSet.add(edgeId);
            }
          }
        }
      });
    });
  });

  return edges;
};
