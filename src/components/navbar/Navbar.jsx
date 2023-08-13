import React from "react";
import "./navbar.css";

const Menu = () => (
  <>
    <button>
      <a href="#home">Home</a>
    </button>
    <button>
      <a href="#services">Services</a>
    </button>
    <button>
      <a href="#partners">Partners</a>
    </button>
    <button>
      <a href="#about">About</a>
    </button>
  </>
);

const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <h1 className="header_logo">
            <a href="#home">DATA SOLUTIONS</a>
          </h1>
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <button>
          <a href="#contact">Contact</a>
        </button>
        <button>
          <a href="#request">Request a demo</a>
        </button>
        <button>
          <a href="#member">Become a member</a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
