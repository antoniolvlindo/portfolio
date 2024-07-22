import React from 'react';
import allogo from '../../assets/allogo.png';

function Navbar() {
  return (
    <nav className="flex items-center justify-between mb-40">
      <img src={allogo} alt="Logo" width="60px"/>
      <button className="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500">Get my CV</button>
    </nav>
  );
}

export default Navbar;
