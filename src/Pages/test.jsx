import { styled } from "styled-components"
import Table from "../Components/Table"

export default function Test(){
    return(
        <StyledMain>
            {/* <WrapperArticle>
                <ScrollSection>
                    <HeadSection>
                        <p>Name</p>
                        <p>Size</p>
                        <p>Button</p>
                    </HeadSection>
                    <BodySection>
                        <p>Key name</p>
                        <p>15 KB</p>
                        <button>Clean</button>
                    </BodySection>
                    <BodySection>
                        <p>Key name</p>
                        <p>10 KB</p>
                        <button>Clean</button>
                    </BodySection>
                    <BodySection>
                        <p>Key name</p>
                        <p>10 KB</p>
                        <button>Clean</button>
                    </BodySection>
                    <BodySection>
                        <p>Key name</p>
                        <p>10 KB</p>
                        <button>Clean</button>
                    </BodySection>
                    <BodySection>
                        <p>Key name</p>
                        <p>10 KB</p>
                        <button>Clean</button>
                    </BodySection>
                    <BodySection>
                        <p>Key name</p>
                        <p>10 KB</p>
                        <button>Clean</button>
                    </BodySection>
                    <BodySection>
                        <p>Key name</p>
                        <p>10 KB</p>
                        <button>Clean</button>
                    </BodySection>
                    <BodySection>ß
                        <p>Key name</p>
                        <p>10 KB</p>
                        <button>Clean</button>
                    </BodySection>
                    <BodySection>
                        <p>Key name</p>
                        <p>10 KB</p>
                        <button>Clean</button>
                    </BodySection>
                    <BodySection>
                        <p>Key name</p>
                        <p>10 KB</p>
                        <button>Clean</button>
                    </BodySection>
                </ScrollSection>
            </WrapperArticle> */}
            <Table/>
        </StyledMain>
    )
}

const StyledMain = styled.main`
    margin: 1rem;
`

const WrapperArticle = styled.article`
    height: 100%;
    max-height: 350px;
    border: 2px solid var(--activeColor);
    border-radius: var(--borderRadius);
    overflow: hidden;
    display: grid;
`

const ScrollSection = styled.section`
    overflow: auto;
    height: 100%;
`

const HeadSection = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--activeColor);
    padding: .5rem 1rem;
    font-weight: 700;
    position: sticky;
    top: 0;
    width: 100%;
`

const BodySection = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--wrapperColor);
    padding: .5rem 1rem;
    &:hover{
        background-color: var(--backGroundColor);
    }
    button{
        color: #000;
        padding: .2rem .3rem;
        border-radius: calc(var(--borderRadius)/2);
        border: none;
        font-weight: 500;
        &:hover{
            color: red;
        }
    }
`