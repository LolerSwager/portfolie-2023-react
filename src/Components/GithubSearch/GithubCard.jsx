import { useState, useEffect } from "react";
import styled from "styled-components";

const GithubCard = ({ data }) => {
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
    async function getlanguagesTags() {
      try {
        const res = await fetch(languages_url);
        const data = await res.json();
        setLanguagesTags(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLanguagesTags([]);
      }
    }
    getlanguagesTags();
  }, []);

  console.log(languagesTags);

  return (
    <StyledGithubCard>
      <Image>
        <h6>{name}</h6>
      </Image>
      <CardBody>
        <h3>{name}</h3>
        <p>{pushed_at}</p>
        <p>{updated_at}</p>
        <p>{description}</p>

        <LanTags>
          {languagesTags > 0 ? (
            languagesTags?.map((languageTag) => (
              <li key={languageTag}>languageTag</li>
            ))
          ) : (
            <p>No tags found.</p>
          )}
        </LanTags>
        <Row>
          {visibility === "public" && (
            <Abutton href={html_url} target="_blank" rel="noreferrer">
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
  flex-direction: column;
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

const Row = styled.span`
  display: flex;

  gap: 1rem;
`;

const Abutton = styled.a`
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
`;

export default GithubCard;
