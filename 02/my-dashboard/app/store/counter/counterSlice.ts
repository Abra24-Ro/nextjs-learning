import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  count: number;
  isReady?: boolean;
}

const initialState: CounterState = {
  count: 5,
  isReady: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    initCounterState(state, action: PayloadAction<number>) {
      if (state.isReady) return;
      state.count = action.payload;
      state.isReady = true;
    },
    addOne(state) {
      state.count++;
    },
    subtractOne(state) {
      if (state.count > 0) state.count--;
      else state.count = 0;
    },
    resetCounter(state, action: PayloadAction<number>) {
      state.count = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addOne, subtractOne, resetCounter ,initCounterState} = counterSlice.actions;

export default counterSlice.reducer;
