import React from "react";
import Search from "../svg/search.svg";
import Notifi from "../svg/notification.svg";
import Calender from "../svg/calendar.svg";
import Profile from "../svg/profile.svg";
import { IoIosArrowDown } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white border-[#DBDBDB] border-b md:px-4">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-around md:justify-between mx-auto xs:p-2 md:px-3 py-3.5">
          <div className="">
            <MdMenu size={25} />
          </div>
          <div className="m-0">
            <img
              src="./img/logo.png"
              alt="lgoog"
              className="h-[2rem] w-[100%]"
            />
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8  md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-black dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Catelog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  BuyDesk
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 d:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  History
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Dashboard
                </a>
              </li>
            </ul>
          </div>
          <form className="lg:w-[250px] xs:w-[100px]">
            <img
              src={Search}
              alt="search"
              className="w-5 h-5 text-gray-500 block md:hidden "
            />
            <div className="relative hidden md:flex items-center">
              <button
                id="dropdown-button"
                data-dropdown-toggle="dropdown"
                className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center  border border=[#E3F2F1] rounded-s-lg hover:bg-gray-200"
                type="button"
              >
                PO{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <input
                type="search"
                className="block font-normal h-[44px] text-[14px] w-full pl-2 pr-2 text-sm text-gray-900   bg-gray-50 focus:ring-blue-500 focus:border-blue-500 relative border outline-none border=[#E3F2F1]"
                placeholder="Search"
                required
              />
              <div className="flex items-center">
                <img
                  src={Search}
                  alt="search"
                  className="w-5 h-5 text-gray-500 absolute right-4"
                />
              </div>
            </div>
          </form>
          <div className="pt-2">
            <button
              type="button"
              className="text-[#00A69E] hover:text-white border-2 border-[#006662] hover:bg-[#00A69E] focus:ring-4  font-medium rounded-md text-sm px-4 py-2.5 text-center me-2 mb-2 bg-white dark:hover:bg-[#00A69E] outline-none md:block hidden"
            >
              Help
            </button>
          </div>
          <div className="flex items-center">
            <div className="items-center justify-between  flex w-auto mr-12 space-x-4">
              <img src={Calender} alt="calender" className="w-5 h-5" />
              <CiHeart className="w-5 h-5" />
              <BsCart2 className="w-5 h-5" />
              <img src={Notifi} alt="notifications" className="w-5 h-5" />
            </div>
            <div className="m-1 hidden md:block">
              <p className="font-normal	text-base leading-5 text-right text-[#0D062D]">
                Sara
              </p>
            </div>
            <button
              type="button"
              className="flex mr-1 text-sm rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full object-cover"
                src={Profile}
                alt="user photo"
              />
            </button>
            <div className="m-2">
              <IoIosArrowDown />
            </div>
            <div
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="w-[90%] flex flex-wrap items-center justify-around md:justify-between mx-auto xs:p-2 md:px-5 pt-7 gap-5">
        <div className="w-[600px]">
          <form>
            <div className="flex">
              <div className="relative w-full">
                <input
                  type="search"
                  className="block p-2 w-full z-20 text-sm  rounded-md border-s-gray-50 border-s-2 border  focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:border-blue-500 outline-none"
                  placeholder="Search"
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 end-0 h-full py-2 px-7 text-sm font-medium text-white bg-[#00A69E] rounded-e-lg border border-[#00A69E] hover:bg-[#00A69E] focus:ring-4 focus:outline-none focus:ring-[#00A69E] dark:bg-[#00A69E] dark:hover:bg-[#00A69E] dark:focus:ring-[#00A69E]"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div>
          <button
            type="button"
            className="text-[#00A69E] hover:text-white border-2 border-[#006662] hover:bg-[#00A69E] focus:ring-4  font-medium rounded-md text-sm px-5 py-2 text-center  bg-white dark:hover:bg-[#00A69E] outline-none"
          >
            Upload
          </button>
        </div>
        <div className="flex gap-x-8">
          <select
            name=""
            id=""
            className="border border=[#E3F2F1] text-black text-sm rounded-md border-s-gray-100  focus:ring-blue-500 focus:border-blue-500 block  p-2  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[150px] bg-white"
          >
            <option value="">Filter</option>
            <option value="1">2</option>
            <option value="1">2</option>
          </select>
          <select
            name=""
            id=""
            className="text-black text-sm rounded-md border-s-gray-100  focus:ring-blue-500 focus:border-blue-500 block  p-2 border border=[#E3F2F1] dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[150px]"
          >
            <option value="">Sort By</option>
            <option value="htl">High To Low</option>
            <option value="lth">Low To High</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Navbar;
