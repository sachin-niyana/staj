import React from "react";
import mobile from "../assets/images/webp/mobiles.webp";
import lefttriangle from "../assets/images/png/header_left_vector.png"
import circles from "../assets/images/png/slider_circles.png"
const Header = () => {
    return (
        <>
            <div className="bg-skyblue overflow-x-">
                <div className="max-w-[1464px] px-3 mx-auto">
                    <div className="flex md:flex-row flex-col-reverse items-center md:items-start md:justify-between pt-[40px] md:pt-[72px]">
                        <div className="flex flex-col items-center md:items-start -mt-7 md:mt-[50px] xl:mt-[153px] relative">
                            <img className="max-w-[161px] absolute start-[-26%] top-[20%] sm:block hidden" src={lefttriangle} alt="vector" />
                            <h1 className="ff-poppins font-bold text-[32px] sm:text-[38px] md:text-start text-center lg:text-[45px] xl:text-xxl text-darkblue md:max-w-[484px] xl:max-w-[640px] leading-[113%]">
                                Easily find arts events and
                                <span className="text-golden"> support local artists</span>
                            </h1>
                            <p className="ff-poppins text-dakblue fs-md max-w-[640px] md:max-w-[570px] pt-4 md:text-start text-center sm:text-base text-sm lg:pt-[18px]">A brand new way to explore the arts in your city. Currently in beta, exclusively available for iPhone users - download and get started today!</p>
                            <button className="bg-golden mx-auto md:mx-0 block font-poppins text-base lg:h-[64px] hover:bg-darkblue hover:text-white duration-300 w-[200px] lg:w-[212px] font-bold capitalize py-4 lg:py-5 px-7 lg:px-10 rounded-[30px] mt-5 xl:mt-[60px] text-darkblue">
                                DOWNLOAD APP
                            </button>
                        </div>
                        <div>
                            <img className="max-w-[300px] 2xl:me-[-65px] sm:max-w-[360px] lg:max-w-[500px] xl:max-w-[757px]" src={mobile} alt="mobile" />
                        </div>
                    </div>
                </div>
                <div className="bg-[rgba(250,229,229)] h-[66px] mt-6 lg:-mt-[75px]  z-2">
                    <div className="bg-orange  z-3 top-0 flex items-center justify-center w-full h-[74px] opacity-100 -rotate-2">
                        <p className="ff-poppins text-lg text-white font-medium">Automation Your Project</p>
                        <img className="max-w-[64px] mx-10" src={circles} alt="circles" />
                        <p className="ff-poppins text-lg text-white font-medium">30 Day Trial</p>
                        <img className="max-w-[64px] mx-10" src={circles} alt="circles" />
                        <p className="ff-poppins text-lg text-white font-medium">24/7 Support</p>
                        <img className="max-w-[64px] mx-10" src={circles} alt="circles" />
                        <p className="ff-poppins text-lg text-white font-medium">20 Millions+Templates</p>
                        <img className="max-w-[64px] mx-10" src={circles} alt="circles" />
                        <p className="ff-poppins text-lg text-white font-medium">Single Click Editor</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
