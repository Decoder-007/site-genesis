// eslint-disable-next-line no-unused-vars
import React from "react";
import Genesis from "../../assets/Genesis.png";

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-30 flex justify-between items-center py-10 px-20 bg-[#414a578a] shadow-md z-50 rounded-b-[100px] mx-4 md:mx-36 text-white">
      <div className="flex items-center">
        <img alt="Genesis logo" className="mr-3" src={Genesis} />
      </div>
      <nav className="hidden md:flex space-x-10">
        <a className="text-white hover:text-gray-400" href="#">
          Home
        </a>
        <a className="text-white hover:text-gray-400" href="#">
          About Us
        </a>
        <a className="text-white hover:text-gray-400" href="#">
          Events
        </a>
        <a className="text-white hover:text-gray-400" href="#">
          Blogs
        </a>
        <a className="text-white hover:text-gray-400" href="#">
          Our Team
        </a>
      </nav>
      <a
        className="px-4 py-2 bg-gradient-to-r from-[#DE4DBC] to-[#1D86C2] rounded-bl-xl rounded-tr-2xl text-white hover:from-[#e625b9]  hover:to-[#057fc5]"
        href="#"
      >
        Contact Us
      </a>
    </nav>
  );
}

export default Nav;
