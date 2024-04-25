import React from "react";
import logo from "../assets/images/png/footer-logo.png";
import { Facebook, Instagram, Tiktok, Twitter } from "./common/Icon";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-darkblue">
      <div className="container max-w-[1464px] px-3 mx-auto pt-[90px] pb-[60px]">
        <div>
          <div className="flex xl:flex-row flex-col justify-between">
            <div className="flex md:flex-row flex-col justify-between min-[1440px]:w-[62%] xl:w-[60%] xl:mx-0 mx-auto">
              <div className="max-w-[400px] w-full">
                <div className="flex md:justify-start justify-center">
                  <img
                    className="md:max-w-[186px] max-w-[140px]"
                    src={logo}
                    alt="footer-logo"
                  />
                </div>
                <p className="font-poppins md:text-start text-center font-normal text-white text-md mt-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <div className="flex md:justify-start justify-center gap-[18px] mt-9">
                  <Link to="https://www.facebook.com/" target="_blank">
                    <Facebook />
                  </Link>
                  <Link to="https://www.facebook.com/" target="_blank">
                    <Twitter />
                  </Link>
                  <Link to="https://www.facebook.com/" target="_blank">
                    <Instagram />
                  </Link>
                  <Link to="https://www.facebook.com/" target="_blank">
                    <Tiktok />
                  </Link>
                </div>
              </div>
              <div className="max-w-[480px] md:mt-0 mt-10">
                <div className="flex min-[1440px]:gap-[90px] md:gap-10 md:justify-start justify-between min-[1440px]:ms-[15px]">
                  <ul className="ps-0 flex flex-col gap-5">
                    <li className="font-poppins font-semibold text-lg text-white">
                      Quick Link
                    </li>
                    <li className="mt-1">
                      <Link className="font-poppins font-normal text-md text-white">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="font-poppins font-normal text-md text-white">
                        Features
                      </Link>
                    </li>
                    <li>
                      <Link className="font-poppins font-normal text-md text-white">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="font-poppins font-normal text-md text-white">
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link className="font-poppins font-normal text-md text-white">
                        Contact us
                      </Link>
                    </li>
                  </ul>
                  <ul className="ps-0 flex flex-col gap-5">
                    <li className="font-poppins font-semibold text-lg text-white ">
                      Resources
                    </li>
                    <li className="mt-1">
                      <Link className="font-poppins font-normal text-md text-white">
                        Download Staj App
                      </Link>
                    </li>
                    <li>
                      <Link className="font-poppins font-normal text-md text-white">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link className="font-poppins font-normal text-md text-white">
                        Terms of Service
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="max-w-[460px] w-full min-[1440px]:ms-[0px] xl:ms-8 xl:mx-0 mx-auto xl:mt-0 mt-10">
              <p className="font-poppins font-semibold xl:text-start text-center text-lg text-white">
                Join our email updates list
              </p>
              <p className="font-poppins font-normal xl:text-start text-center text-md text-white mt-[18px]">
                Stay updated with Staj to receive news about upcoming events
                near you.
              </p>
              <div className="bg-white bg-opacity-[24%] p-3 rounded-[48px] flex justify-between mt-9 w-full max-w-[460px]">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="ps-3.5 bg-transparent placeholder-white font-poppins font-normal text-md max-w-[240px] w-full outline-none text-white"
                />
                <button className="font-poppins min-[480px]:block hidden whitespace-nowrap font-bold text-base leading-[100%] text-darkblue bg-golden rounded-[36px] py-[19px] px-[44px]">
                  Get started{" "}
                </button>
              </div>
              <div className="flex justify-center mx-auto min-[480px]:hidden mt-5">
                <button className="font-poppins whitespace-nowrap font-bold text-base leading-[100%] text-darkblue bg-golden rounded-[36px] py-[19px] px-[44px]">
                  Get started{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
