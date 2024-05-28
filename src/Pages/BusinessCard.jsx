import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function BusinessCard() {
    document.title = "Jannick Nielsen | Business Card";
    const profileImage = "https://lh3.googleusercontent.com/pw/AP1GczOuZ3boWGWxlyiAxqT2HJE1fC-HbbDORRoM7YUUtRyKonRTkHjdmZZpBwNsn_KwqewIZtULQZXhenbzlOy7UkyU1hV9jh3SralFSsoJ6RhQ2CyvLlA=w2400";
    return (
        <StyledHome>
            <section>
                <div className="profile">
                    <img src={profileImage} alt="Image of Jannick Nielsen" />
                    <h2>Jannick VanderHoef Trolle Nielsen</h2>
                    <div className="Media">
                        <a href="https://www.linkedin.com/in/jannick-nielsen-web/" title="Kontakt mig på Linkedin">
                            <FontAwesomeIcon icon="fa-brands fa-linkedin-in" className="faicon" />
                        </a>
                        <a href="https://github.com/LolerSwager" title="Tjæk min Github">
                            <FontAwesomeIcon icon="fa-brands fa-github" className="faicon" />
                        </a>
                        <p onClick={() => (window.location = "mailto:JannickTrolleNielsen@hotmail.com")} title="Kontakt mig på E-mail">
                            <FontAwesomeIcon icon="fa-solid fa-envelope" className="faicon" />
                        </p>
                        <FontAwesomeIcon icon="fa-solid fa-link" className="faicon" title="Del mit portfolie" />
                    </div>
                </div>
                <div className="about">
                    <h3>About</h3>
                    <p>
                        Jeg er uddannet som <b>WebUdvikler</b> på TechCollege Aalborg og har gennem flere år haft erfaring med blant andet Javascript, Html, Css, React, Node.js, GitHub, Figma, Adobe
                        XD, UI / UX, REST API, scrum.
                    </p>
                    <p>Jeg er pt søgene efter et arbejde indefor udwikling af Hjemmesider samt app's. hvis du står og mangler en som mig eller kender en så tjæk og del gerne min side :D</p>
                </div>
                <div className="LinkList">
                    <h3>Links</h3>
                    <ul>
                        <li>
                            <a href="https://vanderhoef.dk">
                                <FontAwesomeIcon icon="fa-solid fa-person-digging" />
                                vanderhoef.dk
                            </a>
                        </li>
                        <li>
                            <a href="https://jannick.ninja">
                                <FontAwesomeIcon icon="fa-solid fa-user-ninja" />
                                Jannick.ninja
                            </a>
                        </li>
                        <li>
                            <p onClick={() => (window.location = "mailto:JannickTrolleNielsen@hotmail.com")} title="Kontakt mig på E-mail">
                                <FontAwesomeIcon icon="fa-solid fa-envelope" className="faicon" />
                                Jannicktrollenielsen@hotmail.com
                            </p>
                        </li>
                        <li>
                            <p onClick={() => window.open("tel:+4520665586")} title="Ring til mig :D">
                                <FontAwesomeIcon icon="fa-solid fa-phone" />
                                +45 20 66 55 86
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
        </StyledHome>
    );
}

const StyledHome = styled.main`
    margin: auto;
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        max-width: 500px;
        padding: 1rem;
        // background-color: var(--wrapperColor);
    }
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
        }
        &:hover {
            b,
            span {
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
