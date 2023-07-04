import { styled } from "styled-components"

export default function Header() {
    const StyledHeader = styled.header`
        background-color: green;
    `

    return (
        <StyledHeader>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Kurser</li>
                </ul>
            </nav>
        </StyledHeader>
    )
}
