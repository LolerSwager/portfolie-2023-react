import { styled } from "styled-components";
import Weather from "../Weather/Weather";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faGithubSquare, faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Footer() {
    return (
        <StyledFooter>
            <section>
                <h4>Jannick Vanderhoef Trolle Nielsen</h4>
                <div className="Social-icons">
                    <a href="https://github.com/LolerSwager" target="_blank" rel="noreferrer" title="Github">
                        <FontAwesomeIcon icon={faGithubSquare} />
                    </a>
                    <a href="https://www.linkedin.com/in/jannick-nielsen-web/" target="_blank" rel="noreferrer" title="Linkedin">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://www.twitter.com/lolerswager" target="_blank" rel="noreferrer" title="Twitter">
                        <FontAwesomeIcon icon={faTwitterSquare} />
                    </a>
                    <a href="https://discord.gg/uaCRvZU" target="_blank" rel="noreferrer" title="Discord">
                        <FontAwesomeIcon icon={faDiscord} />
                    </a>
                </div>
            </section>
            <section>
                <h4>Kontakt Oplysninger</h4>
                <ul className="Contact-info">
                    <li onClick={() => (window.location = "mailto:JannickTrolleNielsen@hotmail.com")} title="Skriv mig en mail">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p>JannickTrolleNielsen@hotmail.com</p>
                    </li>
                    <li onClick={() => window.open("tel:+4520665586")} title="Ring til mig">
                        <FontAwesomeIcon icon={faPhone} />
                        <p>+45 20 66 55 86</p>
                    </li>
                </ul>
            </section>
            <section>
                <h4>Weather</h4>
                <Weather />
            </section>
        </StyledFooter>
    );
}

const StyledFooter = styled.footer`
    background-color: #000000;
    display: flex;
    justify-content: space-around;
    position: relative;
    @media only screen and (max-width: 800px) {
        flex-direction: column;
    }
    &::before {
        content: "";
        height: 2px;
        width: 100%;
        position: absolute;
        bottom: 100%;
        right: 0;
        background: linear-gradient(90deg, var(--activeColor) 0%, #000000 100%);
        transition: 0.2s, background-position 0s;
    }
    section {
        padding: 1rem;

        @media only screen and (max-width: 800px) {
            width: 100%;
        }
        //background-color: red;
        h4 {
            font-size: 1.3rem;
        }
    }
    .Social-icons {
        font-size: 2.5rem;
        & *:hover {
            fill: var(--activeColor);
        }
        a {
            margin: 0 0.5rem;
        }
    }
    .Contact-info {
        width: 100%;
        list-style: none;
        li {
            display: flex;
            align-items: center;
            gap: 1rem;
            cursor: pointer;
            & *:hover {
                fill: var(--activeColor);
                color: var(--activeColor);
            }
        }
    }
    .weather {
        padding: 1rem;
        display: inline-flex;
        border: 1px solid #181818;
        align-items: center;
        gap: 1rem;
        &:hover {
            border: 1px solid var(--activeColor);
        }
        h3 {
            font-size: 1.5rem;
        }
    }
`;
