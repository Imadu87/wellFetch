import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // { id, name, newPrice, quantity, image }
  totalQuantity: 0,
  subtotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }

      state.totalQuantity = state.items.reduce((acc, item) => acc + item.quantity, 0);
      state.subtotal = state.items.reduce(
        (acc, item) => acc + item.quantity * Number(item.newPrice),
        0
      );
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
      state.totalQuantity = state.items.reduce((acc, item) => acc + item.quantity, 0);
      state.subtotal = state.items.reduce(
        (acc, item) => acc + item.quantity * Number(item.newPrice),
        0
      );
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
          state.items = state.items.filter((i) => i.id !== action.payload);
        }
      }
      state.totalQuantity = state.items.reduce((acc, item) => acc + item.quantity, 0);
      state.subtotal = state.items.reduce(
        (acc, item) => acc + item.quantity * Number(item.newPrice),
        0
      );
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalQuantity = state.items.reduce((acc, item) => acc + item.quantity, 0);
      state.subtotal = state.items.reduce(
        (acc, item) => acc + item.quantity * Number(item.newPrice),
        0
      );
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.subtotal = 0;
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
