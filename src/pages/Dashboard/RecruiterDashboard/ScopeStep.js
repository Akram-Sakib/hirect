import React from "react";
import "./ScopeStep.css";

const ScopeStep = ({ setSkillsStep, setScopeStep, setSalaryStep }) => {
  
  const scopeStepNextBtn = () => {
    setSalaryStep(true);
    setScopeStep(false);
  };
  const scopeStepBackBtn = () => {
    setScopeStep(false);
    setSkillsStep(true);
  };

  return (
    <section className="container p-3">
      <div className="row">
        <div className="col-md-6 p-5 step-left">
          <div className="progress-bar rounded-pill">
            <div
              className="progress-bar-inner rounded-pill"
              style={{ width: "75%" }}
            />
          </div>
          <div className="progress-bar-content d-flex justify-content-between mt-2">
            <span className="text-green">Title</span>
            <span className="text-green">Skills</span>
            <span className="text-green">Scope</span>
            <span>Salary</span>
          </div>
          <div className="step1-title">
            <h2 className=" text-white mt-5 fs-2 w-90">
              Next, estimate the scope of your work.
            </h2>
            <p className="text-white">
              These aren't final answers, but this information help us recommend
              the right talent for what you need.
            </p>
          </div>
        </div>

        <div className="col-md-6 p-5 step-right d-flex flex-column">
          <h6 className="text-white mb-3">Time Period</h6>
          <div className="job-category d-flex flex-column text-white">
            <div className="mb-3">
              <input
                type="radio"
                name="category"
                value="1 to 3 months"
                id="oneToThree"
                className="category"
                defaultChecked
              />
              <label for="oneToThree" className="">
                {" "}
                1 to 3 months
              </label>
            </div>
            <div className="mb-3">
              <input
                type="radio"
                name="category"
                id="ThreeToSixMonths"
                value="3 to 6 months"
                className="category"
              />
              <label for="ThreeToSixMonths" className="">
                {" "}
                3 to 6 months
              </label>
            </div>
            <div className="mb-3">
              <input
                type="radio"
                name="category"
                value="6 to 12 months"
                id="sixToTwelveMonths"
                className="category"
              />
              <label for="sixToTwelveMonths" className="">
                {" "}
                6 to 12 months
              </label>
            </div>
          </div>
          <h6 className="text-white mb-3">Experience Level</h6>
          <div className="job-category d-flex flex-column text-white">
            <div className="mb-3">
              <input
                type="radio"
                name="role"
                value="Beginner"
                id="Beginner"
                className="category"
                defaultChecked
              />
              <label for="Beginner" className="">
                {" "}
                Beginner
              </label>
            </div>
            <div className="mb-3">
              <input
                type="radio"
                name="role"
                id="Intermediate"
                value="Intermediate"
                className="category"
              />
              <label for="Intermediate" className="">
                {" "}
                Intermediate
              </label>
            </div>
            <div className="mb-3">
              <input
                type="radio"
                name="role"
                value="Experts"
                id="Experts"
                className="category"
              />
              <label for="Experts" className="">
                {" "}
                Expert
              </label>
            </div>
            {/* <a href="#" className="text-green mt-2">
              See all categories
            </a> */}
          </div>
          <div className="action d-flex justify-content-end align-items-end">
            <button
              onClick={scopeStepBackBtn}
              className="btn outlined-button rounded-pill me-4"
            >
              Back
            </button>
            <button
              onClick={scopeStepNextBtn}
              className="btn btn-green rounded-pill"
            >
              Next: Salary
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScopeStep;
