import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Myprofile from "./pages/Myprofile";
import MyAppointment from "./pages/MyAppointment";
import Appointment from "./pages/Appointment";
import Navbar from "./components/Navbar";
import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Footer from "./components/Footer";
import SignUp from "./pages/Signup";
import toast, { Toaster } from "react-hot-toast";
import ProtectingRoute from "./components/ProtectingRoute.jsx";
import { AuthContext } from "./context/AuthContext.jsx";




const App = () => {

  const {token} = useContext(AuthContext)    
  const { i18n } = useTranslation();

  useEffect(() => {
    // يشتغل أول ما الصفحة تحمل أو اللغة تتغير
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <div className="mx-4 md:mx-[4%] lg:mx-[7%]">
      <Toaster position="top-right" />
 
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/doctors"
            element={
              <ProtectingRoute>
                <Doctors />
              </ProtectingRoute>
            }
          />
          <Route
            path="/doctor/:speciality"
            element={
              <ProtectingRoute>
                <Doctors />
              </ProtectingRoute>
            }
          />
          <Route path="/singup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/my-profile"
            element={
              <ProtectingRoute>
                <Myprofile />
              </ProtectingRoute>
            }
          />
          <Route path="/my-appointments" element={ <MyAppointment />} />
          <Route path="/appointment/:docId" element={<ProtectingRoute><Appointment /></ProtectingRoute>} />
        </Routes>
   
          {token ? <Footer /> : ""}

    </div>
  );
};

export default App;
