import React from "react";
import { FiMenu, FiX, FiHome, FiUsers, FiBriefcase, FiMessageCircle, FiPhone, FiPackage, FiList, FiUserPlus, FiUserCheck, FiClipboard, FiPlusCircle, FiTrendingUp, FiDollarSign } from 'react-icons/fi';
import { FaBuilding } from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-sky-900 to-sky-800 text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-64'
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:w-64`}
      >
        <div className="p-5 flex justify-between items-center md:hidden">
          <h2 className="text-xl font-bold">ITSYBIZZ</h2>
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            <FiX size={24} />
          </button>
        </div>
        <nav className="p-5">
        <ul className="space-y-4">
          <li className="flex items-center space-x-2   p-3 rounded cursor-pointer"><FiHome /> <span>Dashboard</span></li>

          <li className="flex items-center space-x-2 hover:bg-sky-700 p-3 rounded cursor-pointer"><FiUsers /> <span>Users</span></li>

          <li className="flex items-center space-x-2 hover:bg-sky-700 p-3 rounded cursor-pointer"><FiBriefcase /> <span>Career</span></li>

          <li className="flex items-center space-x-2 hover:bg-sky-700 p-3 rounded cursor-pointer"><FiMessageCircle /> <span>Enquiry</span></li>

          <li className="flex items-center space-x-2 hover:bg-sky-700 p-3 rounded cursor-pointer"><FiPhone /> <span>Contact</span></li>

          <li className="flex items-center space-x-2 hover:bg-sky-700 p-3 rounded cursor-pointer"><FiPackage /> <span>IOT Products</span></li>
          
          <li className="flex items-center space-x-2 hover:bg-sky-700 p-3 rounded cursor-pointer"><FiClipboard /> <span>IOT Products Quote</span></li>

          <li className="flex items-center space-x-2 hover:bg-sky-700 p-3 rounded cursor-pointer"><FiUserCheck /> <span>Employee</span></li>

          <li className="flex items-center space-x-2 hover:bg-sky-700 p-3 rounded cursor-pointer"><FiClipboard /> <span>Follow Ups</span></li>
          
         
          <li className="flex items-center space-x-2 hover:bg-sky-700 p-3 rounded cursor-pointer"><FiTrendingUp /> <span>Refferal Program</span></li>
         
          <li className="flex items-center space-x-2 hover:bg-sky-700 p-3 rounded cursor-pointer"><FiDollarSign /> <span>Business</span></li>

          <li className="flex items-center space-x-2 hover:bg-sky-700 p-3 rounded cursor-pointer"><FaBuilding /> <span>Corporate</span></li>
         
        </ul>
      </nav>
      </aside>
    );
  };

  export default Sidebar;