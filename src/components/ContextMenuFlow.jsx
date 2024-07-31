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
import ContextMenu from "./ContextMenu";

import "@xyflow/react/dist/style.css";
// import './style.css';

const ContextMenuFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [menu, setMenu] = useState(null);
  const ref = useRef(null);

  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    [setEdges]
  );

  const onNodeContextMenu = useCallback(
    (event, node) => {
      event.preventDefault();

      const pane = ref.current.getBoundingClientRect();
      const menuWidth = 200; // Set your context menu width
      const menuHeight = 100; // Set your context menu height
      const offsetX = 5; // Horizontal offset
      const offsetY = 5; // Vertical offset

      // Calculate initial position based on event and node position
      let top = Math.min(event.clientY + offsetY, pane.height - menuHeight);
      let left = Math.min(event.clientX + offsetX, pane.width - menuWidth);

      // Adjust position if the menu would go off-screen
      if (top + menuHeight > pane.bottom) {
        top = pane.bottom - menuHeight; // Adjust to fit within the pane
      }

      if (left + menuWidth > pane.right) {
        left = pane.right - menuWidth; // Adjust to fit within the pane
      }

      setMenu({
        id: node.id,
        top,
        left,
        right: false,
        bottom: false,
      });
    },
    [setMenu]
  );

  // Close the context menu if it's open whenever the window is clicked.
  const onPaneClick = useCallback(() => setMenu(null), [setMenu]);

  return (
    <ReactFlow
      ref={ref}
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onPaneClick={onPaneClick}
      onNodeContextMenu={onNodeContextMenu}
      fitView
    >
      <Background />
      {menu && (
        <ContextMenu
          onClick={onPaneClick}
          {...menu}
        />
      )}
    </ReactFlow>
  );
};

export default ContextMenuFlow;
