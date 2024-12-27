import React, { useState } from "react";
import NodeEditor from "./NodeEditor";
import "./Sidebar.css";

const Sidebar = ({ setElements }) => {
  const [showEditor, setShowEditor] = useState(false);

  const addNode = (node) => {
    setElements((els) => [...els, node]);
    setShowEditor(false);
  };

  return (
    <div className="sidebar">
      <button className="btn" onClick={() => setShowEditor(true)}>Add Node</button>
      {showEditor && <NodeEditor addNode={addNode} />}
    </div>
  );
};

export default Sidebar;
