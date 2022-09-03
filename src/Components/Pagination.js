/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Pagination, PaginationItem } from "@mui/material";
import { Link } from "react-router-dom";

export const Paginate = ({ page }) => {
  return (
    <Pagination
      classes={{
        ul: {
          justifyContent: "space-around",
        },
      }}
      count={316}
      page={Number(page) || 1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem
          {...item}
          component={Link}
          to={`/users${item.page === 1 ? "" : `?page=${item.page}`}`}
        />
      )}
    />
  );
};
