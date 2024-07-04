import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useBag } from "../../context/BagContext";

const ProductCard = ({ el }) => {
  const { deleteProduct, addToBag, checkProductInBag } = useBag();

  return (
    <div className="w-full max-w-[420px] h-[570px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Zoom>
        <img
          className="p-8 rounded-t-lg w-[90%] h-[430px]"
          src={el.image}
          alt="product image"
        />
      </Zoom>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {el.name}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <div
              className="star"
              style={{
                background: el.rating >= 1 ? "yellow" : "gray",
              }}
            ></div>
            <div
              className="star"
              style={{
                background: el.rating >= 2 ? "yellow" : "gray",
              }}
            ></div>
            <div
              className="star"
              style={{
                background: el.rating >= 3 ? "yellow" : "gray",
              }}
            ></div>
            <div
              className="star"
              style={{
                background: el.rating >= 4 ? "yellow" : "gray",
              }}
            ></div>
            <div
              className="star"
              style={{
                background: el.rating >= 5 ? "yellow" : "gray",
              }}
            ></div>
          </div>
          <span className="bg-blue-100 text-blue-800 text-xl font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {el.rating}.0
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {el.price}$
          </span>
          {checkProductInBag(el._id) ? (
            <button
              disabled
              className="text-[20px] ml-[100px] p-[2px] text-white"
            >
              add to bag
            </button>
          ) : (
            <button
              onClick={() => addToBag(el)}
              className="text-[20px] ml-[100px] p-[2px] text-white bg-[red]"
            >
              add to bag
            </button>
          )}

          <a
            className="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => deleteProduct(el._id)}
          >
            delete
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
