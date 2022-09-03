import React from "react";
import { Box, Button, Typography, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  margin: "0 auto",
  textAlign: "center",
};
export const DeletedUser = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return loading ? (
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
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        User Deleted
      </Typography>
      <Button size="large" color="primary" onClick={() => navigate("/users")}>
        Go back Home
      </Button>
    </Box>
  );
};
