// EdgeContextMenu.jsx
import PropTypes from "prop-types";
const EdgeContextMenu = ({ top, left, onDelete, onClose }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: top,
        left: left,
        background: "white",
        border: "1px solid #ccc",
        boxShadow: "2px 2px 5px rgba(0,0,0,0.3)",
        zIndex: 1000,
      }}
    >
      <div onClick={onClose}>Close</div>
      <div onClick={onDelete}>Delete Edge</div>
    </div>
  );
};

EdgeContextMenu.propTypes = {
  top: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EdgeContextMenu;
