import React from "react";
import { ReactFlowProvider } from "react-flow-renderer";
import App from "../App";

const DiagramContainer = () => {
  return (
    <ReactFlowProvider>
      <App />
    </ReactFlowProvider>
  );
};

export default DiagramContainer;
