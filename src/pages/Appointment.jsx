import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import { useTranslation } from "react-i18next";
import RelatedDoctors from "../components/relatedDoctors";

const Appointment = () => {
  const { doctors } = useContext(AppContext);
  const { docId } = useParams();
  const [docInfo, setDocInfo] = useState();
  const { t, i18n } = useTranslation();
  const daysOfWeek = ["SUN" , "MON" , "TUE" , "WED" , "THU" , "FRI" , "SAT"]

  const [docSlot, setDocSlot] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slottime, setSlotTime] = useState([]);


  const fetchDocInfo = async () => {
    const foundDoc = doctors.find((doc) => doc._id === docId);
    setDocInfo(foundDoc);
  };

  const getAvilableSlot = async () => {
    setDocSlot([]);

    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);

      currentDate.setDate(today.getDate() + i);

      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10 );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlot((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);
  useEffect(() => {
    getAvilableSlot();
  }, [docInfo]);
  useEffect(() => {

  }, [docSlot]);

  return (
    docInfo && (
      <div className="">
        <div className="flex flex-col items-center lg:flex-row gap-4">
          {/* ------- doc details ------- */}
          <div className="relative top-10 z-[-10]  lg:top-0 ">
            <img
              className="bg-primary rounded-lg "
              src={docInfo.image}
              alt=""
            />
          </div>
          <div className="p-4 md:p-8 border border-gray-500 rounded-lg flex flex-col gap-3 lg:w-full bg-white">
            {/* ------ Doc Info : name , degree ,experience */}
            <p className="flex gap-2 md:text-3xl font-semibold">
              {docInfo.name}
              <img src={assets.verified_icon} alt="" />
            </p>
            <div>
              {docInfo.degree} - {t(docInfo.speciality)}
              <button className="text-[11px] text-gray-600 ms-1 px-1 py-0.5 border border-gray-200 rounded-full">
                {t(docInfo.experience)}
              </button>
            </div>
            {/* ------ Doctor About -------- */}
            <div>
              <p className="flex gap-2 text-sm font-semibold">
                About <img className="w-3" src={assets.info_icon} alt="" />
              </p>
              <p className="text-sm leading-relaxed text-gray-700  max-w-[400px] ">
                {t(docInfo.about)}
              </p>
            </div>
            {/* ----- Appointment fee ------ */}
            <p>
              {i18n.dir() === "rtl"
                ? `رسوم الحجز: ${docInfo.fees * 49} جنيه`
                : `Appointment fee: $${docInfo.fees}`}
            </p>
          </div>
        </div>
        <div className="sm:ml-72 sm:pl-4 mt-4  font-medium text-gray-700">
          <p>Booking Slot</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll scrollbar-hidden mt-4">
            {docSlot.length && docSlot.map((item , index)=>( 
              <div onClick={()=> setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`} key={index}>
               <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
               <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))}
          </div>
          {/* booking slot */}
          <div className="flex items-center gap-3 w-full overflow-scroll scrollbar-hidden  mt-4">
            {docSlot.length && docSlot[slotIndex]?.map((item , index)=>(
              <p onClick={()=> setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slottime ? 'bg-primary text-white ' : 'text-gray-400 border border-gray-300'}`} key={index}>
               {item.time.toLowerCase()}
              </p>
            ))}
          </div>
          <button className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6">
            Book an appointment
          </button>
        </div>
        <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
      </div>
    )
  );
};

export default Appointment;
