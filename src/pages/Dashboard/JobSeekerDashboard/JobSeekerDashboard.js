import React from "react";
import "./JobSeekerDashboard.css";
import { NavLink } from "react-router-dom";
import spider from "../../../assets/images/spider-removebg-preview3.png";
import userIcon from "../../../assets/images/user.png";
import palakSharm from "../../../assets/images/palak-sharma.2ab3146.png";

const JobSeekerDashboard = () => {
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

      <section className="pt-5 profile-overview">
        <div className="container">
          <div className="col-lg-8">
            {/* left-column-1st-div */}
            <div className="border border-secondary rounded py-4 px-3">
              <div className="d-flex justify-content-between">
                <div className="d-flex justify-content-between align-items-center px-3">
                  <img src={palakSharm} alt="" />
                  <div className="ps-2">
                    <h6 className="text-success">
                      Diana Rose <span >...</span>
                    </h6>
                    <p className="mb-0">Professional title</p>
                    <p>
                      <span>
                        <i class="fa-solid fa-location-dot pe-2"></i>
                      </span>
                      New York-09.30 AM
                    </p>
                  </div>
                </div>
                <div className="px-3">
                  <h6>
                    <span className="text-success"><i class="fa-solid fa-award"></i> Top Rated</span>
                  </h6>
                  <h6>
                    <span>Top 5% in Android Dev</span>
                  </h6>
                  <h6>
                    <span>Top 20% in People Mgmt</span>
                  </h6>
                </div>
              </div>

              <h6 className="px-3 pt-3">Overview</h6>
              <p className="px-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                rerum animi quam ipsa similique consequatur nemo dolorem
                reprehenderit iure. Temporibus, atque iusto? Dicta corrupti unde
                at molestiae exercitationem odit expedita?
              </p>
              <div className="d-flex pt-3">
                <div className="text-center">
                  <h6>6Y 8M</h6>
                  <p className="text-secondary">Total Experience</p>
                </div>
                <div className="text-center ps-4">
                  <h6>10.3 LPA</h6>
                  <p className="text-secondary">Current CTC</p>
                </div>
                <div className="text-center ps-4">
                  <h6>Intermediate joiner</h6>
                  <p className="text-secondary">Search Level</p>
                </div>
                <div className="text-center ps-4">
                  <h6>...</h6>
                  <p className="text-secondary">Current CTC</p>
                </div>
              </div>
            </div>

                {/* left-column-2nd-div */}
            <div className="py-4 my-4 border border-secondary rounded">
              <div className="d-flex justify-content-between align-items-center  px-4">
                <h6>Work history</h6>
                <select
                      className="custom-select div-bg border border-secondary rounded text-light px-2 py-1"
                      show-tick
                      placeholder="Short by:Latest"
                      style={{ minWidth: "220px", maxWidth: "40%" }}
                    >
                      <option className="special">
                      Short by:Latest
                      </option>
                      <option className="special">Burger</option>
                      <option className="special">Ice Cream</option>
                      <option className="special">Fried Potatoes</option>
                    </select>
              </div>
              <div className="px-4 py-3 ">
                <p>Job name1 <span className="text-secondary ps-2"><i class="fa-solid fa-calendar"></i> Mar 2021 - present</span></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quo repellat doloribus consequatur perferendis aliquid, dolore reiciendis aspernatur, iure tenetur dolorum eveniet accusantium quae. Expedita odit quo nihil necessitatibus ex.</p>
              </div>
              <hr className="mx-3 " />
              <div className="px-4 py-3 ">
                <p>Job name2 <span className="text-secondary ps-2"><i class="fa-solid fa-calendar"></i> Mar 2021</span></p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas qui sapiente rem repellendus animi vel commodi iste quasi cupiditate iusto, reprehenderit fugiat! Perferendis accusamus laborum et voluptatem dicta. Maxime, autem.</p>
              </div>

            </div>

            {/* left-column-3rd-div */}
            <div className="py-4 my-4 border border-secondary rounded">
              <div className="d-flex justify-content-between align-items-center  px-4">
                <h6>Education</h6>
                <select
                      className="custom-select div-bg border border-secondary rounded text-light px-2 py-1"
                      show-tick
                      style={{ minWidth: "220px", maxWidth: "40%" }}
                    >
                      <option className="special">
                        Short by:Latest
                      </option>
                      <option className="special">Burger</option>
                      <option className="special">Ice Cream</option>
                      <option className="special">Fried Potatoes</option>
                    </select>
              </div>
              <div className="px-4 py-3 ">
                <p>Course</p>
                <p><span className="text-secondary"><i class="fa-solid fa-calendar"></i> Mar 2021 - present</span></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quo repellat doloribus consequatur perferendis aliquid, dolore reiciendis aspernatur, iure tenetur dolorum eveniet accusantium quae. Expedita odit quo nihil necessitatibus ex.</p>
              </div>
              <hr className="mx-3 " />
              <div className="px-4 py-3 ">
                <p>Job name2 <span className="text-secondary ps-2"><i class="fa-solid fa-calendar"></i> Mar 2021</span></p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas qui sapiente rem repellendus animi vel commodi iste quasi cupiditate iusto, reprehenderit fugiat! Perferendis accusamus laborum et voluptatem dicta. Maxime, autem.</p>
              </div>

            </div>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </section>
    </div>
  );
};

export default JobSeekerDashboard;
