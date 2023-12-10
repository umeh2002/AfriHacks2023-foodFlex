import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "" || null,
  toggle: false,
};

const reduxStates = createSlice({
  name: "states",
  initialState,
  reducers: {
    onUserState: (state, { payload }) => {
      state.user = payload;
    },
    onToggleState: (state, { payload }) => {
      state.toggle = payload;
    },
    onLogOutState: (state) => {
      state.user = null;
    },
  },
});

export const { onUserState, onToggleState, onLogOutState } =
  reduxStates.actions;

export default reduxStates.reducer;
