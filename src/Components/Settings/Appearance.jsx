import { useEffect, useState } from "react";
import { styled } from "styled-components";
import ColorPalettes from "../ColorPalettes";
import RadioButton from "../buttons/RadioButton";
import ToggleSwitch from "../buttons/ToggleSwitch";
import ColorPicker from "../ColorPicker";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";

export default function Appearance() {
    const defultColorPalled = ["#099268", "#228be6", "#7950f2", "#be4bdb", "#e64980", "#f63f5f", "#f99268"];
    const [themeColor, setThemeColor] = useState(localStorage.getItem("color") ? localStorage.getItem("color") : "#8400db");
    const [colorArray, setColorArray] = useState(defultColorPalled);
    const [pageWidth, setPageWidth] = useState("1200px");

    const [showDisabled, setShowDisabled] = useState(false);

    useEffect(() => {
        localStorage.setItem("color", themeColor);
        localStorage.setItem("Width", pageWidth);
    }, [themeColor, pageWidth]);

    return (
        <>
            <h2 id="Appearance">Appearance</h2>
            <section>
                <label>Customize primary color</label>
                <ColorPalettes colorArray={colorArray} themeColor={themeColor} setThemeColor={setThemeColor} isToggeld={showDisabled} onToggle={() => setShowDisabled((prevState) => !prevState)} />
                {showDisabled === true ? <ColorPicker themeColor={themeColor} setThemeColor={setThemeColor} /> : <></>}
                {/* <OldColorPicker>
                    <input type="color" onChange={(event) => setThemeColor(event.target.value)} value={themeColor}></input>
                    <input type="text" onChange={(event) => setThemeColor(event.target.value)} value={themeColor} />
                </OldColorPicker> */}
            </section>
            <section>
                <label>Page Width</label>
                <PageWidth>
                    <input type="text" onChange={(event) => setPageWidth(event.target.value)} value={pageWidth} disabled={true} />
                    <ToggleSwitch ToggleDisabled={true} isToggeld={true} />
                </PageWidth>
            </section>
            <section>
                <label>Theme</label>
                <StyledArticle>
                    <section>
                        <RadioButton RadioDisabled={true} RadioDcategory="theme" labelName="Light" isChecked={false} />
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
                        <RadioButton RadioDisabled={true} RadioDcategory="corners" labelName="Square" isChecked={false} />
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
                        <RadioButton RadioDisabled={true} RadioDcategory="Toastify" labelName="Left Top" isChecked={false} />
                    </section>
                    <section>
                        <RadioButton RadioDisabled={true} RadioDcategory="Toastify" labelName="Right Top" isChecked={true} />
                    </section>
                    <section>
                        <RadioButton RadioDisabled={true} RadioDcategory="Toastify" labelName="Left Bottom" isChecked={false} />
                    </section>
                    <section>
                        <RadioButton RadioDisabled={true} RadioDcategory="Toastify" labelName="Right Bottom" isChecked={false} />
                    </section>
                </StyledArticle>
            </section>
            <section>
                <SpanSpread>
                    <label>FloatingTool</label>
                    <ToggleSwitch ToggleDisabled={true} isToggeld={true} />
                </SpanSpread>
                <StyledArticle>
                    <section>
                        <RadioButton RadioDisabled={true} RadioDcategory="FloatingTool" labelName="Left Side" isChecked={false} />
                    </section>
                    <section>
                        <RadioButton RadioDisabled={true} RadioDcategory="FloatingTool" labelName="Right Side" isChecked={true} />
                    </section>
                </StyledArticle>
            </section>
        </>
    );
}

const PageWidth = styled.span`
    display: flex;
    justify-content: space-between;
    background-color: var(--wrapperColor);
    padding: 1rem;
    gap: 0.3rem;
    border-radius: calc(var(--borderRadius) / 2);
    input {
        border: none;
        color: #eeeeee;
        background-color: transparent;
        width: 100%;
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
