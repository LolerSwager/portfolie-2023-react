import { styled } from "styled-components"
import Appearance from "../Components/Settings/Appearance"
import Permissions from "../Components/Settings/Permissions"
import Storage from "../Components/Settings/Storage"

export default function Settings() {
    document.title = "Settings"
    return (
        <StyledSettings>
            <SpacingGrid>
                <StyledAside>
                    <h1>Settings</h1>
                    <menu>
                        <ul>
                            <li><a href="#Appearance">Appearance</a></li>
                            <li><a href="#Permissions">Permissions</a></li>
                            <li><a href="#Storage">Storage</a></li>
                        </ul>
                    </menu> 
                    <button onClick={() => window.location.reload()}>Reload Page</button>
                </StyledAside>
                <article>
                    <Appearance/>
                    <Permissions/>
                    <Storage/>
                </article>
            </SpacingGrid>
        </StyledSettings>
    )
}

const StyledSettings = styled.main`
    margin: 1rem;
    article{
        display: grid;
        gap: 1rem;
    }
    
    button {
        color: black;
        border: none;
        border-radius: calc(var(--borderRadius)/2);
        font-weight: 600;
        padding: .2rem .4rem;
        cursor: pointer;
        &:hover {
            background-color: var(--activeColor);
            color: var(--fontColor);
        }
    } 
`

const SpacingGrid = styled.span`
    display: grid;
    grid-template-columns: 
        minmax(220px, 1fr)
        auto;
    justify-items: center;
    gap: 1rem;
    position: relative;

    @media only screen and (max-width: 600px){
        grid-template-columns: 1fr;
    }
`

const StyledAside = styled.span`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: sticky;
    top: 0;
    max-height: calc(100vh / 2);
    @media only screen and (max-width: 600px){
        width: 100%;
    }
    menu{
        border: 1px solid var(--wrapperColor);
        border-radius: var(--borderRadius);
        overflow: hidden;
        ul{
            list-style: none;
            li{
                border: 1px solid var(--backGroundColor);
                &:hover{
                    color: var(--activeColor);
                    background-color: var(--wrapperColor);
                    border-right: 1px solid var(--wrapperColor);
                    border-left: 1px solid var(--activeColor);
                    &:first-child{
                       border-top-left-radius: var(--borderRadius);
                       border-top: 1px solid var(--activeColor);
                    } 
                    &:last-child{
                        border-bottom-left-radius: var(--borderRadius);
                        border-bottom: 1px solid var(--activeColor);
                    }
                }
                a{
                    color: inherit;
                    text-decoration: none;
                    font-weight: 500;
                    display: block;
                    padding: .5rem 1rem;
                    cursor: pointer;
                }
            }
        }
    }

    @media only screen and (max-width: 600px){
        position: relative;
        right: 0;
    }
   
`