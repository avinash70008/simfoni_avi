import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  let buttonArr = [
    "Construction Helmet",
    "Saws",
    "Cider",
    "Apple Juice",
    "Construction Costume blue",
    "Tapes",
    "Construction suit",
    "Pullers",
    "Pickaxes and Crowbars",
    "Carrots",
    "Construction hammer Wrenches",
    "Screwdrivers",
    "Construction Shovels",
    "Construction Costume blue",
    "Pullers",
    "Kinoa",
    "Banana",
  ];
  return (
    <>
      <footer className="bg-cover">
        <div className="w-11/12 m-auto">
          <div className="py-4">
            <p className="mb-0 text-left text-lg lg:text-xl xl:text-2xl font-semibold">
              PEOPLE SEARCHING FOR
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {buttonArr?.map((btn, index) => (
              <button
                type="button"
                className="px-5 py-2.5 text-sm font-medium text-[#3F4C5E] bg-[#EEF7F6] hover:bg-[#EEF7F6] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-[#EEF7F6] dark:hover:bg-[#EEF7F6] border border=[#E3F2F1]"
                key={index}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <hr className="my-3 border-gray-200 sm:mx-auto  lg:my-5" />
          <div className="flex items-center justify-center">
            <span className="text-sm text-black text-center font-semibold">
              © 2023{" "}
              <Link to="/" className="">
                SIMFONI
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
