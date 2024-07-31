// src/components/TreeView.jsx
import React from "react";
import { ReactFlow, Controls } from "@xyflow/react";
import { ZeroNode, FundNode, FruitNode } from "./Nodes"; // Import your nodes

const initialNodes = [
  {
    id: "0",
    type: "zeroNode", // Custom type for ZeroNode
    position: { x: 250, y: 50 },
    data: { name: "Root Node", currency: "USD" },
  },
  {
    id: "1",
    type: "fundNode", // Custom type for FundNode
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
    type: "fruitNode", // Custom type for FruitNode
    position: { x: 20, y: 300 }, // Increased space from Fund A
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
    position: { x: 200, y: 300 }, // Increased space between fruits
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
    position: { x: 350, y: 300 }, // Increased space from Fund B
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
    position: { x: 550, y: 300 }, // Increased space between fruits
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
  return (
    <div style={{ height: "100vh" }}>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        nodeTypes={nodeTypes}
        fitView
        draggable={true} // Ensure nodes are draggable
      >
        <Controls /> {/* Optional: Add controls for zooming and panning */}
      </ReactFlow>
    </div>
  );
};

export default TreeView;
