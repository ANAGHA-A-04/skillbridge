import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleMenu = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full shadow-md  top-0 left-0 z-50 h-24">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        <h1 className="text-3xl text-indigo-600 font-bold">SkillBridge</h1>

        <div className="hidden md:flex space-x-9">
          <Link to="/" className="text-2xl text-gray-300 hover:text-indigo-600">Home</Link>
          <Link to="/about" className="text-2xl text-gray-300 hover:text-indigo-600">About</Link>
          <Link
               to="/form"
                className="text-white text-lg font-medium bg-indigo-700 h-10 w-28 rounded-xl drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)] p-1 hover:drop-shadow-[1_3px_10px_rgba(255,255,255,0.2)] active:scale-75 transition-all duration-200 flex items-center justify-center"
                >
               Get Start
              </Link>

        </div>

        
        <div className="md:hidden ">
          {nav ? (
            <AiOutlineClose onClick={handleMenu} size={24} className="text-white cursor-pointer fixed" />
          ) : (
            <AiOutlineMenu onClick={handleMenu} size={24} className="text-white cursor-pointer fixed" />
          )}
        </div>
      </div>

     
      {nav && (
        <div className="md:hidden fixed top- right-0 w-[30%] h-full bg-gray-800 text-white transition-all duration-300 px-6 py-10">
          <ul className="flex flex-col gap-6">
            <Link to="/" onClick={handleMenu} className="text-xl hover:text-indigo-300">Home</Link>
            <Link to="/about" onClick={handleMenu} className="text-xl hover:text-indigo-300">About</Link>
          </ul>
        </div>
      )}
      <div>

      </div>
      
    </div>
   
  );
};

export default Navbar;
