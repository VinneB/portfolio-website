import React from "react";
import { Col } from "reactstrap";
import ReactMarkdown from "react-markdown"

class RepoCard extends React.Component {
    constructor(props) {
        super(props);
        this.repo = props.repo
    }
  
    render() {
        return (
            <Col xs={4} md={2} className="experience-card">
                <h3>{this.repo.name}</h3>
                <ReactMarkdown>{this.repo.readme}</ReactMarkdown>
            </Col>
        );
    }
}

export default RepoCard;