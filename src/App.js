import React, { useState } from "react";
import ReactFlow, { ReactFlowProvider, addEdge, removeElements, Controls } from "reactflow";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  const [elements, setElements] = useState([
    // Initial elements (nodes and edges) will be populated here
  ]);

  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));

  const onConnect = (params) => setElements((els) => addEdge(params, els));

  return (
    <div className="App">
      <ReactFlowProvider>
        <div className="diagram-container">
          <ReactFlow
            elements={elements}
            onConnect={onConnect}
            onElementsRemove={onElementsRemove}
            style={{ width: "100%", height: "100vh" }}
          >
            <Controls />
          </ReactFlow>
        </div>
        <Sidebar setElements={setElements} />
      </ReactFlowProvider>
    </div>
  );
}

export default App;
