import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <div>
      <form className=" mt-24">
        <div className="max-w-md mx-auto bg-white shadow-2xl rounded-2xl p-8 space-y-5 ">
          <h1 className="text-2xl font-bold text-center text-gray-800">
            {state === "Sign Up" ? "Create Account" : "Log In"}
          </h1>
          <p className="text-center text-gray-500">
            Please {state === "Sign Up" ? "Sign Up" : "Log in"} to book an
            appointment
          </p>

          {state === "Sign Up" ? (
            <div>
              <label className="block mb-1 text-gray-700">Full Name</label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
            </div>
          ) : (
            ""
          )}
          <div>
            <label className="block mb-1 text-gray-700">Email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700">Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            {state === "Sign Up" ? "Sign Up" : "LogIn"}
          </button>
          {state === "Sign Up" ? (
            <p>
              Already have an account?{" "}
              <span
                onClick={() => setState("Login")}
                className="text-blue-400 hover:underline cursor-pointer"
              >
                Login here
              </span>
            </p>
          ) : (
            <p>
              Create an new account?{" "}
              <span
                onClick={() => setState("Sign Up")}
                className="text-blue-400 hover:underline cursor-pointer"
              >
                Click here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
