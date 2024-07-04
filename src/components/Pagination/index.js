import React, { useContext } from "react";
import Pagination from "@mui/material/Pagination";
import { ToDoContext } from "../../context";

export default function ProductPagination() {
  const { count, setPage } = useContext(ToDoContext);

  function handlerPage(p, n) {
    setPage(n);
  }
  return (
    <div
      style={{
        background: "#fff",
        marginBlock: "20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Pagination onChange={handlerPage} count={count} color="primary" />
    </div>
  );
}
