import React from "react";
import mobile from "../assets/images/webp/mobiles.webp";
const Header = () => {
    return (
        <>
            <div className="bg-grey">
                <div className="max-w-[1464px] px-3 mx-auto">
                    <div className="flex lg:justify-between mt-[72px]">
                        <div className="flex flex-col mt-[153px]">
                            <h1 className="ff-poppins font-bold text-xxl text-darkblue max-w-[640px] leading-[113%]">
                                Easily find arts events and
                                <span className="text-golden"> support local artists</span>
                            </h1>
                            <p className="ff-poppins text-dakblue fs-md max-w-[570px] pt-[18px]">A brand new way to explore the arts in your city. Currently in beta, exclusively available for iPhone users - download and get started today!</p>
                            <button className="bg-golden block font-poppins text-base h-[64px] hover:bg-darkblue hover:text-white duration-300 w-[212px] font-bold capitalize py-5 px-10 rounded-[30px] mt-[] text-darkblue">
                                DOWNLOAD APP
                            </button>
                        </div>
                        <div>
                            <img className="max-w-[757px]" src={mobile} alt="mobile" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
