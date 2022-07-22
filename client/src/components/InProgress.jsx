import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const InProgress = (props) => {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/project/all")
      .then((res) => setProjectList(res.data))
      .catch((err) => console.log(err));
  }, []);

  const updateProject = (e, project) => {
    axios
      .put(`http://localhost:8000/project/update/${project._id}`, {
        log: "completed",
      })
      .then((res) => props.updateList(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h4>In Progress</h4>
      <hr></hr>
      {props.projectList
        .filter((projectList) => projectList.log == "inProgress")
        .map((project, i) => {
          return (
            <div key={i}>
              <h5>{project.project}</h5>
              <p>{project.date}</p>
              <button
                onClick={(e) => updateProject(e, project)}
                className="btn btn-outline-success"
              >
                Move to Completed
              </button>
              <hr></hr>
            </div>
          );
        })}
    </div>
  );
};

export default InProgress;
