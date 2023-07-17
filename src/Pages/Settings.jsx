import { styled } from "styled-components"
import Theme from "../Components/Settings/Theme"

export default function Settings() {
    return (
        <StyledSettings>
            <h1>Settings</h1>
            <article>
                <Theme />
            </article>
        </StyledSettings>
    )
}

const StyledSettings = styled.main`
    display: grid;
    justify-items: center;
    article {
        max-width: 1200px;
        section {
            display: flex;
            flex-direction: column;
            align-items: start;
            

            button {
                color: black;
                border: none;
                padding: 0.3rem;
            }
        }
    }
`
