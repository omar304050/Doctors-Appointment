import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { AuthContext } from "../context/AuthContext";
const Myprofile = () => {
 const{isLogged} = useContext(AuthContext)
  const LoginData = JSON.parse(localStorage.getItem("userData"))
  console.log(isLogged);
  
  const [userData, setUserData] = useState({
    name: LoginData?.name, 
    image: assets.profile_pic,
    emailid: LoginData?.email,
    phone: LoginData?.Phone,
    adress: {
      line1: "sharea el zaaeem",  
      line2: "mostrod",
    },
    gender: "Male",
    dob: "1/1/2001",
  });


  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="flex flex-col gap-2 ">
      <img className="w-36 rounded-lg" src={userData.image} alt="" />

      {isEdit ? (
        <input
          className="text-2xl md:text-3xl font-medium bg-gray-50 max-w-60"
          type="name"
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
          value={userData.name}
          id=""
        />
      ) : (
        <p className="text-2xl md:text-3xl font-medium ">{userData.name}</p>
      )}

      <hr className="bg-zinc-400 h-[1px] border-none max-w-[500px]" />

      <div className="grid grid-cols-2 gap-4 w-full md:w-[60%] p-6 bg-white rounded-2xl shadow-md mt-4">


        <p className="text-gray-500 text-sm underline col-span-2">CONTACT INFORMATION</p>
        {/* Email */}
        <label className="text-gray-700 font-medium self-center">Email:</label>
        {isEdit ? (
          <input
            type="email"
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, emailid: e.target.value }))
            }
            value={userData.emailid}
            className="border border-gray-300 text-blue-400 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        ) : (
          <p className="text-blue-400 truncate ">{userData.emailid}</p>
        )}

        {/* Phone */}
        <label className="text-gray-700 font-medium self-center ">Phone:</label>
        {isEdit ? (
          <input
            type="tel"
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, phone: e.target.value }))
            }
            value={userData.phone}
            className="border border-gray-300 rounded-lg px-3 py-2 w-full    focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        ) : (
          <p className="text-blue-400">{userData.phone}</p>
        )}

        {/* Address */}
        <label className="text-gray-700 font-medium self-center">
          Address:
        </label>
        <div className="flex flex-col md:flex-row gap-2 w-full">
          {isEdit ? (
            <>
              <input
                type="text"
                placeholder="Line 1"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    adress: { ...prev.adress, line1: e.target.value },
                  }))
                }
                value={userData.adress.line1}
                className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Line 2"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    adress: { ...prev.adress, line2: e.target.value },
                  }))
                }
                value={userData.adress.line2}
                className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </>
          ) : (
            <div className="flex flex-col">
              <p className="text-gray-800">{userData.adress.line1}</p>
              <p className="text-gray-800">{userData.adress.line2}</p>
            </div>
          )}
        </div>

        <p className="text-gray-500 text-sm underline col-span-2">BASIC INFORMATION</p>

        {/* Gender */}
        <label className="text-gray-700 font-medium self-center">Gender:</label>
        {isEdit ? (
          <select
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, gender: e.target.value }))
            }
            value={userData.gender}
            className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        ) : (
          <p className="text-gray-800">{userData.gender}</p>
        )}

        {/* Birthday */}
        <label className="text-gray-700 font-medium self-center">
          Birthday:
        </label>
        {isEdit ? (
          <input
            type="date"
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, dob: e.target.value }))
            }
            value={userData.dob}
            className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        ) : (
          <p className="text-gray-800">{userData.dob}</p>
        )}

        {/* Button */}
        <div className="col-span-2 flex justify-end mt-4">
          {isEdit ? (
            <button
              onClick={() => setIsEdit(false)}
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
            >
              Save Information
            </button>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Myprofile;
