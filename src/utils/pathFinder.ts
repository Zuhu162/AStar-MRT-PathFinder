import { Node } from "../types/types";

interface StationNode {
  id: string;
  cost: number;
  estimatedTotalCost: number;
  path: string[];
  visited: boolean;
}

export const pathFinder = (nodeList: Node[], start: string, target: string) => {
  // Create a map of nodes for quick lookup
  const nodeMap = new Map(nodeList.map((node) => [node.id, node]));

  // Heuristic function: calculate straight-line distance between coordinates
  const heuristic = (currentNodeId: string, targetNodeId: string) => {
    const currentNode = nodeMap.get(currentNodeId);
    const targetNode = nodeMap.get(targetNodeId);

    if (!currentNode || !targetNode) return Infinity;

    // Calculate Euclidean distance
    const dx = currentNode.position.x - targetNode.position.x;
    const dy = currentNode.position.y - targetNode.position.y;

    return Math.sqrt(dx * dx + dy * dy);
  };

  // Initialize open and closed sets
  const openSet = new Map<string, StationNode>();
  const closedSet = new Set<string>();

  // Initialize start node
  const startNode = nodeMap.get(start);
  if (!startNode) throw new Error("Start node not found");

  openSet.set(start, {
    id: start,
    cost: 0,
    estimatedTotalCost: heuristic(start, target),
    path: [start],
    visited: false,
  });

  while (openSet.size > 0) {
    // Find the node with the lowest estimated total cost
    let currentNodeId = Array.from(openSet.entries()).reduce(
      (lowest, [id, node]) =>
        !lowest ||
        node.estimatedTotalCost < openSet.get(lowest)!.estimatedTotalCost
          ? id
          : lowest,
      null as string | null
    );

    if (!currentNodeId) break;

    const currentNode = openSet.get(currentNodeId)!;

    // Check if we've reached the target
    if (currentNodeId === target) {
      return {
        path: currentNode.path,
        totalCost: currentNode.cost,
      };
    }

    // Move current node from open set to closed set
    openSet.delete(currentNodeId);
    closedSet.add(currentNodeId);

    // Explore neighbors
    const nodeData = nodeMap.get(currentNodeId)!;
    nodeData.data.connectedStations.forEach((connection) => {
      const neighborId = connection.id;

      // Skip if already visited
      if (closedSet.has(neighborId)) return;

      const neighborNode = nodeMap.get(neighborId);
      if (!neighborNode) return;

      // Use the time from the connection
      const costToNeighbor = connection.time;

      const tentativeCost = currentNode.cost + costToNeighbor;

      // Check if this is a better path
      const existingNeighbor = openSet.get(neighborId);
      if (!existingNeighbor || tentativeCost < existingNeighbor.cost) {
        // Update or add neighbor to open set
        openSet.set(neighborId, {
          id: neighborId,
          cost: tentativeCost,
          estimatedTotalCost:
            tentativeCost + heuristic(neighborId, target) * 0.01, //A*
          // estimatedTotalCost: tentativeCost, //No heuristic for Dijkstra
          path: [...currentNode.path, neighborId],
          visited: false,
        });
      }
    });
  }

  // No path found
  return null;
};
