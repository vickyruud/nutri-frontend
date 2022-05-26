import React from 'react';


function NavItem({ content, onClick }) {
  

  return (
    <li>
      <button className='text-lg font-bold text-white dark:text-gray-300' onClick={onClick}>{content}</button>
    </li>
  )
}

export default NavItem