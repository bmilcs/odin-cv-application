import React from "react";
import HeaderLogo from "./assets/HeaderLogo";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-wrapper">
        <HeaderLogo />
        <div className="header-text-container">
          <h1 className="header">
            CV<span> Application</span>
          </h1>
          <p>A React-Based Curriculum Vitae Application Creator</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
