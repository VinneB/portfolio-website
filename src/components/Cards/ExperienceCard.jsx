import React from "react";
import { Col } from "reactstrap";

class ExperienceCard extends React.Component {
    constructor(props) {
        super(props);
        this.experience = props.experience
    }
  
    render() {
        return (
            <Col xs={4} md={2} className="experience-card">
                <img
                src={this.experience.logo}
                style={{
                objectFit: "cover",
                left: 0,
                right: 0,
                top: "7rem",
                marginLeft: "auto",
                marginRight: "auto",
                width: this.experience.logoWidth + "rem",
                height: this.experience.logoHeight + "rem",
                borderRadius: "50%",
                }}
                className="shadow mb-3"
                alt={this.experience.logo}
            />
            <h3>{this.experience.name}</h3>
            <h4>{this.experience.role}</h4>
            <h6>{this.experience.dateStart + " - " + this.experience.dateEnd}</h6>
            <ul>
            {this.experience.bullets.map((item) => {
                return (
                    <li>{item}</li>
                );
            })}
            </ul>
        </Col>
        );
    }
}

export default ExperienceCard;