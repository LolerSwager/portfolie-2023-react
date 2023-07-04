import { styled } from "styled-components"
import { FaGithubSquare, FaLinkedin } from "react-icons/fa"

export default function Home() {
    const StyledHome = styled.main`
        margin: auto;
        h1 {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 4rem;
        }
        article {
            section {
                span {
                    display: flex;
                    align-items: center;
                    font-size: 1.5rem;
                    h2 {
                        font-size: 1rem;
                    }
                }
            }
        }
    `

    return (
        <StyledHome>
            <h1>Hej med dig</h1>
            <h2>Tjek min Github</h2>
            <article>
                <a href="https://github.com/LolerSwager" target="_blank" rel="noreferrer">
                    <section>
                        <img
                            src="https://cdn.jsdelivr.net/gh/Justlovesmile/CDN/image/1584110986-u29974937523374358523fm26gp0.jpg"
                            alt="cover img af github"
                        />
                        <span>
                            <FaGithubSquare />
                            <h3>Github</h3>
                        </span>
                    </section>
                </a>
            </article>
        </StyledHome>
    )
}
