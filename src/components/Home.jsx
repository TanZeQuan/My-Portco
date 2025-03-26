import React from "react";
import profilePic from "../../public/zq-img.jpg"; // Ensure the correct path
import {
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoYoutube,
  BiLogoTwitter,
} from "react-icons/bi";

const Home = () => {
  return (
    <div
      id="home"
      className="flex min-h-screen w-full items-center justify-center"
    >
      <div className="flex flex-col items-center  justify-center gap-6 p-5 text-center">
        {/* Profile Image */}
        <img
          src={profilePic}
          alt="Profile"
          className="w-[150px] h-[160px] sm:w-[170px] sm:h-[180px] rounded-full shadow-lg"
        />

        {/* Greeting */}
        <h2 className="text-2xl font-semibold">👋 Hello there!</h2>

        {/* Name & Title */}
        <h1 className="text-4xl font-bold text-gray-800 md:text-5xl lg:text-6xl">
          I'm Ze Quan
        </h1>

        {/* Description */}
        <div className="space-y-3 sm:space-y-4">
          <p className="max-w-[600px] text-md text-gray-500">
            I'm a fresh graduate with a Diploma in Information Technology, passionate about{" "}
            <span className="bg-gray-200 px-1 rounded">building user-friendly websites</span>{" "}
            driven by innovation and dedicated to <span className="bg-gray-200 px-1 rounded">crafting intuitive websites.</span>
          </p>

          <p className="max-w-[600px] text-md text-gray-500">
            I'm a front-end development with{" "}
            <span className="bg-gray-200 px-1 rounded">
            web design experience
            </span>{" "}
            and a background in supporting <span className="bg-gray-200 px-1 rounded">website content management and development.</span>
          </p>
        </div>

        {/* Social Media Icons */}
        {/*
        <div className="flex gap-3">
          <BiLogoGithub className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12" />
          <BiLogoLinkedin className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12" />
          <BiLogoYoutube className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12" />
          <BiLogoTwitter className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12" />
        </div>
        */}
      </div>
    </div>
  );
};

export default Home;
