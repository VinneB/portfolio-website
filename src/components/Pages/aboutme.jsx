import React from "react";
import classnames from "classnames";
import { Container, Row, Col } from "react-bootstrap";
import portrait from "../../assets/img/circle_portrait.png";
import TextData from "TextData";

// import "./AboutMe.scss";

export default function AboutMe () {

    return (
        <div
        className="section section-aboutme section-scrollable"
        data-background-color="black"
        id="section-aboutme"
      >
            <Container>
                <h2 className="title purple-text">Introduction</h2>
                <Row>
                    <Col md={8}>
                        <div>
                            {TextData.aboutme}
                        </div>
                    </Col>
                    <Col>
                    <div className="center-content">
                       <img
                        src={portrait}
                        alt="home pic"
                        className="img-fluid"
                        style={{ maxHeight: "450px" }}
                        />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}