
import React from 'react';
import logo from '../assets/logo_new.svg';

const Topbar = ({ onBurgerMenuClick }) => {
  return (
    <nav className="bg-[#1E1E1E] border-[#D9D9D9] border-b">
      <div className="px-4 py-2.5 flex justify-between items-center max-w-[1280px] mx-auto">
        <ul className="flex items-center space-x-8">
          <li className="md:hidden">
            <button onClick={onBurgerMenuClick} className="focus:outline-none text-white">
              <i className="fas fa-bars"></i>
            </button>
          </li>
          <li className="inline-block">
            <a href="https://ctrlease.gatsbyjs.io">
              <img src={logo} alt="Logo" className="h-9 w-auto text-white fill-current" />
            </a>
          </li>
          <li className="inline-block text-white">
            AI-Powered Automation
          </li>
        </ul>
        <ul>
          <li>
            <a
              href="https://ctrlease.gatsbyjs.io/newsletter/"
              className="bg-[#26947A] text-white px-4 py-2.5 rounded hover:bg-[#1D7A66]"
            >
              Subscribe
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Topbar;
