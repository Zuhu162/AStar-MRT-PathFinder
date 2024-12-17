import { BaseEdge, getSmoothStepPath, type EdgeProps } from "@xyflow/react";

export function AnimatedSVGEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  data, // Use data to determine the direction
}: EdgeProps) {
  // Determine if we need to reverse the path
  const isReversed = data?.direction === "reverse";

  // Generate path normally
  const [edgePath] = getSmoothStepPath({
    sourceX: isReversed ? targetX : sourceX,
    sourceY: isReversed ? targetY : sourceY,
    sourcePosition: isReversed ? targetPosition : sourcePosition,
    targetX: isReversed ? sourceX : targetX,
    targetY: isReversed ? sourceY : targetY,
    targetPosition: isReversed ? sourcePosition : targetPosition,
  });

  const strokeColor = style.stroke || "#000";

  return (
    <>
      <BaseEdge
        id={id}
        path={edgePath}
        style={{
          stroke: strokeColor,
          strokeWidth: style.strokeWidth || 15,
        }}
      />
      <circle
        r="50"
        fill={strokeColor}
        style={{ filter: `drop-shadow(3px 3px 5px ${strokeColor})` }}>
        <animateMotion
          dur="2s"
          repeatCount="indefinite"
          path={edgePath} // Use the adjusted path
        />
      </circle>
    </>
  );
}
