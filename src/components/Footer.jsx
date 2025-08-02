import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="py-16 ">
      <div className=" flex flex-col gap-10 xl:flex-row  xl:justify-between items-start border-b-2  ">
        <div className=" flex flex-col items-start gap-4">
          <div><img className="w-40 " src={assets.logo} alt="" /></div>
          <p className="text-[12px] leading-relaxed text-justify sm:text-left text-gray-700 max-w-[370px] ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2 ">
          <h3 className="text-[20px] font-semibold ">COMPANY</h3>
          <p className="text-gray-600 text-[14px] ">Home</p> 
          <p className="text-gray-600 text-[14px] ">About us</p>
          <p className="text-gray-600 text-[14px] ">Delivery</p>
          <p className="text-gray-600 text-[14px] ">Privacy policy</p>
        </div>
        <div className="flex flex-col items-start ">
          <h3 className="text-[20px] font-semibold mb-4">GET IN TOUCH</h3>
          <p className="text-gray-600 text-[14px] mb-2">+0-000-000-000</p>
          <p className="text-gray-600 text-[14px] mb-2">
            greatstackdev@gmail.com
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-6 text-[14px]">
        <p>Copyright 2024 @ Greatstack.dev - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
