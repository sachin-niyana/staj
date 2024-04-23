import React from "react";
import julian from "../assets/images/png/julian.png";
import { Linkedin, Twitter } from "./common/Icon";
const OurTeam = () => {
  return (
    <div className="bg-white">
      <div className="container max-w-[1164px] mx-auto px-3 pt-[120px]">
        <p className="text-center text-orange font-poppins font-normal text-md">
          Team
        </p>
        <h2 className="font-poppins font-extrabold text-xxl text-darkblue text-center mt-3">
          Our team
        </h2>
        <div className="flex justify-center gap-8 items-center">
          <div className=" bg-white rounded-xl py-12 px-9 max-w-[704px] shadow-[0_0px_12px_0px_rgba(0,0,0,0.07)]">
            <div className="flex justify-start gap-6 items-center">
              <img className="w-[108px] h-[108px]" src={julian} alt="julian" />
              <div className="flex flex-col">
                <p className="font-poppins font-semibold text-xl text-darkblue">
                  Julian Elysian
                </p>
                <p className="font-poppins font-normal text-md text-darkblue">
                  Co-Founder & CEO
                </p>
              </div>
            </div>
            <div className="flex justify-start gap-[45px] items-start mt-1.5">
              <div className="flex justify-start gap-[18px] mt-[18px]">
                <Linkedin />
                <Twitter />
              </div>
              <p className="font-poppins font-normal text-md text-darkblue leading-[144%]">
                There are many variations of passages of Lorem is a Ipsum
                available, but the majority have suffered the alteration in some
                form, by injected humour, or let randomised words which but the
                majority have be a suffered alteration in some form, by injected
                humour, don't look even slightly believable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
