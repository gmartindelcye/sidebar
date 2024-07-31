// src/components/Render.jsx
import PropTypes from "prop-types";
import SimpleFlow from "./SimpleFlow";
import ConnectingNodes from "./ConnectingNodes";
import DragHandle from "./DragHandle";
import CustomNode from "./CustomNode";
import ContextMenuFlow from "./ContextMenuFlow";
import BetterContextMenuFlow from "./BetterContextMenuFlow";

const Render = ({ selectedOption }) => {
  switch (selectedOption) {
    case "Simple Flow":
      return <SimpleFlow />;
    case "Connecting Nodes":
      return <ConnectingNodes />;
    case "Drag Handle":
      return <DragHandle />;
    case "Custom Node":
      return <CustomNode />;
    case "Context Menu":
      return <ContextMenuFlow />;
    case "Better Context Menu":
      return <BetterContextMenuFlow />;
    default:
      return <div>Please select an option from the sidebar.</div>;
  }
};

Render.propTypes = {
  selectedOption: PropTypes.string,
};

export default Render;
