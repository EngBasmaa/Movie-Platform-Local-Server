import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/imgs/logo-white.png";
// import { myLink } from "../pages/MoviesPage.jsx";
import "../global.css";
import styles from "../css/nav.module.css";
import { ThemeToggleButton } from "../styled-components/ThemeToggleButton";
import { NavLink } from "react-router-dom";

export class HeaderNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
      activeLink: "#home"
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 64) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };

  handleLinkClick = link => {
    this.setState({ activeLink: link });
  };

  render() {
    return (
      <Navbar
        expand="lg"
        className={`position-fixed start-0 w-100 ${this.state.scrolled
          ? styles["navbar-scrolled"]
          : styles["navbar-initial"]}`}
        style={{ zIndex: 999 }}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" width="108" style={{ height: "auto" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="links me-auto d-flex justify-content-center w-100">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-danger nav-link" : "nav-link"}
                to="/"
              >
                LandingPage
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-danger nav-link" : "nav-link"}
                to="/movies"
              >
                Movies
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-danger nav-link" : "nav-link"}
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </Nav>
          </Navbar.Collapse>
          <ThemeToggleButton />
        </Container>
      </Navbar>
    );
  }
}
