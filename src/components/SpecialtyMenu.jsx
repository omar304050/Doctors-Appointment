import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const specilatyMenu = () => {
    const { t } = useTranslation()
  return (
    <div
      id="speciality"
      className="flex flex-col items-center gap-4 py-16 text-gray-800"
    >
      <h1 className=" text-3xl font-medium">{t("Find by Speciality")}</h1>
      <p className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 text-center text-sm">
        {t("Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.")}
      </p>

      <div className="flex  items-center  overflow-scroll scrollbar-hidden justify-center  gap-4 pt-5 w-full">
        {specialityData.map((item, index) => (
          <Link onClick={()=>{scrollTo(0,0)}} key={index} className="flex flex-col items-center text-xs cursor-pointer hover:translate-y-[-10px] transition-all duration-500 justify-center" to={`/doctor/${item.speciality}`}>
            <img className="w-16 sm:w-24 mb-2" src={item.image} alt="" />
            <p className="text-sm">{t(item.speciality)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default specilatyMenu;
