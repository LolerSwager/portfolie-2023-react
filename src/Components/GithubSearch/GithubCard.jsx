import { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const GithubCard = ({ data, CardType }) => {
  const {
    name,
    description,
    pushed_at,
    updated_at,
    visibility,
    html_url,
    homepage,
    languages_url,
  } = data;

  const [languagesTags, setLanguagesTags] = useState([]);

  useEffect(() => {
    async function getLanguagesTags() {
      try {
        const res = await fetch(languages_url);
        const data = await res.json();
        const languageNames = Object.keys(data);
        setLanguagesTags(languageNames);
      } catch (error) {
        console.error("Error fetching languages:", error);
        setLanguagesTags([]);
      }
    }
    getLanguagesTags();
  }, [languages_url]);

  console.log(languagesTags);

  return (
    <StyledGithubCard CardType={CardType}>
      <Image CardType={CardType}>
        <h6>{name}</h6>
      </Image>
      <CardBody>
        <h3>{name}</h3>
        <Row>
          <p>Pushed on: {new Date(pushed_at).toLocaleDateString()}</p>
          <p>Last updated: {new Date(updated_at).toLocaleDateString()}</p>
        </Row>
        <p>{description}</p>

        <LanTags>
          {languagesTags && languagesTags.length > 0 ? (
            languagesTags.map((languageTag) => (
              <li key={languageTag}>{languageTag}</li>
            ))
          ) : (
            <p>No tags found.</p>
          )}
        </LanTags>
        <Row>
          {visibility === "public" && (
            <Abutton href={html_url} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
              Github
            </Abutton>
          )}
          {homepage && (
            <Abutton href={homepage} target="_blank">
              {homepage}
            </Abutton>
          )}
        </Row>
      </CardBody>
    </StyledGithubCard>
  );
};

const StyledGithubCard = styled.article`
  border-radius: var(--borderRadius);
  background-color: var(--wrapperColor);
  overflow: hidden;
  display: flex;
  flex-direction: ${(props) => (props.CardType ? "column" : "row")};
  gap: 1rem;
  box-shadow: 0px 0px 10px 1px #000000ee;
`;

const CardBody = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const Image = styled.div`
  aspect-ratio: ${(props) => props.CardType && "3 / 1"};
  max-width: ${(props) => props.CardType || "400px"};
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

const Row = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Abutton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: black;

  border: none;
  border-radius: calc(var(--borderRadius) / 2);
  font-weight: 600;
  padding: 0.2rem 0.4rem;
  cursor: pointer;
  background-color: var(--fontColor);
  text-decoration: none;
  white-space: nowrap;
  &:hover {
    background-color: var(--activeColor);
    color: var(--contrastColor);
  }
  * {
    fill: black;
  }
`;

export default GithubCard;
