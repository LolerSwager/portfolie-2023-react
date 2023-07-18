import { styled } from "styled-components"
import Theme from "../Components/Settings/Theme"

export default function Settings() {
    return (
        <StyledSettings>
            <h1>Settings</h1>
            {/* <menu>
                <ul>
                    <li>Appearance</li>
                    <li>Appearance</li>
                </ul>
            </menu> */}
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
        article {
            display: flex;
            flex-direction: column;
            align-items: start;
            section {
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 0.5rem;
                margin: 1rem 0;
            }
            button {
                color: black;
                border: none;
                padding: 0.3rem;
                &:hover {
                    background-color: var(--activeColor);
                }
            }
        }
    }
`
