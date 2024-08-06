// src/components/TreeView.jsx
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
import ContextMenu from "./ContextMenu";
import EdgeContextMenu from "./EdgeContextMenu";
import { ZeroNode, FundNode, FruitNode } from "./Nodes"; // Import your custom nodes

const initialNodes = [
  {
    id: "0",
    type: "zeroNode",
    position: { x: 250, y: 50 },
    data: { name: "Root Node", currency: "USD" },
  },
  {
    id: "1",
    type: "fundNode",
    position: { x: 100, y: 150 },
    data: {
      name: "Fund A",
      currency: "USD",
      custodian: "Custodian A",
      manager: "Manager A",
    },
  },
  {
    id: "2",
    type: "fundNode",
    position: { x: 400, y: 150 },
    data: {
      name: "Fund B",
      currency: "USD",
      custodian: "Custodian B",
      manager: "Manager B",
    },
  },
  {
    id: "3",
    type: "fruitNode",
    position: { x: 20, y: 300 },
    data: {
      name: "Fruit A1",
      currency: "USD",
      custodian: "Custodian A",
      manager: "Manager A",
      amount: 100,
    },
  },
  {
    id: "4",
    type: "fruitNode",
    position: { x: 200, y: 300 },
    data: {
      name: "Fruit A2",
      currency: "USD",
      custodian: "Custodian A",
      manager: "Manager A",
      amount: 200,
    },
  },
  {
    id: "5",
    type: "fruitNode",
    position: { x: 350, y: 300 },
    data: {
      name: "Fruit B1",
      currency: "USD",
      custodian: "Custodian B",
      manager: "Manager B",
      amount: 300,
    },
  },
  {
    id: "6",
    type: "fruitNode",
    position: { x: 550, y: 300 },
    data: {
      name: "Fruit B2",
      currency: "USD",
      custodian: "Custodian B",
      manager: "Manager B",
      amount: 400,
    },
  },
];

const initialEdges = [
  { id: "e0-1", source: "0", target: "1" },
  { id: "e0-2", source: "0", target: "2" },
  { id: "1-3", source: "1", target: "3" },
  { id: "1-4", source: "1", target: "4" },
  { id: "2-5", source: "2", target: "5" },
  { id: "2-6", source: "2", target: "6" },
];

const nodeTypes = {
  zeroNode: ZeroNode,
  fundNode: FundNode,
  fruitNode: FruitNode,
};

const TreeView = () => {
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
  return (
    <div style={{ height: "100vh" }}>
      <ReactFlow
        ref={ref}
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange} // Handle node changes
        onEdgesChange={onEdgesChange} // Handle edge changes
        onConnect={onConnect}
        onPaneClick={onPaneClick}
        onNodeContextMenu={onNodeContextMenu}
        onEdgeContextMenu={onEdgeContextMenu}
        fitView
        draggable={true}
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
        />{" "}
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
        {/* Optional background */}
      </ReactFlow>
    </div>
  );
};

export default TreeView;
