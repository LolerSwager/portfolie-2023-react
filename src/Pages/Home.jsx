import { styled } from "styled-components";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Main from "../Components/Main";

export default function Home() {
    return (
        <Main PageHeader="Velkommen til mit portfolie" PageTitle="portfolie af Jannick Vanderhoef Trolle Nielsen">
            <StyledHome>
                {/* <h1>Velkommen til mit portfolie</h1> */}
                <h2>Tjek min Github samt min Linkind</h2>
                <article>
                    <a href="https://github.com/LolerSwager" target="_blank" rel="noreferrer">
                        <section>
                            <img src="https://cdn.jsdelivr.net/gh/Justlovesmile/CDN/image/1584110986-u29974937523374358523fm26gp0.jpg" alt="cover img af github" />
                            <span>
                                <FaGithubSquare />
                                <h3>Github</h3>
                            </span>
                        </section>
                    </a>
                    <a href="https://www.linkedin.com/in/jannick-nielsen-web/" target="_blank" rel="noreferrer">
                        <section>
                            <img
                                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdonaldpiccione.com%2Fwp-content%2Fuploads%2F2018%2F12%2FLinkedin-network.jpg&f=1&nofb=1&ipt=a5f4039b2640a0ae1c2dda5072cb2cf6db1aa91aa4d50d07848d2064f4f14548&ipo=images"
                                alt="cover img af github"
                            />
                            <span>
                                <FaLinkedin />
                                <h3>Linkind</h3>
                            </span>
                        </section>
                    </a>
                </article>
            </StyledHome>
        </Main>
    );
}

const StyledHome = styled.section`
    margin: auto;
    h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 4rem;
    }
    h2 {
        text-align: center;
        margin: 2rem;
    }
    article {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
        margin: 2rem;
        a {
            text-decoration: none;
            section {
                max-width: 400px;
                img {
                    width: 100%;
                    aspect-ratio: 5/3;
                }
                span {
                    display: flex;
                    gap: 0.5rem;
                    align-items: center;
                    font-size: 1.5rem;
                    margin: 0.3rem 0;
                    h3 {
                        font-size: 1.3rem;
                    }
                }
            }
        }
    }
`;
