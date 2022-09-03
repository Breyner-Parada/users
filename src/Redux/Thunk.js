import {
  fecthUsers,
  fecthOneUser,
  createUsers,
  updateUsers,
  deleteUsers,
} from "../Api";
import {
  getUsers,
  getOneUser,
  addUser,
  upgradeUser,
  deleteUser,
  start_loading,
  end_loading,
} from "./Slice";

export const getAllUsers = (page) => {
  return async (dispatch) => {
    try {
      dispatch(start_loading());
      const { data } = await fecthUsers(page);
      dispatch(getUsers(data));
      dispatch(end_loading());
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUser = (id) => {
  return async (dispatch) => {
    try {
      dispatch(start_loading());
      const { data } = await fecthOneUser(id);
      dispatch(getOneUser(data));
      dispatch(end_loading());
    } catch (error) {
      console.log(error);
    }
  };
};

export const newUser = (datos, navigate) => {
  return async (dispatch) => {
    try {
      const { data } = await createUsers(datos);
      navigate(`/users/${data.id}`);
      dispatch(addUser(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updatedUser = (id, datos, navigate) => {
  return async (dispatch) => {
    try {
      const { data } = await updateUsers(id, datos);
      navigate(`/users/${data.id}`);
      dispatch(upgradeUser(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deletedUser = (id) => {
  return async (dispatch) => {
    try {
      await deleteUsers(id);
      dispatch(deleteUser(id));
    } catch (error) {
      console.log(error);
    }
  };
};
