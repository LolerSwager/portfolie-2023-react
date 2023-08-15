import { useEffect, useState } from "react"
import { styled } from "styled-components"
import ToggleSwitch from "../ToggleSwitch"

export default function Appearance() {
    const [themeColor, setThemeColor] = useState(
        localStorage.getItem("color") ? localStorage.getItem("color") : "#8400db"
    )

    useEffect(() => {
        localStorage.setItem("color", themeColor)
    }, [themeColor])

    return (
        <>
            <h2 id="Appearance">Appearance</h2>
            <section>
                <label>Customize primary color</label>
                <ColorPicker>
                    <input
                        type="color"
                        onChange={(event) => setThemeColor(event.target.value)}
                        value={themeColor}
                    ></input>
                    <input type="text" onChange={(event) => setThemeColor(event.target.value)} value={themeColor} />
                </ColorPicker>
            </section>
            <section>
                <label>Theme</label>
                <StyledArticle>
                    <section>
                        <input type="radio" name="theme" checked={true} disabled />
                        <label for="theme">Light</label>
                    </section>
                    <section>
                        <input type="radio" name="theme" disabled />
                        <label for="theme">Dark</label>
                    </section>
                </StyledArticle>
            </section>
            <section>
                <label>Corners</label>
                <StyledArticle>
                    <section>
                        <input type="radio" name="corners" disabled />
                        <label for="corners">Square</label>
                    </section>
                    <section>
                        <input type="radio" name="corners" checked={true} disabled />
                        <label for="corners">Rounded</label>
                    </section>
                </StyledArticle>
            </section>
            <section>
                <SpanSpread>
                    <label>Toastify Notifications</label>
                    <ToggleSwitch ToggleDisabled={true} isToggeld={true} />
                </SpanSpread>
                <StyledArticle>
                    <section>
                        <input type="radio" name="Toastify" disabled />
                        <label for="Toastify">Right Top</label>
                    </section>
                    <section>
                        <input type="radio" name="Toastify" checked={true} disabled />
                        <label for="Toastify">Left Top</label>
                    </section>
                    <section>
                        <input type="radio" name="Toastify" disabled />
                        <label for="Toastify">Right Bottom</label>
                    </section>

                    <section>
                        <input type="radio" name="Toastify" disabled />
                        <label for="Toastify">Left Bottom</label>
                    </section>
                </StyledArticle>
            </section>
        </>
    )
}

const ColorPicker = styled.span`
    display: flex;
    background-color: var(--wrapperColor);
    padding: 0.3rem 0.5rem;
    gap: 0.3rem;
    border-radius: calc(var(--borderRadius) / 2);
    input[type="color"] {
        width: 25px;
    }
    input {
        border: none;
        color: #eeeeee;
        background-color: transparent;
    }
`

const StyledArticle = styled.article`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
    section {
        display: flex;
        gap: 1rem;
        background-color: var(--wrapperColor);
        border-radius: var(--borderRadius);
        padding: 1rem;
        input[type="radio"]:after {
            content: "";
            width: 10px;
            height: 10px;
            border-radius: 15px;
            top: 5px;
            left: 0;
            position: relative;
            background-color: var(--wrapperColor);
            display: inline-block;
            border: 2px solid var(--fontColor);
        }
        input[type="radio"]:checked:after {
            content: "";
            width: 10px;
            height: 10px;
            border-radius: 15px;
            top: 5px;
            left: 0;
            position: relative;
            background-color: var(--activeColor);
            display: inline-block;
            border: 2px solid var(--fontColor);
        }
        input[type="radio"]:disabled {
            cursor: not-allowed;
            opacity: 40%;
        }
    }
`

const SpanSpread = styled.span`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 1rem 0;
`
