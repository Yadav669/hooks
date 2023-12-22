import React, { useState, useEffect } from "react";

const Cleanup = () => {
  const [widthCount, setWidthCount] = useState(window.screen.width);

  const currentScreenWindow = () => {
    setWidthCount(() => window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", currentScreenWindow);
    return () => {
      window.removeEventListener("resize", currentScreenWindow);
    };
  });
  return (
    <div
      className="container"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>
        The size of window screen is <span> {widthCount} </span>
      </h1>
    </div>
  );
};

export default Cleanup;
