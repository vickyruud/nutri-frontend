import React, { useContext } from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import { ThemeContext } from "../App";
  
const ToggleTheme = () => {

  const { dark, setDark } = useContext(ThemeContext);

  const onClick = () => {
    console.log(dark)
    if (dark === 'light') {
      setDark('dark')
      document.documentElement.classList.add('dark')
    } else {
      setDark('light');
      document.documentElement.classList.remove('dark')

    }
  }

  return (
  <button onClick={onClick}>      
     <span className=" text-gray-900 text-sm font-medium dark:hidden"><HiMoon /> </span>
     <span className=" text-gray-900 text-sm font-medium hidden dark:block dark:text-gray-100"><HiSun/></span>
  </button>
  );
};
  
export default ToggleTheme;