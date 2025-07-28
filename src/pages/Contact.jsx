import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="flex flex-col  items-center gap-10">
      <h1 className="py-6 text-gray-500 text-2xl  ">CONTACT <span className="text-gray-600 font-semibold">US</span></h1>

      <div className="flex flex-col md:flex-row items-start md:items-center md:justify-center gap-8" >
        <img  className=" w-full md:w-[30%]" src={assets.contact_image} alt="" />
        <div className="flex flex-col  gap-6 items-start ">
          <h5 className="text-[18px] font-semibold text-gray-600">OUR OFFICE</h5>
          <div>
            <p className="text-sm text-gray-400">00000 Willms Station</p>
            <p className="text-sm text-gray-400">Suite 000, Washington, USA</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Tel: (000) 000-0000</p>
            <p className="text-sm text-gray-400">Email: omaralalfy30@gmail.com</p>
          </div>
          <h3 className="font-semibold text-gray-700 text-[18px]">CAREERS AT PRESCRIPTO</h3>
          <p className="text-sm text-gray-400">Learn more about our teams and job openings.</p>
          <button className="border border-gray-700 px-5 py-3 hover:bg-black hover:text-white duration-500 transition-all ">Explore Jobs</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
