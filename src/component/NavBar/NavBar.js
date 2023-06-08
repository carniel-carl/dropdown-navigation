import React, { useState } from "react";
import "./NavBar.css";

import logo from "../../images/logo.svg";
import menuBtn from "../../images/icon-menu.svg";
import todo from "../../images/icon-todo.svg";
import calendar from "../../images/icon-calendar.svg";
import reminder from "../../images/icon-reminders.svg";
import planning from "../../images/icon-planning.svg";

const NavBar = ({ opensidebar }) => {
  return (
    <header>
      <nav>
        <div className="image">
          <img src={logo} alt="logo" aria-hidden="true" />
        </div>

        <div
          className="menu-btn"
          aria-label="menu button"
          onClick={opensidebar}
        >
          <img src={menuBtn} alt="menu" aria-hidden="true" />
        </div>

        <div className="nav-link">
          <div className="navbar-left">
            <ul>
              <li>
                Features
                <div className="arrow">
                  <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                    <path
                      stroke="#686868"
                      stroke-width="1.5"
                      fill="none"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </div>
                <div className="dropdown features">
                  <ul>
                    <li>
                      <a href="/">
                        <img src={todo} alt="menu" aria-hidden="true" />
                        <p>Todo List</p>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src={calendar} alt="menu" aria-hidden="true" />
                        <p>Calendar</p>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src={reminder} alt="menu" aria-hidden="true" />
                        <p>Reminders</p>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src={planning} alt="menu" aria-hidden="true" />
                        <p>Planning</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                Company
                <div className="arrow">
                  <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                    <path
                      stroke="#686868"
                      stroke-width="1.5"
                      fill="none"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </div>
                <div className="dropdown">
                  <ul>
                    <li>
                      <a href="/">Histroy</a>
                    </li>
                    <li>
                      <a href="/">Our Team</a>
                    </li>
                    <li>
                      <a href="/">Blog</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
            </ul>
          </div>
          <div className="navbar-right">
            <ul>
              <li>
                <a href="/">login</a>
              </li>
              <li>
                <a href="/" className="reg-btn">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
