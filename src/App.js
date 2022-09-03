import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import * as Page from "./Pages";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/users" element={<Page.Home />} />
          <Route path="/users/create" element={<Page.CreateUser />} />
          <Route path="/users/deleted" element={<Page.DeletedUser />} />
          <Route path="/users/:id" element={<Page.ReadUser />} />
          <Route path="/users/edit/:id" element={<Page.UpdateUser />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
