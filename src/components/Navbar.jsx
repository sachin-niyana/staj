import React, { useState } from 'react';
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import navlogo from "../assets/images/svg/nav_logo.svg";

const Navbar = () => {
    const [show, setShow] = useState(true);

    function showNav() {
        setShow(!show);
        document.body.classList.toggle("overflow-hidden", !show);
    }

    return (
        <nav className="bg-white py-0 xl:pt-9">
            <div className="max-w-[1464px] px-3 mx-auto">
                <div className="flex justify-between items-center w-full">
                    <img className="max-w-[186px] px-3 cursor-pointer" src={navlogo} alt="navlogo" />
                    <ul className="hidden lg:flex mb-0 align-middle gap-12 list-none">
                        <li>
                            <a className="ff-poippins text-md text-darkblue hover:text-golden  duration-300" href="#">Home</a>
                        </li>
                        <li>
                            <a className="ff-poippins text-md text-darkblue hover:text-golden  duration-300" href="#">Features</a>
                        </li>
                        <li>
                            <a className="ff-poippins text-md text-darkblue hover:text-golden  duration-300" href="#">About</a>
                        </li>
                        <li>
                            <a className="ff-poippins text-md text-darkblue hover:text-golden  duration-300" href="#">FAQ</a>
                        </li>
                        <li>
                            <a className="ff-poippins text-md text-darkblue hover:text-golden  duration-300" href="#">Contact Us</a>
                        </li>

                    </ul>
                    <button className="bg-golden hidden lg:block font-poppins text-base h-[64px] hover:bg-darkblue hover:text-white duration-300 w-[212px] font-bold capitalize py-5 px-10 rounded-[30px] text-darkblue">
                        DOWNLOAD APP
                    </button>
                    <div className="flex flex-col lg:hidden  z-50 relative" onClick={showNav}>
                        <h4 className="text-darkblue mr-4">
                            {show ? <AiOutlineClose /> : <HiMenuAlt1 />}
                        </h4>
                    </div>
                    <ul className={` gap-10 mb-0 bg-white  duration-300  flex-column  pl-0 list-none ${show ? "flex absolute left-0 w-full top-0 flex-col justify-center items-center h-full" : ""
                        }`}>
                        <li>
                            <a className="ff-poippins text-md text-darkblue hover:text-golden  duration-300" href="#">Home</a>
                        </li>
                        <li>
                            <a className="ff-poippins text-md text-darkblue hover:text-golden  duration-300" href="#">Features</a>
                        </li>
                        <li>
                            <a className="ff-poippins text-md text-darkblue hover:text-golden  duration-300" href="#">About</a>
                        </li>
                        <li>
                            <a className="ff-poippins text-md text-darkblue hover:text-golden  duration-300" href="#">FAQ</a>
                        </li>
                        <li>
                            <a className="ff-poippins text-md text-darkblue hover:text-golden  duration-300" href="#">Contact Us</a>
                        </li>
                        <button className="bg-golden block lg:hidden font-poppins text-base h-[64px] hover:bg-darkblue hover:text-white duration-300 w-[212px] font-bold capitalize py-5 px-10 rounded-[30px] text-darkblue">
                            DOWNLOAD APP
                        </button>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar;
