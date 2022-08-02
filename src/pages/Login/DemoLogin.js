import React from 'react';
import { useNavigate } from 'react-router-dom';

const DemoLogin = () => {
  const navigate = useNavigate();
  const demoForm = e => {
    e.preventDefault();
    navigate("/recruiter-dashboard")

  }

  return (
    <div>
       <div className="container mt-5">
        {/* <!-- Button trigger modal --> */}
<button type="button" className="btn btn-outline-success btn-lg float-right" data-toggle="modal" data-target="#exampleModal">
    Open Modal
  </button>
  
  {/* <!-- Modal --> */}
  <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        
        <div className="modal-body">
            <form onSubmit={demoForm}>
                <div className="form-group">
                    <label>uname</label>
                    <input type="text" className="form-control" placeholder="User Name"/>
                    <label>upwd</label>
                    <input type="password" className="form-control" placeholder="password"/>
            <button type="submit" className="btn btn-success" value="submit" data-bs-dismiss="modal">Login</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  </div>
    
</div>
    </div>
  );
};

export default DemoLogin;