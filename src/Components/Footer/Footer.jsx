import { styled } from "styled-components"
import { FaGithubSquare, FaLinkedin, FaDiscord, FaPhone, FaEnvelope } from "react-icons/fa"
import { IconContext } from "react-icons"
import ContactForm from "../ContactForm"

export default function Footer() {
    return (
        <StyledFooter>
            <IconContext.Provider value={{ className: "react-icons" }}>
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
                        <a href="https://www.lolerswager.com/" target="_blank" rel="noreferrer">
                            LolerSwager.com
                        </a>
                    </div>
                </section>
                <section>
                    <h4>Kontakt Oplysninger</h4>
                    <ul className="Contact-info">
                        <li>
                            <FaEnvelope />
                            <p onClick={() => (window.location = "mailto:JannickTrolleNielsen@hotmail.com")}>
                                JannickTrolleNielsen@hotmail.com
                            </p>
                        </li>
                        <li onClick={() => window.open("tel:20665586")}>
                            <FaPhone />
                            <p>+45 20 66 55 86</p>
                        </li>
                    </ul>
                </section>
                <section>
                    <ContactForm />
                </section>
            </IconContext.Provider>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background-color: #000000;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 1rem;
    section {
        margin: 1rem;
        h4 {
            font-size: 1.3rem;
            margin: 0 0 1em 0;
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
