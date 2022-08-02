import React from "react";
import "./FeaturesAll.css";
import notification from "../../../assets/images/quick-notification2.b51380a.png";
import videoCall from "../../../assets/images/Updatedvideocall.8928d8a.png";
import instantChat from "../../../assets/images/instant-chat-ceo1.e16699e.png";
import featureChat from "../../../assets/images/feature-chat-directly1.849a2de.png";
import matching1 from "../../../assets/images/algo-matching1.3e4eada.png";

const FeaturesAll = () => {
  return (
    <section className="feature-section">
      <div className="container">
        <div className="feature-list one-1">
          <div className="row">
            <div className="col-md-6">
              <div className="feature-content feature-left-content">
                <h3 className="title-md">
                  Instant Chat with the <br />
                  Founders/ CEO’s and Get <br />
                  Hired Directly
                </h3>
              </div>
            </div>{" "}
            <div className="col-md-6">
              <div className="feature-content-img">
                <img src={instantChat} alt="" />
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="feature-list">
          <div className="row">
            <div className="col-md-6">
              <div className="feature-content-img">
                <img
                  src={featureChat}
                  alt=""
                />
              </div>
            </div>{" "}
            <div className="col-md-6">
              <div className="feature-content feature-right-content">
                <h3 className="title-md">
                  Chat Directly to Get <br />
                  Quick Response
                </h3>{" "}
                <p>
                  It enables recruiters and candidates to connect directly -
                  no emails and no waiting. As soon as a user (be it the hiring
                  manager or a job seeker) sends a message, they can see if it
                  was read by the other side and can receive a response
                  /feedback within a few hours.
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="feature-list">
          <div className="row">
            <div className="col-md-6">
              <div className="feature-content">
                <h3 className="title-md">
                  AI-Algorithm Matching <br />
                  Candidate Recommendations
                </h3>{" "}
                <div className="feature-left-content">
                  <p>
                    The App's Intelligent AI-powered algorithm matches the job
                    profiles with the right candidates. When a job is posted,
                    the hiring manager/CEO/Founders of Startups and SMEs will
                    receive a list of only relevant candidates. This eliminates
                    the exhaustive process of resume screening. Hiring the right
                    team is now possible with just a click.
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="col-md-6">
              <div className="feature-content-img">
                <img src={matching1} alt="" />
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="feature-list">
          <div className="row">
            <div className="col-md-6">
              <div className="feature-content-img">
                <img
                  src={videoCall}
                  alt=""
                  style={{ padding: "0 14px", height: "691px", width: "360px" }}
                />
              </div>
            </div>{" "}
            <div className="col-md-6">
              <div className="feature-content feature-right-content">
                <h3 className="title-md">
                  100% Secure Video <br />
                  Interviews
                </h3>{" "}
                <p>
                  It integrates voice and video calling into the app itself.
                  There is no need to switch platforms. Furthermore, this
                  ensures the security of the users, thus allowing 100%
                  integrity and data privacy during the hiring process.
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="feature-list">
          <div className="row">
            <div className="col-md-6">
              <div className="feature-content feature-left-content">
                <h3 className="title-md">
                  Direct and Quick <br />
                  Notifications
                </h3>{" "}
                <p>
                  If the AI algorithm finds a matching candidate for a job
                  posted by a hiring manager/CEO/ Founder of a Startup or SME,
                  The App instantly notifies them. By doing so, It ensures
                  that the startups do not miss out on any opportunities to grow
                  their employees.
                </p>
              </div>
            </div>{" "}
            <div className="col-md-6">
              <div className="feature-content-img">
                <img src={notification} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesAll;
