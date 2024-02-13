import { styled } from "styled-components";

export default function ColorPalettes({ colorArray, themeColor, setThemeColor, isToggeld, onToggle }) {
    return (
        <StyledColorWrapper>
            <label className="palette" style={{ backgroundColor: `${themeColor}` }} title="Click to open color Picking tool">
                <input type="checkbox" checked={isToggeld} onChange={onToggle} />
                <p>{themeColor}</p>
            </label>
            {colorArray.map((color) => {
                return <div className="palette" key={color} onClick={() => setThemeColor(color)} style={{ backgroundColor: `${color}` }}></div>;
            })}
        </StyledColorWrapper>
    );
}

const StyledColorWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 1rem 0;
    .palette {
        min-width: 50px;
        min-height: 50px;
        border-radius: var(--borderRadius);
        cursor: pointer;
        transition: transform 0.2s ease-in-out;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &:hover {
            transform: rotate(135deg);
        }
        &:first-child {
            &:hover {
                transform: rotate(0);
                /* &::after {
                    content: "+";
                    margin-right: 1rem;
                    font-size: 2rem;
                } */
            }
        }
        p {
            margin: 0 1rem;
            text-transform: uppercase;
        }
        input {
            display: none;
        }
    }
`;
