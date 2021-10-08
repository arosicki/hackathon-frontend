import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { defaultStyle } from "../../styles";

const BareNavbar = ({ className }: NavbarProps) => {
  const [click, setClick] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.querySelectorAll(".nav-links").forEach((el) => {
      el.classList.remove("selected");
    });
    let urlLocation = location.pathname.substring(1);
    if (urlLocation === "") {
      urlLocation = "home";
    }
    document.querySelector(`#${urlLocation}`)?.classList.add("selected");
  }, [location]);

  const openMobileMenu = () => setClick(!click);
  const handleClick = () => setClick(false);

  return (
    <nav className={className}>
      <Link to="/" className="navbar-logo" onClick={handleClick}>
        Sproutify
      </Link>
      <div className="menu-icon" onClick={openMobileMenu}>
        <span className="material-icons-outlined">{click ? "close" : "menu"}</span>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/" className="nav-links" id="home" onClick={handleClick}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/leaderboard" id="leaderboard" className="nav-links" onClick={handleClick}>
            Leaderboard
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" id="login" className="nav-links" onClick={handleClick}>
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" id="register" className="nav-links" onClick={handleClick}>
            Sign In
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const Navbar = styled(BareNavbar)`
  background-color: ${defaultStyle.NAVBAR_COLOR};
  height: 40px;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  z-index: 10;
  .navbar-logo {
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    margin: 0 0 auto 20px;
  }
  .material-icons-outlined {
    margin-left: 0.5rem;
    font-size: 2rem;
    cursor: pointer;
  }
  .nav-menu {
    display: grid;
    grid-template-columns: repeat(4, auto);
    text-align: center;
    width: 80vw;
    justify-content: end;
    margin-right: 2rem;

    .nav-item {
      display: flex;
      align-items: center;
      height: 40px;

      .nav-links {
        color: white;
        text-decoration: none;
        padding: 0.5rem 1rem;
        &.selected {
          transition: color 0.2s ease-in-out;
          color: ${defaultStyle.NAVBAR_SELECTED_LINK_COLOR};
        }
        &:hover {
          background-color: ${defaultStyle.NAVBAR_HOVER};
          transition: color 0.2s ease-out;
        }
      }
    }
  }

  .menu-icon {
    display: none;
  }

  @media screen and (max-width: 960px) {
    height: 80px;
    .NavbarItems {
      position: relative;
    }

    .nav-menu {
      display: flex;
      flex-direction: column;
      width: 100vw;
      height: calc(100vh - 80px);
      position: fixed;
      top: 80px;
      left: -110%;
      transition: all 0.5s ease;
      justify-content: center;
      &.active {
        background: #242222;
        left: 0;
        opacity: 1;
        transition: all 0.5s ease;
        z-index: 10;
      }
      .nav-item {
        padding-bottom: 2rem;
      }
      .nav-links {
        text-align: center;
        padding: 2rem;
        width: 100%;
        font-size: 3rem;
      }
    }

    .navbar-logo {
      position: absolute;
      top: 0;
      left: 0;
      font-size: 2rem;
      transform: translate(5%, 55%);
    }

    .menu-icon {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
    }
  }
`;

interface NavbarProps {
  className?: string;
}

export default Navbar;
