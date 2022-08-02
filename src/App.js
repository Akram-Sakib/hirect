import "./App.css";
import Home from "./pages/Home/Home/Home";
import { Routes, Route } from "react-router-dom";
import JobSeekers from "./pages/JobSeekers/JobSeekers/JobSeekers";
import Navbar from "./pages/Shared/Navbar/Navbar"; 
import Features from "./pages/Features/Features/Features";
import Recruiters from "./pages/Recruiters/Recruiters/Recruiters"; 
import RecruiterDashboard from "./pages/Dashboard/RecruiterDashboard/RecruiterDashboard";
import { useLocation } from "react-router-dom"; 
import JobSeekerDashboard from "./pages/Dashboard/JobSeekerDashboard/JobSeekerDashboard"; 
import JobSeekerEducation from "./pages/Dashboard/JobSeekerDashboard/JobSeekerEducation";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname === "/recruiter-dashboard" ||
      location.pathname === "/job-seeker-profile" |
      location.pathname === "/job-seeker-education" ? null : (
        <Navbar />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features-in" element={<Features />} />
        <Route path="/connect" element={<Recruiters />} />
        <Route path="/job-seeker" element={<JobSeekers />} />
        <Route path="/recruiter-dashboard" element={<RecruiterDashboard />} />  
        <Route path="/job-seeker-profile" element={<JobSeekerDashboard />} /> 
        <Route path="/job-seeker-education" element={<JobSeekerEducation />} /> 
      </Routes>
    </div>
  );
}

export default App;
