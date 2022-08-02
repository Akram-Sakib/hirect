import React from "react";
import "./AboutDetails.css";
import hire from "../../../assets/images/get-hired-img.6922f17.svg";
import about from "../../../assets/images/about-img.89e34ed.svg";

const AboutDetails = () => {
  return (
    <section className="about-section">
      <div className="about-details">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="about-content">
                <h3 className="title-md">About Us</h3>{" "}
                <p>
                  Hirect, India's first job platform, connects startup founders,
                  business owners, recruiters, and HR heads directly to job
                  seekers and candidates. Hirect's intelligent AI-matching
                  algorithms, inbuilt chat, and verification features make it
                  possible to schedule interviews within the app. It connects
                  candidates with decision-makers quickly.
                </p>{" "}
                <p>
                  Hirect is a chat-based, direct hiring platform designed for
                  high-growth startups to meet their hiring needs without
                  consultants and with 100% data privacy.
                </p>{" "}
                <p>
                  Raj Das is the co-founder and CEO of Hirect and leads a team
                  of 500+ professionals committed to enabling SMEs to hire
                  talent in just one day. Hirect is a solution specifically
                  designed for startups, allowing decision-makers (CEO, HR, TL)
                  to communicate directly with potential candidates.
                </p>{" "}
                <div className="section-notes">
                  <h3 className="title-md">Hire the Right Talent (For Startups)</h3>{" "}
                  <p>
                    In the current Indian startup ecosystem of instant hiring,
                    <br />
                    conventional hiring has almost become obsolete. Hirect is{" "}
                    <br />
                    now known for its fast hiring process - 10X faster.
                  </p>{" "}
                  <a href="/connect" className="btn default-btn find-candidate-btn">
                    Find Your Candidates
                  </a>
                </div>
              </div>
            </div>{" "}
            <div className="col-md-5">
              <div className="about-image">
                <img src={about} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="get-hired-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="get-hired-img">
                <img src={hire} alt="" />
              </div>
            </div>{" "}
            <div className="col-md-6">
              <div className="get-hired-content">
                <h3 className="title-md">
                  Get Hired For The Right <br />
                  Job (For Job Seekers)
                </h3>{" "}
                <p>
                  Job seekers
                  <span className="text-black"> apply to jobs online</span> expecting
                  a more seamless process. However, since the traditional hiring
                  process has not evolved, as per the dynamics of the Indian
                  startup ecosystem, it has not been able to connect the
                  candidates directly with the startup founders.
                </p>{" "}
                <p>
                  Hirect has been customized as per the need of an hour, helping
                  the job seekers to connect directly with the Founders,
                  Business Owners, and the HRs, anytime and anywhere.
                </p>{" "}
                <p>
                  Hirect also eliminates the scope of recruitment consultants
                  in-between, enabling a direct connection between the candidate
                  and the startup founders, ensuring 100% data privacy.
                </p>{" "}
                <button type="button" className="btn default-btn button-sm">
                  Connect Directly
                </button>
              </div>
            </div>
          </div>{" "}
          <div className="row">
            <div className="col-md-12">
              <div className="section-notes">
                <h3 className="title-md">Hirect Simplifies Hiring</h3>{" "}
                <p>
                  Hirect instantly connects the Hiring managers with a massive
                  and diversified database of skilled job seekers. This best job
                  app disrupts the status quo of traditional hiring and
                  facilitates direct hiring anytime, anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;
