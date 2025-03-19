import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Main from "../../Components/Main";
import VScreenshot from "../../Assets/image/tile-tracker.png";
import { Link } from "react-router-dom";

export default function TileTracker() {
  return (
    <Main
      PageHeader="Tile-Tracker"
      PageTitle="Tile-Tracker lavet af Jannick Vanderhoef Trolle Nielsen"
    >
      <StyledProject>
        <StyledHeader>
          <img src={VScreenshot} alt="tile-tracker dashboard" loading="eager" />
        </StyledHeader>
        <StyledTags>
          <h3>Redskaber Brugt</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Styled-components</li>
            <li>Github</li>
            <li>Vercel</li>
            <li>Electron</li>
          </ul>
        </StyledTags>

        <StyledText>
          <h3>Om projektet </h3>
          <p>
            Tile-Tracker er et avanceret og brugervenligt dashboard, der kan
            tilpasses fuldstændigt efter brugerens behov. Med Tile-Tracker kan
            du organisere og overvåge en række forskellige elementer i små,
            praktiske fliser.
          </p>
          <p>
            Uanset om du ønsker at spore din Spotify-aktivitet, holde styr på
            din kalender, følge med i RSS-feeds, administrere Discord guilds,
            overvåge aktiemarkedet eller kryptohandel, tjekke vejrudsigten eller
            holde dig opdateret med de seneste nyheder, så kan Tile-Tracker
            hjælpe dig med at holde styr på det hele på ét sted.
          </p>
          <p>
            Dette projekt er designet til at give brugerne en fleksibel og
            effektiv måde at administrere deres daglige aktiviteter og
            interesser på. Tile-Tracker kan desuden tilpasses yderligere med
            brugerdefinerede plugins, hvilket gør det muligt for brugerne at
            udvide funktionaliteten efter deres egne behov og præferencer.
          </p>
        </StyledText>
        <StyledLinks>
          <h3>Link til Hjemmesiden</h3>
          <div>
            <a href="#Download" target="_blank" disabled={true}>
              Download
            </a>
            <a
              href="https://github.com/LolerSwager/Tile-tracker"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
              Github
            </a>
            <Link to="/Projektor" className="reversed">
              Go Back
            </Link>
          </div>
        </StyledLinks>
      </StyledProject>
    </Main>
  );
}

const StyledProject = styled.article`
  display: grid;
  grid-template-areas:
    "projekt-header projekt-text"
    "projekt-header projekt-tags"
    "projekt-header projekt-link";
  grid-template-columns: repeat(2, 1fr);
  margin: 1rem;
  gap: 2.5rem;
  @media only screen and (max-width: 800px) {
    grid-template-areas:
      "projekt-header"
      "projekt-text"
      "projekt-tags"
      "projekt-link";
    grid-template-columns: 1fr;
  }

  img {
    width: 100%;
  }
`;

const StyledHeader = styled.section`
  grid-area: projekt-header;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  img {
    width: 100%;
  }
`;

const StyledTags = styled.section`
  grid-area: projekt-tags;
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
      cursor: default;
    }
  }
`;

const StyledText = styled.section`
  grid-area: projekt-text;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledLinks = styled.section`
  grid-area: projekt-link;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
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
      &:hover {
        border-color: var(--activeColor);
        background-color: #1a1a1a;
        color: var(--activeColor);
        * {
          fill: var(--activeColor);
        }
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
`;
