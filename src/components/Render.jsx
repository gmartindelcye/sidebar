// src/components/Render.jsx
import PropTypes from "prop-types";
import SimpleFlow from "./SimpleFlow";
import ConnectingNodes from "./ConnectingNodes";
import DragHandle from "./DragHandle";

const Render = ({ selectedOption }) => {
  switch (selectedOption) {
    case "Simple Flow":
      return <SimpleFlow />;
    case "Connecting Nodes":
      return <ConnectingNodes />;
    case "Drag Handle":
      return <DragHandle />;
    default:
      return <div>Please select an option from the sidebar.</div>;
  }
};

Render.propTypes = {
  selectedOption: PropTypes.string,
};

export default Render;
