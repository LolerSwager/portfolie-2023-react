import { styled } from "styled-components"
import { FaGithubSquare, FaLinkedin, FaDiscord, FaPhone, FaEnvelope } from "react-icons/fa"
import { Link } from "react-router-dom"
import ContactForm from "../ContactForm"
import Weather from "../Weather/Weather"

export default function Footer() {
    return (
        <StyledFooter>
            <section>
                <section>
                    <h4>Weather</h4>
                    <Weather />
                </section>
                <section>
                    <h4>Sosiale Medier</h4>
                    <div className="Social-icons">
                        <a href="https://github.com/LolerSwager" target="_blank" rel="noreferrer" title="Github">
                            <FaGithubSquare />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jannick-nielsen-web/"
                            target="_blank"
                            rel="noreferrer"
                            title="Linkedin"
                        >
                            <FaLinkedin />
                        </a>
                        <a href="https://discord.gg/uaCRvZU" target="_blank" rel="noreferrer" title="Discord">
                            <FaDiscord />
                        </a>
                    </div>
                </section>
            </section>
            <section>
                <section>
                    <h4>Navigation</h4>
                    <ul className="Navigation">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="projects">projects</Link>
                        </li>
                        <li>
                            <Link to="cv">Curriculum Vitae</Link>
                        </li>
                        <li>
                            <Link to="settings">Settings</Link>
                        </li>
                    </ul>
                </section>
                <section>
                    <h4>Andre Sider</h4>
                    <div className="Outgoing-links">
                        <a
                            href="https://www.lolerswager.com/"
                            target="_blank"
                            rel="noreferrer"
                            title="en hjemmeside til game tools"
                            >
                            LolerSwager.com
                        </a>
                    </div>
                </section>
            </section>
            <section>
                <h4>Kontakt Oplysninger</h4>
                <ul className="Contact-info">
                    <li>
                        <FaEnvelope />
                        <p
                            onClick={() => (window.location = "mailto:JannickTrolleNielsen@hotmail.com")}
                            title="Skriv mig en mail"
                        >
                            JannickTrolleNielsen@hotmail.com
                        </p>
                    </li>
                    <li onClick={() => window.open("tel:+4520665586")} title="Ring til mig :D">
                        <FaPhone />
                        <p>+45 20 66 55 86</p>
                    </li>
                </ul>
            </section>
            <section>
                <h4>Kontakt Mig</h4>
                <ContactForm />
            </section>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background-color: #000000;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    position: relative;
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
        margin: .5rem;
        // background-color: red;
        h4 {
            font-size: 1.3rem;
            margin: 0 0 0.8em 0;
        }
        section {
            margin:0;
            padding:0;
            &:first-child{
                margin: 0 0 2rem 0;
            }
        }
    }
    .Social-icons {
        font-size: 2.5rem;
        & *:hover {
            fill: var(--activeColor);
        }
        a {
            margin: 0 0.4rem;
        }
    }
    .Outgoing-links {
        a {
            text-decoration: none;
            margin: 0 0.5rem 0 0;
            &:hover {
                color: var(--activeColor);
            }
        }
    }
    .Navigation {
        li {
            margin: 0.5rem 1.5rem;
            list-style: none;
            a {
                color: #eeeeee;
                text-decoration: none;
                &:hover {
                    color: var(--activeColor);
                }
            }
        }
    }
    .Contact-info {
        li {
            display: flex;
            gap: 1rem;
            margin: 1rem 0;
            p {
                cursor: pointer;
                &:hover {
                    color: var(--activeColor);
                }
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
`
