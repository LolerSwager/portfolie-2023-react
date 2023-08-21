import { styled } from "styled-components"
import Card from "../Components/Card"
import { useGetList } from "../Hooks/useGetList"

export default function Projects() {
    const { state: GithubData } = useGetList("https://api.github.com/users/lolerswager/repos")

    function LanguagesList({ languagesUrl }) {
        const { state: Languages } = useGetList(languagesUrl)

        const languages = Object.keys(Languages)

        return (
            <LanTags>
                {window.document.body.scrollWidth > 100
                    ? languages.map((language, index) => <li key={index}>{language}</li>)
                    : languages.slice(0, 4).map((language, index) => <li key={index}>{language}</li>)}
            </LanTags>
        )
    }

    return (
        <StyledMain>
            <h1>Projects</h1>
            <h2>Liste over Github</h2>
            <small>min github skal lige rydes op og dukumenters</small>
            <StyledArticle>
                {GithubData?.map((item) => (
                    <StyledCard key={item.id}>
                        <Image>
                            <h6>{item.name}</h6>
                        </Image>
                        <Content>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                        </Content>
                        <SpanSpread>
                            <LanguagesList languagesUrl={item.languages_url} />

                            <Abutton href={item.html_url} target="_blank" rel="noreferrer">
                                Open in Github
                            </Abutton>
                        </SpanSpread>
                    </StyledCard>
                ))}
            </StyledArticle>
        </StyledMain>
    )
}

const StyledMain = styled.main`
    h1,
    h2,
    small {
        margin: 0 2rem;
    }
    margin: auto;
    max-width: var(--pageMaxWidth);
`

const StyledArticle = styled.article`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    gap: 2rem;
    margin: 2rem;
`

const StyledCard = styled.section`
    border-radius: var(--borderRadius);
    overflow: hidden;
    background-color: var(--wrapperColor);
    span {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

const Content = styled.div`
    padding: 1rem;
`

const Image = styled.div`
    aspect-ratio: 3 / 1;
    width: 100%;
    background: linear-gradient(25deg, rgb(132, 0, 219, 1) 10%, var(--activeColor) 90%);
    overflow: hidden;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
    h6 {
        font-size: calc(2vmin + 1em);
        text-overflow: ellipsis;
    }
`

const LanTags = styled.ul`
    display: flex;
    gap: 1rem;
    list-style: none;
    padding: 1rem;
    overflow: hidden;
    li {
        font-weight: 700;
        cursor: pointer;
        transition: all 0.2s ease;
        &:hover {
            color: var(--activeColor);
        }
    }
`

const SpanSpread = styled.span`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Abutton = styled.a`
    color: black;
    border: none;
    border-radius: calc(var(--borderRadius) / 2);
    font-weight: 600;
    padding: 0.2rem 0.4rem;
    margin: 1rem;
    cursor: pointer;
    background-color: var(--fontColor);
    text-decoration: none;
    white-space: nowrap;
    &:hover {
        background-color: var(--activeColor);
        color: var(--fontColor);
    }
`
