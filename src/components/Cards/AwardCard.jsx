import React from "react";
import { Card, CardBody, Badge } from "reactstrap";


const EducationCard = ({ awardName, subHeader, desc, descBullets }) => {
  return (
    <Card className="shadow-lg--hover shadow mt-4 education-card">
      <CardBody>
        <div >
          <div className="award-card">
            <h5>{awardName}</h5>
            <div className="vertical-space"></div>
            <h6>{subHeader}</h6>
            <p className="description mt-3">{desc}</p>
            <ul>
              {descBullets
                ? descBullets.map(desc => {
                    return <li key={desc}>{desc}</li>;
                  })
                : null}
            </ul>
          </div>
        </div>
      </CardBody>
    </Card>
    
  );
};

export default EducationCard;
