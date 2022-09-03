import React from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import { useDispatch } from "react-redux";
import { newUser } from "../Redux/Thunk";
import { useNavigate } from "react-router-dom";
import styles from "../Styles/Form.module.scss";

export const CreateUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [postData, setPostData] = React.useState({
    name: "",
    email: "",
    gender: "",
    status: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(newUser(postData, navigate));

    clear();
  };
  const clear = () => {
    setPostData({
      name: "",
      email: "",
      gender: "",
      status: "",
    });
  };

  return (
    <Paper className={styles.paper} elevation={6}>
      <form
        autoComplete="off"
        noValidate
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Create your User</Typography>
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
