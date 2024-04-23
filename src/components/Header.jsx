import React from "react";
import mobile from "../assets/images/webp/mobiles.webp";
import lefttriangle from "../assets/images/png/header_left_vector.png"
const Header = () => {
    return (
        <>
            <div className="bg-skyblue">
                <div className="max-w-[1464px] px-3 mx-auto">
                    <div className="flex md:flex-row flex-col-reverse items-center md:items-start md:justify-between pt-[40px] md:pt-[72px]">
                        <div className="flex flex-col -mt-7 md:mt-[50px] xl:mt-[153px] relative">
                            <img className="max-w-[161px] absolute start-[-26%] top-[20%] sm:block hidden" src={lefttriangle} alt="vector" />
                            <h1 className="ff-poppins font-bold text-[32px] sm:text-[38px] md:text-start text-center lg:text-xxl text-darkblue max-w-[640px] leading-[113%]">
                                Easily find arts events and
                                <span className="text-golden"> support local artists</span>
                            </h1>
                            <p className="ff-poppins text-dakblue fs-md max-w-[640px] md:max-w-[570px] pt-4 md:text-start text-center sm:text-base text-sm lg:pt-[18px]">A brand new way to explore the arts in your city. Currently in beta, exclusively available for iPhone users - download and get started today!</p>
                            <button className="bg-golden mx-auto md:mx-0 block font-poppins text-base lg:h-[64px] hover:bg-darkblue hover:text-white duration-300 w-[200px] lg:w-[212px] font-bold capitalize py-4 lg:py-5 px-7 lg:px-10 rounded-[30px] mt-5 xl:mt-[60px] text-darkblue">
                                DOWNLOAD APP
                            </button>
                        </div>
                        <div>
                            <img className="max-w-[300px] sm:max-w-[360px] lg:max-w-[500px] xl:max-w-[757px]" src={mobile} alt="mobile" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
