import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BackLog from "../components/BackLog";
import InProgress from "../components/InProgress";
import Completed from "../components/Completed";

const Main = () => {
  const [projectList, setProjectList] = useState([]);
  const [refresh, setRefresh] = useState(true);

  const refreshList = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/project/all")
      .then((res) => setProjectList(res.data))
      .catch((err) => console.log(err));
  }, [refresh]);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", gap: "50px" }}>
        <BackLog projectList={projectList} updateList={refreshList} />
        <InProgress projectList={projectList} updateList={refreshList} />
        <Completed projectList={projectList} updateList={refreshList} />
      </div>
      <p style={{ marginTop: "20px" }}>
        <Link className="btn btn-outline-success" to="/project/new">
          Add New Project
        </Link>
      </p>
    </div>
  );
};

export default Main;
