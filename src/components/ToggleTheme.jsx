import React, { useContext } from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import { AppContext } from "../App";
  
const ToggleTheme = () => {

  const { setDark } = useContext(AppContext);

  const changeTheme = () => {
    if (localStorage.getItem('theme') === 'light') {
      setDark('dark')
    } else {
      setDark('light');      
    }
  }
  
  

  return (
  <button onClick={changeTheme}>      
     <span className=" text-gray-700 text-sm font-medium dark:hidden"><HiMoon /> </span>
     <span className=" text-gray-700 text-sm font-medium hidden dark:block dark:text-gray-100 "><HiSun/></span>
  </button>
  );
};
  
export default ToggleTheme;