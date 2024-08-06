// src/components/TreeView.jsx
import PropTypes from "prop-types";
import { useCallback, useRef, useState } from "react";
import {
  ReactFlow,
  Controls,
  MiniMap,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "@xyflow/react";
import ContextMenu from "./ContextMenu"; // Node context menu component
import EdgeContextMenu from "./EdgeContextMenu"; // Edge context menu component
import GlobalMenuNodes from "./GlobalMenuNodes";
import { ZeroNode, FundNode, FruitNode } from "./Nodes"; // Import your custom nodes

const initialNodes = [
  {
    id: "0", // Unique ID for the ZeroNode
    type: "zeroNode", // Specify the type
    position: { x: window.innerWidth / 2 - 50, y: 20 }, // Centered at the top
    data: { name: "Zero Node" },
  },
];

const initialEdges = [];

const nodeTypes = {
  zeroNode: ZeroNode,
  fundNode: FundNode,
  fruitNode: FruitNode,
};

const TreeView = ({ data, setData }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [nodeMenu, setNodeMenu] = useState(null);
  const [edgeMenu, setEdgeMenu] = useState(null);
  const [selectedEdge, setSelectedEdge] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false); // Track if connecting
  const ref = useRef(null);

  const onConnectStart = useCallback(() => {
    setIsConnecting(true); // Set connecting state
  }, []);

  const onConnectEnd = useCallback(() => {
    setIsConnecting(false); // Reset connecting state
  }, []);

  const onConnect = useCallback(
    (params) => {
      setEdges((els) => addEdge(params, els));
      setIsConnecting(false); // Reset connecting state
    },
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

  const addNode = useCallback(
    (type) => {
      const lastNode = nodes[nodes.length - 1]; // Get the last node
      const newNodePosition = {
        x: lastNode ? lastNode.position.x + 100 : window.innerWidth / 2 - 50, // Position to the right of the last node
        y: lastNode ? lastNode.position.y + 50 : 70, // Slightly below the last node
      };

      const newNode = {
        id: `${nodes.length}`, // Generate a new ID
        type: type,
        position: newNodePosition,
        data: { name: `${type} Node`, currency: "USD" },
      };
      setNodes((nds) => nds.concat(newNode));
    },
    [nodes, setNodes]
  );

  const initialize = useCallback(() => {
    setNodes(initialNodes); // Reset to initial nodes
    setEdges(initialEdges); // Reset to initial edges
  }, [setNodes, setEdges]);

  const saveData = useCallback(() => {
    const newData = {
      nodes: nodes,
      edges: edges,
    };
    setData(newData); // Update the data state in App
    console.log("Saved data:", newData);
  }, [nodes, edges, setData]);

  return (
    <div
      style={{ height: "100vh", position: "relative" }}
      onClick={onPaneClick}
    >
      <GlobalMenuNodes
        onAddNode={addNode}
        onInitialize={initialize}
        onSaveData={saveData} // Pass the save function
      />
      <ReactFlow
        ref={ref}
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange} // Handle node changes
        onEdgesChange={onEdgesChange} // Handle edge changes
        onConnectStart={onConnectStart} // Start connecting
        onConnectEnd={onConnectEnd} // End connecting
        onConnect={onConnect}
        onPaneClick={onPaneClick}
        onNodeContextMenu={onNodeContextMenu} // Node context menu
        onEdgeContextMenu={onEdgeContextMenu} // Edge context menu
        fitView
        draggable={!isConnecting} // Disable dragging while connecting
      >
        <Controls />
        <MiniMap
          nodeColor={(node) => {
            switch (node.type) {
              case "zeroNode":
                return "blue";
              case "fundNode":
                return "green";
              case "fruitNode":
                return "orange";
              default:
                return "#eee";
            }
          }}
          style={{ background: "#fff", border: "1px solid #ccc" }} // Optional styling
        />
        <Background
          color="#aaa"
          gap={16}
        />
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

TreeView.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func.isRequired,
};

export default TreeView;
