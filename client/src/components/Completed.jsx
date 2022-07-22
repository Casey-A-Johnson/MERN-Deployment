import React, { useState, useEffect } from "react";
import axios from "axios";

const Completed = (props) => {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/project/all")
      .then((res) => setProjectList(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (projectId) => {
    axios
      .delete(`http://localhost:8000/api/project/delete/${projectId}`)
      .then((res) => props.updateList(projectId))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h4>Completed</h4>
      <hr></hr>
      {props.projectList
        .filter((projectList) => projectList.log == "completed")
        .map((project, i) => {
          return (
            <div key={i}>
              <h5>{project.project}</h5>
              <p>{project.date}</p>
              <button
                className="btn btn-outline-danger"
                onClick={() => handleDelete(project._id)}
              >
                Remove Project
              </button>
              <hr></hr>
            </div>
          );
        })}
    </div>
  );
};

export default Completed;
