import { Node as NodeType, Edge as EdgeType } from "../types/types";

export const generateEdges = (
  nodes: NodeType[],
  selected?: string[]
): EdgeType[] => {
  const edges: EdgeType[] = [];

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
          const edgeId = `${node.id}-${connectedStation.id}-${nodeLine.color}`;

          // Determine if the current edge is in the forward direction and selected
          const isForwardSelected =
            selected &&
            selected.includes(node.id) &&
            selected.includes(connectedStation.id) &&
            selected.indexOf(node.id) < selected.indexOf(connectedStation.id);

          const isBackwardSelected =
            selected &&
            selected.includes(node.id) &&
            selected.includes(connectedStation.id) &&
            selected.indexOf(node.id) > selected.indexOf(connectedStation.id);

          // Apply direction-based selection
          const isSelected = isForwardSelected || isBackwardSelected;

          edges.push({
            id: edgeId,
            source: node.id,
            target: connectedStation.id,
            type: isForwardSelected ? "animatedSvg" : "smoothstep",
            sourceHandle: `${node.data.label}-${nodeLine.color}-source`,
            targetHandle: `${targetNode.data.label}-${nodeLine.color}-target`,
            style: {
              stroke: nodeLine.color,
              strokeWidth: isSelected ? 20 : 5,
            },
          });
        }
      });
    });
  });

  return edges;
};
