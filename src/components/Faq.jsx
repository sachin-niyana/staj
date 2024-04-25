import React, { useState } from "react";
import { accordionData } from "./common/Helper";
import { HiPlus } from "react-icons/hi2";
import { FaRegWindowMinimize } from "react-icons/fa6";
import { Trianglebox } from "./common/Icon";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

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
        <div className="absolute">
          <Trianglebox />
        </div>
        <p className="text-center text-orange font-poppins font-normal text-md">
          Frequently Asked Questions
        </p>
        <h2 className="font-poppins font-extrabold text-xxl text-darkblue mx-auto text-center mt-3 max-w-[600px] leading-[113%]">
          Have Questions? We’re here to help.
        </h2>
        <div className="flex flex-row overflow-x-scroll border gap-5 sm:gap-0 justify-between py-[6px] mt-[60px] items-center px-[6px] border-[#d7d7d7] rounded-[48px] mx-auto max-w-[1200px]">
          <div
            className={`xl:mr-4 px-4 py-1 duration-300 lg:py-[14px] ${
              activeTab === "tab1"
                ? "text-center text-md ff-poppins font-semibold py-[14px] ps-10 lg:ps-[63px] rounded-[100px] pe-10 lg:pe-[57px] bg-golden text-darkblue"
                : "bg-white text-darkblue"
            }`}
            onClick={() => handleTabChange("tab1")}
          >
            <button className="text-center text-md ff-poppins font-semibold whitespace-nowrap text-darkblue">
              General Questions
            </button>
          </div>
          <div
            className={` xl:mr-4 px-4 py-1 duration-300 lg:py-[14px] ${
              activeTab === "tab2"
                ? "text-center text-md ff-poppins font-semibold py-[14px] ps-10 lg:ps-[63px] rounded-[100px] pe-10 lg:pe-[57px] bg-golden text-darkblue"
                : "bg-white text-darkblue"
            }`}
            onClick={() => handleTabChange("tab2")}
          >
            <button className="text-center text-md ff-poppins whitespace-nowrap font-semibold  text-darkblue">
              Payments & Transactions
            </button>
          </div>
          <div
            className={`px-4 py-1 duration-300 lg:py-[14px] ${
              activeTab === "tab3"
                ? "text-center text-md ff-poppins font-semibold py-[14px] ps-10 lg:ps-[63px] rounded-[100px] pe-10 lg:pe-[57px] bg-golden text-darkblue"
                : "mr-4 bg-white text-darkblue"
            }`}
            onClick={() => handleTabChange("tab3")}
          >
            <button className="text-center text-md ff-poppins whitespace-nowrap font-semibold  text-darkblue">
              Accounts & Profiles
            </button>
          </div>
          <div
            className={`px-4 py-1 duration-300 lg:py-[14px] ${
              activeTab === "tab4"
                ? "text-center text-md ff-poppins font-semibold py-[14px] ps-10 lg:ps-[63px] rounded-[100px] pe-10 lg:pe-[57px] bg-golden text-darkblue"
                : "mr-4 bg-white text-darkblue"
            }`}
            onClick={() => handleTabChange("tab4")}
          >
            <button className="text-center text-md ff-poppins whitespace-nowrap font-semibold  text-darkblue">
              Technical Support
            </button>
          </div>
          <div
            className={`px-4 py-1 duration-300 lg:py-[14px] ${
              activeTab === "tab5"
                ? "text-center text-md ff-poppins font-semibold py-[14px] ps-10 lg:ps-[63px] rounded-[100px] pe-10 lg:pe-[57px] bg-golden text-darkblue"
                : "mr-4 bg-white text-darkblue"
            }`}
            onClick={() => handleTabChange("tab5")}
          >
            <button className="text-center text-md ff-poppins whitespace-nowrap font-semibold  text-darkblue">
              Creating & Finding Events
            </button>
          </div>
        </div>

        {activeTab === "tab1" && (
          <div className="max-w-[950px] mx-auto mt-9">
            {accordionData.map((faq, index) => (
              <div
                key={index}
                className={`p-6 border-darkblue border-opacity-[24%] text-start ${
                  activeIndex === index
                    ? "text-golden text-start"
                    : "border-y-[1px]"
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
        )}
        {activeTab === "tab2" && (
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
        )}
        {activeTab === "tab3" && (
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
        )}
        {activeTab === "tab4" && (
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
        )}
        {activeTab === "tab5" && (
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
        )}
      </div>
    </div>
  );
};

export default Faq;
