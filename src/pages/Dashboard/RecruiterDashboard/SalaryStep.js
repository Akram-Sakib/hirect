import React from "react";

const SalaryStep = ({setScopeStep,setSalaryStep}) => {
  const salaryScopeBackBtn = () => {
    setSalaryStep(false);
    setScopeStep(true);
  }
  return (
    <section className="container  p-3">
      <div className="row">
        <div className="col-md-6 p-5 step-left">
          <div className="progress-bar rounded-pill">
            <div
              className="progress-bar-inner rounded-pill"
              style={{ width: "100%" }}
            />
          </div>
          <div className="progress-bar-content d-flex justify-content-between mt-2">
            <span className="text-green">Title</span>
            <span className="text-green">Skills</span>
            <span className="text-green">Scope</span>
            <span className="text-green">Salary</span>
          </div>
          <div className="step1-title">
            <h2 className=" text-white mt-5 fs-2 w-90">
              Tell us about your salary.
            </h2>
            <p className="text-white">
              This will help use match you to talent within your range.
            </p>
          </div>
        </div>

        <div className="col-md-6 p-5 step-right d-flex flex-column"> 
          <div className="job-category d-flex flex-column text-white">
            <div className="form-group has-search mt-2 mb-4">
              <span className="fa fa-search form-control-feedback"></span>
              <input
                type="text"
                className="form-control input"
                placeholder="Search"
              />
            </div> 
            <div className="form-group has-search mt-2 mb-4">
              <span className="fa fa-search form-control-feedback "></span>
              <input
                type="text"
                className="form-control input"
                placeholder="Search"
              />
            </div>
            <h6 className="text-white mb-3">Salary Offer</h6>
          <div className="job-category d-flex flex-column text-white">
            <div className="mb-3">
              <input
                type="radio"
                name="category"
                value="0 to 15 LPA"
                id="zeroToFifteen"
                className="category"
                defaultChecked
              />
              <label for="zeroToFifteen" className="">
                {" "}
                0 to 15 LPA
              </label>
            </div>
            <div className="mb-3">
              <input
                type="radio"
                name="category"
                id="fifteenToThirty"
                value="15 to 30 LPA"
                className="category"
              />
              <label for="fifteenToThirty" className="">
                {" "}
                15 to 30 LPA
              </label>
            </div>
            <div className="mb-3">
              <input
                type="radio"
                name="category"
                value="30 to 45 LPA"
                id="thirtyToFortyFive"
                className="category"
              />
              <label for="thirtyToFortyFive" className="">
                {" "}
                30 to 45 LPA
              </label>
            </div> 
          </div> 
          </div>

          <div className="action d-flex justify-content-end align-items-end">
            <button onClick={salaryScopeBackBtn} className="btn outlined-button rounded-pill me-4">
              Back
            </button>
            <button className="btn btn-green rounded-pill">Next: Salary</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalaryStep;
