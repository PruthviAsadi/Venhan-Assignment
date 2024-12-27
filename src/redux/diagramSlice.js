import { createSlice } from "@reduxjs/toolkit";

const diagramSlice = createSlice({
  name: "diagram",
  initialState: {
    elements: [],
  },
  reducers: {
    addNode: (state, action) => {
      state.elements.push(action.payload);
    },
    removeNode: (state, action) => {
      state.elements = state.elements.filter((element) => element.id !== action.payload);
    },
    addEdge: (state, action) => {
      state.elements.push(action.payload);
    },
  },
});

export const { addNode, removeNode, addEdge } = diagramSlice.actions;
export default diagramSlice.reducer;
