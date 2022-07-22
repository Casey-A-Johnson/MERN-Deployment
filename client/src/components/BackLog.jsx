import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

const BackLog = (props) => {
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
        log: "inProgress",
      })
      .then((res) => {
        props.updateList();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h4>BackLog</h4>
      <hr></hr>
      {props.projectList
        .filter((projectList) => projectList.log == "backlog")
        .map((project, i) => {
          return (
            <div key={i}>
              <h5>{project.project}</h5>
              <p>{project.date}</p>
              <button
                className="btn btn-outline-warning"
                onClick={(e) => updateProject(e, project)}
              >
                Start Project
              </button>
              <hr></hr>
            </div>
          );
        })}
    </div>
  );
};

export default BackLog;
