import { styled } from "styled-components";
import Main from "../../Components/Main";
import VScreenshot from "../../Assets/image/vanderhoef_screnshot.webp";
import Sportscenternord from "../../Assets/image/sportscenternord-phone-tilted.png";
import TileTracker from "../../Assets/image/tile-tracker.png";
import { Link } from "react-router-dom";
import Button from "../../Components/UI/buttons/Button";

export default function Projects() {
  return (
    <Main
      PageHeader="Projektor"
      PageTitle="Projektor af Jannick Vanderhoef Trolle Nielsen"
    >
      {/*  <StyledProjects>
        <section className="projekt-header">
          <h2>Vanderhoef.dk</h2>
        </section>
        <section className="projekt-left">
          <img
            src={VScreenshot}
            alt="et skærmbilled af vanderhoef.dk start skærm i det man kommer ind på siden"
            loading="lazy"
          />
        </section>
        <section className="projekt-text">
          <h3>Om projektet </h3>
          <p>Velkommen til Annemarie Vanderhoefs islanske fårehundeunivers!</p>
          <p>
            Min mor, Annemarie Vanderhoef, er ikke bare en hundeejer - hun er en
            passioneret fortaler for den islanske fårehunderace. Denne
            hjemmeside er hendes hyldest til disse smukke og intelligente
            væsener og hendes rejse med dem gennem hundeudstillinger og livet
            derhjemme.
          </p>
          <div>
            <Link to="Vanderhoef">Check Projektet</Link>
          </div>
        </section>
      </StyledProjects> */}
      <StyledProjects>
        <section className="projekt-header">
          <h2>sportscenternord.dk</h2>
        </section>
        <section className="projekt-left">
          <img
            src={Sportscenternord}
            alt="et skærmbilled af vanderhoef.dk start skærm i det man kommer ind på siden"
            loading="lazy"
          />
        </section>
        <section className="projekt-text">
          <h3>Om projektet </h3>
          <p>
            Sportscenter Nord er en progressiv webapplikation (PWA) designet til
            at administrere og spore træningsplaner og fremskridt.
          </p>
          <div>
            <Link to="sportscenternord">Check Projektet</Link>
          </div>
        </section>
      </StyledProjects>
      <StyledProjects>
        <section className="projekt-header">
          <h2>Tile-Tracker</h2>
        </section>
        <section className="projekt-left">
          <img
            src={TileTracker}
            alt="et skærmbilled af vanderhoef.dk start skærm i det man kommer ind på siden"
            loading="lazy"
          />
        </section>
        <section className="projekt-text">
          <h3>Om projektet </h3>
          <p>
            Tile-Tracker er et avanceret og brugervenligt dashboard, der kan
            tilpasses fuldstændigt efter brugerens behov. Med Tile-Tracker kan
            du organisere og overvåge en række forskellige elementer i små,
            praktiske fliser.
          </p>
          <div>
            <Link to="TileTracker">Check Projektet</Link>
          </div>
        </section>
      </StyledProjects>
      <StyledGithubBanner>
        <Link to="/GithubSearch">
          {/*  <img src="" alt="" /> */}
          <h3>Github Search</h3>
        </Link>
      </StyledGithubBanner>
    </Main>
  );
}

const StyledProjects = styled.article`
  display: grid;
  grid-template-areas:
    "projekt-header projekt-header"
    "projekt-left  projekt-text"
    "projekt-left  projekt-link";
  grid-template-columns: repeat(2, 1fr);
  margin: 1rem;
  gap: 2.5rem;
  @media only screen and (max-width: 800px) {
    grid-template-areas:
      "projekt-header"
      "projekt-left"
      "projekt-text"
      "projekt-link";
    grid-template-columns: 1fr;
  }
  img {
    width: 100%;
  }
  .projekt-header {
    grid-area: projekt-header;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0 2.5rem 0;
    font-size: 1.3rem;
    h2 {
      position: relative;
      width: max-content;
      &::before {
        position: absolute;
        content: "";
        background-color: var(--activeColor);
        height: 2px;
        width: 100%;
        bottom: 0;
        left: 0%;
      }
    }
  }
  .projekt-left {
    grid-area: projekt-left;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h3 {
      margin: 0 0 0.5rem 0;
    }
  }
  .projekt-text {
    grid-area: projekt-text;
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

const StyledGithubBanner = styled.div`
  background: linear-gradient(
    25deg,
    rgb(132, 0, 219, 1) 10%,
    var(--activeColor) 90%
  );
  box-shadow: 0px 0px 10px 1px #000000ee;
  margin: 5rem 1rem 1rem 1rem;
  padding: 1rem;
  border-radius: var(--borderRadius);
  aspect-ratio: 5 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 2rem;
`;
