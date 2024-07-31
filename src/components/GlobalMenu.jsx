// GlobalMenu.jsx
import PropTypes from "prop-types";
const GlobalMenu = ({ onAddNode }) => {
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
      <button onClick={onAddNode}>Add Node</button>
    </div>
  );
};

GlobalMenu.propTypes = {
  onAddNode: PropTypes.func.isRequired,
};

export default GlobalMenu;
