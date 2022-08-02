import React from "react";
import "./JobSeekersAll.css";
import banner from "../../../assets/images/job-seeker-banner.37d1895.svg";
import resume from "../../../assets/images/build-your-resume.6663e29.png";
import connect from "../../../assets/images/connect-instantly-new.89a0872.png";
import verified from "../../../assets/images/100verified-new.28f66bb.png";

const JobSeekersAll = () => {
  return (
    <section className="job-seeker">
      <div className="job-seeker-banner job-seeker-banner-old">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="jobseeker-banner-content">
                <h1>
                  Looking <br />
                  For a Job
                </h1>
              </div>
            </div>{" "}
            <div className="col-md-6">
              <div className="jobseeker-banner-img">
                <img src={banner} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="building-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="building-profile-content">
                <h3 className="title-md mb-65">
                  Building The Profile and Landing the Right Job Takes Just 5
                  minutes.
                </h3>{" "}
                <button type="button" className="btn default-btn button-sm">
                  Search Jobs
                </button>
              </div>
            </div>{" "}
            <div className="col-md-5">
              <div className="building-profile-img">
                <img src={resume} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="connect-instantly">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="connect-instantly-img">
                <img src={connect} alt="" />
              </div>
            </div>{" "}
            <div className="col-md-6">
              <div className="connect-instantly-content">
                <h3 className="title-md mb-65">
                  Connect Instantly with Working Companies Founders and Get Hired.
                </h3>{" "}
                <button type="button" className="btn default-btn button-sm">
                  Direct Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="verified-recruiters">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="verified-recruiters-content">
                <h3 className="title-md mb-65">
                  100% Verified Recruiters and 150K+ Working Companies trust.
                </h3>{" "}
                <button type="button" className="btn default-btn button-sm">
                  Get Started
                </button>
              </div>
            </div>{" "}
            <div className="col-md-6">
              <div className="verified-recruiters-img">
                <img src={verified} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSeekersAll;
