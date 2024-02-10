import { styled } from "styled-components";

export default function ColorPalettes({ colorArray, themeColor, setThemeColor }) {
    return (
        <StyledColorWrapper>
            <div className="palette" style={{ backgroundColor: `${themeColor}` }}>
                <p>{themeColor}</p>
            </div>
            {colorArray.map((color) => {
                return <div className="palette" key={color} onClick={() => setThemeColor(color)} style={{ backgroundColor: `${color}` }}></div>;
            })}
        </StyledColorWrapper>
    );
}

const StyledColorWrapper = styled.div`
    display: flex;
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
            }
        }
        p {
            margin: 0 1rem;
            text-transform: uppercase;
        }
    }
`;
