import PropTypes from "prop-types";
import { Handle, Position } from "@xyflow/react";

const FruitNode = ({ data }) => {
  return (
    <div className="px-4 py-2 shadow-md roruited-md bg-white border-2 border-stone-400">
      <div className="flex">
        <div className="ml-2">
          <div className="text-gray-500 text-lg font-bold">{data.name}</div>
          <div className="text-gray-600 text-sm">{data.currency}</div>
          <div className="text-gray-600 text-sm">{data.custodian}</div>
          <div className="text-gray-600 text-sm">{data.manager}</div>
          <div className="text-green-800 text-sm">{data.amount}</div>
        </div>

        <Handle
          type="target"
          position={Position.Top}
          className="w-16 !bg-yellow-500"
        />
      </div>
    </div>
  );
};

FruitNode.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    custodian: PropTypes.string.isRequired,
    manager: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
};
export default FruitNode;
