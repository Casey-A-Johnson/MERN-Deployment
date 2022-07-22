import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProjectForm from "../components/ProjectForm";

const Create = () => {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const createProject = (project) => {
    axios
      .post(`http://localhost:8000/project/new`, project)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data.errors);
        setErrors(err.response.data.errors);
      });
  };
  return (
    <div>
      <p>
        <Link className="btn btn-outline-success" to="/">
          Back to Dashboard
        </Link>
      </p>
      <ProjectForm
        onSubmitProp={createProject}
        initialInputs={{ project: "", date: "" }}
        errors={errors}
      />
    </div>
  );
};
export default Create;
