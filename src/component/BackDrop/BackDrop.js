import React from "react";
import "./BackDrop.css";

const BackDrop = ({ showsidebar, closesidebar }) => {
  return (
    <div
      className={showsidebar ? "show-backdrop backdrop" : "backdrop"}
      onClick={closesidebar}
    ></div>
  );
};

export default BackDrop;
