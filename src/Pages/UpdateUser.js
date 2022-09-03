/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  CircularProgress,
  Box,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updatedUser, getUser } from "../Redux/Thunk";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../Styles/Form.module.scss";

export const UpdateUser = () => {
  const { id } = useParams();
  const [currentId, setCurrentId] = React.useState(id);
  const { isLoading, user } = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [postData, setPostData] = React.useState({
    name: "",
    email: "",
    gender: "",
    status: "",
  });

  React.useEffect(() => {
    dispatch(getUser(id));
  }, [id]);

  React.useEffect(() => {
    if (user) setPostData(user);
  }, [user]);

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(updatedUser(currentId, postData, navigate));
  };
  const clear = () => {
    setCurrentId(null);
    setPostData({
      name: "",
      email: "",
      gender: "",
      status: "",
    });
  };
  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <CircularProgress size={70} />
      </Box>
    );
  }

  return (
    <Paper className={styles.paper} elevation={6}>
      <form
        autoComplete="off"
        noValidate
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Edit" : "Create"} your User
        </Typography>
        <TextField
          sx={{ marginBottom: 2 }}
          name="name"
          variant="outlined"
          label="Name"
          size="small"
          fullWidth
          value={postData.name}
          onChange={(event) =>
            setPostData({ ...postData, name: event.target.value })
          }
        />
        <TextField
          sx={{ marginBottom: 2 }}
          name="email"
          variant="outlined"
          label="Email"
          multiline
          fullWidth
          value={postData.email}
          onChange={(event) =>
            setPostData({ ...postData, email: event.target.value })
          }
        />
        <TextField
          sx={{ marginBottom: 2 }}
          name="gender"
          variant="outlined"
          label="Gender"
          multiline
          fullWidth
          value={postData.gender}
          onChange={(event) =>
            setPostData({ ...postData, gender: event.target.value })
          }
        />
        <TextField
          sx={{ marginBottom: 2 }}
          name="status"
          variant="outlined"
          label="Status"
          multiline
          fullWidth
          value={postData.status}
          onChange={(event) =>
            setPostData({ ...postData, status: event.target.value })
          }
        />
        <Button
          sx={{ marginBottom: 1.5 }}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};
