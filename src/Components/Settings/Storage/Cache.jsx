import { styled } from "styled-components";

export default function Cache() {
    return (
        <StyledArticle>
            <p>There is no cache</p>
        </StyledArticle>
    );
}

const StyledArticle = styled.article`
    padding: 1rem;
    background-color: var(--wrapperColor);
    border-radius: var(--borderRadius);
    section {
        display: grid;
        align-content: space-between;
        grid-template-columns:
            minmax(150px, 1.75fr)
            auto;
        width: 100%;
    }
`;
