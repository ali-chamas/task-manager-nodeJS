import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: window.localStorage.getItem("token") || null,
  user: null,
};

export const userSlice = createSlice({
  initialState: initialState,
  name: "userSlice",
  reducers: {
    setUser: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      window.localStorage.setItem("token", action.payload.token);
    },
    clearUser: (state) => {
      state.token = null;
      state.user = null;
      window.localStorage.removeItem("token");
    },
  },
});

export const { name: userSliceName, actions, reducer } = userSlice;

export const { setUser, clearUser } = actions;

export default userSlice.reducer;
