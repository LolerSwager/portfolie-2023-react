import { styled } from "styled-components"
import { FaGithubSquare, FaLinkedin, FaDiscord, FaPhone, FaEnvelope } from "react-icons/fa"
import ContactForm from "../ContactForm"
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <StyledFooter>
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
                        <Link to="kurser">Kurser</Link>
                    </li>
                    <li>
                        <Link to="cv">Curriculum Vitae</Link>
                    </li>
                </ul>
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
    /*  display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap; */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    position: relative;
    &::before {
        content: "";
        height: 2px;
        width: 100%;
        position: absolute;
        bottom: 100%;
        right: 1;
        background: linear-gradient(90deg, #8400db 0%, #000000 100%);
        transition: 0.2s, background-position 0s;
    }
    section {
        padding: 1.5rem;
        margin: 0.5rem;

        h4 {
            font-size: 1.3rem;
            margin: 0 0 0.8em 0;
        }
        section {
            padding-left: 0;
            padding-right: 0;
        }
    }
    .Social-icons {
        font-size: 2.5rem;
        & *:hover {
            fill: #8400db;
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
                color: #8400db;
            }
        }
    }
    .Navigation {
        li {
            margin: 0.5rem 1.5rem;
            a {
                color: #eeeeee;
                text-decoration: none;
                &:hover {
                    color: #8400db;
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
                    color: #8400db;
                }
            }
        }
    }
`
