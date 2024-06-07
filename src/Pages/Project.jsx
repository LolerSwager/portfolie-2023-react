import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Main from "../Components/Main";
import VScreenshot from "../Assets/image/vanderhoef_screnshot.webp";
import { Link } from "react-router-dom";

export default function Project() {
    return (
        <Main PageHeader="Vanderhoef.dk" PageTitle="Vanderhoef.dk lavet af Jannick Vanderhoef Trolle Nielsen">
            <StyledProject>
                <section className="projekt-left">
                    <img src={VScreenshot} alt="et skærmbilled af vanderhoef.dk start skærm i det man kommer ind på siden" loading="lazy" />
                    <div className="skill-tags">
                        <h3>Redskaber Brugt</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Styled-components</li>
                            <li>Github</li>
                            <li>Vercel</li>
                        </ul>
                    </div>
                </section>
                <section className="projekt-text">
                    <h3>Om projektet </h3>
                    <p>Velkommen til Annemarie Vanderhoefs islanske fårehundeunivers!</p>
                    <p>
                        Min mor, Annemarie Vanderhoef, er ikke bare en hundeejer - hun er en passioneret fortaler for den islanske fårehunderace. Denne hjemmeside er hendes hyldest til disse smukke og
                        intelligente væsener og hendes rejse med dem gennem hundeudstillinger og livet derhjemme.
                    </p>
                    <p>
                        Gennem omhyggeligt udvalgte billeder får du et indblik i vores liv med vores fire elskede islanske fårehunde. Fra hyggelige øjeblikke derhjemme til de spændende øjeblikke på
                        udstillingerne, kan du følge vores rejse gennoem årene. Vi deler stoltheden ved de præmier, vores hunde har vundet, og vi giver dig et indblik i deres stamtavler og den
                        spændende historie bag racen.
                    </p>
                    <p>
                        Uanset om du allerede er en entusiast af islanske fårehunde eller bare nysgerrig efter at lære mere, håber vi, at denne hjemmeside vil inspirere og informere dig. Så tag et kig
                        rundt, lad dig fordybe i skønheden og charmen ved disse fantastiske dyr, og måske vil du også blive bidt af islanske fårehunde-feberen!
                    </p>
                </section>
                <section className="projekt-link">
                    <h3>Link til Hjemmesiden</h3>
                    <div>
                        <a href="https://vanderhoef.dk" target="_blank">
                            Vanderhoef.dk
                        </a>
                        <a href="https://github.com/LolerSwager/hunde" target="_blank">
                            <FontAwesomeIcon icon={faGithub} />
                            Github
                        </a>
                        <Link to="/Projektor" className="reversed">
                            Go Back
                        </Link>
                    </div>
                </section>
            </StyledProject>
        </Main>
    );
}

const StyledProject = styled.article`
    display: grid;
    grid-template-areas:
        "projekt-left projekt-text"
        "projekt-link projekt-text";
    grid-template-columns: repeat(2, 1fr);
    margin: 1rem;
    gap: 2.5rem;
    @media only screen and (max-width: 800px) {
        grid-template-areas:
            "projekt-left"
            "projekt-text"
            "projekt-link";
        grid-template-columns: 1fr;
    }
    img {
        width: 100%;
    }
    .projekt-left {
        grid-area: projekt-left;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        h3 {
            margin: 0 0 0.5rem 0;
        }
        ul {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            list-style: none;
            li {
                font-weight: 600;
                padding: 0.7rem 1rem;
                background-color: var(--wrapperColor);
                border-radius: calc(var(--borderRadius) / 2);
                // border-radius: var(--borderRadius);
                cursor: default;
                /* 
                &:hover {
                    color: var(--activeColor);
                } */
            }
        }
    }
    .projekt-text {
        grid-area: projekt-text;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .projekt-link {
        grid-area: projekt-link;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        div {
            display: flex;
            align-items: center;
            gap: 1rem;
            a {
                display: flex;
                align-items: center;
                gap: 0.7rem;
                width: max-content;
                background-color: var(--activeColor);
                color: #1a1a1a;
                border: 1px solid transparent;
                border-radius: calc(var(--borderRadius) / 2);
                transition: border-color 0.25s;
                padding: 0.6em 1em;
                font-size: 1em;
                font-weight: 800;
                text-decoration: none;
                cursor: pointer;
                * {
                    fill: black;
                }
                & * :hover {
                    fill: var(--activeColor);
                }
                &:hover {
                    border-color: var(--activeColor);
                    background-color: #1a1a1a;
                    color: var(--activeColor);
                }
                &:disabled {
                    background-color: #1a1a1a;
                    color: #6a6a6a;
                    &:hover {
                        border-color: #1a1a1a;
                        background-color: #1a1a1a;
                        color: #6a6a6a;
                        cursor: default;
                    }
                }
            }
            .reversed {
                background-color: #1a1a1a;
                color: var(--activeColor);
                border-color: var(--activeColor);
                &:hover {
                    background-color: var(--activeColor);
                    color: #1a1a1a;
                }
            }
        }
    }
`;
