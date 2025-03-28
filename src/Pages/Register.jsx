import React, { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import { Link, NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const data = {
    email,
    password,
    name,
    mobile,
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
  
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/user/register`,
        data, // Remove extra curly braces around 'data'
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      console.log("Register successful:", response.data);
      toast.success("Register successful");
      navigate("/login");
    } catch (err) {
      console.error("Register failed:", err.response?.data || err.message);
      toast.error("Register failed:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Registration failed. Try again.");
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal(".reveal", {
      distance: "50px", // Distance of the effect
      duration: 800, // Duration of the effect
      delay: 100, // Delay before the effect starts
      opacity: 0, // Start opacity (element is invisible before scroll)
      scale: 0.85, // Scaling effect when revealing
      easing: "ease-in-out", // Easing function for the effect
    });
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center ">
    {/* Header Section */}
    <div className="w-full flex items-center justify-center sm:justify-start bg-gradient-to-b from-sky-900 to-sky-800 h-96 px-5 py-24">
      <div className="max-w-lg text-center sm:text-left">
        <h1 className="text-green-500 text-4xl font-bold">
          Create Your Account
        </h1>
        <p className="text-white text-2xl">
          Enter your personal details and start the journey with us
        </p>
      </div>
    </div>
  
    {/* Form Section */}
    <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl p-8 bg-white rounded-lg shadow-lg -mt-20 sm:-mt-32 ml-0 sm:ml-[20rem]">
      <h2 className="text-2xl font-semibold">Sign up</h2>
      <p className="text-sm text-gray-500">
        Already have an account?{" "}
        <span className="text-blue-500 cursor-pointer">
          <Link to="/login">Sign in</Link>
        </span>
      </p>
  
      <form onSubmit={submitHandler} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <input
          type="email"
          placeholder="Enter Your Email"
          required
          onChange={(e) => setEmail(e.target.value)}
          className="col-span-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Email"
        />
        <input
          type="text"
          placeholder="Enter Your Name"
          required
          onChange={(e) => setName(e.target.value)}
          className="col-span-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Name"
        />
        <input
          type="password"
          placeholder="Create Password"
          required
          onChange={(e) => setPassword(e.target.value)}
          className="col-span-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Password"
        />
        <input
          type="number"
          placeholder="Enter Mobile Number"
          required
          onChange={(e) => setMobile(e.target.value)}
          className="col-span-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Mobile Number"
        />
        <div className="col-span-2 flex items-start gap-3 text-sm text-gray-600">
          <input type="checkbox" id="terms" className="w-5 h-5 mt-1 accent-blue-600" />
          <label htmlFor="terms">
            I have read and agree to the
            <NavLink
              to="/terms"
              className="text-green-600 font-medium cursor-pointer hover:underline px-1"
            >
              Terms of Use
            </NavLink>
            and understand my personal information is processed in accordance with the
            <NavLink
              to="/policy"
              className="text-green-600 font-medium cursor-pointer hover:underline px-1"
            >
              Privacy Statement
            </NavLink>
            .
          </label>
        </div>
        <button className="col-span-2 hover:bg-green-700 text-white py-3 rounded-lg font-semibold text-lg shadow-md bg-green-600 transition-all duration-300">
          Sign Up
        </button>
      </form>
    </div>
  </div>
  );
};

export default Register;

// Tailwind CSS Styles
const inputStyle =
  "border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:border-blue-500";
