import React from "react";
import {
  FeaturecardsData,
  FeaturecardsData2,
  FeaturecardsData3,
} from "./common/Helper";
import { useState } from "react";
import mapvector from "../assets/images/webp/map_view_vec.webp";
import circlevec from "../assets/images/webp/instant_payout_vec.webp";
import dottedCircleVec from "../assets/images/webp/how_works_vec.webp";
const Features = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="pt-14 pb-[120px] sm:pt-[80px] md:py-[120px]">
      <div className="max-w-[1464px] mx-auto px-3 relative">
        <img
          className="absolute z-0 end-[32.5%] top-2 max-w-[40px] md:max-w-[96px]"
          src={dottedCircleVec}
          alt="dotted-circles"
        />
        <p className="text-orange ff-poppins text-sm sm:text-base md:text-md text-center">
          Features
        </p>
        <h2 className="text-center text-darkblue ff-poppins font-bold text-[30px] sm:text-[45px] xl:text-xxl relative z-10">
          How it works
        </h2>

        <div className="flex sm:flex-row flex-col sm:h-[69px]  sm:border gap-5 sm:gap-0 justify-between py-[6px] mt-[60px] items-center px-[6px] border-[#d7d7d7] sm:rounded-[48px] mx-auto max-w-[640px]">
          <div
            className={`xl:mr-4 px-4 py-1 duration-300 sm:rounded-[100px] lg:py-[14px] ${
              activeTab === "tab1"
                ? "text-center text-md ff-poppins font-semibold py-[14px] ps-10 lg:ps-[63px] rounded-[100px] pe-10 lg:pe-[57px] bg-golden text-darkblue"
                : "bg-white text-darkblue"
            }`}
            onClick={() => handleTabChange("tab1")}
          >
            <button className="text-center text-md ff-poppins font-semibold whitespace-nowrap text-darkblue">
              For Fans
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
              For Artists
            </button>
          </div>

          <div
            className={`px-4 py-1 duration-300 lg:py-[14px] ${
              activeTab === "tab3"
                ? "text-center text-md ff-poppins font-semibold py-[14px] ps-10 lg:ps-[63px] rounded-[100px] pe-10 lg:pe-[57px] bg-golden text-darkblue"
                : "lg:mr-4 bg-white text-darkblue"
            }`}
            onClick={() => handleTabChange("tab3")}
          >
            <button className="text-center sm:px-0 sm:py-0  text-md ff-poppins whitespace-nowrap font-semibold  text-darkblue">
              For Event Organizers
            </button>
          </div>
        </div>

        {activeTab === "tab1" && (
          <div>
            <div className="flex flex-wrap justify-center flex-row mt-[60px] gap-5 lg:gap-0 -mx-3 relative">
              <img
                className="absolute bottom-[-79px] z-0 end-[-4%] max-w-[134px] "
                src={mapvector}
                alt="mapvector"
              />
              <img
                className="absolute top-[-50%] max-w-[100px] xl:max-w-[215px] lg:block hidden start-5"
                src={circlevec}
                alt="circle-vectors"
              />
              {FeaturecardsData.map((card, index) => (
                <div
                  key={index}
                  className="lg:w-3/12 relative z-10 sm:4/12 sm:6/12 lg:px-3"
                >
                  <div className="flex justify-center duration-300 bg-white hover:bg-sky-200 hover:scale-90 cursor-pointer mx-[3px] relative z-30 shadow-[0px_24px_48px_0px_rgba(0,0,0,0.12)] h-full max-w-[338px] min-h-[344px] flex-col px-6 items-center py-8 xl:py-12 rounded-[12px]">
                    <img
                      className="max-w-[90px]"
                      src={card.image}
                      alt="mobile"
                    />
                    <p className="ff-poppins font-semibold text-darkblue xl:mt-9 mt-5 text-[20px] xl:text-lg">
                      {card.title}
                    </p>
                    <p className="mt-2 xl:mt-3 ff-poppins fs-md text-center max-w-[260px]">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === "tab2" && (
          <div>
            <div className="flex flex-wrap justify-center flex-row mt-[60px] gap-5 lg:gap-0 -mx-3 relative">
              <img
                className="absolute bottom-[-79px] z-0 end-[-4%] max-w-[134px]"
                src={mapvector}
                alt="mapvector"
              />
              <img
                className="absolute top-[-50%] max-w-[100px] xl:max-w-[215px] start-5 lg:block hidden"
                src={circlevec}
                alt="circle-vectors"
              />
              {FeaturecardsData2.map((card, index) => (
                <div
                  key={index}
                  className="lg:w-3/12 sm:4/12 relative z-10 sm:6/12 lg:px-3"
                >
                  <div className="flex justify-center duration-300 bg-white hover:bg-sky-200 hover:scale-90 cursor-pointer mx-[3px] relative z-30 shadow-[0px_24px_48px_0px_rgba(0,0,0,0.12)] h-full max-w-[338px] min-h-[344px] flex-col px-6 items-center py-8 xl:py-12 rounded-[12px]">
                    <img
                      className="max-w-[90px]"
                      src={card.image}
                      alt="mobile"
                    />
                    <p className="ff-poppins font-semibold text-darkblue xl:mt-9 mt-5 text-[20px] xl:text-lg">
                      {card.title}
                    </p>
                    <p className="mt-2 xl:mt-3 ff-poppins fs-md text-center max-w-[260px]">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === "tab3" && (
          <div>
            <div className="flex flex-wrap justify-center flex-row mt-[60px] gap-5 lg:gap-0 -mx-3 relative">
              <img
                className="absolute bottom-[-79px] z-0 end-[-4%] max-w-[134px]"
                src={mapvector}
                alt="mapvector"
              />
              <img
                className="absolute top-[-50%] max-w-[100px] xl:max-w-[215px] start-5 lg:block hidden"
                src={circlevec}
                alt="circle-vectors"
              />
              {FeaturecardsData3.map((card, index) => (
                <div
                  key={index}
                  className="lg:w-3/12 relative z-10 sm:4/12 sm:6/12 lg:px-3"
                >
                  <div className="flex justify-center duration-300 bg-white hover:bg-sky-200 hover:scale-90 cursor-pointer mx-[3px] relative z-30 shadow-[0px_24px_48px_0px_rgba(0,0,0,0.12)] h-full max-w-[338px] min-h-[344px] flex-col px-6 items-center py-8 xl:py-12 rounded-[12px]">
                    <img
                      className="max-w-[90px]"
                      src={card.image}
                      alt="mobile"
                    />
                    <p className="ff-poppins font-semibold text-darkblue xl:mt-9 mt-5 text-[20px] xl:text-lg">
                      {card.title}
                    </p>
                    <p className="mt-2 xl:mt-3 ff-poppins fs-md text-center max-w-[260px]">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Features;
