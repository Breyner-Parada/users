/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Paper,
  Typography,
  Button,
  Box,
  CircularProgress,
} from "@mui/material";
import { getUser } from "../Redux/Thunk";

export const ReadUser = () => {
  const { id } = useParams();
  const { user, isLoading } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(getUser(id));
  }, [id]);

  const styles = {
    paper: {
      width: "300px",
      margin: "10px auto",
      textAlign: "center",
      padding: "8px",
    },
    text: {
      fontSize: "20px",
      fontWeight: "bold",
    },
  };

  return isLoading ? (
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
  ) : (
    <Paper sx={styles.paper} elevation={4}>
      <Typography>
        <span style={styles.text}>ID: </span>
        {user.id}
      </Typography>
      <Typography>
        <span style={styles.text}>Name: </span>
        {user.name}
      </Typography>
      <Typography>
        <span style={styles.text}>Email: </span>
        {user.email}
      </Typography>
      <Typography>
        <span style={styles.text}>Gender: </span>
        {user.gender}
      </Typography>
      <Typography>
        <span style={styles.text}>Status: </span>
        {user.status}
      </Typography>

      <Button
        sx={{ marginTop: "30px" }}
        variant="contained"
        onClick={() => navigate("/users")}
      >
        Go back Home
      </Button>
    </Paper>
  );
};
