import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import navData from '../../details.json'

const MobileMenubar = () => {
  return ReactDOM.createPortal(
    <nav id="mobile-menu" className="mobile-menu-container md:hidden bg-black flex-col px-4 py-8 ">
      {navData.navMenu.map((item, index) => (
        <NavLink key={index} to={item.to}>
          <span className="flex items-center gap-4 mb-6">
            <i className={item.icon}></i>
            {item.label}
          </span>
        </NavLink>
      ))}
    </nav>,
    document.getElementById('mobileMenu')
  );
};

export default MobileMenubar;