import { useState } from "react";
import SearchBar from "../../Shared/SearchFilter/SearchBar";
import "./SkillsStep.css";

const data = [
  { id: 1, name: "Web Development" },
  { id: 2, name: "Artificial Intelligence" },
  { id: 3, name: "Natural Language Processing" },
  { id: 4, name: "Machine Learning" },
  { id: 5, name: "Data Science" },
  { id: 6, name: "Data Structure and Algorithm" },
  { id: 7, name: "Front End Development" },
  { id: 8, name: "Back End Development" },
  { id: 9, name: "Web Design" },
  { id: 10, name: "Software Engineer" },
  { id: 11, name: "Mern Stack" },
  { id: 12, name: "Mean Stack" },
];

const FetchedSkill = ({ skills }) => {
  //  const deleteIssue = (id) => {
  //    const skills = JSON.parse(localStorage.getItem("skills"));
  //    const remainingSkills = skills.filter(
  //      (skill) => parseInt(skill.id) !== id
  //    );
  //    localStorage.setItem("issues", JSON.stringify(remainingSkills));
  //    window.location.reload();
  //  };

  // const skills = JSON.parse(localStorage.getItem("skills"));
  
  if (skills === null) {
    console.log("No Skills Found");
    return;
  }
  // console.log(skills);

  return (
    <div className="d-flex flex-wrap">
      {skills.map((skill, index) => (
        <button
          key={index}
          type="button"
          className="btn btn-remove-style rounded-pill me-3 mt-2"
        >
          {skill.name}{" "}
          <span
            className="badge text-bg-secondary"
            // onClick={() => deleteIssue(skill.id)}
          >
            <i className="fa-solid fa-xmark"></i>
          </span>
        </button>
      ))}
    </div>
  );
};

const SkillsStep = ({ setTitleStep, setSkillsStep, setScopeStep }) => {
  const [skills, setSkills] = useState([]);

  const ScopeStepNextBtn = () => {
    setScopeStep(true);
    setSkillsStep(false);
  };

  const scopeStepBackBtn = () => {
    setSkillsStep(false);
    setTitleStep(true);
  };

  /* Search and Filter Data */
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().indexOf(searchWord.toLowerCase()) > -1;
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const handleClick = (skillId, name, e) => {

    const alreadyExistSkill = skills.filter((skill) => skill.id !== skillId);
    setSkills(alreadyExistSkill);

      const addedSkill = { id: skillId, name };
      setSkills((skill) => [...skill, addedSkill]);
    
    // if (localStorage.getItem("skills")) {
    //   skills = JSON.parse(localStorage.getItem("skills"));
    // }

    // skills.push(skill);
    // localStorage.setItem("skills", JSON.stringify(skills));
  };
  console.log(skills);

  return (
    <section className="container p-3">
      <div className="row">
        <div className="col-md-6 p-5 step-left">
          <div className="progress-bar rounded-pill">
            <div
              className="progress-bar-inner rounded-pill"
              style={{ width: "50%" }}
            />
          </div>
          <div className="progress-bar-content d-flex justify-content-between mt-2">
            <span className="text-green">Title</span>
            <span className="text-green">Skills</span>
            <span>Scope</span>
            <span>Salary</span>
          </div>
          <div className="step1-title">
            <h2 className=" text-white mt-5 fs-2 w-90">
              What are the main skill required for your work?
            </h2>
          </div>
        </div>

        <div className="col-md-6 p-5 step-right d-flex flex-column">
          <h5 className="text-white m-top">Search or add up to 10 skills</h5>

          <SearchBar
            placeholder={"Search"}
            filteredData={filteredData}
            handleFilter={handleFilter}
            handleClick={handleClick}
          />

          <p className="text-green skill-text">
            <i className="fa-solid fa-star"></i>For the best results add 3-5
            skills
          </p>
          <h6 className="text-white mb-3">Selected Skill</h6>

          <FetchedSkill skills={skills} />
          <div className="popular-skill mt-4">
            <div className="popular-skill-title d-flex justify-content-between align-items-center mb-4">
              {/* <h5 className="text-white">Popular skills</h5>
              <i className="fa-solid fa-angle-up text-white"></i> */}
              <select
                className="bg-transparent border-0 text-light px-2 py-1"
                show-tick
                style={{ width: "100%" }}
              >
                <option className="special">Popular skills</option>
                <option className="special">Python</option>
                <option className="special">Aws</option>
                <option className="special">Fried Potatoes</option>
              </select>
            </div>
            <div className="d-flex flex-wrap">
              <button
                type="button"
                className="btn btn-add rounded-pill me-3 mt-2"
              >
                Python{" "}
                <span className="badge text-bg-secondary">
                  <i className="fa-solid fa-plus"></i>
                </span>
              </button>
              <button
                type="button"
                className="btn btn-add rounded-pill me-3 mt-2"
              >
                DeepLearning{" "}
                <span className="badge text-bg-secondary">
                  <i className="fa-solid fa-plus"></i>
                </span>
              </button>
              <button
                type="button"
                className="btn btn-add rounded-pill me-3 mt-2"
              >
                TensorFlow{" "}
                <span className="badge text-bg-secondary">
                  <i className="fa-solid fa-plus"></i>
                </span>
              </button>
              <button
                type="button"
                className="btn btn-add rounded-pill me-3 mt-2"
              >
                AI{" "}
                <span className="badge text-bg-secondary">
                  <i className="fa-solid fa-plus"></i>
                </span>
              </button>
              <button
                type="button"
                className="btn btn-add rounded-pill me-3 mt-2"
              >
                Neural Network{" "}
                <span className="badge text-bg-secondary">
                  <i className="fa-solid fa-plus"></i>
                </span>
              </button>
              <button
                type="button"
                className="btn text-green btn-text me-3 mt-2"
              >
                See more
              </button>
            </div>
          </div>
          <div className="action d-flex justify-content-end align-items-end">
            <button
              onClick={scopeStepBackBtn}
              className="btn outlined-button rounded-pill me-4"
            >
              Back
            </button>
            <button
              onClick={ScopeStepNextBtn}
              className="btn btn-green rounded-pill"
            >
              Next: Scope
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsStep;
