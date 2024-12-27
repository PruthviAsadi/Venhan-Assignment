import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NodeEditor = ({ addNode }) => {
  const [nodeData, setNodeData] = useState({
    id: uuidv4(),
    type: "default",
    position: { x: 0, y: 0 },
    data: { label: "" },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNodeData((prevData) => ({
      ...prevData,
      data: { ...prevData.data, [name]: value },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNode(nodeData);
  };

  return (
    <div className="node-editor">
      <form onSubmit={handleSubmit}>
        <label>
          Node Label:
          <input
            type="text"
            name="label"
            value={nodeData.data.label}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Add Node</button>
      </form>
    </div>
  );
};

export default NodeEditor;
