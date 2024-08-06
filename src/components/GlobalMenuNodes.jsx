// src/components/GlobalMenuNodes.jsx
import PropTypes from "prop-types";

const GlobalMenuNodes = ({ onAddNode, onInitialize, onSaveData }) => {
  const handleSave = () => {
    onSaveData(); // This should call the save function passed as a prop
    console.log("Save action triggered");
  };

  const handleInitialize = () => {
    onInitialize();
    console.log("Initialize action triggered");
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 10,
        left: 10,
        background: "white",
        border: "1px solid #ccc",
        boxShadow: "2px 2px 5px rgba(0,0,0,0.3)",
        padding: "10px",
        zIndex: 1000,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <button
          onClick={() => onAddNode("fundNode")}
          style={{ cursor: "pointer" }}
        >
          Add Fund Node
        </button>
        <button
          onClick={() => onAddNode("fruitNode")}
          style={{ cursor: "pointer" }}
        >
          Add Fruit Node
        </button>
      </div>
      <hr />
      <button
        className="mt-2 mb-2"
        onClick={handleSave}
      >
        Save
      </button>
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
};

export default GlobalMenuNodes;
