import { useEffect, useState } from "react";
import { styled } from "styled-components";
import RadioButton from "../buttons/RadioButton";
import ToggleSwitch from "../buttons/ToggleSwitch";

export default function Appearance() {
    const [themeColor, setThemeColor] = useState(localStorage.getItem("color") ? localStorage.getItem("color") : "#8400db");

    useEffect(() => {
        localStorage.setItem("color", themeColor);
    }, [themeColor]);

    return (
        <>
            <h2 id="Appearance">Appearance</h2>
            <section>
                <label>Customize primary color</label>
                <ColorPicker>
                    <input type="color" onChange={(event) => setThemeColor(event.target.value)} value={themeColor}></input>
                    <input type="text" onChange={(event) => setThemeColor(event.target.value)} value={themeColor} />
                </ColorPicker>
            </section>
            <section>
                <label>Theme</label>
                <StyledArticle>
                    <section>
                        <RadioButton RadioDisabled={true} RadioDcategory="theme" labelName="Light" isChecked={true} />
                    </section>
                    <section>
                        <RadioButton RadioDisabled={true} RadioDcategory="theme" labelName="Dark" isChecked={true} />
                    </section>
                </StyledArticle>
            </section>
            <section>
                <label>Corners</label>
                <StyledArticle>
                    <section>
                        <RadioButton RadioDisabled={true} RadioDcategory="corners" labelName="Square" isChecked={true} />
                    </section>
                    <section>
                        <RadioButton RadioDisabled={true} RadioDcategory="corners" labelName="Rounded" isChecked={true} />
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
                        <RadioButton RadioDisabled={true} RadioDcategory="Toastify" labelName="Right Top" isChecked={true} />
                    </section>
                    <section>
                        <RadioButton RadioDisabled={true} RadioDcategory="Toastify" labelName="Right TOP" isChecked={true} />
                    </section>
                    <section>
                        <RadioButton RadioDisabled={true} RadioDcategory="Toastify" labelName="Left Bottom" isChecked={true} />
                    </section>

                    <section>
                        <RadioButton RadioDisabled={true} RadioDcategory="Toastify" labelName="Left Bottom" isChecked={true} />
                    </section>
                </StyledArticle>
            </section>
        </>
    );
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
`;

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
    }
`;

const SpanSpread = styled.span`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 1rem 0;
`;
