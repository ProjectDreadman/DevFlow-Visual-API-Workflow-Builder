import { Handle, Position } from "reactflow";
import { useState } from "react";
import { validateNode } from "@devflow/core";

export default function ApiNode({ data }: any) {
  const [method, setMethod] = useState(data.method);
  const [url, setUrl] = useState(data.url);

  const isValid = validateNode({ id: "", method, url });

  return (
    <div
      style={{
        padding: 10,
        border: `2px solid ${isValid ? "#00ff88" : "#ff4444"}`,
        borderRadius: 8,
        background: "#1e1e1e",
        color: "white",
        width: 220,
      }}
    >
      <Handle type="target" position={Position.Top} />

      <strong>API Node</strong>

      <select value={method} onChange={(e) => setMethod(e.target.value)}>
        <option>GET</option>
        <option>POST</option>
        <option>PUT</option>
        <option>DELETE</option>
      </select>

      <input
        type="text"
        placeholder="https://api.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ width: "100%", marginTop: 6 }}
      />

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
