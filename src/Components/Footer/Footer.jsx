import { styled } from "styled-components"
import { FaGithubSquare, FaLinkedin, FaDiscord, FaPhone, FaEnvelope } from "react-icons/fa"
import { IconContext } from "react-icons"

export default function Footer() {
    return (
        <StyledFooter>
            <IconContext.Provider value={{ className: "react-icons" }}>
                <section>
                    <a href="https://github.com/LolerSwager" target="_blank" rel="noreferrer">
                        <FaLinkedin /> <p>Github</p>
                    </a>
                    <a href="https://www.linkedin.com/in/jannick-nielsen-web/" target="_blank" rel="noreferrer">
                        <FaGithubSquare /> <p>Linkedin</p>
                    </a>
                    <a href="https://discord.gg/uaCRvZU" target="_blank" rel="noreferrer">
                        <FaDiscord /> <p>Discord</p>
                    </a>
                </section>
                <section>
                    <h4>Kontakt Oplysninger</h4>
                    <ul>
                        <li>
                            <FaEnvelope />
                            <p>JannickTrolleNielsen@hotmail.com</p>
                        </li>
                        <li>
                            <FaPhone />
                            <p>+45 20 66 55 86</p>
                        </li>
                    </ul>
                </section>
                <section>
                    <input type="text" placeholder="Dit Navn" />
                    <textarea placeholder="skriv her..."></textarea>
                    <button>Send</button>
                </section>
            </IconContext.Provider>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background-color: #000000;
    display: flex;
    justify-content: space-evenly;
    padding: 1rem;
    section {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        a {
            margin: 1rem;
            color: #eeeeee;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            &:hover {
                color: #8400db;
            }
        }
        ul {
            li {
                display: flex;
                align-items: center;
                gap: 1rem;
                margin: 1rem;
            }
        }
    }
    .react-icons {
        font-size: 2rem;
    }
`
