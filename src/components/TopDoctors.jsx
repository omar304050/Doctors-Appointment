import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useTranslation } from "react-i18next";
const TopDoctors = () => {
  const {t} = useTranslation()
    const {doctors} = useContext(AppContext)
    const navgate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className=" text-2xl md:text-3xl font-semibold mb-4">
       {t("Top Doctors to Book")}
      </h1>
      <p className="text-center">{t("Simply browse through our extensive list of trusted doctors.")}</p>
      <div className=" w-full gap-4 pt-5 gap-y-6 px-3  sm:px-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
        {doctors.slice(0, 10).map((item, index) => (
          <div onClick={()=>{navgate(`/appointment/${item._id}`)}} key={index} className="border border-blue-200 rounded-xl overflow-hidden  hover:translate-y-[-10px] transition-all duration-500 cursor-pointer ">
            <img className="bg-blue-50" src={item.image} alt="" />
            <div className="p-2 md:p-4">
              <div className="flex flex-row items-center gap-2">
                <div className="bg-green-500 h-2 w-2 rounded-full"></div>
                <p className=" text-green-400">{t("Available")}</p>
              </div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-600 text-sm">{t(item.speciality)}</p>
            </div>
         
          </div>
        ))}
      </div>
         <button onClick={()=>{navgate('/doctors'); scrollTo(0,0)}} className="bg-blue-50 py-4 px-12 rounded-full m-10">
                {t("more")}
            </button>
    </div>
  );
};

export default TopDoctors;
