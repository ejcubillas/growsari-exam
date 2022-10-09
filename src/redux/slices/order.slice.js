import { createSlice } from '@reduxjs/toolkit';

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orders: []
  },
  reducers: {
    newOrder: (state, { payload }) => {
      state.orders = [...state.orders, payload];
    },
    
  },
})

export const {
  newOrder,
} = orderSlice.actions;

export default orderSlice.reducer;

