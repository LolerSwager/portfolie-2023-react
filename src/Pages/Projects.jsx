import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faShare, faUpLong, faDownLong } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";

export default function Projects() {
    return (
        <StyledProjects>
            <h1>Projects</h1>
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
