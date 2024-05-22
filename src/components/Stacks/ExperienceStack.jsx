import React from "react";
import { Col, Row } from "react-bootstrap";
import ExperienceCard from "../Cards/ExperienceCard";
/*
Skills:
C, C++, Python, Java, Nodejs, Matlab, Julia, nginx, numpy, AWS, git, linux, mathematica
*/

function ExperienceStack( {experiences} ) {

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {
        experiences.map((experience) => {
          return (
            <ExperienceCard experience={experience}/>
          )
        })
      }
    </Row>
  );
}

export default ExperienceStack;
