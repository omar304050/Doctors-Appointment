import React from "react";
import { assets } from "../assets/assets";
import { useTranslation } from "react-i18next";

const Header = () => {
    const { t, i18n } = useTranslation();
  return (
    <div className="flex flex-col md:flex-row flex-wrap  bg-primary rounded-lg  px-6 md:px-10 lg:px-20 relative">
      {/* left side header  */}
      <div className="md:w-1/2 flex flex-col  items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold md:leading-tight lg:leading-tight" >{t("Book Appointment")} <br /> {t("With Trusted Doctors")} </p>
        <div className=" flex flex-col  items-start gap-3 text-white text-sm font-light lg:flex-row">
          <img className="w-20" src={assets.group_profiles} alt="" />
          <p >
            {t("Simply browse through our extensive list of trusted doctors")},
          <br /> {t("schedule your appointment hassle-free")}.</p>
        </div>
        <a href="#speciality" className="bg-white rounded-full py-3 px-6 flex flex-row items-center text-gray-600 gap-2 text-sm select-none cursor-pointer hover:scale-105 transition-all duration-300">
            {t("Book appointment")}
            <img className="w-3" src={assets.arrow_icon} alt="" />
        </a>
      </div>
      {/* right side header  */}
      <div className="md:w-1/2 relative ">
        <img className="w-full md:absolute bottom-0 h-auto rounded-lg" src={assets.header_img} alt="" />
      </div>
    </div>
  );
};

export default Header;
