import { createSlice } from '@reduxjs/toolkit';

import { getData, putData } from '../../utils/fetch';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    selectedItems: {},
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    toogleItemSelection: (state, action) => {
      const { itemId, itemPrice } = action.payload;
      if (state.selectedItems[itemId]) {
        delete state.selectedItems[itemId];
      } else {
        state.selectedItems[itemId] = itemPrice;
      }
    },
    updateItemQuantity(state, action) {
      const { itemId, quantity } = action.payload;
      const item = state.items.find((item) => item._id === itemId);
      if (item) {
        item.quantity = quantity;
      }
    },
    clearSelectedItems(state) {
      state.selectedItems = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(updateCarts.fulfilled, (state, action) => {
        const updatedItem = action.payload;
        const itemIndex = state.items.findIndex(
          (item) => item._id === updatedItem._id
        );
        if (itemIndex !== -1) {
          state.items[itemIndex] = updatedItem;
        }
      });
  },
});

export const {
  setItems,
  toggleItemSelection,
  updateItemQuantity,
  clearSelectedItems,
} = cartSlice.actions;

export default cartSlice.reducer;
