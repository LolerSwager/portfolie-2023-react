import { styled } from "styled-components";
import { useGetList } from "../Hooks/useGetList";

export default function Projects() {
    const { state: GithubData } = useGetList("https://api.github.com/users/lolerswager/repos");

    function LanguagesList({ languagesUrl }) {
        const { state: Languages } = useGetList(languagesUrl);

        const languages = Object.keys(Languages);

        return (
            <LanTags>
                {window.document.body.scrollWidth > 600
                    ? languages.map((language, index) => <li key={index}>{language}</li>)
                    : languages.slice(0, 3).map((language, index) => <li key={index}>{language}</li>)}
            </LanTags>
        );
    }

    return (
        <StyledMain>
            <h1>Projects</h1>
            <StyledArticle>
                <h2>Liste over Github</h2>
                <small>min github skal lige rydes op og dukumenters</small>
                {GithubData?.map((item) => (
                    <section key={item.id}>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <LanguagesList languagesUrl={item.languages_url} />
                        <span>
                            <small>{item.updated_at}</small>
                            <a href={item.html_url} target="_blank" rel="noreferrer">
                                Go to GitHub
                            </a>
                        </span>
                    </section>
                ))}
            </StyledArticle>
        </StyledMain>
    );
}

const StyledMain = styled.main`
    margin: 2rem;
`;

const StyledArticle = styled.article`
    section {
        background-color: var(--wrapperColor);
        padding: 1rem 1rem 1rem 3.5rem;
        margin: 2rem 0;
        display: grid;
        border: 1px solid var(--wrapperColor);
        position: relative;
        &:hover {
            transition: all 0.5s ease;
            &::before {
                background-color: var(--activeColor);
            }
            border-bottom: 1px solid var(--activeColor);
        }
        span {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        a {
            &:hover {
                color: var(--activeColor);
            }
        }
        &::before {
            content: "";
            width: 40px;
            height: 40px;
            background-color: var(--backGroundColor);
            border: 2px solid var(--backGroundColor);
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 10px;
            transform: translate(0, -50%);
            z-index: 3;
        }
        &:not(:last-child) {
            &::after {
                content: "";
                width: 10px;
                height: 120%;
                background-color: var(--backGroundColor);
                position: absolute;
                top: 60%;
                left: 27px;
                z-index: 2;
            }
        }
    }
`;

const LanTags = styled.ul`
    display: flex;
    gap: 1rem;
    padding: 1rem 0 1rem 1rem;
    list-style: none;
    li {
        font-weight: 700;
        cursor: pointer;
        transition: all 0.2s ease;
        &:hover {
            color: var(--activeColor);
        }
    }
`;
