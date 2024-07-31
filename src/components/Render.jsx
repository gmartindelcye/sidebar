// src/components/Render.jsx
import PropTypes from "prop-types";
import SimpleFlow from "./SimpleFlow";
import ConnectingNodes from "./ConnectingNodes";
import Option3 from "./Option3";

const Render = ({ selectedOption }) => {
  switch (selectedOption) {
    case "Simple Flow":
      return <SimpleFlow />;
    case "Connecting Nodes":
      return <ConnectingNodes />;
    case "Option 3":
      return <Option3 />;
    default:
      return <div>Please select an option from the sidebar.</div>;
  }
};

Render.propTypes = {
  selectedOption: PropTypes.string,
};

export default Render;
