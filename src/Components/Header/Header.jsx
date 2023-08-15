import { Link } from "react-router-dom"
import { styled } from "styled-components"
import { useState } from "react"
import { faBars, faGear, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Header() {
    const [menuState, setMenuState] = useState(false)
    return (
        <StyledHeader menuStateShow={menuState}>
            <nav>
                <span className="burgerMenu" onClick={() => setMenuState((prevState) => !prevState)}>
                    {menuState ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars} />}
                </span>
                <ul>
                    <li>
                        <Link to="/" onClick={() => setMenuState((prevState) => !prevState)}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="projects" onClick={() => setMenuState((prevState) => !prevState)}>
                            projects
                        </Link>
                    </li>
                    <li>
                        <Link to="cv" onClick={() => setMenuState((prevState) => !prevState)}>
                            Curriculum Vitae
                        </Link>
                    </li>
                </ul>
                <Link to="settings" className="settingsIcon" onClick={() => setMenuState(false)}>
                    <FontAwesomeIcon icon={faGear} />
                </Link>
            </nav>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    background-color: #0f0f0f;
    font-size: 1.5rem;
    padding: 0.5rem;
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: var(--pageMaxWidth);
        margin: auto;
        .burgerMenu {
            display: none;
            padding: 0.5rem 1rem;
            transition: ease-in-out 1s;
            &:hover {
                background-color: var(--wrapperColor);
                border-radius: var(--borderRadius);
            }
            @media only screen and (max-width: 700px) {
                display: block;
            }
        }
        .settingsIcon {
            padding: 0.5rem 1rem;
            color: #eeeeee;
            text-decoration: none;
            transition: ease-in-out 1s;
            &:hover {
                background-color: var(--wrapperColor);
                fill: var(--activeColor);
                border-radius: var(--borderRadius);
            }
        }
        ul {
            display: ${(props) => (props.menuStateShow ? "flex" : "none")};
            @media only screen and (min-width: 701px) {
                display: flex;
            }
            justify-content: center;
            align-items: center;
            li {
                list-style: none;
                font-weight: 500;
                a {
                    padding: 0.5rem 1rem;
                    border-radius: var(--borderRadius);
                    color: #eeeeee;
                    text-decoration: none;
                    &:hover {
                        color: var(--activeColor);
                    }
                }
            }
        }
    }
    @media only screen and (max-width: 700px) {
        position: relative;
        nav {
            height: ${(props) => (props.menuStateShow ? "100dvh" : "unset")};
            flex-direction: ${(props) => (props.menuStateShow ? "column" : "unset")};
            justify-content: ${(props) => (props.menuStateShow ? "space-around" : "space-between")};
            width: 100%;
            background-color: #0f0f0f;
            z-index: 1000;
            position: ${(props) => (props.menuStateShow ? "fixed" : "unset")};
            top: 0;
            left: 0;
        }
        ul {
            flex-direction: column;
            gap: 1rem;
        }
    }
`
