import { Link } from "react-router-dom"
import { styled } from "styled-components"
import { FaEraser } from "react-icons/fa"
import { RemoveLS } from "../../Hooks/useToLocalStorage"

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
                        <Link to="cv">Curriculum Vitae</Link>
                    </li>
                </ul>
            </nav>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    background-color: #0f0f0f;
    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        ul {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
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
                        color: var(--activeColor);
                    }
                }
            }
        }
        button {
            display: inline-flex;
            gap: 0.5rem;
            align-items: center;
            background-color: #0f0f0f;
            border: none;
            padding: 0.5rem;
            font-size: 1.4rem;
            p {
                font-size: 0.9rem;
            }
            &  * {
                fill: var(--activeColor);
            }
            &:hover {
                background-color: var(--activeColor);
                * {
                    fill: var(--fontColor);
                }
            }
        }
    }
`