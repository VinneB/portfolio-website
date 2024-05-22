import React from "react";
import { Col, Row, Container } from "reactstrap";
import ExperienceStack from "components/Stacks/ExperienceStack";
import ExperienceData from "ExperienceData";

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
                        <ExperienceStack experiences={ExperienceData}/>
                    </Row>
            </div>
        </div>



    );
}