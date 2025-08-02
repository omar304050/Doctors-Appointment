import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const ProtectingRoute = ({ children }) => {
 const { t } = useTranslation();
const userToken = JSON.parse(localStorage.getItem("loging"))
console.log(userToken);


  if (!userToken) {
    toast.error(t("Creat Account"));
    return <Navigate to="/singup" />;
  }

  return children;
};

export default ProtectingRoute;
