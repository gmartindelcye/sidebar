// src/components/Render.jsx
import PropTypes from "prop-types";
import SimpleFlow from "./SimpleFlow";
import ConnectingNodes from "./ConnectingNodes";
import DragHandle from "./DragHandle";
import CustomNode from "./CustomNode";
import ContextMenuFlow from "./ContextMenuFlow";
import BetterContextMenuFlow from "./BetterContextMenuFlow";
import GlobalMenuFlow from "./GlobalMenuFlow";
import TreeView from "./TreeView";
import TreeStructure from "./TreeStructure";

const Render = ({ selectedOption, data, setData }) => {
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
    case "Global Menu":
      return <GlobalMenuFlow />;
    case "Tree View":
      return (
        <TreeView
          data={data}
          setData={setData}
        />
      ); // Pass setData
    case "Tree Structure":
      return <TreeStructure data={data} />; // Render TreeStructure
    default:
      return <div>Please select an option from the sidebar.</div>;
  }
};

Render.propTypes = {
  selectedOption: PropTypes.string,
  data: PropTypes.object,
  setData: PropTypes.func.isRequired, // Ensure setData is required
};

export default Render;
