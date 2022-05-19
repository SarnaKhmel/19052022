import React, { useState } from "react";
import "./navBar.css";
import { Route, NavLink, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Motivation from "../pages/Motivation";
import Practice from "../pages/Practice";
import Games from "../pages/Games";
import Volunteering from "../pages/Volunteering";
import Contacts from "../pages/Contacts";

function Navbar(props) {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <>
      <nav className="nav">
        <NavLink exact to="/" activeClassName="selected" className="navHome">
          Portfolio
        </NavLink>
        <ul className={active}>
          <li className="navItem">
            <NavLink
              exact
              to="/"
              activeClassName="selected"
              className="navLink">
              Home
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink
              exact
              to="/motivation"
              activeClassName="selected"
              className="navLink">
              Motivation
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink
              exact
              to="/practice"
              activeClassName="selected"
              className="navLink">
              Practice
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink
              exact
              to="/games"
              activeClassName="selected"
              className="navLink">
              Games
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink
              exact
              to="/volunteering"
              activeClassName="selected"
              className="navLink">
              Volunteering
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink
              exact
              to="/contacts"
              activeClassName="selected"
              className="navLink">
              Contacts
            </NavLink>
          </li>
        </ul>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/motivation" component={Motivation} />
        <Route path="/practice" component={Practice} />
        <Route path="/games" component={Games} />
        <Route path="/volunteering" component={Volunteering} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </>
  );
}

export default Navbar;
