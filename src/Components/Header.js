/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
// import { MdOutlinePhonelinkRing } from "react-icons/md";
// import { IoSearchCircle } from "react-icons/io5";
// import { ImMail } from "react-icons/im";

const Header = () => {
  return (
    <div>
      <video
        className="video-bg"
        autoPlay
        loop
        muted
        playsInline
        src="https://cdn.pixabay.com/video/2020/08/27/48420-453832153_large.mp4"
        type="video/mp4"
      ></video>
      <div className="header-container">
        <header>
          <nav>
            <div className="menu-bar">
              {/* Logo section */}
              <img src="https://d3t1ql1vwawnhc.cloudfront.net/WEB/common/white_hdr_logo.png" />
              {/* Menu section */}
              <ul>
                <li>
                  <Link to={"/home"}>Home</Link>
                </li>
                <li>
                  <Link to={"/services"}>Services</Link>
                </li>
                <li>
                  <Link to={"/events"}>Events</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>            
            </div>
            {/* icon section */}          
            {/* <ImMail /> */}
            {/* <MdOutlinePhonelinkRing /> */}
            {/* mobile hamburger section */}
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
