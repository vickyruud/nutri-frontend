import React from "react";
import NavItem from "./NavItem";
import ToggleTheme from "./ToggleTheme";

function NavBar({ setShowModal, user, logout, setModalType }) {
  const showNav = false;

  const showLogin = () => {
    setModalType('login');
    setShowModal(true);
  }

  const showSignUp = () => {
    setModalType('sign-up');
    setShowModal(true);
  }

  

  return (
    <nav className="md:flex justify-between items-center bg-none">
      <div className="flex items-center justify-between  ">
        <a href="/">
          <img className="w-12 h-12 p-2" src="../logo.png" alt="logo" />
        </a>
        <p className="text-xl font-bold text-white">
          Nutri Yums - Know what's in your recipe!
        </p>
        <p className="ml-4 text-xl font-bold capitalize text-white">
          {user ? `Welcome ${user.username}`  : null}
        </p>
      </div>
      <ul
        className={
          (showNav ? "left-0" : "-left-full") +
          " md:static fixed  bottom-0 top-12 md:flex md:space-x-7 items-center md:bg-transparent md:text-gray-500 bg-gray-900 bg-opacity-90 md:w-auto w-10/12 text-gray-300 md:space-y-0 space-y-5 p-2 transition-left"
        }
      >
                
        {user ? <NavItem content="My Recipes" onClick={() => window.location.href='/my-recipes'} /> : <NavItem content="Sign Up" onClick={showSignUp} />}
        {user ? <NavItem content="Logout" onClick={logout} /> :  <NavItem content="Login" onClick={showLogin} />}
        <ToggleTheme />
      </ul>
    </nav>
  );
}

export default NavBar;
