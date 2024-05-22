import React from "react";
import Techstack from "components/Stacks/Techstack";
import { useState } from "react";
import { Col, Row, Container } from "reactstrap";
import {SkillData, SkillSoftware} from "../../SkillData";

export default function Skills () {
    // Show skills section
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(!open);
    }

    return (
        <div
        className="section section-skill section-scrollable"
        data-background-color="black"
        id="section-skill"
        >
            <div className="center-div">
                <div onClick={handleOpen} className="dropdown-section">
                    <h4 className="no-selection">Technologies and Programming Languages</h4>
                </div>
            </div>
            <div className={"dropdown-section-inner " + (open ? "active" : "")}>
                    <Row className="dropdown-inner-subsection-row">
                        <Col>
                        <div className="center-div">
                        <div className="dropdown-inner-subsection">
                            <h1>Data Science</h1>
                        </div>
                        </div>
                        <p className="dropdown-inner-subsection-p">My computer science and mathemtics background lends itself to data science extremely well.
                            I am proficient in time-series analysis, tensor modeling, basic machine-learning models, and linear-regression.
                        </p>
                        <Techstack skills={SkillData} />
                        </Col>
                        <Col>
                        <div className="center-div">
                        <div className="dropdown-inner-subsection">
                            <h1>Software Development</h1>
                        </div>
                        </div>
                        <p className="dropdown-inner-subsection-p"> Software Development has been a passion of mine from a young age. I've done low-level systems programming, 
                        Java application programming, web development, and robotics software engineering.
                        </p>
                        <Techstack skills={SkillSoftware} />
                        </Col>
                        <Col>
                        <div className="center-div">
                        <div className="dropdown-inner-subsection">
                            <h1>Applied Mathematics</h1>
                        </div>
                        </div>
                        <Row>
                        <p className="dropdown-inner-subsection-p"> Mathematics was not my original passion but instead one I cultivated throughout my education.
                        I view it as a excellent supplementary skill. By understanding mathematics, I am a more capable problem solver and can discover innovative 
                        techniques that exist outside traditional approaches.
                        </p>
                        </Row>
                        <Row>
                        <Col>
                        <ul>
                            <li>Differential Equations and Calculus</li>
                            <ul>
                                <li>Single and Multivariate Calculus</li>
                                <li>Ordinary and Partial Differential Equations</li>
                                <li>Tensor Calculus</li>
                                <li>Complex Number Calculus</li>
                            </ul>
                            <li>Numerical Analysis and Computation</li>
                            <ul>
                                <li>Numerical Partial Differential Equations</li>
                                <li>Numerical Linear Algebra</li>
                            </ul>
                        </ul>

                            </Col>
                            <Col>
                        <ul>
                            <li>Probability and Statistics</li>
                            <ul>
                                <li>Hypothesis Testing</li>
                                <li>Linear Regression</li>
                                <li>Time Series Analysis</li>
                                <li>Sampling</li>
                                <li>Various Distributions</li>
                            </ul>
                            
                        </ul>
                        </Col>
                        </Row>
                        </Col>

                    </Row>
            </div>
        </div>



    );
}