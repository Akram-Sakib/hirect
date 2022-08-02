import React from 'react';
import './Banner.css';
import candidate from '../../../assets/images/candidates.0f51451.svg'
import startup from '../../../assets/images/startups2.796b96b.svg'

const Banner = () => {
    return (
        <section className="direct-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Direct Hiring App</h1>
            </div>
            <div className="col-md-6">
              <div className="direct-Candidates first">
                <div className="direct-text">
                  <h2>Candidates</h2>
                  <a href="/job-seeker" className="btn default-btn button-sm">
                    Looking for Jobs
                  </a>
                </div>
                <div className="direct-img">
                  <img src={candidate} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="direct-Candidates two">
                <div className="direct-text">
                  <h2>Working Companies</h2>
                  <a href="/connect" className="btn default-btn startup-btn">
                    Looking for Candidates
                  </a>
                </div>
                <div className="direct-img">
                  <img src={startup} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Banner;