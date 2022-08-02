import React from "react";
import "./HomeTestimonial.css";
import hemant from "../../../assets/images/hemant-shah.0647a77.png";
import younus from "../../../assets/images/younus.b7f5600.png";
import akshay from "../../../assets/images/akshay-chavan.d2caaae.png";
import ved from "../../../assets/images/ved-anand.18f252d.png";
import rhea from "../../../assets/images/rhea-nair.9e446ff.png";
import pravin from "../../../assets/images/pravin.7c49e32.png"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HomeTestimonial = () => {
  var settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite:  true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="client-testimonial">
      <div className="container testimonial-carousel">
        <h3>Satisfied Clientele</h3>
        <div className="row ">
        <Slider {...settings}>
          <div className="col-lg-12">
            <div
              tabIndex="-1"
              data-index="0"
              aria-hidden="false"
              className="slick-slide home-slider slick-active slick-current"
              style={{ outline: "none", width: "372px" }}
            >
              <div>
                <div
                  tabIndex="-1"
                  className="testimonial-card"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="testimonial-card-user">
                    <div className="client-img">
                      <img src={hemant} alt="" />
                    </div>{" "}
                    <div className="testimonial-info">
                      <h4>Hemant Shah</h4>{" "}
                      <h5>
                        Founder <br />
                        Gfxbandits &amp; ITEdvantage
                      </h5>
                    </div>
                  </div>{" "}
                  <p>
                    Recently we came across, the best job app to use.
                    User-friendly and free of cost. Job seekers found on it
                    are very professional. I recommend this app because it
                    takes only the valid and correct information from the
                    employers and then approves. The app has a great pool of
                    candidates. I Highly recommend this application.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div
              tabIndex="-1"
              data-index="0"
              aria-hidden="false"
              className="slick-slide home-slider slick-active slick-current"
              style={{ outline: "none", width: "372px" }}
            >
              <div>
                <div
                  tabIndex="-1"
                  className="testimonial-card"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="testimonial-card-user">
                    <div className="client-img">
                      <img src={rhea} alt="" />
                    </div>{" "}
                    <div className="testimonial-info">
                      <h4>Rhea Nair</h4>{" "}
                      <h5>Recruitment Executive Expertrons</h5>
                    </div>
                  </div>{" "}
                  <p>
                    The App is very convenient and easy-going. We were able
                    to set up the profile easily with the guide. The
                    registration process was quick. Thanks to this job
                    application, we were able to get candidates with a click,
                    and we could also screen them very easily. Highly
                    recommended to all the Recruiters and Jobseekers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div
              tabIndex="-1"
              data-index="0"
              aria-hidden="false"
              className="slick-slide home-slider slick-active slick-current"
              style={{ outline: "none", width: "372px" }}
            >
              <div>
                <div
                  tabIndex="-1"
                  className="testimonial-card"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="testimonial-card-user">
                    <div className="client-img">
                      <img src={pravin} alt="" />
                    </div>{" "}
                    <div className="testimonial-info">
                      <h4>Pravin Vidhyadharan</h4>{" "}
                      <h5>
                        Founder &amp; CEO <br />
                        Namas industries
                      </h5>
                    </div>
                  </div>{" "}
                  <p>
                    The App is very user-friendly. I managed to set up my
                    profile within a few minutes and see the candidates that
                    matched my job requirement instantly. I would highly
                    recommend all recruiters to the user the App!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div
              tabIndex="-1"
              data-index="0"
              aria-hidden="false"
              className="slick-slide home-slider slick-active slick-current"
              style={{ outline: "none", width: "372px" }}
            >
              <div>
                <div
                  tabIndex="-1"
                  className="testimonial-card"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="testimonial-card-user">
                    <div className="client-img">
                      <img src={younus} alt="" />
                    </div>{" "}
                    <div className="testimonial-info">
                      <h4>Younus Shaik</h4>{" "}
                      <h5>
                        Senior HR-Specialist <br />
                        NStarX India Private Limited
                      </h5>
                    </div>
                  </div>{" "}
                  <p>
                    It is the best job app to use as it enables direct chat
                    between recruiters and job seekers. Those seeking work or
                    even those looking to hire should check out this app. It's a
                    free application.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div
              tabIndex="-1"
              data-index="0"
              aria-hidden="false"
              className="slick-slide home-slider slick-active slick-current"
              style={{ outline: "none", width: "372px" }}
            >
              <div>
                <div
                  tabIndex="-1"
                  className="testimonial-card"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="testimonial-card-user">
                    <div className="client-img">
                      <img src={ved} alt="" />
                    </div>{" "}
                    <div className="testimonial-info">
                      <h4>Ved Anand</h4> <h5>TripCart</h5>
                    </div>
                  </div>{" "}
                  <p>
                    The App India - Startup Jobs &amp; Hiring App is very user
                    friendly. It is very easy to use. I set up my profile within
                    a few minutes and instantly saw candidates that matched my
                    job requirement. This application has a great pool of
                    candidates, and I was able to hire 2 candidates for my
                    company. I would highly recommend all recruiters to use the
                    App.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div
              tabIndex="-1"
              data-index="0"
              aria-hidden="false"
              className="slick-slide home-slider slick-active slick-current"
              style={{ outline: "none", width: "372px" }}
            >
              <div>
                <div
                  tabIndex="-1"
                  className="testimonial-card"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="testimonial-card-user">
                    <div className="client-img">
                      <img src={akshay} alt="" />
                    </div>{" "}
                    <div className="testimonial-info">
                      <h4>Akshay Chavan</h4> <h5>Bosch India</h5>
                    </div>
                  </div>{" "}
                  <p>
                    The app is a platform where the recruiter can hire the
                    candidate and jobseeker can get the job. Direct connectivity
                    between recruiter and jobseeker is possible with no
                    consultancy involved. All the recruiters are verified with
                    proper documents, and job seekers' profiles are verified.
                    The app enables direct chat between the recruiter and
                    jobseeker. I recommend the app to everyone looking to
                    hire or even for jobs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonial;
