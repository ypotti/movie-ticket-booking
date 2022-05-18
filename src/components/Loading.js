import React from "react";
import { Rings } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="Loading">
      <div className="d-flex flex-column text-center">
        <Rings color="#3F599E" className="Loading__icon" />
        <div className="fw-bold">Loading</div>
      </div>
    </div>
  );
};

export default Loading;
