import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import portrait from "../../assets/img/circle_portrait.png";
import TextData from "TextData";
import EducationCard from "../Cards/EducationCard";
import AwardCard from "../Cards/AwardCard";
import useWindowDimensions from "components/Hooks/WindowDimensions";
import { min } from "moment";

export default function Education () {

    return (
        <div
        className="section section-education section-scrollable"
        data-background-color="black"
        id="section-education"
      >
            <Container>
                <h2 className="title section-header">Education</h2>
                <Row>
                    <Col md={8}>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Col md={5}>
                        <EducationCard className="education-card" schoolName={TextData.educationInfo1.schoolName}
                            subHeader={TextData.educationInfo1.subHeader}
                            duration={TextData.educationInfo1.duration}
                            desc={TextData.educationInfo1.desc}
                            grade={TextData.educationInfo1.grade}
                            descBullets={TextData.educationInfo1.descBullets}
                        />
                    </Col>
                    <Col md={5}>
                        <EducationCard className="education-card" schoolName={TextData.educationInfo2.schoolName}
                            subHeader={TextData.educationInfo2.subHeader}
                            duration={TextData.educationInfo2.duration}
                            desc={TextData.educationInfo2.desc}
                            grade={TextData.educationInfo2.grade}
                            descBullets={TextData.educationInfo2.descBullets}
                        />
                    </Col>
                </Row>
                <h2 className="title section-header">Awards and Honors</h2>
                <Row>
                    <Col>
                        <AwardCard awardName={TextData.awards[0].awardName}
                            subHeader={TextData.awards[0].subHeader}
                            desc={TextData.awards[0].desc}
                            descBullets={TextData.awards[0].descBullets}
                        />
                    </Col>
                    <Col>
                        <AwardCard awardName={TextData.awards[1].awardName}
                            subHeader={TextData.awards[1].subHeader}
                            desc={TextData.awards[1].desc}
                            descBullets={TextData.awards[1].descBullets}
                        />
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                        <AwardCard awardName={TextData.awards[2].awardName}
                            subHeader={TextData.awards[2].subHeader}
                            desc={TextData.awards[2].desc}
                            descBullets={TextData.awards[2].descBullets}
                        />
                    </Col>
                    <Col>
                        <AwardCard awardName={TextData.awards[3].awardName}
                            subHeader={TextData.awards[3].subHeader}
                            desc={TextData.awards[3].desc}
                            descBullets={TextData.awards[3].descBullets}
                        />
                    </Col>
                </Row>
                <div style={{height: 30}}></div>
                <Row>
                    <div className={"yt-center " + ((useWindowDimensions().width < 1300) ? "yt-center-left" : "")}>
                        <iframe 
                            width={(useWindowDimensions().width)*.65}
                            height={(useWindowDimensions().width)*.4}
                            src="https://www.youtube.com/embed/3pbLUi_w5Aw?si=nEJEHmchCaUx9Jkj&amp;start=5232"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen></iframe>
                    </div>
                </Row>

            </Container>
        </div>
    )

}