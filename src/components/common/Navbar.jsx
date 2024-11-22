import React from "react";
import styled from "styled-components";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { BsSteam, BsTwitch, BsYoutube } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import {
  selectSidebarStatus,
  setSidebarOff,
  setSidebarOn,
} from "../../redux/store/sidebarSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const sidebarStatus = useSelector(selectSidebarStatus);

  return (
    <NavbarWrapper className="d-flex align-items-center">
      <div className="container w-100">
        <div className="navbar-content">
          <img
            src="https://i.ibb.co/WfqZSZt/Lime-Wire-AI-Studio-Asset-1-removebg-preview.png"
            alt="Logo"
            className="logo"
            style={{
              width: "50px",
              height: "auto",
              marginRight: "10px",
              display: "inline-block",
              marginTop: "10px",
            }}
          />
          <div className="brand-and-toggler d-flex align-items-center justify-content-between">
            <Link
              to="/"
              className="navbar-brand text-white text-uppercase no-wrap"
            >
              Game<span style={{ color: "orchid" }}>Soul</span>
            </Link>
            <button
              type="button"
              className="navbar-show-btn text-white"
              onClick={() => dispatch(setSidebarOn())}
            >
              <HiOutlineMenuAlt3 size={25} />
            </button>
          </div>

          <div className={`navbar-collapse ${sidebarStatus ? "show" : ""}`}>
            <button
              type="button"
              className="navbar-hide-btn"
              onClick={() => dispatch(setSidebarOff())}
            >
              <MdClose size={25} />
            </button>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  home
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/creators" className="nav-link">
                  creators
                </Link>
              </li> */}
              <li className="nav-item">
                <Link to="/stores" className="nav-link">
                  stores
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/games" className="nav-link">
                  games
                </Link>
              </li>
            </ul>
            <ul className="connect-list d-flex justify-content-center align-items-center mt-5 flex-wrap">
              <GoogleOAuthProvider clientId="523701870865-vc5v5o4ilrlkvd0cin0lotm1glam0bml.apps.googleusercontent.com">
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    console.log(credentialResponse);
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
              </GoogleOAuthProvider>
              <li className="connect-item" style={{ marginLeft: "50px" }}>
                <a
                  href="https://store.steampowered.com/"
                  className="connect-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsSteam size={18} />
                </a>
              </li>
              <li className="connect-item">
                <a
                  href="https://www.twitch.tv/"
                  className="connect-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsTwitch size={18} />
                </a>
              </li>
              <li className="connect-item">
                <a
                  href="https://www.youtube.com/gaming"
                  className="connect-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsYoutube size={19} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;

const NavbarWrapper = styled.div`
  min-height: 78px;
  background: #090624;

  .navbar-brand {
    font-weight: 700;
    font-size: 32px;

    span {
      color: var(--clr-green-normal);
    }
  }

  .nav-item {
    padding: 10px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }

  .nav-link {
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 2px;
    transition: var(--transition-default);

    &:hover {
      color: var(--clr-pink-normal);
    }
  }

  .connect-text {
    letter-spacing: 2px;
  }

  .connect-item {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2px;
    margin-left: 2px;
  }

  .connect-link {
    padding: 6px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition-default);

    &:hover {
      color: var(--clr-violet-normal);
    }
  }

  .navbar-collapse {
    position: fixed;
    right: 0;
    top: 0;
    width: 280px;
    height: 100%;
    background-color: var(--clr-white);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 60px 20px 16px;
    text-align: center;
    transform: translateX(100%);
    transition: var(--transition-default);
    z-index: 999;

    &.show {
      transform: translateX(0);
    }
  }

  .navbar-hide-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    transition: var(--transition-default);
    &:hover {
      transform: scale(1.2);
    }
  }

  .navbar-show-btn {
    transition: var(--transition-default);
    &:hover {
      transform: scale(1.2);
    }
  }

  @media screen and (min-width: 992px) {
    .navbar-show-btn {
      display: none;
    }
    .navbar-collapse {
      transform: translateX(0);
      position: relative;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      background-color: transparent;
      box-shadow: none;
    }
    .navbar-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .nav-item {
      margin-left: 6px;
    }
    .navbar-nav {
      display: flex;
    }
    .navbar-hide-btn {
      display: none;
    }
    .nav-link {
      color: var(--clr-white);
      padding: 1px 10px;
    }
    .connect-list {
      display: flex;
      margin-top: 0;
      color: var(--clr-white);
      margin-left: 40px;
      .connect-text {
        width: auto;
        margin-bottom: 0;
        margin-right: 22px;
        display: none;
      }
      .connect-link {
        color: var(--clr-white);
      }
    }
  }

  @media screen and (min-width: 1200px) {
    .nav-link {
      padding-right: 16px;
      padding-left: 16px;
    }
    .connect-list {
      margin-left: 88px;

      .connect-text {
        display: inline-block;
      }
    }
  }
`;