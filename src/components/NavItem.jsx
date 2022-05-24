import React from 'react';


function NavItem({ content, onClick }) {
  

  return (
    <li className={'text-lg font-semibold dark:text-gray-300'}>
      <p onClick={onClick}>{content}</p>
    </li>
  )
}

export default NavItem