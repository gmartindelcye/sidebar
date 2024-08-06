// src/components/TreeStructure.jsx
import PropTypes from "prop-types";

const TreeStructure = ({ data }) => {
  return (
    <div>
      <h2>Tree Structure</h2>
      <h3>Nodes</h3>
      <pre>{JSON.stringify(data.nodes, null, 2)}</pre>
      <h3>Edges</h3>
      <pre>{JSON.stringify(data.edges, null, 2)}</pre>
    </div>
  );
};

TreeStructure.propTypes = {
  data: PropTypes.shape({
    nodes: PropTypes.array.isRequired,
    edges: PropTypes.array.isRequired,
  }).isRequired,
};

export default TreeStructure;
