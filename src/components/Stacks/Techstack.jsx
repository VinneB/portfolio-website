import React from "react";
import { Col, Row } from "react-bootstrap";
import SkillCard from "../Cards/SkillCard"
/*
Skills:
C, C++, Python, Java, Nodejs, Matlab, Julia, nginx, numpy, AWS, git, linux, mathematica
*/

function Techstack( {skills} ) {

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {
        skills.map((skill) => {
          return (
            <SkillCard skill={skill}/>
          )
        })
      }




{/*       {skillState.map((item, index) => {
          const TagName = item.skill.icon;
          return (
            <Col onClick={item.handler} xs={4} md={2} className="tech-icons">
            <TagName className={"inner-tech-image " + (item.state ? "" : "active")}/>
              <div className={"inner-tech-text " + (!item.state ? "": "active")}>
                <h1>{item.name}</h1>
                <div className="progress-container skill-progress-container">
                  <Progress max="100" value={item.percent} >
                    <span className="progress-value">{item.percent}</span>
                  </Progress>
                </div>
              </div>
          </Col>
          );
        })} */}


      {/* <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWolframmathematica />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArchlinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNginx />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>    */}
    </Row>
  );
}

export default Techstack;
