import React from "react";
import "./RecruiterStartup.css";
import lenskart from "../../../assets/icons/lenskart-logo.6f67ce0.png";
import download from "../../../assets/icons/download.png";
import download1 from "../../../assets/icons/download (1).png";
import download2 from "../../../assets/icons/download (2).png";
import download3 from "../../../assets/icons/download (3).png";
import download4 from "../../../assets/icons/download (4).png";
import download5 from "../../../assets/icons/download (5).png";
import download6 from "../../../assets/icons/download (6).png";
import download7 from "../../../assets/icons/download (7).png";
import download8 from "../../../assets/icons/download (8).png";

const RecruiterStartup = () => {
  return (
    <section className="recruiter-startup-section startup-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="startup-section-heading">
              <h3 className="title-md">
                Direct and Instant Hiring. Join the list of leading companies.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="startups-logo">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="jobs-list">
                <ul className="startups-logo-list">
                  <li>
                    <img src={lenskart} alt="" />
                  </li>
                  <li>
                    <img src={download} alt="" />
                  </li>
                  <li>
                    <img src={download1} alt="" />
                  </li>
                  <li>
                    <img src={download2} alt="" />
                  </li>
                  <li>
                    <img src={download3} alt="" />
                  </li>
                  <li>
                    <img src={download4} alt="" />
                  </li>
                  <li>
                    <img src={download5} alt="" />
                  </li>
                  <li>
                    <img src={download6} alt="" />
                  </li>
                  <li>
                    <img src={download7} alt="" />
                  </li>
                  <li>
                    <img src={download8} alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruiterStartup;
