import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: window.localStorage.getItem("token") || null,
  user: window.localStorage.getItem("user") || null,
};

export const userSlice = createSlice({
  initialState: initialState,
  name: "userSlice",
  reducers: {
    setUser: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      window.localStorage.setItem("token", action.payload.token);
      window.localStorage.setItem("user", action.payload.user);
    },
    clearUser: (state) => {
      state.token = null;
      state.user = null;
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("user");
    },
  },
});

export const { name: userSliceName, actions, reducer } = userSlice;

export const { setUser, clearUser } = actions;

export default userSlice.reducer;
