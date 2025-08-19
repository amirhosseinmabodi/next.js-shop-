"use client";
import React, { useState } from "react";
import Container from "../components/container/Container";
import Cookies from "js-cookie";

function login() {
  const [username, Setusername] = useState("");
  const [password, Setpassword] = useState("");
  const result = {
    token: "ewfweiorwiefmiorewmgfreiowlerogj5weg",
    expire: 7,
  };
  const submitHandler = () => {
    Cookies.set("cookies", result.token, { expires: result.expire });
  };
  return (
    <div className="flex-1 flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-md w-full relative z-10">
        <div className="rounded-3xl bg-white shadow-2xl p-8 backdrop-blur-sm">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-16 rounded-full bg-white shadow-xl p-2 border-2 border-violet-500 animate-bounce"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-violet-700">
              Hey There!
            </h2>
            <p className="text-gray-600">
              Ready to find your next favorite gadget?
            </p>
          </div>
          <form>
            <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
          <input
          id="email"
            onChange={(e) => {
              Setusername(e.target.value);
            }}
            className="w-full py-4 px-3 border-2 rounded-xl border-gray-200 focus:outline-none focus:ring-4 focus:ring-violet-200 focus:border-violet-600 transition duration-300"
            type="text"
            placeholder="you@example.com"
          />
           <label htmlFor="password" className="block text-sm font-bold text-gray-700 my-2">Password</label>
          <input
          id="password"
            onChange={(e) => {
              Setpassword(e.target.value);
            }}
            className="w-full py-4 px-3 border-2 rounded-xl border-gray-200 focus:outline-none focus:ring-4 focus:ring-violet-200 focus:border-violet-600 transition duration-300"
            type="password"
            placeholder="password"
          />
          <div className="p-4 text-center font-medium">
            <input className="h-4 w-4 border-gray-600 cursor-pointer focus:ring-violet-500" type="checkbox" name="" id="Remember-me"  />
            <label className=" ml-2" htmlFor="Remember-me">Remember me</label>
          </div>
          <button
            onClick={submitHandler}
            className="px-2 border rounded bg-gradient-to-br from-violet-500 to-sky-500 p-4 text-xl font-bold text-white cursor-pointer w-full hover:scale-105 hover:border-gray-200 transition duration-300"
          >
            Sign In 🚀
          </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default login;
