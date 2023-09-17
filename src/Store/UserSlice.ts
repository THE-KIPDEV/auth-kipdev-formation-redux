import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: localStorage.getItem("user") || null,
    token: localStorage.getItem("token") || null,
  },
  reducers: {
    login: (state, action) => {
      localStorage.setItem("token", action.payload.token.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      console.log(action.payload.user);
      state.user = JSON.stringify(action.payload.user);
      state.token = action.payload.token.token;
    },
    logout: (state) => {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      console.log("logout");
      state.user = null;
      state.token = null;
    },
    updateUser: (state, action) => {
      const user = JSON.parse(state.user?.toString() || "");
      user.firstname = action.payload.firstname;
      localStorage.setItem("user", JSON.stringify(user));
      state.user = JSON.stringify(user);
    },
  },
});

export const { login, logout, updateUser } = userSlice.actions;

export const selectUser = (state: any) => state.user.user;
export const selectToken = (state: any) => state.user.token;

export default userSlice.reducer;
