import React from "react";
import "./SeekersTestimonial.css";
import palak from "../../../assets/images/palak-sharma.2ab3146.png";
import pratyush from "../../../assets/images/pratyush.ebff6dd.png";
import rudra from "../../../assets/images/rudra.5da3717.png";
import ayush from "../../../assets/images/ayush.4f54877.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SeekersTestimonial = () => {
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
    <section className="seeker-testimonial ">
      <div className="container testimonial-carousel">
        <h3>
          Job Seekers Love the App, <br />
          Here’s Why?
        </h3>
        <div className="row">
          <Slider {...settings}>
            <div className="col-lg-12 col-md-12 seeker-column">
              <div
                tabIndex="-1"
                data-index="-3"
                aria-hidden="true"
                className="slick-slide slick-cloned"
                style={{ width: "372px" }}
              >
                <div>
                  <div
                    tabIndex="-1"
                    className="testimonial-card1"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="seeker-img">
                      <img src={palak} alt="" />
                    </div>{" "}
                    <h4>Palak Sharma</h4>{" "}
                    <p>
                      There are many job opportunities available on it. I
                      was surfing through this app and found that it is helpful
                      for freshers, especially those searching for jobs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 seeker-column">
              <div
                tabIndex="-1"
                data-index="-3"
                aria-hidden="true"
                className="slick-slide slick-cloned"
                style={{ width: "372px" }}
              >
                <div>
                  <div
                    tabIndex="-1"
                    className="testimonial-card1"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="seeker-img">
                      <img src={pratyush} alt="" />
                    </div>{" "}
                    <h4>Pratyush R.</h4>{" "}
                    <p>
                      Now, it takes just a fraction of a second to find a
                      respectful and relevant job. Thanks to the App,
                      things are much more convenient and simplified for
                      millions of job seekers. I always recommend this App to my
                      friends because I believe it's better than other job
                      seeking apps, I've come across till now.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 seeker-column">
              <div
                tabIndex="-1"
                data-index="-3"
                aria-hidden="true"
                className="slick-slide slick-cloned"
                style={{ width: "372px" }}
              >
                <div>
                  <div
                    tabIndex="-1"
                    className="testimonial-card1"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="seeker-img">
                      <img src={rudra} alt="" />
                    </div>{" "}
                    <h4>Rudraksh Parihar</h4>{" "}
                    <p>
                      Are you looking for a job? Or are you looking to hire a
                      team? It makes it easier for you. You can directly
                      chat with recruiters or with job seekers. How wonderful is
                      that, isn't it? All the recruiters are verified, and it is
                      free. Hire or get hired within a week. It is available on
                      the Google play store and the app store.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 seeker-column">
              <div
                tabIndex="-1"
                data-index="-3"
                aria-hidden="true"
                className="slick-slide slick-cloned"
                style={{ width: "372px" }}
              >
                <div>
                  <div
                    tabIndex="-1"
                    className="testimonial-card1"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="seeker-img">
                      <img src={ayush} alt="" />
                    </div>{" "}
                    <h4>Ayush Parmar</h4>{" "}
                    <p>
                      It is an excellent app for searching for jobs, and I
                      also love the options provided on the platform for the
                      Jobs. There are many opportunities available for Technical
                      Jobs. My favorite aspect of this website is that there are
                      no charges for posting jobs and you can contact the Human
                      Resources and Hiring Managers directly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 seeker-column hidden-column">
              <div
                tabIndex="-1"
                data-index="-3"
                aria-hidden="true"
                className="slick-slide slick-cloned"
                style={{ width: "372px" }}
              >
                <div>
                  <div
                    tabIndex="-1"
                    className="testimonial-card1"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="seeker-img">
                      <img src={palak} alt="" />
                    </div>{" "}
                    <h4>Palak Sharma</h4>{" "}
                    <p>
                      There are many job opportunities available on it. I
                      was surfing through this app and found that it is helpful
                      for freshers, especially those searching for jobs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 seeker-column hidden-column">
              <div
                tabIndex="-1"
                data-index="-3"
                aria-hidden="true"
                className="slick-slide slick-cloned"
                style={{ width: "372px" }}
              >
                <div>
                  <div
                    tabIndex="-1"
                    className="testimonial-card1"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="seeker-img">
                      <img src={pratyush} alt="" />
                    </div>{" "}
                    <h4>Pratyush R.</h4>{" "}
                    <p>
                      Now, it takes just a fraction of a second to find a
                      respectful and relevant job. Thanks to the App,
                      things are much more convenient and simplified for
                      millions of job seekers. I always recommend this App to my
                      friends because I believe it's better than other job
                      seeking apps, I've come across till now.
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

export default SeekersTestimonial;
