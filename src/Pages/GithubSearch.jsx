import {
  fa0,
  fa9,
  faA,
  faArrowDown19,
  faArrowDown91,
  faArrowDownAZ,
  faArrowDownZA,
  faCalendarDays,
  faFilter,
  faFlask,
  faGrip,
  faGripLines,
  faZ,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import { useGetList } from "../Hooks/useGetList";
import {
  DropDownMenu,
  DropDownMenuItem,
  DropDownMenuHr,
} from "../Components/DropDownMenu";
import { useState } from "react";

export default function GithubSearch() {
  const [dropDownMenuState, setDropDownMenuState] = useState(false);
  const [CardType, setCardType] = useState("list");

  const { state: GithubData } = useGetList(
    "https://api.github.com/users/lolerswager/repos"
  );

  function LanguagesList({ languagesUrl }) {
    const { state: Languages } = useGetList(languagesUrl);

    const languages = Object.keys(Languages);

    return (
      <LanTags>
        {window.document.body.scrollWidth > 100
          ? languages.map((language, index) => <li key={index}>{language}</li>)
          : languages
              .slice(0, 4)
              .map((language, index) => <li key={index}>{language}</li>)}
      </LanTags>
    );
  }

  return (
    <StyledMain>
      <h1>Github Search</h1>
      <h2>Liste over Github</h2>
      <small>min github skal lige rydes op og dukumenters</small>
      <SearchHeader>
        <input type="search" name="" id="" placeholder="Search.." />
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
      <StyledArticle>
        {GithubData?.map((item) => (
          <StyledCard key={item.id}>
            <Image>
              <h6>{item.name}</h6>
            </Image>
            <span>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </span>
            <LanguagesList languagesUrl={item.languages_url} />
            <Abutton href={item.html_url} target="_blank" rel="noreferrer">
              Open in Github
            </Abutton>
          </StyledCard>
        ))}
      </StyledArticle>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  h1,
  h2,
  small {
    margin: 0 2rem;
  }
  /* margin: auto; */
  /* margin: 0 2rem; */
`;

const StyledArticle = styled.article`
  /*    max-width: var(--pageMaxWidth); */
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

const StyledCard = styled.section`
  border-radius: var(--borderRadius);
  background-color: var(--wrapperColor);
  overflow: hidden;
  display: grid;
  grid-template-rows: 1fr auto auto auto;
  justify-items: self-start;
  box-shadow: 0px 0px 10px 1px #000000ee;
  span {
    padding: 0 1rem;
  }
`;

const Image = styled.div`
  aspect-ratio: 3 / 1;
  width: 100%;
  background: linear-gradient(
    25deg,
    rgb(132, 0, 219, 1) 10%,
    var(--activeColor) 90%
  );
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  h6 {
    font-size: calc(2vmin + 1em);
    text-overflow: ellipsis;
  }
`;

const LanTags = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 1rem 1rem 0 1rem;
  overflow: hidden;
  li {
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      color: var(--activeColor);
    }
  }
`;

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
    color: var(--contrastColor);
  }
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
  position: relative;

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

    &:hover {
      border: 1px solid var(--wrapperColor);
    }

    &:focus {
      outline: none !important;
      border: 1px solid var(--activeColor);
      box-shadow: 0 0 15px var(--activeColor);
      font-size: 1.5rem;
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
