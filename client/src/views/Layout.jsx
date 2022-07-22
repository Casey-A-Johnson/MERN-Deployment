import React from "react";

const Layout = (props) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <h1>Project Manager</h1>
      </div>
      {props.children}
    </div>
  );
};

export default Layout;
