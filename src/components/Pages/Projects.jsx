import React from "react"
import GithubOptions from "../../github_projects_options"
import RepoCard from "components/Cards/RepoCard";
import RepoStack from "components/Stacks/RepoStack";
import { Row } from "react-bootstrap";
import { useState, useEffect } from "react";


export default function Projects () {

    const username = GithubOptions.username;
    const maxPages = GithubOptions.maxPages;
    const hideForks = GithubOptions.hideForks;
    const authTokenLocation = GithubOptions.authTokenLocation;
    const [repoData, updateRepoData] = useState();


    const getRepos = async (username) => {
        const json = GithubOptions.projects
        for (let i = 0; i < json.length; i++) {
            let readme = await fetch(
                `https://raw.githubusercontent.com/${username}/${json[i].name}/master/README.md`
            );
            readme = await readme.text();
            json[i].readme = readme.split("##")[0];

        }
        updateRepoData(json);
    };

    useEffect(() => {
        getRepos(username);
    }, []);

    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {
                repoData && <RepoStack repos={repoData}/>
            }
        </Row>
  );
}