import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown19,
  faArrowDown91,
  faArrowDownAZ,
  faArrowDownZA,
  faCalendarDays,
  faFilter,
  faFlask,
  faGrip,
  faGripLines,
} from "@fortawesome/free-solid-svg-icons";
import {
  DropDownMenu,
  DropDownMenuItem,
  DropDownMenuHr,
} from "../Components/DropDownMenu";
import GithubCard from "../Components/GithubSearch/GithubCard";

export default function GithubSearch() {
  const [dropDownMenuState, setDropDownMenuState] = useState(false);
  const [CardType, setCardType] = useState(false);
  const [githubData, setGithubData] = useState([]);

  useEffect(() => {
    async function getGithubData() {
      try {
        const res = await fetch(
          "https://api.github.com/users/lolerswager/repos"
        );
        const data = await res.json();
        setGithubData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setGithubData([]);
      }
    }
    getGithubData();
  }, []);

  return (
    <StyledMain>
      <h1>Github Search</h1>
      <h2>Liste over Github</h2>
      <small>
        found {githubData.length ? githubData.length : "0"} public repositories
      </small>
      <SearchHeader>
        <input
          type="search"
          id="github-search"
          placeholder="Search repositories..."
          aria-label="Search GitHub repositories"
        />
        <button onClick={() => setDropDownMenuState((prevState) => !prevState)}>
          <FontAwesomeIcon icon={faFilter} />
        </button>
        {dropDownMenuState && (
          <DropDownMenu onClose={() => setDropDownMenuState(false)}>
            <DropDownMenuItem>
              <FontAwesomeIcon icon={faFlask} />
              <p>labs</p>
            </DropDownMenuItem>
            <DropDownMenuHr />
            <DropDownMenuItem>
              <FontAwesomeIcon icon={faCalendarDays} />
              <p>Latest Updated</p>
            </DropDownMenuItem>
            <DropDownMenuItem>
              <FontAwesomeIcon icon={faCalendarDays} />
              <p>Oldest</p>
            </DropDownMenuItem>
            <DropDownMenuHr />
            <DropDownMenuItem>
              <FontAwesomeIcon icon={faArrowDownAZ} />
              <p>A-Z</p>
            </DropDownMenuItem>
            <DropDownMenuItem>
              <FontAwesomeIcon icon={faArrowDownZA} />
              <p>Z-A</p>
            </DropDownMenuItem>
            <DropDownMenuHr />
            <DropDownMenuItem>
              <FontAwesomeIcon icon={faArrowDown19} />
              <p>0-9 small to big</p>
            </DropDownMenuItem>
            <DropDownMenuItem>
              <FontAwesomeIcon icon={faArrowDown91} />
              <p>9-0 big to small</p>
            </DropDownMenuItem>
          </DropDownMenu>
        )}
        <button onClick={() => setCardType((prevState) => !prevState)}>
          {CardType ? (
            <FontAwesomeIcon icon={faGripLines} />
          ) : (
            <FontAwesomeIcon icon={faGrip} />
          )}
        </button>
      </SearchHeader>
      <CardWrapper>
        {githubData.length > 0 ? (
          githubData.map((card) => <GithubCard key={card.id} data={card} />)
        ) : (
          <p>No repositories found.</p>
        )}
      </CardWrapper>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  h1,
  h2,
  small {
    margin: 0 2rem;
  }
`;

const CardWrapper = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

const SearchHeader = styled.div`
  width: 100%;
  border-bottom: 2px solid var(--wrapperColor);
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 1rem;
  padding: 1rem 2rem;
  max-width: var(--pageMaxWidth);
  margin: auto;
  transition: all 0.5s;
  position: sticky;
  top: 0;
  background-color: var(--backGroundColor) !important;
  z-index: 10;

  &:hover {
    &:before {
      content: " ";
      position: absolute;
      bottom: -2px;
      height: 2px;
      background: var(--activeColor);
      animation: fill 5000ms infinite linear;
    }
  }
  input {
    color: var(--fontcolor);
    background-color: var(--wrapperColor);
    border: 1px solid var(--contrastColor);
    padding: 0.3rem 0.5rem;
    border-radius: calc(var(--borderRadius) / 2);
    transition: all 0.5s;
    width: 100%;

    &:hover {
      border: 1px solid var(--wrapperColor);
    }

    &:focus {
      outline: none !important;
      border: 1px solid var(--activeColor);
      box-shadow: 0 0 15px var(--activeColor);
      font-size: 1rem;
      transition: all 0.2s;
    }
  }
  button {
    color: var(--contrastColor);
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.3rem;
  }
  @-webkit-keyframes run {
    0% {
      left: 0;
    }

    100% {
      left: 100%;
    }
  }
  @-webkit-keyframes fill {
    0% {
      width: 0%;
      left: 0;
    }
    25% {
      width: 100%;
      left: 0;
    }
    50% {
      width: 0%;
      left: 100%;
    }
    75% {
      width: 100%;
      left: 0%;
    }
    100% {
      width: 0%;
      left: 0;
    }
  }
`;
