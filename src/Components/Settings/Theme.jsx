import { useEffect, useState } from "react"
import { styled } from "styled-components"

export default function Theme() {
    const [themeColor, setThemeColor] = useState(
        localStorage.getItem("color") ? localStorage.getItem("color") : "#8400db"
    )

    useEffect(() => {
        localStorage.setItem("color", themeColor)
    }, [themeColor])

    return (
        <>
           
            <h2>Appearance</h2>
            <article>
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

                <button onClick={() => window.location.reload()}>Reload</button>
            </article>
        </>
    )
}

const ColorPicker = styled.span`
    display: flex;

    background-color: var(--wrapperColor);
    padding: 0.3rem 0.5rem;
    gap: 0.3rem;
    input[type="color"] {
        width: 25px;
    }
    input {
        border: none;
        color: #eeeeee;
        background-color: transparent;
    }
`
