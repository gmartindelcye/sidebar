import PropTypes from "prop-types";
import { Handle, Position } from "@xyflow/react";

const ZeroNode = ({ data }) => {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400">
      <div className="flex">
        <div className="ml-2">
          <div className="text-gray-500 text-lg font-bold">{data.name}</div>
          <div className="text-gray-600 text-sm">{data.currency}</div>
        </div>

        {/* <Handle
        type="target"
        position={Position.Top}
        className="w-16 !bg-teal-500"
      /> */}
        <Handle
          type="source"
          position={Position.Bottom}
          className="w-16 !bg-blue-700"
        />
      </div>
    </div>
  );
};

ZeroNode.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
export default ZeroNode;
