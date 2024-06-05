import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faShare, faUpLong, faDownLong } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import Main from "../Components/Main";
import VScreenshot from "../Assets/vanderhoef_screnshot.png";

export default function Projects() {
    return (
        <Main PageHeader="Projektor" PageTitle="Projektor af Jannick Vanderhoef Trolle Nielsen">
            <StyledProjects>
                <section className="projekt-header">
                    <h2>Vanderhoef.dk</h2>
                </section>
                <section className="projekt-left">
                    <img src={VScreenshot} alt="et skærmbilled af vanderhoef.dk start skærm i det man kommer ind på siden" />
                    <div className="skill-tags">
                        <h3>Tags</h3>
                        <ul>
                            <li>CSS</li>
                            <li>HTML</li>
                            <li>Javascript</li>
                            <li>React.js</li>
                            <li>Styled-components</li>
                        </ul>
                    </div>
                </section>
                <section className="projekt-text">
                    <h3>Om projektet </h3>
                    <p>Velkommen til Annemarie Vanderhoefs islanske fårehundeunivers!</p>
                    <p>
                        Min mor, Annemarie Vanderhoef, er ikke bare en hundeejer - hun er en passioneret fortaler for den islanske fårehunderace. Denne hjemmeside er hendes hyldest til disse smukke og
                        intelligente væsener og hendes rejse med dem gennem hundeudstillinger og livet derhjemme.
                    </p>
                    <p>
                        Gennem omhyggeligt udvalgte billeder får du et indblik i vores liv med vores fire elskede islanske fårehunde. Fra hyggelige øjeblikke derhjemme til de spændende øjeblikke på
                        udstillingerne, kan du følge vores rejse gennoem årene. Vi deler stoltheden ved de præmier, vores hunde har vundet, og vi giver dig et indblik i deres stamtavler og den
                        spændende historie bag racen.
                    </p>
                    <p>
                        Uanset om du allerede er en entusiast af islanske fårehunde eller bare nysgerrig efter at lære mere, håber vi, at denne hjemmeside vil inspirere og informere dig. Så tag et kig
                        rundt, lad dig fordybe i skønheden og charmen ved disse fantastiske dyr, og måske vil du også blive bidt af islanske fårehunde-feberen!
                    </p>
                </section>
                <section className="projekt-link">
                    <h3>Link til Hjemmesiden</h3>
                    <a href="https://vanderhoef.dk" target="_blank">
                        Vanderhoef.dk
                    </a>
                </section>
            </StyledProjects>
        </Main>
    );
}

const StyledProjects = styled.article`
    display: grid;
    grid-template-areas:
        "projekt-header projekt-header"
        "projekt-left  projekt-text"
        "projekt-link projekt-text";
    margin: 1rem;
    gap: 1rem;
    @media only screen and (max-width: 800px) {
        grid-template-areas:
            "projekt-header"
            "projekt-left"
            "projekt-text"
            "projekt-link";
    }
    img {
        width: 100%;
    }
    .projekt-header {
        grid-area: projekt-header;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .projekt-left {
        grid-area: projekt-left;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        h3 {
            margin: 0 0 0.5rem 0;
        }
        ul {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            list-style: none;
            li {
                padding: 0.4rem 0.5rem;
                background-color: var(--wrapperColor);
                // bborder-radius: var(--borderRadius);
                cursor: pointer;
                &:hover {
                    color: var(--activeColor);
                }
            }
        }
    }
    .projekt-text {
        grid-area: projekt-text;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .projekt-link {
        grid-area: projekt-link;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        a {
            width: max-content;
            background-color: var(--activeColor);
            color: #1a1a1a;
            border: 1px solid transparent;
            border-radius: calc(var(--borderRadius) / 2);
            transition: border-color 0.25s;
            padding: 0.6em 1em;
            font-size: 1em;
            font-weight: 700;
            text-decoration: none;
            cursor: pointer;
            &:hover {
                border-color: var(--activeColor);
                background-color: #1a1a1a;
                color: var(--activeColor);
            }
            &:disabled {
                background-color: #1a1a1a;
                color: #6a6a6a;
                &:hover {
                    border-color: #1a1a1a;
                    background-color: #1a1a1a;
                    color: #6a6a6a;
                    cursor: default;
                }
            }
        }
    }
`;
