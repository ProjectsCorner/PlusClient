import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart_amount",
  initialState: {
    cart_amount: 1000,
  },
  reducers: {
    cart_amount: (state, action) => {
      state.cart_amount = action.payload;
    },
  },
});

export const { cart_number } = cartSlice.actions;
export default cartSlice.reducer;
