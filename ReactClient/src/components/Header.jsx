import { Link, NavLink, useNavigate } from "react-router-dom";


const Header = () => {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <ul className="flex space-x-4">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) =>
                isActive 
                  ? "text-white font-bold" 
                  : "text-gray-300 hover:text-white"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/pageFort"
              className={({ isActive }) =>
                isActive 
                  ? "text-white font-bold" 
                  : "text-gray-300 hover:text-white"
              }
            >
              PageFort
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/pageNite"
              className={({ isActive }) =>
                isActive 
                  ? "text-white font-bold" 
                  : "text-gray-300 hover:text-white"
              }
            >
              PageNite
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
