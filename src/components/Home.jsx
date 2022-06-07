import React from "react";
import { Link, Outlet } from "react-router-dom";
import TypewriterText from "./TypewriterText";

function Home() {
  return (
    <>
      <section className="home-page flex w-full items-center justify-center ">
        <div className="overlay flex flex-col items-center justify-center text-white px-5">
          <video loop autoPlay>
            <source
              src={'./'}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <h1 className="text-5xl font-bold text-right mb-10 lg:text-center lg:text-7xl lg:px-56">
            What's in your <span className="text-yellow-300 ">meals</span>
          </h1>
          <TypewriterText />
          <div className="ml-auto mt-5 lg:ml-0">
            <Link
              to="/recipes"
              className="mr-5 bg-green-500 p-2 px-4 rounded-full font-semibold transition-all hover:bg-green-800 dark:bg-teal-900"
            >
              View Recipes
            </Link>
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
