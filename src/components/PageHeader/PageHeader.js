/*!

=========================================================
* BLK Design System React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import Type from "../Type"
import homeLogo2 from "../../assets/img/test_me_pic.png"
import "bootstrap/dist/css/bootstrap.css"

// reactstrap components
import { Container, Row, Col } from "react-bootstrap";

export default function PageHeader() {
  return (
    <div className="page-header header-filter section-scrollable" id="section-home">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container fluid className="mt-5">
        <Row ><span style={{height: 200}}></span></Row>
        <Row className="justify-content-center">
          <Col md={8} className="header-text">
          <h1 className="h1-seo text-center">Vincent • Barfield</h1>
          <h3 className="text-center">
            Sofware Engineering and Data Science
          </h3>

          <div className="type text-center">
                <Type />
          </div>
        </Col>
        <Col md={4} className="header-image">
{/*               <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              /> */}
            </Col>
        </Row>
      </Container>
    </div>
  );
}
