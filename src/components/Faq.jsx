import React, { useState } from "react";
import { accordionData } from "./common/Helper";
import { HiPlus } from "react-icons/hi2";
import { FaRegWindowMinimize } from "react-icons/fa6";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-white">
      <div className="container max-w-[1464px] mx-auto px-3 pb-[120px]">
        <p className="text-center text-orange font-poppins font-normal text-md">
          Frequently Asked Questions
        </p>
        <h2 className="font-poppins font-extrabold text-xxl text-darkblue mx-auto text-center mt-3 max-w-[600px] leading-[113%]">
          Have Questions? We’re here to help.
        </h2>

        <div className="max-w-[950px] mx-auto mt-9">
          {accordionData.map((faq, index) => (
            <div
              key={index}
              className={`p-6 border-darkblue border-opacity-[24%] ${
                activeIndex === index ? "text-golden" : "border-y-[1px]"
              }`}
            >
              <button
                onClick={() => handleAccordionToggle(index)}
                className="flex justify-between items-center border-black cursor-pointer w-full focus:outline-none"
              >
                <p
                  className={`font-poppins text-lg ${
                    activeIndex === index
                      ? "text-golden font-semibold"
                      : "text-black font-normal"
                  }`}
                >
                  {faq.heading}
                </p>
                {activeIndex === index ? (
                  <FaRegWindowMinimize className="w-6 h-6" />
                ) : (
                  <HiPlus className="w-6 h-6" />
                )}
              </button>
              {activeIndex === index && (
                <div className="mt-[18px]">
                  <p className="font-poppins font-normal text-md text-darkblue">
                    {faq.peragraph}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
