import React, { useEffect, useState } from "react";
import Logo from "../assets/1logo.png";
import { Link } from "react-router-dom";

const Navbar = ({onClick}) => {
  const [isMunuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticty] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMunuOpen);
  };

  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY > 100) {
        setIsSticty(true);
      } else {
        setIsSticty(false);
      }
    };
    window.addEventListener("scroll", handlescroll);
    return () => {
      window.addEventListener("scroll", handlescroll);
    };
  });
  return (
    <header className="w-full flex justify-center z-40 bg-white md:bg-transparent  fixed  top-0 left-0 right-0">
    
      <nav className="flex items-center z-40 bg-white/75 backdrop-blur-xl   shadow-lg shadow-brandPrimary/10 w-[90%] justify-between flex-wrap p-2 mt-5 lg:rounded-full">
        <div className="flex items-center mr-6 ">
          <img src={Logo} className="w-100 h-10 mr-2" alt="Logo" />
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center justify-between  lg:w-auto h-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          
          <div className=" w-[60%]  flex flex-col justify-between ml-3 lg:flex lg:flex-row lg:justify-center lg:ml-20">
           <Link className="block hover:bg-brandPrimary/20 mr-1 px-5 py-2 rounded-full bg-neutral-100/30 mt-4 lg:inline-block lg:mt-0 text-neutralDgrey " to="/">
              Home
            </Link>
            <Link className="block hover:bg-brandPrimary/20 mr-1 px-5 py-2 rounded-full bg-neutral-100/30 mt-4 lg:inline-block  lg:mt-0  lg:text-[14px] lg:px-6 text-neutralDgrey " to="/about">About</Link>
            <Link className="block hover:bg-brandPrimary/20 mr-1 px-5 py-2 rounded-full bg-neutral-100/30 mt-4 lg:inline-block  lg:mt-0 text-neutralDgrey " to="/services">Service</Link>
            <Link className="block hover:bg-brandPrimary/20 mr-1 px-5 py-2 rounded-full bg-neutral-100/30 mt-4 lg:inline-block  lg:mt-0 text-neutralDgrey " to="/projet">Projet</Link>
            <Link className="block hover:bg-brandPrimary/20 mr-1 px-5 py-2 rounded-full bg-neutral-100/30 mt-4 lg:inline-block  lg:mt-0 text-neutralDgrey " to="/contact">Contact</Link>
            {/* <Link className="block hover:bg-brandPrimary/20 mr-1 px-5 py-2 rounded-full bg-neutral-100/30 mt-4 lg:inline-block  lg:mt-0 text-neutralDgrey " to="/table">Table</Link> */}
          </div>
            <button className="inline-flex items-center bg-brandPrimary rounded-full border-0 py-2 px-4 text-white ml-3 mt-6 md:mt-0"
            type="button"
            onClick={onClick}>
              Projet
            </button>
            
            
          
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
