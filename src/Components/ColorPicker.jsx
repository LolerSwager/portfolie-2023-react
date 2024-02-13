import { styled } from "styled-components";

export default function ColorPicker({ themeColor, setThemeColor }) {
    return (
        <StyledColorPicker>
            <div>
                <div className="palette" style={{ backgroundColor: `${themeColor}` }}></div>
                <input type="text" size="10" placeholder="color value goes here" onChange={(event) => setThemeColor(event.target.value)} value={themeColor} />
            </div>
            {/* <Gradiant></Gradiant> */}
        </StyledColorPicker>
    );
}

const Gradiant = styled.div`
    background: linear-gradient(
        to right,
        rgb(255, 0, 0) 0%,
        rgb(255, 255, 0) 16.666%,
        rgb(0, 255, 0) 33.333%,
        rgb(0, 255, 255) 50%,
        rgb(0, 0, 255) 66.666%,
        rgb(255, 0, 255) 83.333%,
        rgb(255, 0, 0) 100%
    );
    width: 100%;
    height: 100px;
    margin: 1rem 0 0 0;
    border-radius: calc(var(--borderRadius) / 2);
`;

const StyledColorPicker = styled.div`
    background-color: black;
    padding: 1rem;
    border-radius: calc(var(--borderRadius) / 2);

    div {
        display: flex;
        gap: 1rem;
        .palette {
            min-width: 50px;
            min-height: 50px;
            border-radius: var(--borderRadius);
            cursor: pointer;
        }
        input {
            color: var(--fontcolor);
            background-color: var(--wrapperColor);
            border: 1px solid var(--contrastColor);
            padding: 0.3rem 0.5rem;
            border-radius: calc(var(--borderRadius) / 2);
            font-size: 1.3rem;
            &:hover {
                border: 1px solid var(--wrapperColor);
            }
        }
    }
`;
