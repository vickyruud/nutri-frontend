import React from 'react';
import { Link, Outlet } from 'react-router-dom'

function Home() {
  return (
        <>
      <section className="home-page flex ">
        <div className="overlay flex flex-col items-center justify-center text-white px-5">
          <h1 className="text-5xl font-bold text-right mb-10 lg:text-center lg:text-7xl lg:px-56">
            Find <span className="text-green-500 ">Nutrition Information</span> for your recipes
          </h1>

          <div className="ml-auto lg:ml-0">
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
  )
}

export default Home