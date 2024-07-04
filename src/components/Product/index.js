import React, { useContext, useEffect } from "react";
import { ToDoContext } from "../../context";
import ProductCard from "../ProductCard";
import ProductPagination from "../Pagination";

const Product = () => {
  const { readProduct, data, currentPage } = useContext(ToDoContext);

  useEffect(() => {
    readProduct();
  }, []);

  console.log(data, "jhhg");

  return (
    <div>
      <div className="container">
        <select
          style={{
            background: "white",
          }}
        >
          <option value="expensive">expensive</option>
          <option value="cheap">cheap</option>
        </select>
        <div className="mt-[70px] justify-center flex items-center gap-[10px] flex-wrap">
          {currentPage().length > 0 ? (
            <>
              {currentPage().map((el, idx) => (
                <ProductCard el={el} key={idx} />
              ))}
            </>
          ) : (
            <>
              <h1 style={{ color: "#fff" }}>Loading...</h1>
            </>
            // <img
            //   className="mr-auto flex m-auto"
            //   onClick={() => navigate("/")}
            //   src={empty}
            //   alt=""
            // />
          )}
        </div>
        {data.length > 0 ? <ProductPagination /> : null}
      </div>
    </div>
  );
};

export default Product;
