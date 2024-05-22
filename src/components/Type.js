import React from "react";
import Typewriter from "typewriter-effect";

import "./type.css"

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "C/C++ Programming",
          "Numerical Computation",
          "Python & Numpy",
          "Backend Web Development",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
