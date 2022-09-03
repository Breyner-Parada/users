/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  CircularProgress,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../Redux/Thunk";
import { DeleteUser } from "../Components/DeleteUser";
import { Paginate } from "../Components/Pagination";
import "../Styles/Home.scss";

export const Home = () => {
  const Location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function useQuery() {
    return new URLSearchParams(Location.search);
  }
  const query = useQuery();
  const page = query.get("page") || 1;

  React.useEffect(() => {
    async function getUsers() {
      dispatch(getAllUsers(page));
    }
    getUsers();
  }, [Location]);

  const { users, isLoading } = useSelector((state) => state.users);

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
    <>
      <Button
        variant="contained"
        onClick={() => navigate("/users/create")}
        sx={{ position: "sticky", top: 0, marginBottom: 5 }}
      >
        ADD USER
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#28BBFF", color: "#fff" }}>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.gender}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => navigate(`/users/edit/${row.id}`)}
                  >
                    <EditIcon />
                  </Button>
                  <DeleteUser id={row.id} />
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => navigate(`/users/${row.id}`)}
                  >
                    <VisibilityIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Paper
        elevation={6}
        sx={{ borderRadius: "4px", marginTop: "1rem", padding: "16px" }}
      >
        <Paginate page={page} />
      </Paper>
    </>
  );
};
