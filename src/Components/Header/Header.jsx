import { styled } from "styled-components"

export default function Header() {
    return (
        <StyledHeader>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>prosjektere</li>
                    <li>Kurser</li>
                    <li>Curriclum Vite</li>
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
            gap: 1rem;
            margin: 1rem;
            li {
                list-style: none;
                font-size: 1.5rem;
                font-weight: 400;
                &:hover {
                    color: #8400db;
                }
            }
        }
    }
`
