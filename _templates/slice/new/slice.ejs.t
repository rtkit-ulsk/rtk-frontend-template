---
to: src/store/slices/<%= name %>Slice.ts
---
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface <%= Name %>State {
  value: number;
}

const initialState: <%= Name %>State = {
  value: 0,
};

export const <%= name %>Slice = createSlice({
  name: '<%= name %>',
  initialState,
  reducers: {
    testAction: state => {
      state.value += 1;
    },
  },
});

export const { testAction } = <%= name %>Slice.actions;

export default <%= name %>Slice.reducer;
