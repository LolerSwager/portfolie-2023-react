import { styled } from 'styled-components';

export default function Cookies(){
    return(
        <StyledArticle>
            <p>There is no Cookies</p>
        </StyledArticle>
    )
}


const StyledArticle = styled.article`
    padding: 1rem;
    background-color: var(--wrapperColor);
    border-radius: var(--borderRadius);
    max-width: 350px;
    section{
        display: grid;
        align-content: space-between;
        grid-template-columns: 
            minmax(150px, 1.75fr)
            auto;
        width: 100%;
    }
`