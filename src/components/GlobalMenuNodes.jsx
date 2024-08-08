// src/components/GlobalMenuNodes.jsx
import PropTypes from "prop-types";

const GlobalMenuNodes = ({
  onAddNode,
  onInitialize,
  onSaveData,
  onLoadData,
}) => {
  const handleLoad = () => {
    onLoadData();
  };

  const handleSave = () => {
    onSaveData(); // This should call the save function passed as a prop
    console.log("Save action triggered");
  };

  const handleInitialize = () => {
    onInitialize();
    console.log("Initialize action triggered");
  };

  return (
    <div className="absolute top-2 left-2 bg-white border border-gray-300 shadow-lg p-2 z-50">
      <div className="flex flex-col gap-1">
        <button
          onClick={() => onAddNode("fundNode")}
          className="cursor-pointer"
        >
          Add Fund Node
        </button>
        <button
          onClick={() => onAddNode("fruitNode")}
          className="cursor-pointer"
        >
          Add Fruit Node
        </button>
      </div>
      <hr />
      <div className="flex flex-col gap-1 mt-2">
        <button
          className="cursor-pointer text-left"
          onClick={handleLoad}
        >
          Load
        </button>
        <button
          className="cursor-pointer text-left"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
      <hr />
      <button
        className="mt-2 text-red-600"
        onClick={handleInitialize}
      >
        Reset
      </button>
    </div>
  );
};

GlobalMenuNodes.propTypes = {
  onAddNode: PropTypes.func.isRequired,
  onInitialize: PropTypes.func.isRequired,
  onSaveData: PropTypes.func.isRequired,
  onLoadData: PropTypes.func.isRequired,
};

export default GlobalMenuNodes;
