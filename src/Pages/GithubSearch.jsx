import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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
  DropDownMenuContent,
} from "../Components/DropDownMenu";
import GithubCard from "../Components/GithubSearch/GithubCard";
import useWindowSize from "../Hooks/useWindowSize";
import Main from "../Components/Main";
import { useDebounce } from "../Hooks/useDebounce";

export default function GithubSearch() {
  const [dropDownMenuState, setDropDownMenuState] = useState(false);
  const [CardType, setCardType] = useState(false);
  const [githubData, setGithubData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("latest");
  const [searchTags, setSearchTags] = useState([]);
  const [dropDownMenu, setDropDownMenu] = useState([
    {
      id: 1,
      name: "labs",
      icon: faFlask,
      active: true,
    },
    {
      id: 2,
      name: "Latest Updated",
      icon: faCalendarDays,
      active: false,
    },
    {
      id: 3,
      name: "Oldest",
      icon: faCalendarDays,
      active: false,
    },
    {
      id: 4,
      name: "A-Z",
      icon: faArrowDownAZ,
      active: false,
    },
    {
      id: 5,
      name: "Z-A",
      icon: faArrowDownZA,
      active: false,
    },
  ]);

  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const { width } = useWindowSize();

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

  useEffect(() => {
    const handleResize = () => {
      if (width <= 765) {
        setCardType(true);
      }
    };
    handleResize();
  }, [width]);

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    setDropDownMenuState(false);
  };

  const filteredAndSortedRepos = () => {
    return githubData
      .filter((repo) =>
        debouncedSearchQuery === ""
          ? true
          : repo.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
      )
      .filter((repo) => {
        if (searchTags.length === 0) return true;
        return searchTags.some(
          (tag) =>
            repo.language &&
            repo.language.toLowerCase().includes(tag.toLowerCase())
        );
      })
      .sort((a, b) => {
        if (activeFilter === "recentlyUpdated") {
          return new Date(b.updated_at) - new Date(a.updated_at);
        }
        if (activeFilter === "lastupdated") {
          return new Date(a.updated_at) - new Date(b.updated_at);
        }
        if (activeFilter === "latest") {
          return new Date(b.pushed_at) - new Date(a.pushed_at);
        }
        if (activeFilter === "oldest") {
          return new Date(a.pushed_at) - new Date(b.pushed_at);
        }
        if (activeFilter === "az") {
          return a.name.localeCompare(b.name);
        }
        if (activeFilter === "za") {
          return b.name.localeCompare(a.name);
        }

        return 0;
      });
  };

  return (
    <Main
      PageHeader="Github Search"
      PageTitle="Github Search af Jannick Vanderhoef Trolle Nielsen"
    >
      <Margin>
        <h2>Liste over Github</h2>
        <small>
          found {githubData.length ? githubData.length : "0"} public
          repositories
        </small>
      </Margin>
      <SearchHeader>
        <input
          type="search"
          id="github-search"
          placeholder="Search repositories..."
          aria-label="Search GitHub repositories"
          onChange={(event) => setSearchQuery(event.target.value)}
        />

        <DropDownMenu onClose={() => setDropDownMenuState(false)}>
          <button
            onClick={() => setDropDownMenuState((prevState) => !prevState)}
          >
            <FontAwesomeIcon icon={faFilter} />
          </button>
          {dropDownMenuState && (
            <DropDownMenuContent>
              <DropDownMenuItem className="disabled">
                <FontAwesomeIcon icon={faFlask} />
                <p>labs</p>
              </DropDownMenuItem>
              <DropDownMenuHr />
              <DropDownMenuItem
                onClick={() =>
                  setActiveFilter((prevFilter) =>
                    prevFilter === "recentlyUpdated" ? "" : "recentlyUpdated"
                  )
                }
                className={activeFilter === "recentlyUpdated" ? "active" : ""}
              >
                <FontAwesomeIcon icon={faCalendarDays} />
                <p>recently updated</p>
              </DropDownMenuItem>
              <DropDownMenuItem
                onClick={() =>
                  setActiveFilter((prevFilter) =>
                    prevFilter === "lastupdated" ? "" : "lastupdated"
                  )
                }
                className={activeFilter === "lastupdated" ? "active" : ""}
              >
                <FontAwesomeIcon icon={faCalendarDays} />
                <p>last updated</p>
              </DropDownMenuItem>
              <DropDownMenuHr />
              <DropDownMenuItem
                onClick={() =>
                  setActiveFilter((prevFilter) =>
                    prevFilter === "latest" ? "" : "latest"
                  )
                }
                className={activeFilter === "latest" ? "active" : ""}
              >
                <FontAwesomeIcon icon={faCalendarDays} />
                <p>newest repositories</p>
              </DropDownMenuItem>
              <DropDownMenuItem
                onClick={() =>
                  setActiveFilter((prevFilter) =>
                    prevFilter === "oldest" ? "" : "oldest"
                  )
                }
                className={activeFilter === "oldest" ? "active" : ""}
              >
                <FontAwesomeIcon icon={faCalendarDays} />
                <p>Oldest repositories</p>
              </DropDownMenuItem>
              <DropDownMenuHr />
              <DropDownMenuItem
                onClick={() =>
                  setActiveFilter((prevFilter) =>
                    prevFilter === "az" ? "" : "az"
                  )
                }
                className={activeFilter === "az" ? "active" : ""}
              >
                <FontAwesomeIcon icon={faArrowDownAZ} />
                <p>A-Z</p>
              </DropDownMenuItem>
              <DropDownMenuItem
                onClick={() =>
                  setActiveFilter((prevFilter) =>
                    prevFilter === "za" ? "" : "za"
                  )
                }
                className={activeFilter === "za" ? "active" : ""}
              >
                <FontAwesomeIcon icon={faArrowDownZA} />
                <p>Z-A</p>
              </DropDownMenuItem>
            </DropDownMenuContent>
          )}
        </DropDownMenu>

        {width > 765 && (
          <button onClick={() => setCardType((prevState) => !prevState)}>
            {CardType ? (
              <FontAwesomeIcon icon={faGripLines} />
            ) : (
              <FontAwesomeIcon icon={faGrip} />
            )}
          </button>
        )}
      </SearchHeader>
      <CardWrapper CardType={CardType}>
        {githubData.length === 0 ? (
          <p>No repositories found.</p>
        ) : filteredAndSortedRepos().length === 0 ? (
          <p>No repositories match your search or filter criteria.</p>
        ) : (
          filteredAndSortedRepos().map((repo) => (
            <GithubCard key={repo.id} data={repo} CardType={CardType} />
          ))
        )}
      </CardWrapper>
    </Main>
  );
}

const CardWrapper = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: ${(props) =>
    props.CardType ? "repeat(auto-fill, minmax(330px, 1fr))" : "1fr"};
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

const Margin = styled.div`
  margin: 0 2rem !important;
`;
