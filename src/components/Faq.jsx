import React, { useState } from "react";
import { accordionData } from "./common/Helper";
import { HiPlus } from "react-icons/hi2";
import { HiOutlineMinus } from "react-icons/hi";
import { Circlebox, Trianglebox, Trianglebox2 } from "./common/Icon";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleAccordionToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="bg-white">
      <div className="container max-w-[1464px] mx-auto px-3 pb-[120px] relative">
        <div className="absolute md:block hidden right-[10%]">
          <Trianglebox />
        </div>
        <div className="absolute md:block hidden bottom-[20%] right-[-5%]">
          <Trianglebox2 />
        </div>
        <div className="absolute md:block hidden top-[7%] left-[-12%]">
          <Circlebox />
        </div>
        <p className="text-center text-orange font-poppins font-normal text-md">
          Frequently Asked Questions
        </p>
        <h2 className="font-poppins font-extrabold lg:text-xxl sm:text-[45px] text-xl text-darkblue mx-auto text-center mt-3 max-w-[600px] leading-[113%]">
          Have Questions? We’re here to help.
        </h2>
        <div className="flex flex-row h-[69px] !overflow-x-scroll border gap-5 sm:gap-0 justify-between py-[6px] mt-[60px] items-center px-[6px] border-[#d7d7d7] rounded-[48px] mx-auto max-w-[1200px] relative">
          <button
            className={` px-4 py-1 duration-300 lg:py-[14px] ${
              activeTab === "tab1"
                ? "text-center text-md ff-poppins font-semibold py-[14px] rounded-[100px] ps-7 pe-[27px] bg-golden text-white whitespace-nowrap"
                : " text-darkblue text-md ff-poppins font-semibold whitespace-nowrap"
            }`}
            onClick={() => handleTabChange("tab1")}
          >
            General Questions
          </button>
          <button
            className={` px-4 py-1 duration-300 lg:py-[14px] ${
              activeTab === "tab2"
                ? "text-center text-md ff-poppins font-semibold py-[14px] rounded-[100px] ps-7 pe-[27px] bg-golden text-white whitespace-nowrap"
                : " text-darkblue text-md ff-poppins font-semibold whitespace-nowrap"
            }`}
            onClick={() => handleTabChange("tab2")}
          >
            Payments & Transactions
          </button>
          <button
            className={` px-4 py-1 duration-300 lg:py-[14px] ${
              activeTab === "tab3"
                ? "text-center text-md ff-poppins font-semibold py-[14px] rounded-[100px] ps-7 pe-[27px] bg-golden text-white whitespace-nowrap"
                : " text-darkblue text-md ff-poppins font-semibold whitespace-nowrap"
            }`}
            onClick={() => handleTabChange("tab3")}
          >
            Accounts & Profiles
          </button>
          <button
            className={` px-4 py-1 duration-300 lg:py-[14px] ${
              activeTab === "tab4"
                ? "text-center text-md ff-poppins font-semibold py-[14px] rounded-[100px] ps-7 pe-[27px] bg-golden text-white whitespace-nowrap"
                : " text-darkblue text-md ff-poppins font-semibold whitespace-nowrap"
            }`}
            onClick={() => handleTabChange("tab4")}
          >
            Technical Support
          </button>
          <button
            className={` px-4 py-1 duration-300 lg:py-[14px] ${
              activeTab === "tab5"
                ? "text-center text-md ff-poppins font-semibold py-[14px] rounded-[100px] ps-7 pe-[27px] bg-golden text-white whitespace-nowrap"
                : " text-darkblue text-md ff-poppins font-semibold whitespace-nowrap"
            }`}
            onClick={() => handleTabChange("tab5")}
          >
            Creating & Finding Events
          </button>
        </div>

        {activeTab === "tab1" && (
          <div className="max-w-[950px] mx-auto mt-9 relative">
            {accordionData.map((faq, index) => (
              <div
                key={index}
                className={`sm:p-6 p-5 border-darkblue border-opacity-[24%] text-start ${
                  activeIndex === index
                    ? "text-golden text-start"
                    : "border-y-[1px]"
                }`}
              >
                <button
                  onClick={() => handleAccordionToggle(index)}
                  className="flex justify-between items-start border-black cursor-pointer w-full focus:outline-none"
                >
                  <p
                    className={`font-poppins sm:text-lg text-[20px] text-start ${
                      activeIndex === index
                        ? "text-golden font-semibold"
                        : "text-black font-normal"
                    }`}
                  >
                    {faq.heading}
                  </p>
                  {activeIndex === index ? (
                    <div className="mt-1.5">
                      <HiOutlineMinus className="w-6 h-6" />
                    </div>
                  ) : (
                    <div className="mt-1.5">
                      <HiPlus className="w-6 h-6" />
                    </div>
                  )}
                </button>
                {activeIndex === index && (
                  <div className="mt-[18px]">
                    <p className="font-poppins font-normal max-w-[804px] text-left text-md text-darkblue">
                      {faq.peragraph}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        {activeTab === "tab2" && (
          <div className="max-w-[950px] mx-auto mt-9 relative">
            {accordionData.map((faq, index) => (
              <div
                key={index}
                className={`sm:p-6 p-5 border-darkblue border-opacity-[24%] ${
                  activeIndex === index ? "text-golden" : "border-y-[1px]"
                }`}
              >
                <button
                  onClick={() => handleAccordionToggle(index)}
                  className="flex justify-between items-start border-black cursor-pointer w-full focus:outline-none"
                >
                  <p
                    className={`font-poppins sm:text-lg text-[20px] text-start ${
                      activeIndex === index
                        ? "text-golden font-semibold"
                        : "text-black font-normal"
                    }`}
                  >
                    {faq.heading}
                  </p>
                  {activeIndex === index ? (
                    <div className="mt-1.5">
                      <HiOutlineMinus className="w-6 h-6" />
                    </div>
                  ) : (
                    <div className="mt-1.5">
                      <HiPlus className="w-6 h-6" />
                    </div>
                  )}
                </button>
                {activeIndex === index && (
                  <div className="mt-[18px]">
                    <p className="font-poppins font-normal text-md max-w-[804px] text-darkblue">
                      {faq.peragraph}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        {activeTab === "tab3" && (
          <div className="max-w-[950px] mx-auto mt-9 relative">
            {accordionData.map((faq, index) => (
              <div
                key={index}
                className={`sm:p-6 p-5 border-darkblue border-opacity-[24%] ${
                  activeIndex === index ? "text-golden" : "border-y-[1px]"
                }`}
              >
                <button
                  onClick={() => handleAccordionToggle(index)}
                  className="flex justify-between items-start border-black cursor-pointer w-full focus:outline-none"
                >
                  <p
                    className={`font-poppins sm:text-lg text-[20px] text-start ${
                      activeIndex === index
                        ? "text-golden font-semibold"
                        : "text-black font-normal"
                    }`}
                  >
                    {faq.heading}
                  </p>
                  {activeIndex === index ? (
                    <div className="mt-1.5">
                      <HiOutlineMinus className="w-6 h-6" />
                    </div>
                  ) : (
                    <div className="mt-1.5">
                      <HiPlus className="w-6 h-6" />
                    </div>
                  )}
                </button>
                {activeIndex === index && (
                  <div className="mt-[18px]">
                    <p className="font-poppins text-start max-w-[804px] font-normal text-md text-darkblue">
                      {faq.peragraph}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        {activeTab === "tab4" && (
          <div className="max-w-[950px] mx-auto mt-9 relative">
            {accordionData.map((faq, index) => (
              <div
                key={index}
                className={`sm:p-6 p-5 border-darkblue border-opacity-[24%] ${
                  activeIndex === index ? "text-golden" : "border-y-[1px]"
                }`}
              >
                <button
                  onClick={() => handleAccordionToggle(index)}
                  className="flex justify-between items-start border-black cursor-pointer w-full focus:outline-none"
                >
                  <p
                    className={`font-poppins sm:text-lg text-[20px] text-start ${
                      activeIndex === index
                        ? "text-golden font-semibold"
                        : "text-black font-normal"
                    }`}
                  >
                    {faq.heading}
                  </p>
                  {activeIndex === index ? (
                    <div className="mt-1.5">
                      <HiOutlineMinus className="w-6 h-6" />
                    </div>
                  ) : (
                    <div className="mt-1.5">
                      <HiPlus className="w-6 h-6" />
                    </div>
                  )}
                </button>
                {activeIndex === index && (
                  <div className="mt-[18px]">
                    <p className="font-poppins text-left font-normal text-md max-w-[804px] text-darkblue">
                      {faq.peragraph}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        {activeTab === "tab5" && (
          <div className="max-w-[950px] mx-auto mt-9 relative">
            {accordionData.map((faq, index) => (
              <div
                key={index}
                className={`sm:p-6 p-5 border-darkblue border-opacity-[24%] ${
                  activeIndex === index ? "text-golden" : "border-y-[1px]"
                }`}
              >
                <button
                  onClick={() => handleAccordionToggle(index)}
                  className="flex justify-between items-start border-black cursor-pointer w-full focus:outline-none"
                >
                  <p
                    className={`font-poppins sm:text-lg text-[20px] text-start ${
                      activeIndex === index
                        ? "text-golden font-semibold"
                        : "text-black font-normal"
                    }`}
                  >
                    {faq.heading}
                  </p>
                  {activeIndex === index ? (
                    <div className="mt-1.5">
                      <HiOutlineMinus className="w-6 h-6" />
                    </div>
                  ) : (
                    <div className="mt-1.5">
                      <HiPlus className="w-6 h-6" />
                    </div>
                  )}
                </button>
                {activeIndex === index && (
                  <div className="mt-[18px]">
                    <p className="font-poppins text-start font-normal text-md max-w-[804px] text-darkblue">
                      {faq.peragraph}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Faq;
