import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useTranslation } from "react-i18next";
const Doctors = () => {
  const { t } = useTranslation();
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [filterData, setFilterData] = useState([]);
  const [Fliter, setFilter] = useState(false);
  const navgate = useNavigate();
  const SpecialtiData = [
    "general_physician",
    "gynecologist",
    "dermatologist",
    "pediatricians",
    "neurologist",
    "gastroenterologist",
  ];

  const applyFilter = () => {
    if (speciality) {
      setFilterData(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterData(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div className="flex flex-col items-start gap-2 ">
      <p className="bg-primary text-white md:inline-block p-2 rounded-lg max-w-[300px] hidden ">
        {t("Browse through the doctors specialist.")}
      </p>
      <button onClick={()=>setFilter(prev => !prev)} className={`mt-10 md:hidden px-6 py-2  text-white rounded-2xl shadow-md  hover:scale-105 transition-all duration-300 ${Fliter ? "bg-primary" : "bg-gray-500"}`}>
        Filter
      </button>

      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5 ">
        <div className={`  flex-col space-y-4 text-sm text-gray-600 ${Fliter ? "" : "hidden md:flex"}`}>
          {SpecialtiData.map((key) => (
            <p
              key={key}
              onClick={() =>
                speciality === `specialities.${key}`
                  ? navgate("/doctors")
                  : navgate(`/doctor/specialities.${key}`)
              }
              className={`w-[400px] md:min-w-[150px]  sm:w-auto pl-3 py-2 pr-6 border border-gray-300 rounded-lg shadow-sm transition-all cursor-pointer hover:bg-indigo-50 hover:text-black ${
                speciality === `specialities.${key}`
                  ? "bg-indigo-100 text-black"
                  : ""
              }`}
            >
              {t(`specialities.${key}`)}
            </p>
          ))}
        </div>

        <div className=" w-full gap-4 pt-5 gap-y-6 px-3  sm:px-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
          {filterData.map((item, index) => (
            <div
              onClick={() => {
                navgate(`/appointment/${item._id}`);
              }}
              key={index}
              className="border border-blue-200 rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 cursor-pointer shadow-sm hover:shadow-md bg-white"
            >
              <img
                className="w-full h-48 object-cover bg-blue-50"
                src={item.image}
                alt={item.name}
              />

              <div className="p-3 sm:p-4">
                {/* الحالة */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-green-500 h-2 w-2 rounded-full"></div>
                  <p className="text-green-500 text-xs sm:text-sm">
                    {t("Available")}
                  </p>
                </div>

                {/* الاسم والتخصص */}
                <p className="font-semibold text-sm sm:text-base mb-1">
                  {item.name}
                </p>
                <p className="text-gray-600 text-xs sm:text-sm">
                  {t(item.speciality)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
