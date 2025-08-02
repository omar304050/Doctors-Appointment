import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../context/AuthContext";
function Navbar() {
  const userToken = JSON.parse(localStorage.getItem("loging"))
  const {  setLoginData , setToken  } = useContext(AuthContext);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  const logOut = () => {
    localStorage.setItem("loging" , "false");
    setToken(false)
    setLoginData(null)

  };

  const navegate = useNavigate();

  let [showMenu, SetShowMenu] = useState(false);
  const navRoutes = [
    { label: t("HOME"), to: "/" },
    { label: t("ALL DOCTORS"), to: "/doctors" },
    { label: t("ABOUT"), to: "/about" },
    { label: t("CONTACT"), to: "/contact" },
  ];

  return (
    <div className="flex items-center justify-between border-b border-gray-400  text-sm py-4 mb-5 relative ">
      <img
        onClick={() => {
          navegate("/");
        }}
        className="md:w-48 w-32 cursor-pointer"
        src={assets.logo}
        alt=""
      />
      <ul className="hidden md:flex items-start gap-5 font-medium ">
        {navRoutes.map((items, index) => (
          <NavLink to={items.to} key={index}>
            <li className="py-1 select-none">{items.label}</li>
            <hr className="border-none outline-none h-0.5 w3/5 m-auto bg-primary hidden select-none " />
          </NavLink>
        ))}
      </ul>

      <div
        className={`flex flex-col items-center fixed z-50 top-0 left-0 w-full h-screen bg-primary text-white px-8 py-16 transition-all duration-500 md:hidden ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <img
          onClick={() => SetShowMenu(false)}
          src={assets.cross_icon}
          alt="close"
          className="absolute top-4 right-4 w-10 h-10 p-2 bg-white rounded-full cursor-pointer shadow-lg"
        />

        <ul className="flex flex-col items-center  mt-10 text-lg font-semibold">
          {navRoutes.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              className="w-full text-center"
              onClick={() => SetShowMenu(false)}
            >
              <li className="py-2 hover:opacity-80 transition">
                <p>{item.label}</p>
              </li>
            </NavLink>
          ))}
        </ul>
        <div onClick={() => SetShowMenu(false)}>
          <button
            onClick={toggleLanguage}
            className=" bg-white text-[20px] mt-4 text-indigo-700 font-medium py-2.5 px-5 rounded-full shadow-sm hover:bg-gray-100 transition duration-200"
          >
            {i18n.language === "en" ? "العربية" : "English"}
          </button>
        </div>
      </div>

      <div>
        <button
          onClick={toggleLanguage}
          className=" hidden md:block bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-200"
        >
          {i18n.language === "en" ? "العربية" : "English"}
        </button>
      </div>

      <div className="flex items-centr gap-4 items-center ">
        {userToken ? (
          <div className="flex items-center gap-2 cursor-pointer relative group  ">
            <img
              className="rounded-full w-12"
              src={assets.profile_pic}
              alt=""
            />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div className="bg-gray-100 absolute top-full rounded right-0 text-gray-500 group-hover:block z-20 hidden ">
              <div className=" min-w-48 p-4  flex flex-col gap-5 ">
                <p
                  onClick={() => {
                    navegate("/my-profile");
                  }}
                  className="hover:text-black cursor-pointer"
                >
                  {t("My Profile")}
                </p>
                <p
                  onClick={() => {
                    navegate("/my-appointments");
                  }}
                  className="hover:text-black cursor-pointer"
                >
                  {t("My Appointments")}
                </p>
                <p
                  onClick={() => {
                   logOut()
                  }}
                  className="hover:text-black cursor-pointer"
                >
                  {t("Logout")}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => {
              navegate("/singup");
            }}
            className="bg-primary py-1 px-2 rounded-full text-white select-none  "
          >
            {t("Creat Account")}
          </button>
        )}
        <div
          className="cursor-pointer md:hidden "
          onClick={() => SetShowMenu(true)}
        >
          {" "}
          <img src={assets.menu_icon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
