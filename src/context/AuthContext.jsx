import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
 
  const [loginData, setLoginData] = useState(null);
  const [token, setToken] = useState(false);


  

  useEffect(()=>{
  const LogData = JSON.parse(localStorage.getItem("userData"))
  const userToken = JSON.parse(localStorage.getItem("loging"))


   


  
  if (userToken) {
   setToken(true)
   setLoginData(LogData)

   
 
   
   
  }
  },[])
  
  return <AuthContext.Provider value={{token , setToken , loginData , setLoginData }}>
  {children}
  </AuthContext.Provider>
};
