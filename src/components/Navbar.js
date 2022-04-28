import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../static/images/logo.png";

const Navbar = () => {
  return (
    <Wrapper>
      <link
        href="https://fonts.googleapis.com/css2?family=Amiri:ital@1&family=Cormorant+Garamond:wght@300&family=Racing+Sans+One&family=Rajdhani:wght@500&family=Roboto+Mono:wght@100&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
        rel="stylesheet"
      ></link>
      <header role="banner" id="nav">
        <nav className="navbar navbar-expand-md navbar-grey bg-light">
          <div className="container">
            <Link to="/">
              <img
                src={logo}
                style={{ width: "100px", height: "30px" }}
                alt="logo"
              />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExample05"
              aria-controls="navbarsExample05"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample05">
              <ul className="navbar-nav ml-auto pl-lg-5 pl-0">
                <li className="nav-item">
                  <Link className="nav-link navy" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link navy" to="#">
                    About
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto pl-lg-5 pl-0">
                <li className="nav-item ">
                  <Link className="nav-link navy" to="#">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .spanner {
    font-family: "Great Vibes", cursive;
    font-size: 2.5rem;
    color: white;
  }
  .navy {
    color: #222;
    font-family: "Rajdhani", sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
  }
  .navy:hover {
    color: orangered;
  }
`;

export default Navbar;
