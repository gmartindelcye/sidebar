// src/components/GlobalMenuFlow.jsx
import { useCallback, useRef, useState } from "react";
import {
  ReactFlow,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "@xyflow/react";

import {
  initialNodes,
  initialEdges,
} from "../constants/context_menu_nodes-edges";
import ContextMenu from "./ContextMenu"; // Node context menu
import EdgeContextMenu from "./EdgeContextMenu"; // Edge context menu

import "@xyflow/react/dist/style.css";

const GlobalMenuFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [nodeMenu, setNodeMenu] = useState(null);
  const [edgeMenu, setEdgeMenu] = useState(null);
  const [selectedEdge, setSelectedEdge] = useState(null);
  const ref = useRef(null);

  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    [setEdges]
  );

  const onNodeContextMenu = useCallback(
    (event, node) => {
      event.preventDefault();
      const pane = ref.current.getBoundingClientRect();
      const offset = 10;

      setNodeMenu({
        id: node.id,
        top: Math.min(event.clientY + offset, pane.height - 200),
        left: Math.min(event.clientX + offset, pane.width - 200),
      });
      setEdgeMenu(null); // Close edge menu if it's open
    },
    [setNodeMenu, setEdgeMenu]
  );

  const onEdgeContextMenu = useCallback(
    (event, edge) => {
      event.preventDefault();
      const pane = ref.current.getBoundingClientRect();
      const offset = 10;

      setSelectedEdge(edge.id); // Store the selected edge ID
      setEdgeMenu({
        id: edge.id,
        top: Math.min(event.clientY + offset, pane.height - 200),
        left: Math.min(event.clientX + offset, pane.width - 200),
      });
      setNodeMenu(null); // Close node menu if it's open
    },
    [setEdgeMenu, setNodeMenu]
  );

  const handleDeleteEdge = useCallback(() => {
    if (selectedEdge) {
      setEdges((eds) => eds.filter((e) => e.id !== selectedEdge)); // Remove the edge
      setSelectedEdge(null); // Clear the selected edge
    }
    setEdgeMenu(null); // Close the edge context menu
  }, [selectedEdge, setEdges]);

  const onPaneClick = useCallback(() => {
    setNodeMenu(null);
    setEdgeMenu(null); // Close both menus when clicking outside
    setSelectedEdge(null); // Clear selected edge
  }, [setNodeMenu, setEdgeMenu]);

  const addNode = useCallback(() => {
    const newNode = {
      id: `${nodes.length + 1}`, // Unique ID for the new node
      position: { x: 100, y: 100 }, // Default position
      data: { label: `Node ${nodes.length + 1}` },
      type: "default", // Adjust based on your node type
    };
    setNodes((nds) => [...nds, newNode]);
  }, [nodes, setNodes]);

  return (
    <div style={{ position: "relative", height: "100%" }}>
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
        <button onClick={addNode}>Add Node</button>
      </div>
      <ReactFlow
        ref={ref}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onPaneClick={onPaneClick}
        onNodeContextMenu={onNodeContextMenu}
        onEdgeContextMenu={onEdgeContextMenu} // Handle edge context menu
        fitView
      >
        <Background />
        {nodeMenu && (
          <ContextMenu
            onClick={onPaneClick}
            {...nodeMenu}
          />
        )}
        {edgeMenu && (
          <EdgeContextMenu
            onClose={onPaneClick}
            onDelete={handleDeleteEdge} // Pass the delete handler
            {...edgeMenu}
          />
        )}
      </ReactFlow>
    </div>
  );
};

export default GlobalMenuFlow;
