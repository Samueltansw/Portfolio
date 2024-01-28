import "./Nav.css";
import { LuContact } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { MdWorkOutline } from "react-icons/md";
import { PiProjectorScreenChartBold } from "react-icons/pi";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { BsPersonGear } from "react-icons/bs";
import NavLink from "./NavLink";
import { useState } from "react";

const Nav = () => {
  const [active, setIsActive] = useState("home");

  const navElements = [
    { id: "home", icon: <IoHomeOutline /> },
    { id: "about", icon: <FiUser /> },
    { id: "experiences", icon: <MdWorkOutline /> },
    { id: "projects", icon: <PiProjectorScreenChartBold /> },
    { id: "academics", icon: <HiOutlineAcademicCap /> },
    { id: "skills", icon: <BsPersonGear /> },
    { id: "contact", icon: <LuContact /> }
  ];

  const toggleActive = (id) => {
    setIsActive(id);
  };

  return (
    <nav className="Nav">
      <ul>
        {navElements.map((element) => {
          return (
            <NavLink
              id={element.id}
              active={active}
              toggleActive={toggleActive}
              icon={element.icon}
            />
          );
        })}
        <div className="indicator"></div>
      </ul>
    </nav>
  );
};

export default Nav;
