import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // cart products
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === product.id
      );

      state.totalQuantity++;

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({
          ...product,
          quantity: 1,
        });
      }
    },

    removeFromCart(state, action) {
      const id = action.payload;
      const item = state.items.find((i) => i.id === id);

      if (!item) return;

      state.totalQuantity--;

      if (item.quantity === 1) {
        state.items = state.items.filter((i) => i.id !== id);
      } else {
        item.quantity--;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
