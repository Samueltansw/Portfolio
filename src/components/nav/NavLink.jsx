import React from "react";

const NavLink = ({ id, icon, active, toggleActive }) => {
  return (
    <li
      onClick={() => toggleActive(id)}
      className={id === active ? "Navlink active" : "Navlink"}
    >
      <a href={`#${id}`}>
        <span className="icon">{icon}</span>
        <span className="description">{id}</span>
      </a>
    </li>
  );
};

export default NavLink;
