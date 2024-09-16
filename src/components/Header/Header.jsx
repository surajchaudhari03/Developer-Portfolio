import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import navData from '../../details.json';
import MobileMenubar from './MobileMenu';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <header className="fixed top-0 w-full h-20 bg-black text-white flex justify-between items-center p-4 z-50">
                <Link to="/" className="flex items-center">
                    <div className="flex items-center space-x-2">
                        <i className="fas fa-code text-xl"></i>
                        <span id="name" className="text-xl font-bold">Suraj Chaudhari</span>
                    </div>
                </Link>
                <nav className="hidden md:flex space-x-6">
                    {navData.navMenu.map((menu) => (
                        <NavLink key={menu.id} to={menu.to}
                            className={({ isActive }) =>
                                `${isActive ? "text-orange-700" : ""}`
                            }
                        >
                            <span className="flex items-center space-x-1">
                                <i className={menu.icon}></i>
                                <span>{menu.label}</span>
                            </span>
                        </NavLink>
                    ))}
                </nav>
                <div className="flex space-x-4 md:hidden">
                    <button id="menu-button" className="text-2xl" onClick={toggleMenu}>
                        <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                </div>
                <div className="hidden md:flex space-x-4">
                    <i className="fas fa-moon"></i>
                </div>
            </header>
            {menuOpen && (
                <MobileMenubar />
            )}
        </div>
    );
}

export default Header;