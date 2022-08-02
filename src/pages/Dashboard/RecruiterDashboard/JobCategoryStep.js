import React, { useState } from "react";
import "./JobCategoryStep.css";

const JobCategoryStep = ({ setGetStartedDiv, setSkillsStep, setTitleStep }) => {
  const jobCateContinueBtn = () => {
    setGetStartedDiv(false);
    setSkillsStep(true);
    setTitleStep(false);
  };

  const jobCateStepBackBtn = () => {
    setGetStartedDiv(true);
    setTitleStep(false);
  };

  return (
    <section className="container p-3">
      <div className="row">
        <div className="col-md-6 p-5 step-left">
          <div className="progress-bar rounded-pill">
            <div
              className="progress-bar-inner rounded-pill"
              style={{ width: "25%" }}
            />
          </div>
          <div className="progress-bar-content d-flex justify-content-between mt-2">
            <span className="text-green">Title</span>
            <span>Skills</span>
            <span>Scope</span>
            <span>Salary</span>
          </div>
          <div className="step1-title">
            <h2 className=" text-white mt-5 fs-1 w-90">
              Let's start with a strong title.
            </h2>
            <p className="text-white">
              This helps your job post stand out to the right candidates. It is
              the first thing they'll see. so make it count!
            </p>
          </div>
        </div>

        <div className="col-md-6 p-5 step-right d-flex flex-column">
          <h5 className="text-white m-top">Write a title for your job post</h5>
          <input
            type="text"
            defaultValue="Create an AI engines for ATS"
            className="w-100 text-small input rounded mt-2 mb-4"
          />
          <p className="text-green">
            We'll match with candidates that specialize in Machine Learning
          </p>
          <h6 className="text-white mb-3">Job Category</h6>
          <div className="job-category d-flex flex-column text-white">
            <div className="mb-3">
              <input
                type="radio"
                name="category"
                value="MachineLearning"
                id="MachineLearning"
                className="category"
                defaultChecked
              />
              <label for="MachineLearning" className="">
                {" "}
                Machine Learning
              </label>
            </div>
            <div className="mb-3">
              <input
                type="radio"
                name="category"
                id="GraphicDesign"
                value="GraphicDesign"
                className="category"
              />
              <label for="GraphicDesign" className="">
                {" "}
                Graphic Design
              </label>
            </div>
            <div className="mb-3">
              <input
                type="radio"
                name="category"
                value="FullStackDevelopment"
                id="FullStackDevelopment"
                className="category"
              />
              <label for="FullStackDevelopment" className=""> 
                Full Stack Development
              </label>
            </div>
            <a href="#" className="text-green mt-2">
              See all categories
            </a>
          </div>
          <div className="action d-flex justify-content-end align-items-end">
            <button
              onClick={jobCateStepBackBtn}
              className="btn outlined-button rounded-pill me-4"
            >
              Back
            </button>
            <button
              onClick={jobCateContinueBtn}
              className="btn btn-green rounded-pill"
            >
              Next: Skills
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobCategoryStep;
