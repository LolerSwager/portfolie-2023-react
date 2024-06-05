import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Schare from "../Components/Schare";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPersonDigging, faPhone, faShare, faUserNinja } from "@fortawesome/free-solid-svg-icons";
import Main from "../Components/Main";
export default function BusinessCard() {
    const profileImage = "https://lh3.googleusercontent.com/pw/AP1GczOuZ3boWGWxlyiAxqT2HJE1fC-HbbDORRoM7YUUtRyKonRTkHjdmZZpBwNsn_KwqewIZtULQZXhenbzlOy7UkyU1hV9jh3SralFSsoJ6RhQ2CyvLlA=w2400";

    const [sharingState, setSharingState] = useState(false);

    return (
        <Main PageHeader="Visitkort" PageTitle="Visitkort af Jannick Vanderhoef Trolle Nielsen">
            <StyledHome>
                <div className="profile">
                    <img src={profileImage} alt="Image of Jannick Nielsen" />
                    <h2>Jannick VanderHoef Trolle Nielsen</h2>
                    <div className="Media">
                        <a href="https://www.linkedin.com/in/jannick-nielsen-web/" title="Kontakt mig på Linkedin">
                            <FontAwesomeIcon icon={faLinkedin} className="faicon" />
                        </a>
                        <a href="https://github.com/LolerSwager" title="Tjæk min Github">
                            <FontAwesomeIcon icon={faGithub} className="faicon" />
                        </a>
                        <p onClick={() => (window.location = "mailto:JannickTrolleNielsen@hotmail.com ?subject=I have a job for you")} title="Kontakt mig på E-mail">
                            <FontAwesomeIcon icon={faEnvelope} className="faicon" />
                        </p>
                        <p onClick={() => setSharingState((prevState) => !prevState)}>
                            <FontAwesomeIcon icon={faShare} className="faicon" />
                        </p>
                    </div>
                </div>
                <div className="about">
                    <h3>About</h3>
                    <p>
                        Jeg er uddannet som <b>WebUdvikler</b> på TechCollege Aalborg, og har gennem flere år haft erfaring med blant andet; Javascript, Html, Css, React, Node.js, GitHub, Figma, Adobe
                        XD, UX/UI, REST API, scrum.
                    </p>
                    <p>
                        Søger du, eller en du kender en udvikler inden for hjemmesider eller apps. Så er jeg pt klar på nye eventyr og ledig til stillingen. Jeg søger også andre programerings opgaver
                        ud over hjemmesider og frontend.
                    </p>
                    <p>
                        Jeg bor pt i Frederikshavn 9900 med min kærste, men vi er meget klar til at flytte for det rigtige job. <span onClick={() => setSharingState(true)}>Del</span> gerne mit
                        business card
                    </p>
                </div>
                <div className="LinkList">
                    <h3>Links</h3>
                    <ul>
                        <li>
                            <p onClick={() => window.open("tel:+4520665586")} title="Ring til mig :D">
                                <FontAwesomeIcon icon={faPhone} />
                                Ring til mig på: +45 20 66 55 86
                            </p>
                        </li>
                        <li>
                            <a href="https://jannick.ninja/cv">
                                <FontAwesomeIcon icon={faUserNinja} />
                                Jannick Vanderhoef Trolle Nielsen CV
                            </a>
                        </li>
                        <li>
                            <a href="https://vanderhoef.dk">
                                <FontAwesomeIcon icon={faPersonDigging} />
                                Mit nuværende projekt: Vanderhoef.dk
                            </a>
                        </li>
                    </ul>
                </div>
                {sharingState === true ? <Schare url="https://jannick.ninja/businesscard" msg="Tjæk lige ham her ud :O" ssht="business card" setSharingState={setSharingState} /> : <></>}
            </StyledHome>
        </Main>
    );
}

const StyledHome = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-width: 500px;
    padding: 1rem;
    position: relative;
    margin: auto;
    .profile {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        img {
            width: 100%;
            padding: 1.5rem;
            border-radius: 50%;
            object-fit: cover;
            object-position: left top;
        }
        h2 {
            text-align: center;
        }
        &::before {
            content: "";
            height: 2px;
            width: 100%;
            position: absolute;
            top: 100%;
            right: 0;
            background: linear-gradient(90deg, var(--activeColor) 0%, var(--backGroundColor) 100%);
            transition: 0.2s, background-position 0s;
        }
    }
    .about {
        width: 100%;
        p {
            margin: 0 0 1rem 0;
            &:hover {
                span {
                    color: var(--activeColor);
                    cursor: pointer;
                }
            }
        }
        &:hover {
            b {
                color: var(--activeColor);
            }
        }
    }
    .Media {
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 0.2rem;
        cursor: pointer;
        .faicon {
            padding: 0.5rem;
            height: 1.6rem;
            width: 1.6rem;
            &:hover {
                background-color: var(--activeColor);
            }
        }
    }
    .LinkList {
        width: 100%;
        ul {
            list-style: none;
            width: 100%;
            li {
                a,
                p {
                    color: var(--textColor);
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    width: 100%;
                    padding: 0.5rem;
                    margin: 0.5rem 0;
                    border-radius: var(--borderRadius);
                    background-color: var(--wrapperColor);
                    cursor: pointer;
                    &:hover {
                        background-color: var(--activeColor);
                    }
                }
            }
        }
    }
`;
