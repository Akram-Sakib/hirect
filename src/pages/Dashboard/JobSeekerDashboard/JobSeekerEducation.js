import React from "react";
import "./JobSeekerEducation.css";
import { NavLink } from "react-router-dom";
import spider from "../../../assets/images/spider-removebg-preview3.png";
import userIcon from "../../../assets/images/user.png";

const JobSeekerEducation = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <a
              href="/"
              aria-current="page"
              className="navbar-brand menu-link-exact-active menu-link-active"
            >
              <img width="100px" height="80px" src={spider} alt="" />
            </a>
            <li className="nav-item">
              <NavLink
                to="/job-seeker-profile"
                className={({ isActive }) =>
                  isActive
                    ? "navlink-active text-decoration-none"
                    : "navlink-inactive text-decoration-none"
                }
              >
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/job-seeker-education"
                className={({ isActive }) =>
                  isActive
                    ? "navlink-active text-decoration-none"
                    : "navlink-inactive text-decoration-none"
                }
              >
                Education
              </NavLink>
            </li>
          </div>

          <button
            className="navbar-toggler ml-auto custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="navbarScroll" className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll nav-dropdown-link">
              <li className="nav-item">
                <div className="form-group has-search">
                  <span className="fa fa-search form-control-feedback "></span>
                  <input
                    type="text"
                    className="form-control input"
                    placeholder="Search"
                  />
                </div>
              </li>
              <li className="nav-item">
                <i class="fa-solid fa-bell text-light ms-3"></i>
              </li>
              <li className="nav-item">
                <i class="fa-solid fa-cart-shopping text-light ms-3"></i>
              </li>

              <li className="nav-item">
                <div className="ms-3">
                  <img
                    height="30px"
                    width="30px"
                    src={userIcon}
                    alt="user photo"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default JobSeekerEducation;
