import React from "react";
import HeaderLogo from "./assets/HeaderLogo";
import "../styles/Header.css";

class Header extends React.Component {
  render() {
    return (
      <header>
        <HeaderLogo />
        <div className="header-text-container">
          <h1>
            CV<span> Application</span>
          </h1>
          <p>The React-Based Curriculum Vitae Application Creator</p>
        </div>
      </header>
    );
  }
}

export default Header;
