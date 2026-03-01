import React, { useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  addEdge,
  useEdgesState,
  useNodesState,
  Connection,
  Edge,
  Node,
} from "reactflow";
import "reactflow/dist/style.css";

import ApiNode from "./ApiNode";

const nodeTypes = {
  apiNode: ApiNode,
};

const initialNodes: Node[] = [
  {
    id: "1",
    type: "apiNode",
    position: { x: 100, y: 100 },
    data: { label: "API Request", method: "GET", url: "" },
  },
];

const initialEdges: Edge[] = [];

export default function FlowBuilder() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
