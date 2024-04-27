import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { HiPlus, HiOutlineMinus } from "react-icons/hi";
import { Circlebox, Trianglebox, Trianglebox2 } from "./common/Icon";
const accordionData = [
  {
    id: "1",
    heading: "What is the relationship between mobile apps and websites?",
    paragraph:
      "The major difference between a mobile app and a mobile website is that the mobile website is accessed by the user via the separate app installed on the phone and can be accessed both online as well as offline.",
  },
  {
    id: "2",
    heading: "Why choose mobile app over website?",
    paragraph:
      "The major difference between a mobile app and a mobile website is that the mobile website is accessed by the user via the separate app installed on the phone and can be accessed both online as well as offline.",
  },
  {
    id: "3",
    heading: "Does a mobile app need a website?",
    paragraph:
      "The major difference between a mobile app and a mobile website is that the mobile website is accessed by the user via the separate app installed on the phone and can be accessed both online as well as offline.",
  },
  {
    id: "4",
    heading: "What is FAQ in mobile?",
    paragraph:
      "The major difference between a mobile app and a mobile website is that the mobile website is accessed by the user via the separate app installed on the phone and can be accessed both online as well as offline.",
  },
  {
    id: "5",
    heading: "Are mobile apps more secure than websites?",
    paragraph:
      "The major difference between a mobile app and a mobile website is that the mobile website is accessed by the user via the separate app installed on the phone and can be accessed both online as well as offline.",
  },
];
const Icon = ({ isOpen }) => {
  return isOpen ? (
    <HiOutlineMinus className="w-6 h-6" />
  ) : (
    <HiPlus className="w-6 h-6" />
  );
};
const Faq = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [openTab, setOpenTab] = React.useState(accordionData[0].id); // Set the default to the ID of the first item

  const handleOpen = (id) => {
    setOpenTab(openTab === id ? null : id);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="bg-white" id="FAQ">
      <div className="container max-w-[1464px] mx-auto px-3 lg:pb-[120px] lg:pt-0 md:py-20 sm:py-[60px] py-12 relative">
        <div className="absolute md:block hidden right-[10%]">
          <Trianglebox />
        </div>
        <div className="absolute md:block hidden bottom-[20%] right-[-5%]">
          <Trianglebox2 />
        </div>
        <div className="absolute md:block hidden top-[7%] left-[-12%]">
          <Circlebox />
        </div>
        <p className="text-center text-orange font-poppins font-normal text-sm sm:text-base md:text-md">
          Frequently Asked Questions
        </p>
        <h2 className="font-poppins font-extrabold lg:text-xxl sm:text-[45px] text-xl text-darkblue mx-auto text-center mt-3 max-w-[600px] leading-[113%]">
          Have Questions? We’re here to help.
        </h2>
        <div className="flex flex-row h-[60px] !overflow-x-scroll border gap-5 sm:gap-0 justify-between py-[6px] mt-9 items-center px-[6px] border-[#d7d7d7] rounded-[48px] mx-auto max-w-[1200px] relative bg-white">
          <button
            className={` px-4 py-1 duration-300 lg:py-[14px] ${
              activeTab === "tab1"
                ? "text-center min-[1025px]:text-md text-[14px] ff-poppins font-semibold py-[14px] rounded-[100px] ps-7 pe-[27px] bg-golden text-white leading-[112%] whitespace-nowrap"
                : " text-darkblue min-[1025px]:text-md text-[14px] ff-poppins font-semibold whitespace-nowrap leading-[112%]"
            }`}
            onClick={() => handleTabChange("tab1")}
          >
            General Questions
          </button>
          <button
            className={` px-4 py-1 duration-300 lg:py-[14px] ${
              activeTab === "tab2"
                ? "text-center min-[1025px]:text-md text-[14px] ff-poppins font-semibold py-[14px] rounded-[100px] ps-7 pe-[27px] bg-golden text-white leading-[112%] whitespace-nowrap"
                : " text-darkblue min-[1025px]:text-md text-[14px] ff-poppins font-semibold whitespace-nowrap leading-[112%]"
            }`}
            onClick={() => handleTabChange("tab2")}
          >
            Payments & Transactions
          </button>
          <button
            className={` px-4 py-1 duration-300 lg:py-[14px] ${
              activeTab === "tab3"
                ? "text-center min-[1025px]:text-md text-[14px] ff-poppins font-semibold py-[14px] rounded-[100px] ps-7 pe-[27px] bg-golden text-white leading-[112%] whitespace-nowrap"
                : " text-darkblue min-[1025px]:text-md text-[14px] ff-poppins font-semibold whitespace-nowrap leading-[112%]"
            }`}
            onClick={() => handleTabChange("tab3")}
          >
            Accounts & Profiles
          </button>
          <button
            className={` px-4 py-1 duration-300 lg:py-[14px] ${
              activeTab === "tab4"
                ? "text-center min-[1025px]:text-md text-[14px] ff-poppins font-semibold py-[14px] rounded-[100px] ps-7 pe-[27px] bg-golden text-white leading-[112%] whitespace-nowrap"
                : " text-darkblue min-[1025px]:text-md text-[14px] ff-poppins font-semibold whitespace-nowrap leading-[112%]"
            }`}
            onClick={() => handleTabChange("tab4")}
          >
            Technical Support
          </button>
          <button
            className={` px-4 py-1 duration-300 lg:py-[14px] ${
              activeTab === "tab5"
                ? "text-center min-[1025px]:text-md text-[14px] ff-poppins font-semibold py-[14px] rounded-[100px] ps-7 pe-[27px] bg-golden text-white leading-[112%] whitespace-nowrap"
                : " text-darkblue min-[1025px]:text-md text-[14px] ff-poppins font-semibold whitespace-nowrap leading-[112%]"
            }`}
            onClick={() => handleTabChange("tab5")}
          >
            Creating & Finding Events
          </button>
        </div>

        {activeTab === "tab1" && (
          <div className="max-w-[950px] mx-auto mt-9 relative">
            {accordionData.map((item, index) => (
              <Accordion
                key={item.id}
                className={`border-b-[1px] border-darkblue border-opacity-[24%] bg-white py-6 ${
                  index === accordionData.length - 1 ? "border-none" : ""
                }`}
                open={openTab === item.id}
                icon={<Icon isOpen={openTab === item.id} />}
              >
                <AccordionHeader
                  onClick={() => handleOpen(item.id)}
                  className={`font-poppins sm:text-lg text-md text-start leading-[133%] py-0 items-start ${
                    openTab === item.id
                      ? "text-golden font-semibold"
                      : "text-darkblue font-normal"
                  }`}
                >
                  {item.heading}
                </AccordionHeader>
                <AccordionBody className="font-poppins font-normal max-w-[804px] leading-[144%] text-left text-md text-darkblue py-0 mt-[18px]">
                  {item.paragraph}
                </AccordionBody>
              </Accordion>
            ))}
          </div>
        )}
        {activeTab === "tab2" && (
          <div className="max-w-[950px] mx-auto mt-9 relative">
            {accordionData.map((item, index) => (
              <Accordion
                key={item.id}
                className={`border-b-[1px] border-darkblue border-opacity-[24%] bg-white py-6 ${
                  index === accordionData.length - 1 ? "border-none" : ""
                }`}
                open={openTab === item.id}
                icon={<Icon isOpen={openTab === item.id} />}
              >
                <AccordionHeader
                  onClick={() => handleOpen(item.id)}
                  className={`font-poppins sm:text-lg text-md text-start leading-[133%] py-0 items-start ${
                    openTab === item.id
                      ? "text-golden font-semibold"
                      : "text-darkblue font-normal"
                  }`}
                >
                  {item.heading}
                </AccordionHeader>
                <AccordionBody className="font-poppins font-normal max-w-[804px] leading-[144%] text-left text-md text-darkblue py-0 mt-[18px]">
                  {item.paragraph}
                </AccordionBody>
              </Accordion>
            ))}
          </div>
        )}
        {activeTab === "tab3" && (
          <div className="max-w-[950px] mx-auto mt-9 relative">
            {accordionData.map((item, index) => (
              <Accordion
                key={item.id}
                className={`border-b-[1px] border-darkblue border-opacity-[24%] bg-white py-6 ${
                  index === accordionData.length - 1 ? "border-none" : ""
                }`}
                open={openTab === item.id}
                icon={<Icon isOpen={openTab === item.id} />}
              >
                <AccordionHeader
                  onClick={() => handleOpen(item.id)}
                  className={`font-poppins sm:text-lg text-md text-start leading-[133%] py-0 items-start ${
                    openTab === item.id
                      ? "text-golden font-semibold"
                      : "text-darkblue font-normal"
                  }`}
                >
                  {item.heading}
                </AccordionHeader>
                <AccordionBody className="font-poppins font-normal max-w-[804px] leading-[144%] text-left text-md text-darkblue py-0 mt-[18px]">
                  {item.paragraph}
                </AccordionBody>
              </Accordion>
            ))}
          </div>
        )}
        {activeTab === "tab4" && (
          <div className="max-w-[950px] mx-auto mt-9 relative">
            {accordionData.map((item, index) => (
              <Accordion
                key={item.id}
                className={`border-b-[1px] border-darkblue border-opacity-[24%] bg-white py-6 ${
                  index === accordionData.length - 1 ? "border-none" : ""
                }`}
                open={openTab === item.id}
                icon={<Icon isOpen={openTab === item.id} />}
              >
                <AccordionHeader
                  onClick={() => handleOpen(item.id)}
                  className={`font-poppins sm:text-lg text-md text-start leading-[133%] py-0 items-start ${
                    openTab === item.id
                      ? "text-golden font-semibold"
                      : "text-darkblue font-normal"
                  }`}
                >
                  {item.heading}
                </AccordionHeader>
                <AccordionBody className="font-poppins font-normal max-w-[804px] leading-[144%] text-left text-md text-darkblue py-0 mt-[18px]">
                  {item.paragraph}
                </AccordionBody>
              </Accordion>
            ))}
          </div>
        )}
        {activeTab === "tab5" && (
          <div className="max-w-[950px] mx-auto mt-9 relative">
            {accordionData.map((item, index) => (
              <Accordion
                key={item.id}
                className={`border-b-[1px] border-darkblue border-opacity-[24%] bg-white py-6 ${
                  index === accordionData.length - 1 ? "border-none" : ""
                }`}
                open={openTab === item.id}
                icon={<Icon isOpen={openTab === item.id} />}
              >
                <AccordionHeader
                  onClick={() => handleOpen(item.id)}
                  className={`font-poppins sm:text-lg text-md text-start leading-[133%] py-0 items-start ${
                    openTab === item.id
                      ? "text-golden font-semibold"
                      : "text-darkblue font-normal"
                  }`}
                >
                  {item.heading}
                </AccordionHeader>
                <AccordionBody className="font-poppins font-normal max-w-[804px] leading-[144%] text-left text-md text-darkblue py-0 mt-[18px]">
                  {item.paragraph}
                </AccordionBody>
              </Accordion>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Faq;
