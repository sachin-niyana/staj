import React from "react";
import mobile from "../assets/images/webp/mobiles.webp";
const Header = () => {
  return (
    <>
      <div className="bg-grey">
        <div className="max-w-[1464px] px-3 mx-auto">
          <div className="flex lg:justify-between mt-[72px] items-center">
            <div className="flex flex-col ">
              <h1 className="ff-poppins font-bold text-xxl max-w-[640px] leading-[113%]">
                Easily find arts events and
                <span className="text-golden"> support local artists</span>
              </h1>
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
