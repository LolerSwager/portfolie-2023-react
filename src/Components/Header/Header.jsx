import { Link } from "react-router-dom"
import { styled } from "styled-components"
import { useState } from "react"
import { faBars,faGear, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Header() {
    const [menuState, setMenuState] = useState(false)
    return (
        <StyledHeader menuStateShow={menuState}>
            <nav>
                <span className="burgerMenu" onClick={() => setMenuState(!menuState)}>
                    {menuState ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars} />}
                </span>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="projects">projects</Link>
                    </li>
                    <li>
                        <Link to="cv">Curriculum Vitae</Link>
                    </li>
                </ul>
                <Link to="settings" className="settingsIcon">
                    <FontAwesomeIcon icon={faGear} />
                </Link>
            </nav>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    background-color: #0f0f0f;
    font-size: 1.5rem;
    padding: .5rem;
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 100%;
        margin: auto;
        .burgerMenu{
            display: none;
            padding: .5rem 1rem;
            transition: ease-in-out 1s; //! idk if this works
            &:hover{
                background-color: var(--wrapperColor);
                border-radius: var(--borderRadius);
            }
            @media only screen and (max-width: 600px){
                display: block;
            }
        }
        .settingsIcon{
            padding: .5rem 1rem;
            color: #eeeeee;
            text-decoration: none;
            &:hover{
                background-color: var(--wrapperColor);
                fill: var(--activeColor);
                border-radius: var(--borderRadius);
            }
        }
        ul {
            display: ${(props) => (props.menuStateShow ? "flex" : "none")};
            @media only screen and (min-width: 600px){
                display: flex;
            }
            @media only screen and (max-width: 600px){
                justify-content: center;
                align-items: center;
                flex-direction: column;
                gap: 1rem;
                margin: 1rem;
            }
            justify-content: center;
            align-items: center;
            li {
                list-style: none;
                font-weight: 500;
                a{
                    padding: .5rem 1rem;
                    border-radius: var(--borderRadius);
                    color: #eeeeee;
                    text-decoration: none;
                    &:hover{
                        color: var(--activeColor);
                    }
                }
            }
        }
    }
`

/* const StyledHeader = styled.header`
    background-color: #0f0f0f;
    position: relative;
    span{
        position: fixed;
        top: 0;
        right: 0;
        z-index: 1;
        font-size: 3rem;
        margin: 2rem 2.5rem;
        cursor: pointer;
        &:hover{
            color: var(--activeColor);
        }
    }
    nav {
        background-color: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        height: 100vh;
        width: 100vw;
        z-index: 1;
        overflow: hidden;
        font-size: 2rem;
        ul {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 1rem;
            margin: 1rem;
            li {
                list-style: none;
                font-size: 1.5em;
                font-weight: 400;
                a {
                    color: #eeeeee;
                    text-decoration: none;
                    &:hover {
                        color: var(--activeColor);
                    }
                }
            }
        }
    }
` */