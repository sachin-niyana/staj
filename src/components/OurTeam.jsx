import React from "react";
import julian from "../assets/images/webp/julian.webp";
import alisa from "../assets/images/webp/alisa.webp";
import { DotedBox, LineBox, Linkedin, Twitter } from "./common/Icon";
import { Link } from "react-router-dom";
const OurTeam = () => {
  return (
    <div className="bg-white" id="ContactUs">
      <div className="container max-w-[1464px] mx-auto px-3 lg:pt-[120px] lg:pb-[157px] md:py-20 sm:py-[60px] py-12">
        <p className="text-center text-orange font-poppins font-normal text-md">
          Team
        </p>
        <h2 className="font-poppins font-extrabold lg:text-xxl sm:text-[45px] text-xl text-darkblue text-center mt-3 leading-[113%]">
          Our team
        </h2>
        <div className="flex lg:flex-row flex-col justify-center gap-8 items-center pt-8 md:mt-[60px]">
          <div className="relative">
            <div className="absolute md:block hidden bottom-[-10%] left-[-8%]">
              <DotedBox />
            </div>
            <div className=" bg-white cursor-pointer hover:scale-95 duration-300 rounded-xl xl:py-12 py-8 px-4 xl:px-9 max-w-[704px] shadow-[0px_24px_40px_0px_rgba(0,0,0,0.07)] relative">
              <div className="flex sm:flex-row flex-col justify-start gap-6 items-center">
                <img
                  className="w-[108px] h-[108px]"
                  src={julian}
                  alt="julian"
                />
                <div className="flex flex-col">
                  <p className="font-poppins font-semibold md:text-xl text-lg text-darkblue">
                    Julian Elysian
                  </p>
                  <p className="font-poppins font-normal sm:text-start text-center text-md text-darkblue">
                    Co-Founder & CEO
                  </p>
                </div>
              </div>
              <div className="flex sm:flex-row flex-col-reverse justify-start sm:gap-[45px] gap-8 items-start mt-1.5">
                <div className="flex justify-start gap-[18px] sm:mt-[18px] items-center mx-auto sm:ms-[21px]">
                  <Link
                    to="https://in.linkedin.com/"
                    target="_blank"
                    className="hover:translate-y-[-5px] duration-300"
                  >
                    <Linkedin />
                  </Link>
                  <Link
                    to="https://twitter.com/"
                    target="_blank"
                    className="hover:translate-y-[-5px] duration-300"
                  >
                    <Twitter />
                  </Link>
                </div>
                <p className="font-poppins font-normal sm:text-start text-center text-base sm:text-md text-darkblue leading-[144%]">
                  There are many variations of passages of Lorem is a Ipsum
                  available, but the majority have suffered the alteration in
                  some form, by injected humour, or let randomised words which
                  but the majority have be a suffered alteration in some form,
                  by injected humour, don't look even slightly believable.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute md:block hidden top-[-31.5%] right-[-11%]">
              <LineBox />
            </div>
            <div className=" bg-white cursor-pointer hover:scale-95 duration-300 rounded-xl xl:py-12 py-8 px-4 xl:px-9 max-w-[704px] shadow-[0px_24px_40px_0px_rgba(0,0,0,0.07)] relative">
              <div className="flex sm:flex-row flex-col justify-start gap-6 items-center">
                <img className="w-[108px] h-[108px]" src={alisa} alt="alisa" />
                <div className="flex flex-col">
                  <p className="font-poppins font-semibold md:text-xl text-lg text-darkblue">
                    Alisa Elysian
                  </p>
                  <p className="font-poppins font-normal sm:text-start text-center text-md text-darkblue">
                    Co-Founder & CEO
                  </p>
                </div>
              </div>
              <div className="flex sm:flex-row flex-col-reverse justify-start sm:gap-[45px] gap-8 items-start mt-1.5">
                <div className="flex justify-start gap-[18px] sm:mt-[18px] items-center mx-auto sm:ms-[21px]">
                  <Link
                    to="https://in.linkedin.com/"
                    target="_blank"
                    className="hover:translate-y-[-5px] duration-300"
                  >
                    <Linkedin />
                  </Link>
                  <Link
                    to="https://twitter.com/"
                    target="_blank"
                    className="hover:translate-y-[-5px] duration-300"
                  >
                    <Twitter />
                  </Link>
                </div>
                <p className="font-poppins font-normal sm:text-start text-center text-base sm:text-md text-darkblue leading-[144%]">
                  There are many variations of passages of Lorem is a Ipsum
                  available, but the majority have suffered the alteration in
                  some form, by injected humour, or let randomised words which
                  but the majority have be a suffered alteration in some form,
                  by injected humour, don't look even slightly believable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
