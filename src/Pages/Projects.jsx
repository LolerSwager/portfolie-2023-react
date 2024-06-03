import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faShare, faUpLong, faDownLong } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";

export default function Projects() {
    return (
        <StyledProjects>
            <h1>Projects</h1>
            <section>
                <img src="" alt="et skærmbilled af vanderhoef.dk start skærm i det man kommer ind på siden" />
                <div>
                    <h2>Vanderhoef.dk</h2>
                    <p>En side der handler om islanske fårhunde </p>
                    <div>
                        <h3>Skills used</h3>
                        <ul>
                            <li>Css</li>
                            <li>Html</li>
                            <li>Javascript</li>
                            <li>React.js</li>
                            <li>Styled-components</li>
                        </ul>
                    </div>
                </div>
            </section>
        </StyledProjects>
    );
}

const StyledProjects = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #1a1a1a;
`;
