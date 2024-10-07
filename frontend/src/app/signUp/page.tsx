"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../components/SignupLoginHeader";
import Footer from "../components/Footer";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen justify-between items-center bg-gradient-to-r from-green-400 to-green-500">
      <div className="min-w-full">
        <a href="/">
          <Header />
        </a>
      </div>
      <div
        className="w-full max-w-sm "
        style={{
          padding: "10px",
          background: "white",
          boxShadow: "1px 2px 10px gray",
          borderRadius: "10px",
        }}
      >
        <div
          className="md:flex md:items-center mb-6"
          style={{ justifyContent: "center" }}
        >
          <h1
            className="text-base font-semibold leading-7 text-3xl font-bold text-green-500"
            style={{ fontSize: "x-large" }}
          >
            Sign Up
          </h1>
        </div>
        <form className="w-full max-w-sm">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-full-name"
              >
                Full Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-400"
                id="inline-full-name"
                type="text"
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-username"
              >
                Username
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-400"
                id="inline-username"
                type="text"
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-email"
              >
                Email
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-400"
                id="inline-email"
                type="email"
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-confirm-email"
              >
                Confirm Email
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-400"
                id="inline-confirm-email"
                type="email"
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-password"
              >
                Password
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-400"
                id="inline-password"
                type="password"
                placeholder="******************"
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-confirm-password"
              >
                Confirm Password
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-400"
                id="inline-confirm-password"
                type="password"
                placeholder="******************"
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3"></div>
            <label className="md:w-2/3 block text-gray-500 font-bold">
              <input className="mr-2 leading-tight" type="checkbox" />
              <span className="text-sm">I agree to terms and conditions!</span>
            </label>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="shadow bg-yellow-400 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
      <footer
        className="min-w-full"
        // style={{
        //   position: "absolute",
        //   left: "0",
        //   bottom: "0",
        //   right: "0",
        // }}
      >
        <Footer />
      </footer>
    </div>
  );
};

export default SignUp;
