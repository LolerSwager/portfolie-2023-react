import { Link } from "react-router-dom"
import { styled } from "styled-components"

export default function Header() {
    return (
        <StyledHeader>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="projects">projects</Link>
                    </li>
                    <li>
                        <Link to="kurser">Kurser</Link>
                    </li>
                    <li>
                        <Link to="cv">Curriclum Vite</Link>
                    </li>
                </ul>
            </nav>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    background-color: #0f0f0f;
    nav {
        ul {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            margin: 1rem;
            li {
                list-style: none;
                font-size: 1.5rem;
                font-weight: 400;
                a {
                    color: #eeeeee;
                    text-decoration: none;
                    &:hover {
                        color: #8400db;
                    }
                }
            }
        }
    }
`
