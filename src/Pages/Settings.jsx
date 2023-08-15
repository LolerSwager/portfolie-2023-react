import { styled } from "styled-components"
import Appearance from "../Components/Settings/Appearance"
import Notifications from "../Components/Settings/Notifications"
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
                            <li>
                                <a href="#Appearance">Appearance</a>
                            </li>
                            <li>
                                <a href="#Permissions">Permissions</a>
                            </li>
                            <li>
                                <a href="#Notifications">Notifications</a>
                            </li>
                            <li>
                                <a href="#Storage">Storage</a>
                            </li>
                        </ul>
                    </menu>

                    <button onClick={() => window.location.reload()}>Reload Page</button>
                    <q>
                        I am actively working to make these settings work and in some cases I try something that you
                        might not be able to do. If you Come back once a weak this site will have change
                    </q>
                </StyledAside>
                <StyledWrapper>
                    <Appearance />
                    <Permissions />
                    <Notifications />
                    <Storage />
                </StyledWrapper>
            </SpacingGrid>
        </StyledSettings>
    )
}

const StyledSettings = styled.main`
    margin: auto;
    max-width: var(--pageMaxWidth);
    article {
        display: grid;
        gap: 1rem;
    }

    button {
        color: black;
        border: none;
        border-radius: calc(var(--borderRadius) / 2);
        font-weight: 600;
        padding: 0.2rem 0.4rem;
        cursor: pointer;
        &:hover {
            background-color: var(--activeColor);
            color: var(--fontColor);
        }
    }
`

const StyledWrapper = styled.article`
    margin: 0 1rem 2rem 0;
`

const SpacingGrid = styled.span`
    display: grid;
    grid-template-columns:
        minmax(auto, 1fr)
        auto;
    justify-items: center;
    gap: 1rem;

    position: relative;
    @media only screen and (max-width: 700px) {
        grid-template-columns: 1fr;
        margin: 1rem;
    }
`

const StyledAside = styled.span`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: sticky;
    top: 0;
    max-height: calc(100dvh / 3 * 2);
    margin: 0 1rem;
    @media only screen and (max-width: 700px) {
        width: 100%;
    }
    menu {
        border: 1px solid var(--wrapperColor);
        border-radius: var(--borderRadius);
        //overflow: hidden;
        ul {
            list-style: none;
            li {
                border: 1px solid var(--backGroundColor);
                &:hover {
                    color: var(--activeColor);
                    background-color: var(--wrapperColor);
                    border-right: 1px solid var(--wrapperColor);
                    border-left: 1px solid var(--activeColor);
                    &:first-child {
                        border-top-left-radius: var(--borderRadius);
                        border-top: 1px solid var(--activeColor);
                    }
                    &:last-child {
                        border-bottom-left-radius: var(--borderRadius);
                        border-bottom: 1px solid var(--activeColor);
                    }
                }
                a {
                    color: inherit;
                    text-decoration: none;
                    font-weight: 500;
                    display: block;
                    padding: 0.5rem 1rem;
                    cursor: pointer;
                }
            }
        }
    }
    @media only screen and (max-width: 700px) {
        position: relative;
        right: 0;
    }
`
