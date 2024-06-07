import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Main from "../Components/Main";
import VScreenshot from "../Assets/image/vanderhoef_screnshot.webp";
import { Link } from "react-router-dom";

export default function Projects() {
    return (
        <Main PageHeader="Projektor" PageTitle="Projektor af Jannick Vanderhoef Trolle Nielsen">
            <StyledProjects>
                <section className="projekt-header">
                    <h2>Vanderhoef.dk</h2>
                </section>
                <section className="projekt-left">
                    <img src={VScreenshot} alt="et skærmbilled af vanderhoef.dk start skærm i det man kommer ind på siden" loading="lazy" />
                </section>
                <section className="projekt-text">
                    <h3>Om projektet </h3>
                    <p>Velkommen til Annemarie Vanderhoefs islanske fårehundeunivers!</p>
                    <p>
                        Min mor, Annemarie Vanderhoef, er ikke bare en hundeejer - hun er en passioneret fortaler for den islanske fårehunderace. Denne hjemmeside er hendes hyldest til disse smukke og
                        intelligente væsener og hendes rejse med dem gennem hundeudstillinger og livet derhjemme.
                    </p>
                </section>
                <section className="projekt-link">
                    <div>
                        <Link to="Vanderhoef">Check Project</Link>
                    </div>
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
        "projekt-left  projekt-link";
    grid-template-columns: repeat(2, 1fr);
    margin: 1rem;
    gap: 2.5rem;
    @media only screen and (max-width: 800px) {
        grid-template-areas:
            "projekt-header"
            "projekt-left"
            "projekt-text"
            "projekt-link";
        grid-template-columns: 1fr;
    }
    img {
        width: 100%;
    }
    .projekt-header {
        grid-area: projekt-header;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem 0 2.5rem 0;
        font-size: 1.3rem;
        h2 {
            position: relative;
            width: max-content;
            &::before {
                position: absolute;
                content: "";
                background-color: var(--activeColor);
                height: 2px;
                width: 100%;
                bottom: 0;
                left: 0%;
            }
        }
    }
    .projekt-left {
        grid-area: projekt-left;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        h3 {
            margin: 0 0 0.5rem 0;
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
        div {
            display: flex;
            align-items: center;
            gap: 1rem;
            a {
                display: flex;
                align-items: center;
                gap: 0.7rem;
                width: max-content;
                background-color: var(--activeColor);
                color: #1a1a1a;
                border: 1px solid transparent;
                border-radius: calc(var(--borderRadius) / 2);
                transition: border-color 0.25s;
                padding: 0.6em 1em;
                font-size: 1em;
                font-weight: 800;
                text-decoration: none;
                cursor: pointer;
                * {
                    fill: black;
                }
                & * :hover {
                    fill: var(--activeColor);
                }
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
                .reversed {
                    background-color: #1a1a1a;
                    color: var(--activeColor);
                    border-color: var(--activeColor);
                    &:hover {
                        background-color: var(--activeColor);
                        color: #1a1a1a;
                    }
                }
            }
        }
    }
`;
