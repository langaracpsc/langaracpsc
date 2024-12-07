import { Link } from "react-router-dom";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen py-10 bg-black bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgba(241,90,34,0.2)] via-black to-black">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <div
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-400 bg-gray-800 rounded-full hover:bg-gray-700"
          role="alert"
        >
          <span className="text-xs bg-orange-500 rounded-full text-white px-4 py-1.5 mr-3">
            💻 Code Together
          </span>
          <span className="text-sm font-medium">
            Empowering students through collaboration and coding. 🤝
          </span>
        </div>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Langara Computer Science Club
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48">
          Join the Langara Computer Science Club and explore opportunities to
          collaborate, learn, and innovate in technology.
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link
            to="about"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-orange-500 hover:bg-orange-700 focus:ring-4 "
          >
            Learn More
          </Link>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
