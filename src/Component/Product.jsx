import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { GetPRODUCTApi } from "../Redux/action";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

const Product = () => {
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state);
  console.log(data)


  const [quantities, setQuantities] = useState([]);

  useEffect(() => {
    dispatch(GetPRODUCTApi());
  }, [dispatch]);

  useEffect(() => {
   
    if (data) {
      setQuantities(Array(data.length).fill(1));
    }
  }, [data]);

  const increaseQuantity = (index) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] = newQuantities[index] + 1;
      return newQuantities;
    });
  };

  const decreaseQuantity = (index) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      if (newQuantities[index] > 1) {
        newQuantities[index] = newQuantities[index] - 1;
      }
      return newQuantities;
    });
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="grid grid-flow-row gap-x-5 gap-y-10 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {data?.map((item, index) => (
              <div
                className="my-1  w-full p-3 border border-[#E3F2F1] shadow-lg rounded-lg"
                key={index}
              >
                <article className="overflow-hidden  ">
                  <img
                    alt="Placeholder"
                    className="block h-[150px] w-full rounded-lg"
                    src={item.image_url}
                  />

                  <header className="leading-tight my-2 h-[3.5rem]">
                    <h5 className="text-md mb-1 mt-2 font-semibold line-clamp-2 text-justify">
                      {item.name}
                    </h5>
                    <p className="text-[#C3C3C3] text-xs line-clamp-1">
                      {item.sku}
                    </p>
                  </header>
                  <div>
                    <p className="my-2">
                      <span className="font-bold text-2xl">
                      ${item.pricing?.customerPrice?.unitPrice?.value}
                        {item.list_price} /
                      </span>
                      each
                    </p>
                    <p className="font-semibold text-[#00A69E]">
                      Saving % 4.60{" "}
                    </p>
                    <p className="flex gap-2">
                      <span className="font-semibold">Supplier:</span>
                      <span className="font-normal line-clamp-1">
                        {item.manufacturer_name}
                      </span>
                    </p>
                    <p className="flex gap-2">
                      <span className="font-semibold">Delivery by:</span>
                      <span className="font-normal">24-jan-2022</span>
                    </p>
                  </div>
                  <div className="flex my-2 gap-5">
                    <div className="flex justify-center w-full border border-gray-400 rounded-md">
                      <svg
                        className="fill-current text-gray-600 w-2"
                        viewBox="0 0 448 512"
                        onClick={() => decreaseQuantity(index)}
                      >
                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>
                      <input
                        className="mx-2 border text-center outline-none w-[30%]"
                        type="text"
                        value={quantities[index]}
                      />
                      <svg
                        className="fill-current text-gray-600 w-2"
                        viewBox="0 0 448 512"
                        onClick={() => increaseQuantity(index)}
                      >
                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>
                    </div>
                  
                  </div>
                  <button
                      type="button"
                      onClick={() => decreaseQuantity(index)}
                      className="px-3 py-2 mt-2 mb-2 w-full text-sm font-medium text-[#fff] bg-[#00A69E] hover:bg-[#00A69E] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-[#00A69E] dark:hover:bg-[#00A69E] border border=[#E3F2F1]"
                    >
                      Add to cart
                    </button>
               
                </article>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
