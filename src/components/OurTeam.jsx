import React from "react";
import julian from "../assets/images/png/julian.png";
import alisa from "../assets/images/png/alisa.png";
import { DotedBox, LineBox, Linkedin, Twitter } from "./common/Icon";
const OurTeam = () => {
  return (
    <div className="bg-white">
      <div className="container max-w-[1464px] mx-auto px-3 pt-[120px] pb-[157px]">
        <p className="text-center text-orange font-poppins font-normal text-md">
          Team
        </p>
        <h2 className="font-poppins font-extrabold text-xxl text-darkblue text-center mt-3 leading-[113%]">
          Our team
        </h2>
        <div className="flex lg:flex-row flex-col justify-center gap-8 items-center mt-[60px]">
          <div className="relative">
            <div className="absolute md:block hidden bottom-[-10%] left-[-8%]">
              <DotedBox />
            </div>
            <div className=" bg-white rounded-xl sm:py-12 py-8 px-4 sm:px-9 max-w-[704px] shadow-[0px_24px_40px_0px_rgba(0,0,0,0.07)] relative">
              <div className="flex sm:flex-row flex-col justify-start gap-6 items-center">
                <img
                  className="w-[108px] h-[108px]"
                  src={julian}
                  alt="julian"
                />
                <div className="flex flex-col">
                  <p className="font-poppins font-semibold text-xl text-darkblue">
                    Julian Elysian
                  </p>
                  <p className="font-poppins font-normal sm:text-start text-center text-md text-darkblue">
                    Co-Founder & CEO
                  </p>
                </div>
              </div>
              <div className="flex sm:flex-row flex-col-reverse justify-start sm:gap-[45px] gap-8 items-start mt-1.5">
                <div className="flex justify-start gap-[18px] sm:mt-[18px] items-center mx-auto sm:ms-[21px]">
                  <Linkedin />
                  <Twitter />
                </div>
                <p className="font-poppins font-normal sm:text-start text-center text-md text-darkblue leading-[144%]">
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
            <div className=" bg-white rounded-xl sm:py-12 py-8 px-4 sm:px-9 max-w-[704px] shadow-[0px_24px_40px_0px_rgba(0,0,0,0.07)] relative">
              <div className="flex sm:flex-row flex-col justify-start gap-6 items-center">
                <img className="w-[108px] h-[108px]" src={alisa} alt="alisa" />
                <div className="flex flex-col">
                  <p className="font-poppins font-semibold text-xl text-darkblue">
                    Alisa Elysian
                  </p>
                  <p className="font-poppins font-normal sm:text-start text-center text-md text-darkblue">
                    Co-Founder & CEO
                  </p>
                </div>
              </div>
              <div className="flex sm:flex-row flex-col-reverse justify-start sm:gap-[45px] gap-8 items-start mt-1.5">
                <div className="flex justify-start gap-[18px] sm:mt-[18px] items-center mx-auto sm:ms-[21px]">
                  <Linkedin />
                  <Twitter />
                </div>
                <p className="font-poppins font-normal sm:text-start text-center text-md text-darkblue leading-[144%]">
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
