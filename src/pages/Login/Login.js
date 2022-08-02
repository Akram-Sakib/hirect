import React, { useState } from "react";
import DemoLogin from "./DemoLogin";
import "./Login.css";
import CandidateLogin from "./CandidateLogin/CandidateLogin";
import RecruiterLogin from "./RecruiterLogin/RecruiterLogin";

const Login = () => {
  const [recruiter, setRecruiter] = useState(true);

  const handleRecruiterChange = () => {
    setRecruiter(false);
  };
  const handleCandidateChange = () => {
    setRecruiter(true);
  };

  return (
    <div className="login container">
      {/* <button type="button" data-bs-toggle="modal" data-bs-target="#login-modal">Login</button> */}
       
      <div
        className="modal fade"
        id="login-modal"
        tabindex="-1"
        aria-hidden="true"
        role="dialog"
        aria-labelledby="myModalLabel"
        style={{ display: "none" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
            <div className="">
              <h5 id="#myModalLabel">Login As:</h5>
              <input
                onClick={handleCandidateChange}
                type="radio"
                id="candidate"
                name="fav_language"
                value="candidate"
              />
              <label for="candidate" className="ms-2">
                Candidate
              </label>
              <br />
              <input
                onClick={handleRecruiterChange}
                type="radio"
                id="Recruiter"
                name="fav_language"
                value="Recruiter"
              />
              <label for="Recruiter" className="ms-2">
                Recruiter
              </label>
            </div>
            {/* <h5 id="#myModalLabel">Login to Your Account</h5> */}
            <br />
            {recruiter ? <CandidateLogin /> : <RecruiterLogin />}

            {/* <div className="login-help">
              <a href="#">Join</a> - <a href="#">Forgot Password</a>
            </div> */}
            
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
