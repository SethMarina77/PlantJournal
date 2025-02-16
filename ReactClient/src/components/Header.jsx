import { Link, NavLink, useNavigate } from "react-router-dom";

import React from "react";

const Header = () => {
  return <div>
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pageFort">PageFort</NavLink>
        </li>
        <li>
          <NavLink to="/pageNite">PageNite</NavLink>
        </li>
      </ul>
    </nav>
  </div>;
};

export default Header;
