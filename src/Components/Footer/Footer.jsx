import { styled } from "styled-components"
import { FaGithubSquare, FaLinkedin, FaDiscord } from "react-icons/fa"
import { IconContext } from "react-icons"

export default function Footer() {
    return (
        <StyledFooter>
            <section>
                <IconContext.Provider value={{ className: "react-icons" }}>
                    <a href="https://github.com/LolerSwager" target="_blank" rel="noreferrer">
                        <FaLinkedin /> <p>Github</p>
                    </a>
                    <a href="https://www.linkedin.com/in/jannick-nielsen-web/" target="_blank" rel="noreferrer">
                        <FaGithubSquare /> <p>Linkedin</p>
                    </a>
                    <a href="https://discord.gg/uaCRvZU" target="_blank" rel="noreferrer">
                        <FaDiscord /> <p>Discord</p>
                    </a>
                </IconContext.Provider>
            </section>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background-color: #000000;
    section {
        display: flex;
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
    }
    .react-icons {
        font-size: 2rem;
    }
`
