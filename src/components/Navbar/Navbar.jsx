import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import Reorder from "@material-ui/icons/Reorder";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Git from "@material-ui/icons/GitHub"

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          {" "}
          <Reorder />
        </button>
      </div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/skills"> Skills </Link>
        <Link to="/experience"> Experience </Link>
        <div className="socialMedia">
          <InstagramIcon onClick={() => window.open('https://www.instagram.com/droopegu1/', '_blank')}/>  
          <LinkedInIcon  onClick={() => window.open('https://www.linkedin.com/in/pedroprodocimo/', '_blank')}/>
          <Git onClick={() => window.open('https://github.com/DroopeGu1/', '_blank')} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
