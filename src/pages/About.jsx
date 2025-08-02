import React from "react";
import { assets } from "../assets/assets";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const about = [
    {
      h: "aboutSection.EFFICIENCY",
      p: "aboutSection.p1",
    },
    {
      h: "aboutSection.CONVENIENCE",
      p: "aboutSection. ",
    },
    {
      h: "aboutSection.PERSONALIZATION",
      p: "aboutSection.p3",
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
            <p>{t("pHero1")}</p>
            <p>{t("pHero2")}</p>
            <h5 className="text-black font-bold my-3">{t("Our Vision")}</h5>
            <p>{t("pHero3")}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-2xl my-8 font-semibold text-gray-600">
          <span className="font-light ">{t("WHY")}</span> {t("CHOOSE US")}
        </p>
        <div className="flex flex-col md:flex-row   ">
          {about.map((item, index) => (
            <div
              className="border border-gray-200 py-12 md:py-14 px-12 hover:bg-primary group text-red-600"
              key={index}
            >
              <h5 className="text-gray-600 font-semibold group-hover:text-white ">
                {t(item.h)}
              </h5>
              <p className="max-w-[300px] text-gray-500 group-hover:text-white">
                {t(item.p)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
