import  { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";


const RelatedDoctors = ({ speciality , docId }) => {

   const navgate = useNavigate()
  const { t } = useTranslation();
 
  const {doctors} = useContext(AppContext)
  
  const [relDoc, setRealDoc] = useState([]);

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const RelatedDoctor = doctors.filter((doctor) => doctor.speciality === speciality && doctor._id !== docId);
      setRealDoc(RelatedDoctor);
    }
  }, [doctors,speciality , docId ]);
   


  
  return <div className="flex flex-col items-center">

    <h1 className=" text-2xl md:text-3xl font-semibold mb-4 mt-10 ">Related Doctors</h1>
    <p className="text-sm max-w-[330px] text-center">Simply browse through our extensive list of trusted doctors.</p>
    <div className=" w-full gap-4 pt-5 gap-y-6 px-3  sm:px-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:mx-a ">

  
    {relDoc?.map((item, index) => (
          <div
            onClick={() => {  
              navgate(`/appointment/${item._id}`);
              scrollTo(0,0)
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
  </div>;
</div>
};

export default RelatedDoctors;
