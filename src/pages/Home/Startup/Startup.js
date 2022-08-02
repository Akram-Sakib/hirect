import React from 'react';
import './Startup.css';
import lenskart from '../../../assets/icons/lenskart-logo.6f67ce0.png';
import download from '../../../assets/icons/download.png';
import download1 from '../../../assets/icons/download (1).png';
import download2 from '../../../assets/icons/download (2).png';
import download3 from '../../../assets/icons/download (3).png';
import download4 from '../../../assets/icons/download (4).png';
import download5 from '../../../assets/icons/download (5).png';
import download6 from '../../../assets/icons/download (6).png';
import download7 from '../../../assets/icons/download (7).png';
import download8 from '../../../assets/icons/download (8).png';

 
const Startup = () => {
    return (
        <section className="startup-section">
        <div className="startups-logo">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3 className="title-sm">
                  More than 150K+ working companies trust for their recruitment
                  needs.
                </h3>
                <div className="jobs-list">
                  <ul className="startups-logo-list">
                    <li>
                      <img
                        src={lenskart}
                        alt=""
                      />
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

export default Startup;