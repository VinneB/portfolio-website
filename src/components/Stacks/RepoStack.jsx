import React from "react";
import { Col, Row } from "react-bootstrap";
import RepoCard from "components/Cards/RepoCard";

function RepoStack( {repos} ) {

    return (
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {
          repos.map((repo) => {
            return (
              <RepoCard repo={repo}/>
            )
          })
        }
      </Row>
    );
  }
  
  export default RepoStack;
  