import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  const about = [
    {
      h: "EFFICIENCY:",
      p: "Streamlined appointment scheduling that fits into your busy lifestyle."
    },
    {
      h: "CONVENIENCE:",
      p: "Access to a network of trusted healthcare professionals in your area."
    },
    {
      h: "PERSONALIZATION:",
      p: "Tailored recommendations and reminders to help you stay on top of your health."
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-center">
        <p className="text-2xl md:3xl lg:4xl font-medium py-8 text-gray-400 ">
          ABOUT <span className="text-black font-bold">US</span>
        </p>
        <div className="flex flex-col md:flex-row gap-10 items-center ">
          <img className="md:w-[29%] w-full" src={assets.about_image} alt="" />
          <div className="md:w-[70%] w-full flex flex-col gap-4 text-[14px] text-gray-600  md:max-w-[640px]">
            <p>
              Welcome to Prescripto, your trusted partner in managing your
              healthcare needs conveniently and efficiently. At Prescripto, we
              understand the challenges individuals face when it comes to
              scheduling doctor appointments and managing their health records.
            </p>
            <p>
              Prescripto is committed to excellence in healthcare technology. We
              continuously strive to enhance our platform, integrating the
              latest advancements to improve user experience and deliver
              superior service. Whether you're booking your first appointment or
              managing ongoing care, Prescripto is here to support you every
              step of the way.
            </p>
            <h5 className="text-black font-bold my-3">Our Vision</h5>
            <p>
              Our vision at Prescripto is to create a seamless healthcare
              experience for every user. We aim to bridge the gap between
              patients and healthcare providers, making it easier for you to
              access the care you need, when you need it
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-2xl my-8 font-semibold text-gray-600"><span className="font-light ">WHY</span> CHOOSE US</p>
        <div className="flex flex-col md:flex-row   ">
          {about.map((item , index)=>( 
            <div className="border border-gray-200 py-12 md:py-14 px-12 hover:bg-primary group text-red-600" key={index}>
               <h5 className="text-gray-600 font-semibold group-hover:text-white ">{item.h}</h5>
               <p className="max-w-[300px] text-gray-500 group-hover:text-white">{item.p}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
