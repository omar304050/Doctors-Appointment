import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast  from "react-hot-toast";
import { useTranslation } from "react-i18next";

const SignUp = () => {
 const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handlSubmit = (e) => {
    e.preventDefault();
    const userData = { name, email, password , Phone };
    localStorage.setItem("userData", JSON.stringify(userData));
    toast.success("Successfully");
      navigate("/login");

  };

  return (
    <div className="">
      <form className="mt-10" onSubmit={handlSubmit}>
        <div className="max-w-md mx-auto bg-white shadow-2xl rounded-2xl p-8 space-y-5">
          <h1 className="text-2xl font-bold text-center text-gray-800">
            {t("Creat Account")}
          </h1>
          <p className="text-center text-gray-500">
            {t("Please sign up to book an appointment")}
          </p>

          <div>
            <label className="block mb-1 text-gray-700">{t("Full Name")}</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={t("Enter your full name")}
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700">{t("Email")}</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={t("Enter your email")}
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700">{t("Password")}</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={t("Enter your password")}
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">{t("Phone")}</label>
            <input
              type="phone" 
              onChange={(e) => setPhone(e.target.value)}
              value={Phone}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={t("Enter your phone")}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
           {t("Sign Up")}
          </button>
          <div>
           {t("Already have an account?")}
            <Link to="/login" className="text-blue-400 underline">
              {t("Login here")}
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
