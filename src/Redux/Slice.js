import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: { isLoading: true, users: [] },
  reducers: {
    getUsers(state, action) {
      return {
        ...state,
        users: action.payload,
      };
    },
    getOneUser(state, action) {
      return {
        ...state,
        user: action.payload,
      };
    },
    addUser(state, action) {
      return { ...state, users: [...state.users, action.payload] };
    },
    upgradeUser(state, action) {
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    },
    deleteUser(state, action) {
      return state.filter((user) => user.id !== action.payload);
    },
    start_loading(state, action) {
      return {
        ...state,
        isLoading: true,
      };
    },
    end_loading(state, action) {
      return {
        ...state,
        isLoading: false,
      };
    },
  },
});

export const {
  getUsers,
  getOneUser,
  addUser,
  upgradeUser,
  deleteUser,
  start_loading,
  end_loading,
} = userSlice.actions;
export default userSlice.reducer;
