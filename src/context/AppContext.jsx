import { createContext, useEffect, useState } from "react";
import axios from "axios";


export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [doctors, setDoctors] = useState([]);
  function GetDoctors() {
    axios
      .get("https://68a095496e38a02c58191e27.mockapi.io/doctors")
      .then((res) => {
        setDoctors(res?.data)
      });
  }
useEffect(()=>{
GetDoctors()
},[])
  return (
    <AppContext.Provider value={{doctors}}>{props.children}</AppContext.Provider>
  );
};
export default AppContextProvider;
