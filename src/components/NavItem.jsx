import React from 'react';


function NavItem({ content, onClick }) {
  

  return (
    <li className={'text-lg font-semibold dark:text-white'}>
      <p onClick={onClick} data-testid='nav-item'>{content}</p>
    </li>
  )
}

export default NavItem