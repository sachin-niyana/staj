"use client";
import { useState } from "react";
import { navLink } from "./common/Helper";
import { TfiMenuAlt } from "react-icons/tfi";
import { RxCross1 } from "react-icons/rx";
import logo from "../assets/images/webp/logo.webp";
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarHandler = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <nav className="z-10 pt-4 xl:pt-9 pb-[14px] flex-grow-0 bg-skyblue">
      <div className="flex items-center justify-between container max-w-[1464px] mx-auto px-3">
        <a href="/">
          <img
            className="md:max-w-[186px] max-w-[140px]"
            src={logo}
            alt="logo"
          />
        </a>
        <ul className="hidden lg:flex gap-12 ">
          {navLink.map((value, index) => {
            return (
              <li key={index}>
                <a
                  aria-label={value.title}
                  className="ff-poppins text-md text-darkblue hover:text-golden  duration-300"
                  key={index}
                  href={value.path}
                >
                  {value.title}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="hidden lg:flex">
          <button className="bg-golden block ff-poppins text-base h-[60px] hover:bg-darkblue hover:text-white duration-300 w-[212px] font-bold capitalize py-5 px-10 rounded-[30px] text-darkblue">
            DOWNLOAD APP
          </button>
        </div>
        <button
          className="block lg:hidden text-black text-3xl"
          onClick={sidebarHandler}
        >
          <TfiMenuAlt className="sm:w-10 sm:h-10 w-7 h-7" />
        </button>
      </div>
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black z-50"
          onClick={sidebarHandler}
        ></div>
      )}
      <div
        className={`lg:hidden fixed inset-y-0 left-0 w-full bg-bg-blue z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition duration-300 ease-in-out`}
      >
        <div className="p-4 min-h-screen flex flex-col justify-center items-center">
          <button
            className="text-white text-sm absolute top-6 sm:right-4 right-0 w-10 h-10"
            onClick={sidebarHandler}
          >
            <RxCross1 className="sm:w-10 sm:h-10 w-7 h-7" />
          </button>
          <ul className="flex flex-col items-center gap-3  space-y-4 my-5">
            {navLink.map((value, index) => {
              return (
                <li key={index}>
                  <a
                    aria-label={value.title}
                    className="ff-poppins text-[20px] lg:text-md text-white hover:text-golden  duration-300"
                    key={index}
                    href={value.path}
                    onClick={sidebarHandler}
                  >
                    {value.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex justify-center">
            <button className="bg-golden mt-1 lg:mt-0 block lg:hidden ff-poppins text-base h-[54px] lg:h-[64px] hover:bg-darkblue hover:text-white duration-300 w-[200px] lg:w-[212px] font-bold capitalize py-4 lg:py-5 px-8 lg:px-10 rounded-[30px] text-darkblue">
              DOWNLOAD APP
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
