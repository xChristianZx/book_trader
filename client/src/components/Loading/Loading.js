import React from "react";

const Loading = () => {
  return (
    <div className="row">
      <div className="progress">
        <div className="indeterminate" style={{ width: "50%" }} />
      </div>
    </div>
  );
};

export default Loading;
