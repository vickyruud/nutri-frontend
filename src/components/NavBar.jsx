import React from 'react';
import NavItem from './NavItem';
import ToggleTheme from './ToggleTheme';

function NavBar() {


  const showNav = false;

  return (
    <nav className='md:flex justify-between items-center sticky top-0 z-20 dark:bg-gray-800 dark:text-white'>
     <div className="flex items-center justify-between dark:bg-gray-800">
      <a href='/'>
          <img className='w-12 h-12 p-2 dark:bg-gray-800' src='../logo.png' alt='logo' />
        </a>
      <p classname='text-xl font-bold'>Nutri Yums - Know what you are eating!</p>
      </div>
      <ul className={(showNav ? "left-0" : "-left-full") + " md:static fixed  bottom-0 top-12 md:flex md:space-x-7 items-center md:bg-transparent md:text-gray-500 bg-gray-900 bg-opacity-90 md:w-auto w-10/12 text-white md:space-y-0 space-y-5 p-2 transition-left"} >
        <NavItem content="My Recipes" />
        <NavItem content="Sign Up" />
        <NavItem content="Login" />
        <NavItem content="Logout" />
        <ToggleTheme/>
      </ul>        
    </nav>
  )
}

export default NavBar