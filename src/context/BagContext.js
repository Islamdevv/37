import React, { createContext, useContext, useReducer } from "react";

const bagContext = createContext();
export const useBag = () => useContext(bagContext);

const initialState = {
  bag: JSON.parse(localStorage.getItem("bag")),
  isCheck: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET":
      return { ...state, bag: action.payload };
    case "CHECK":
      return { ...state, isCheck: action.payload };
    default:
      return state;
  }
};

const BagContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // ! FAVORITE
  function addToBag(product) {
    let data = JSON.parse(localStorage.getItem("bag")) || [];
    data.push(product);
    localStorage.setItem("bag", JSON.stringify(data));
  }

  function getProductFromCard() {
    let data = JSON.parse(localStorage.getItem("bag")) || [];
    dispatch({
      type: "GET",
      payload: data,
    });
  }

  function checkProductInBag(id) {
    let data = JSON.parse(localStorage.getItem("bag")) || [];
    let obj = data.find((el) => el._id === id);
    dispatch({
      type: "CHECK",
      payload: obj ? true : false,
    });
    return obj ? true : false;
  }
  // ! FAVORITE

  const values = {
    addToBag,
    checkProductInBag,
    getProductFromCard,
    bag: state.bag,
    checkProductInBag,
    isCheck: state.isCheck,
  };
  return <bagContext.Provider value={values}>{children}</bagContext.Provider>;
};

export default BagContext;
