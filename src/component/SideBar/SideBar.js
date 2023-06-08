import React from "react";
import "./SideBar.css";

import closeBtn from "../../images/icon-close-menu.svg";
import todo from "../../images/icon-todo.svg";
import calendar from "../../images/icon-calendar.svg";
import reminder from "../../images/icon-reminders.svg";
import planning from "../../images/icon-planning.svg";

const SideBar = ({ open, close }) => {
  return (
    <aside className={open ? "sidebar open-sidebar" : "sidebar"}>
      <div className="sidebar_items">
        <div className="closeBtn" onClick={close}>
          <img src={closeBtn} alt="close button" aria-hidden="true" />
        </div>

        <div className="nav_links">
          <div className="links">
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
                <div className="drop_down">
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
                <div className="drop_down">
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
        </div>
        <div className="bottom">
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
    </aside>
  );
};

export default SideBar;
