import PropTypes from "prop-types";
import { useCallback } from "react";
import { useReactFlow } from "@xyflow/react";

export default function ContextMenu({
  id,
  top,
  left,
  right,
  bottom,
  ...props
}) {
  const { getNode, setNodes, addNodes, setEdges } = useReactFlow();
  const duplicateNode = useCallback(() => {
    const node = getNode(id);
    const position = {
      x: node.position.x + 50,
      y: node.position.y + 50,
    };

    addNodes({
      ...node,
      selected: false,
      dragging: false,
      id: `${node.id}-copy`,
      position,
    });
  }, [id, getNode, addNodes]);

  const deleteNode = useCallback(() => {
    setNodes((nodes) => nodes.filter((node) => node.id !== id));
    setEdges((edges) => edges.filter((edge) => edge.source !== id));
  }, [id, setNodes, setEdges]);

  return (
    <div
      style={{ top, left, right, bottom }}
      className="bg-white border border-solid shadow-lg absolute z-10"
      {...props}
    >
      <p style={{ margin: "0.5em" }}>
        <small>node: {id}</small>
      </p>
      <button
        onClick={duplicateNode}
        className="border-none block p-2 text-left w-full hover:bg-gray-100"
      >
        duplicate
      </button>
      <button
        onClick={deleteNode}
        className="border-none block p-2 text-left w-full hover:bg-gray-100"
      >
        delete
      </button>
    </div>
  );
}

ContextMenu.propTypes = {
  id: PropTypes.string.isRequired,
  top: PropTypes.number,
  left: PropTypes.number,
  right: PropTypes.number,
  bottom: PropTypes.number,
};
