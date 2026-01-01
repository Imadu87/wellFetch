import { createSlice } from "@reduxjs/toolkit";

const storedUser = localStorage.getItem("authUser");

const initialState = {
  user: storedUser ? JSON.parse(storedUser) : null,
  isAuthenticated: !!storedUser,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload; 
      localStorage.setItem("authUser", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("authUser");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;