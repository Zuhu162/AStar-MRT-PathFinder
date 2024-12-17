import { memo } from "react";
import { Handle, Position } from "@xyflow/react";
import { NodeData } from "../../../types/types";

interface Data {
  data: NodeData;
}

function getStationColor(color: String) {
  switch (color) {
    case "blue":
      return "bg-blue-600";
      break;

    case "yellow":
      return "bg-yellow-400";
      break;

    case "red":
      return "bg-red-400";
      break;

    case "pink":
      return "bg-pink-500";
      break;

    case "purple":
      return "bg-purple-800";
      break;

    case "aqua":
      return "bg-cyan-400";
      break;

    case "gold":
      return "bg-yellow-800";
      break;
    case "green":
      return "bg-green-800";
      break;

    default:
      return "bg-grey-500";
      break;
  }
}

const DEFAULT_HANDLE_STYLE = {
  width: 10,
  height: 10,
  bottom: -5,
};

function CustomNode({ data }: Data) {
  return (
    <div
      className={`p-3 rounded-md w-[150px] bg-white shadow-md border-gray-400`}>
      <div className="flex w-full h-full justify-center items-center">
        {data.lines.map((line, index) => {
          const offset = index * 20;

          return (
            <div key={index}>
              <div
                className={`text-white w-12 h-12 flex justify-center items-center ${getStationColor(
                  line.color
                )}`}>
                <p className="font-semibold">{line.stationNumber}</p>
                <Handle
                  id={`${data.label}-${line.color}-target`} // Unique ID for the target handle
                  type="target"
                  position={Position.Top}
                  style={{
                    ...DEFAULT_HANDLE_STYLE,
                    left: `${0 + offset}%`,
                    background: line.color,
                  }}
                />

                <Handle
                  id={`${data.label}-${line.color}-source`} // Unique ID for the source handle
                  type="source"
                  position={Position.Top}
                  style={{
                    ...DEFAULT_HANDLE_STYLE,
                    left: `${0 + offset}%`,
                    background: line.color,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-center">
        <div className="text-lg font-bold">{data.label}</div>
      </div>
    </div>
  );
}

export default memo(CustomNode);
