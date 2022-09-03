import * as React from "react";
import { Box, Button, Modal } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deletedUser } from "../Redux/Thunk";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  textAlign: "center",
};

export function DeleteUser({ id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const userWasDeleted = () => {
    try {
      dispatch(deletedUser(id));
      navigate("/users/deleted");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <DeleteIcon sx={{ color: "red" }} />
      </Button>
      <Modal
        open={open}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">
            Are you sure, you want to delete this user?{" "}
          </h2>
          <Button onClick={userWasDeleted}>
            <CheckCircleIcon fontSize="large" sx={{ color: "green" }} />
          </Button>
          <Button onClick={handleClose}>
            <CancelIcon fontSize="large" sx={{ color: "red" }} />
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
