import { useEffect } from "react";
import { styled } from "styled-components";
import Breadcrumb from "./Breadcrumb";

export default function Main({ PageHeader, PageTitle, children }) {
    useEffect(() => {
        document.title = PageTitle || PageHeader;
    }, [PageTitle, PageHeader]);
    return (
        <StyledMain>
            <Breadcrumb />
            <h1>{PageHeader}</h1>
            {children}
        </StyledMain>
    );
}

const StyledMain = styled.main`
    max-width: var(--pageMaxWidth);
    width: 100%;
    padding: 0 1rem;
    margin: 0 auto;
    h1 {
        background-color: var(--activeColor);
        color: var(--contrastColor);
        display: flex;
        padding: 0.2rem 1rem;
        font-size: 2.5rem;
        margin-bottom: 1rem;
        width: max-content;
    }
    @media only screen and (max-width: 700px) {
        padding: 0;
    }
`;
