import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaRegUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import MenuList from "./MenuList";

const Header = () => {
  const dropdownRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [isScroll, setIsScroll] = useState(false);
 const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const developmentmenu = [
    { title: "Web Development", link: "/development?title=Web%20Development" },
    { title: "Web Design", link: "/development?title=Web%20Design" },
    {
      title: "Software Development",
      link: "/development?title=Software%20Development",
    },
    { title: "App Development", link: "/development?title=App%20Development" },
    { title: "CRM Development", link: "/development?title=CRM%20Development" },
  ];

  const becomeBrand = [
    { title: "Brand Building", link: "/brand?title=Brand%20Building" },
    { title: "ORM", link: "/brand?title=ORM" },
    { title: "Public Relations", link: "/brand?title=Public%20Relations" },
    { title: "Digital Marketing", link: "/brand?title=Digital%20Marketing" },
    {
      title: "Influence Marketing",
      link: "/brand?title=Influence%20Marketing",
    },
    {
      title: "Social Media Presence",
      link: "/brand?title=Social%20Media%20Presence",
    },
  ];

  const products = [
    { title: "IoT Products", link: "/Iot-products" },
    {
      title: "Client Relation Management (CRM)",
      link: "https://subscription.deepnapsoftech.com",
      external: true,
    },
    {
      title: "Human Resource Management (HRM)",
      link: "https://hr.deepmart.shop",
      external: true,
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-[#053d5e] py-2 md:mx-4 rounded-t-xl transition-all duration-500 ${isScroll ? "shadow-md rounded-2xl" : ""
        }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between flex-wrap">

        {/* Logo */}
        <div className="h-16 w-44 flex items-center">
          <Link to="/">
            <img
              src="itsybizz.png"
              alt="Logo"
              className="h-28 object-contain"
            />
          </Link>
        </div>

        {/* Hamburger Menu Button (Mobile Only) */}
        <button
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>

        {/* Navigation Links */}
        <ul
          ref={dropdownRef}
          className={`
          w-full md:w-auto flex-col md:flex-row md:flex md:items-center text-white font-medium
          bg-[#053d5e] md:bg-transparent absolute md:static left-0 right-0 top-full md:top-auto
          transition-all duration-500 ease-in-out overflow-hidden md:overflow-visible
  
          ${isMenuOpen ? "flex max-h-[500px] opacity-100" : "max-h-0 opacity-0 invisible md:visible md:opacity-100 md:max-h-none"}
        `}
        >
          {/* Nav Items */}
          <li>
            <NavLink
              to="/"
              className="block px-4 py-3 md:py-2 text-lg hover:text-white transition"
            >
              Home
            </NavLink>
          </li>

          <li className="relative">
            <MenuList listName="Products" list={products} />
          </li>

          <li className="relative">
            <MenuList listName="Development" list={developmentmenu} />
          </li>

          <li className="relative">
            <MenuList listName="Brand" list={becomeBrand} />
          </li>

          <li>
            <NavLink
              to="/portfolio"
              className="block px-4 py-3 md:py-2 text-lg hover:text-white transition"
            >
              Portfolio
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about-us"
              className="block px-4 py-3 md:py-2 text-lg hover:text-white transition"
            >
              About Us
            </NavLink>
          </li>

          {/* Login Button */}
          <li className="mt-2 md:mt-0 md:ml-6">
            <NavLink
              to="/login"
              onClick={() => setIsUserMenuOpen(false)}
              className="relative inline-flex items-center px-4 py-2 font-semibold text-white rounded-full bg-sky-950 group hover:bg-black transition"
            >
              <span className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-blue-500 via-sky-500 to-green-500 group-hover:from-blue-600 group-hover:to-green-700 transition-all duration-300"></span>
              <span className="relative z-10 bg-sky-950 px-5 py-1.5 rounded-full flex items-center space-x-2">
                <span>Login</span>
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  

  );
};

export default Header;
