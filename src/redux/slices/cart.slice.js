import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, { payload }) => {
      console.log(payload);
      if (state.items.length == 0) {
        state.items = [payload];
        return;
      }
      let hasSameProduct = false;
      const cartData = state.items.map((val, i) => {
        console.log('asssss');
        if (payload.id === val.id) {
          hasSameProduct = true;
          return {
            ...val,
            qty: val.qty + payload.qty
          }
        }

        return val
      })

      if (!hasSameProduct) {
        state.items = [...cartData, payload];
      }else {
        state.items = [...cartData];
      }
    },

    adjustQty: (state, { payload }) => {
      state.items = state.items.map((val, i) => {
        if (payload.id === val.id) {
          hasSameProduct = true;
          return {
            ...val,
            qty: val.qty + payload.qty
          }
        }

        return val
      });


    },
    
    removeItem: (state, { payload }) => {
      state.items = state.items.filter((val) => payload.id !== val.id);
    },

    clearCart: (state, { payload }) => {
      state.items = [];
    },
  },
})

export const {
  addItem,
  adjustQty,
  removeItem,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;

