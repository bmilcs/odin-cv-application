import React from "react";
import "../styles/Footer.css";
import GitHubIcon from "./assets/GitHubIcon";

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/bmilcs/odin-cv-application">
        bmilcs
        <GitHubIcon />
        2022
      </a>
    </footer>
  );
};

export default Footer;
