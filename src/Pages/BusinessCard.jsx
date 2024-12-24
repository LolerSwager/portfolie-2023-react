import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Schare from "../Components/Schare";
import { faGithubSquare, faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faShare } from "@fortawesome/free-solid-svg-icons";
import Main from "../Components/Main";
import Button from "../Components/UI/buttons/Button";
/* import Duolingo from "../Components/Duolingo"; */
export default function BusinessCard() {
    const profileImage = "https://lh3.googleusercontent.com/pw/AP1GczOuZ3boWGWxlyiAxqT2HJE1fC-HbbDORRoM7YUUtRyKonRTkHjdmZZpBwNsn_KwqewIZtULQZXhenbzlOy7UkyU1hV9jh3SralFSsoJ6RhQ2CyvLlA=w2400";

    const [sharingState, setSharingState] = useState(false);

    return (
        <Main PageHeader="Visitkort" PageTitle="Visitkort af Jannick Vanderhoef Trolle Nielsen">
            <StyledHome>
                <div className="profile">
                    {/* <Duolingo /> */}
                    <img src={profileImage} alt="Image of Jannick Nielsen" loading="lazy" className="profile_img" />
                    <h2>Jannick Vanderhoef Trolle Nielsen</h2>
                </div>
                <div className="links">
                    <Button
                        ButtonName="Email"
                        ButtonIconLeft={<FontAwesomeIcon icon={faEnvelope} />}
                        isClicked={() => (window.location = "mailto:JannickTrolleNielsen@hotmail.com")}
                        color="var(--fontColor)"
                    />
                    <Button ButtonName="Phone" ButtonIconLeft={<FontAwesomeIcon icon={faPhone} />} isClicked={() => window.open("tel:+4520665586")} color="var(--activeColor)" />
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
                        Visitkort kort
                    </p>
                </div>
                <div className="interests">
                    <h3>Interesser</h3>
                    <p>Illustrator, Innovation, webudvikling, Design, Plante elsker, Music entusiast</p>
                </div>
                <div className="Media">
                    <a href="https://github.com/LolerSwager" title="Github">
                        <FontAwesomeIcon icon={faGithubSquare} className="faicon" />
                    </a>
                    <a href="https://www.linkedin.com/in/jannick-nielsen-web/" title="Linkedin">
                        <FontAwesomeIcon icon={faLinkedin} className="faicon" />
                    </a>
                    <a href="https://www.twitter.com/lolerswager" target="_blank" rel="noreferrer" title="Twitter">
                        <FontAwesomeIcon icon={faTwitterSquare} className="faicon" />
                    </a>
                    <p onClick={() => (window.location = "mailto:JannickTrolleNielsen@hotmail.com")} title="Email">
                        <FontAwesomeIcon icon={faEnvelope} className="faicon" />
                    </p>
                    <p onClick={() => setSharingState((prevState) => !prevState)}>
                        <FontAwesomeIcon icon={faShare} className="faicon" />
                    </p>
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
        .profile_img {
            width: 100%;
            margin: 1.5rem;
            border: 7px solid var(--backGroundColor);
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
    .links {
        display: flex;
        justify-content: space-around;
        margin: auto 1rem;
        gap: 1rem;
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
    .interests {
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
        background-color: #161619;
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 0.2rem;
        cursor: pointer;
        .faicon {
            padding: 0.5rem;
            height: 2.2rem;
            width: 2.2rem;

            &:hover {
                background-color: var(--activeColor);
                * {
                    fill: #1a1a1a;
                }
            }
        }
    }
`;
