import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MyAppointment = () => {
  const [appointmentData, setAppointmentData] = useState([]);

  function getAppointmentData() {
    axios
      .get("https://68a095496e38a02c58191e27.mockapi.io/appointments")
      .then((res) => {
        setAppointmentData(res.data);
      });
  }

  function deleteAppointment(id) {
    axios
      .delete(`https://68a095496e38a02c58191e27.mockapi.io/appointments/${id}`)
      .then(() => {
        // بعد ما السيرفر يرجع النجاح، نحذف العنصر من الـ state
        setAppointmentData((prev) => prev.filter((item) => item.id !== id));
      });
  }
  console.log(appointmentData);

  useEffect(() => {
    getAppointmentData();
  }, []);
  return (
    <div className="mb-[15%]">
      <div>
        <h3 className="mb-4">My appointments</h3>
        <hr className="mb-9" />
      </div>
      <AnimatePresence>
        {appointmentData.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center text-gray-500">
            <svg
              className="w-16 h-16 mb-4 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 17v-6h6v6m2 4H7a2 2 0 01-2-2V7a2 2 0 012-2h5l2 2h5a2 2 0 012 2v12a2 2 0 01-2 2z"
              />
            </svg>
            <p className="text-xl font-semibold">
              No appointments available 
            </p>
            <p className="text-gray-400 mt-2">
              Your upcoming appointments will appear here.
            </p>
          </div>
        ) : (
          appointmentData
            ?.slice()
            .reverse()
            .map((appointment) => (
              <motion.div
                key={appointment.id}
                initial={{ opacity: 0, x: 50 }} // يبدأ شويه يمين
                animate={{ opacity: 1, x: 0 }} // يتحرك لمكانه الطبيعي
                exit={{ opacity: 0, x: -300 }} // لما يتشال يتحرك شمال مع اختفاء
                transition={{ duration: 0.5 }} // مدة الأنيميشن
                className="flex items-center justify-between p-6 shadow-md rounded-2xl w-full max-w-4xl mx-auto border"
              >
                <div className="flex items-center gap-6">
                  <img
                    src={appointment.doctorImage}
                    alt="Doctor"
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                  <div>
                    <h2 className="text-xl font-bold">
                      {appointment.doctorName}
                    </h2>
                    <p className="text-gray-600">{appointment.specialty}</p>
                    <p className="text-gray-700 mt-2">
                      <span className="font-semibold">Address:</span> <br />
                      {appointment.doctorAddress.line1} <br />
                      {appointment.doctorAddress.line2}
                    </p>
                    <p className="text-gray-800 mt-2">
                      <span className="font-semibold">Date & Time:</span>
                      {appointment.appointmentTime}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow">
                    Pay Online
                  </button>
                  <button
                    onClick={() => deleteAppointment(appointment.id)}
                    className="px-6 py-2 border border-gray-400 text-gray-700 rounded-lg shadow hover:bg-gray-100"
                  >
                    Cancel appointment
                  </button>
                </div>
              </motion.div>
            ))
        )}
      </AnimatePresence>
    </div>
  );
};

export default MyAppointment;
