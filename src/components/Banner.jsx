import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Banner = () => {
    const {t} = useTranslation()
    const navgate = useNavigate()
  return (
    <div className="  bg-primary rounded-lg px-4 flex flex-col md:flex-row   mb-10">
      <div className="w-full md:w-1/2 flex flex-col gap-4 py-10 px-4 sm:px-8 md:py-20 md:px-16">
        {/* العنوان */}
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl  font-semibold text-white text-center md:text-left leading-snug">
          {t("Book Appointment")}
        </p>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl  font-semibold text-white text-center md:text-left leading-snug">
        
          {t("With 100+ Trusted Doctors")}
        </p>

        {/* الزر */}
        <div className="w-full flex justify-center md:justify-start">
          <button onClick={()=>{navgate('/singup'); scrollTo(0,0) }} className="bg-white rounded-full text-gray-700 px-6 py-3 sm:px-8 sm:py-4 mt-4 text-sm sm:text-base font-medium shadow hover:shadow-md  hover:scale-105 transition-all ">
            {t("Creat Account")}
          </button>
        </div>
      </div>
      <div className="w-52  md:w-1/2 lg:w-[370px]  md:relative ">
        <img
          className=" hidden md:block w-full absolute bottom-0"
          src={assets.appointment_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
