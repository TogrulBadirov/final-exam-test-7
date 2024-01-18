import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import { FaPhone } from "react-icons/fa6";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav>
      <div id="desktop-nav">
        <div className="container">
          <div className="logo">
            <h2>
              Pulse<span>.</span>
            </h2>
          </div>
          <div className="pages">
            <ul className="nav-lists">
              <li className="nav-elem">
                <NavLink className={"nav-link"} to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-elem">
                <NavLink className={"nav-link"} to="/basket">
                  Basket
                </NavLink>
              </li>
              <li className="nav-elem">
                <NavLink className={"nav-link"} to="/wishlist">
                  Wishlist
                </NavLink>
              </li>
              <li className="nav-elem">
                <NavLink className={"nav-link"} to="/AddPage">
                  Add Page
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="reservation">
            <p>
              <span>Reservations</span>{" "}
              <NavLink to={"tel:652-345 3222 11"}>
                <FaPhone /> 652-345 3222 11
              </NavLink>
            </p>
          </div>
        </div>
      </div>
      <div id="mobile-nav">
        <div className="container">
          <div className="top-nav">
            <div className="logo">
              <h2>
              <Link className="link" to="/">Pulse<span>.</span></Link>
              </h2>
            </div>
            <div className="nav-icon">
              <button className="nav-btn" onClick={()=>setIsNavOpen(!isNavOpen)} >
                <TiThMenu />
              </button>
            </div>
          </div>
          <div onClick={()=>setIsNavOpen(!isNavOpen)} className={`pages ${isNavOpen ? "active":""}`}>
            <ul className="nav-lists">
              <li className="nav-elem">
                <NavLink className={"nav-link"} to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-elem">
                <NavLink className={"nav-link"} to="/basket">
                  Basket
                </NavLink>
              </li>
              <li className="nav-elem">
                <NavLink className={"nav-link"} to="/wishlist">
                  Wishlist
                </NavLink>
              </li>
              <li className="nav-elem">
                <NavLink className={"nav-link"} to="/AddPage">
                  Add Page
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
