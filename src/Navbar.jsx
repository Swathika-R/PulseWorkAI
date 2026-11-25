
import React from "react";

function Navbar() {
  return (
    <div className="sidebar">

      {/* Website logo */}
      <div className="logo">
        <span className="logo-icon">✦</span>
        <h2>PulseWorks AI</h2>
      </div>

      {/* Sidebar menu items */}
      <ul className="nav-links">

        <li className="active">
          Dashboard
        </li>

        <li>
          Projects
        </li>

        <li>
          Tasks
        </li>

        <li>
          Team
        </li>

        <li>
          Reports
        </li>

        <li>
          Settings
        </li>

      </ul>
    </div>
  );
}

export default Navbar;
