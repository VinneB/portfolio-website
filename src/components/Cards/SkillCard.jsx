import React from "react";

import { Col, Progress } from "reactstrap";

class SkillCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { detailActive: false };
        this.skill = props.skill
    }
  
    handleDetail = () => {
        this.setState({ detailActive: !(this.state.detailActive) });
    }
  
    render() {
        const IconComponent = this.skill.icon
        return (
            <Col onClick={this.handleDetail} xs={4} md={2} className="tech-icons">
                <IconComponent className={"inner-tech-image " + (this.state.detailActive ? "active" : "")} />
                <div className={"inner-tech-text " + (!this.state.detailActive ? "active" : "")}>
                    <p className="no-selection">{this.skill.name}</p>
                    <div className="progress-container skill-progress-container">
                    <Progress max="100" value={this.skill.percent} >
                        <span className="progress-value no-selection">{this.skill.percent}</span>
                    </Progress>
                    </div>
                </div>
            </Col>
        );
    }
}
  
  export default SkillCard;