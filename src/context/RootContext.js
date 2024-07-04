import React, { useReducer, useState } from "react";
import { ToDoContext } from ".";
import axios from "axios";

const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "READ":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

const RootContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const API =
    "https://api.elchocrud.pro/api/v1/8fd6f610335ff1a92f5d5c87d7b9db9a/product";

  async function addProduct(newProduct) {
    await axios.post(API, newProduct);
    readProduct();
  }

  async function readProduct() {
    let { data } = await axios.get(API);
    dispatch({
      type: "READ",
      payload: data,
    });
  }

  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    readProduct();
  }

  // ? PAGINATION

  let [page, setPage] = useState(1);

  const itemsPerPage = 2;

  const count = Math.ceil(state.data.length / itemsPerPage);

  function currentPage() {
    let start = (page - 1) * itemsPerPage;
    let end = start + itemsPerPage;
    return state.data.slice(start, end);
  }

  // ? PAGINATION

  // ? SEARCH

  function searchProduct(value) {
    let result = state.data.filter((el) => el.name.includes(value));
    dispatch({
      type: "READ",
      payload: result,
    });
  }

  // ? SEARCH

  const values = {
    addProduct,
    readProduct,
    data: state.data,
    deleteProduct,
    currentPage,
    count,
    setPage,
    searchProduct,
  };
  return <ToDoContext.Provider value={values}>{children}</ToDoContext.Provider>;
};

export default RootContext;
