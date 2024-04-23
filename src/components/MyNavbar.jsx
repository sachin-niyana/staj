"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineBars4 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { navLink } from "./Helper";
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarHandler = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <nav className="z-10 py-3.5 flex-grow-0">
      <div className="flex items-center justify-between container max-w-[1152px] mx-auto px-3">
        <Image
          src="/assets/header/logo.png"
          width={93}
          height={53}
          alt="Logo"
        />
        <ul className="hidden lg:flex gap-6 ">
          {navLink.map((value, index) => {
            return (
              <li key={index}>
                <Link
                  aria-label={value.title}
                  className="text-light-white hover:text-green font-Inter font-normal sm:text-sm text-xsm transition-all ease-in-out duration-300"
                  key={index}
                  href={value.path}
                >
                  {value.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="hidden lg:flex">
          <button className="text-light-white bg-green hover:text-Rich-Black hover:bg-light-white transition-all ease-in-out duration-300 py-[13px] px-[19px] rounded-lg font-Oswald font-semibold sm:text-sm text-xsm">
            CONTACT US
          </button>
        </div>
        <button
          className="block lg:hidden text-white text-3xl"
          onClick={sidebarHandler}
        >
          <HiOutlineBars4 className="sm:w-10 sm:h-10 w-7 h-7" />
        </button>
      </div>
      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black opacity-50 z-50"
          onClick={sidebarHandler}
        ></div>
      )}
      <div
        className={`lg:hidden fixed inset-y-0 left-0 w-full bg-black z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition duration-300 ease-in-out`}
      >
        <div className="p-4 min-h-screen flex flex-col justify-center items-center">
          <button
            className="text-white text-sm absolute top-6 right-5"
            onClick={sidebarHandler}
          >
            <RxCross1 className="sm:w-10 sm:h-10 w-7 h-7" />
          </button>
          <ul className="flex flex-col items-center space-y-4 my-5">
            {navLink.map((value, index) => {
              return (
                <li key={index}>
                  <Link
                    aria-label={value.title}
                    className="text-light-white hover:text-green font-Inter font-normal sm:text-sm text-xsm  transition-all ease-in-out duration-300"
                    key={index}
                    href={value.path}
                    onClick={sidebarHandler}
                  >
                    {value.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex justify-center">
            <button className="text-light-white bg-green hover:text-Rich-Black hover:bg-light-white transition-all ease-in-out duration-300 py-[13px] px-[19px] rounded-lg font-Oswald font-semibold sm:text-sm text-xsm">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
