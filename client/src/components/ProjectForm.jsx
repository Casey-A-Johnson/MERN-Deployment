import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const ProjectForm = (props) => {
  const { initialInputs, onSubmitProp, errors } = props;
  const [inputs, setInputs] = useState(initialInputs);

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitProp(inputs);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Project</label>
          <input
            className="form-control"
            type="text"
            name="project"
            onChange={handleChange}
            value={inputs.project}
          />
          {errors.hasOwnProperty("project") && (
            <p style={{ color: "red", fontWeight: "bold" }}>
              {errors.project.message}
            </p>
          )}
        </div>
        <div className="mb-3">
          <label>Date</label>
          <input
            className="form-control"
            type="date"
            name="date"
            onChange={handleChange}
            value={inputs.date}
          />
          {errors.hasOwnProperty("date") && (
            <p style={{ color: "red", fontWeight: "bold" }}>
              {errors.date.message}
            </p>
          )}
        </div>
        <div
          style={{
            marginTop: "15px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button className="btn btn-outline-success" type="submit">
            Plan Project
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
