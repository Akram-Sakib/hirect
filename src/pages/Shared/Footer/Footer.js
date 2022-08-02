import React from "react";
import "./Footer.css";
import footerLogo from "../../../assets/icons/hirect-logo-footer.6af077d.png";
import whatsappIcon from "../../../assets/icons/whatsapp-icon.05176f1.svg";
import indiaFlag from "../../../assets/icons/country-flag.745924a.svg";
import americaFlag from "../../../assets/icons/america-flag.png";
import spider from "../../../assets/images/spider-removebg-preview3.png";
import spiderLogo2 from "../../../assets/images/spider-removebg-preview.png";

const Footer = () => {
    
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="footer-box">
              <div className="footer-logo">
                <a href="/homepage" className="">
                  <img src={spiderLogo2} alt="" />
                </a>
                <p>
                  Hire Instantly for Your Startup. <br />
                  Trusted by 3M+ verified Jobseekers &amp; <br />
                  verified 150K+ Startups!
                </p>
              </div>
              <div className="footer-whatsapp">
                <img src={whatsappIcon} alt="" />
                <a href="https://api.whatsapp.com/send?phone=+918446164920">
                  +918446164920
                </a>
              </div>
              <ul className="footer-social-link">
                <li>
                  <a href="https://twitter.com/HirectIndia" target="_blank">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://in.linkedin.com/company/hirectapp"
                    target="_blank"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/hirectindia/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UC98TU-jrNVOJCWC-FhnaPWQ"
                    target="_blank"
                  >
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/hirect_india/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-4">
                <div className="footer-link">
                  <h4>App</h4>
                  <ul>
                    <li>
                      <a
                        href="/"
                        aria-current="page"
                        className="nuxt-link-exact-active nuxt-link-active"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/aboutus" className="">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="/features-in" className="">
                        Features
                      </a>
                    </li>
                    <li>
                      <a href="/connect" className="">
                        Recruiters
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hirect.in/blog/">Blog</a>
                    </li>
                    <li>
                      <a href="/job-seeker" className="">
                        Job Seekers
                      </a>
                    </li>
                    <li>
                      <a href="/startup-hiring" className="">
                        For Startup Hiring
                      </a>
                    </li>
                    <li>
                      <a href="/contact-us" className="">
                        Contact us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-link">
                  <h4>Support</h4>
                  <ul>
                    <li>
                      <a href="mailto:support@hirect.in">Support@hirect.in</a>
                    </li>
                    <li>
                      <a>
                        For Recruiters
                        <br />
                        Schedule a Call
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-link">
                  <h4>Legal</h4>
                  <ul>
                    <li>
                      <a href="/privacypolicy" className="">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="/termsconditions" className="">
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a href="/product-pricing" className="">
                        Product &amp; Pricing
                      </a>
                    </li>
                    <li>
                      <a href="/refund-cancellation-policy" className="">
                        Refund Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right-footer">
          <div className="row">
            <div className="col-md-6 copy-right-text">
              <h3>© Elephantjob Private Limited. All Rights Reserved.</h3>
            </div>
            <div className="col-md-6">
              <div className="change-flage">
                <div className="dropdown">
                  <a className="dropbtn">
                    <img src={indiaFlag} alt="" />
                    <h6>Change Region</h6>
                  </a>
                  <div className="dropdown-content">
                    <a href="https://hirect.us?changeregion=1" className="dropbtn">
                      <img src={americaFlag} alt="" />
                      <h6>United States</h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="el-dialog__wrapper schedule-dialog"
        style={{ display: "none" }}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-label="dialog"
          className="el-dialog"
          style={{ marginTop: "15vh" }}
        >
          <div className="el-dialog__header">
            <span className="el-dialog__title"></span>
            <button
              type="button"
              aria-label="Close"
              className="el-dialog__headerbtn"
            >
              <i className="el-dialog__close el-icon el-icon-close"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
