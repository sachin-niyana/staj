import React from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { HiPlus, HiMinus } from "react-icons/hi";

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
    <HiMinus className="w-6 h-6" />
  ) : (
    <HiPlus className="w-6 h-6" />
  );
};

const MyAccordion = () => {
  const [openTab, setOpenTab] = React.useState(accordionData[0].id); // Set the default to the ID of the first item

  const handleOpen = (id) => {
    setOpenTab(openTab === id ? null : id);
  };

  return (
    <div className="max-w-[950px] mx-auto mt-9 relative">
      {accordionData.map((item, index) => (
        <Accordion
          key={item.id}
          className={`border-b-[1px] border-darkblue py-6 ${
            index === accordionData.length - 1 ? "border-none" : ""
          }`}
          open={openTab === item.id}
          icon={<Icon isOpen={openTab === item.id} />}
        >
          <AccordionHeader
            onClick={() => handleOpen(item.id)}
            className={`font-poppins sm:text-lg text-md text-start leading-[133%] py-0 ${
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
  );
};

export default MyAccordion;
