import { styled } from "styled-components";
export default function Button({ ButtonDisabled = false, ButtonName, isClicked, color, ButtonIconLeft, ButtonIconRight }) {
    return (
        <StyledButton onClick={isClicked} disabled={ButtonDisabled} color={color}>
            {ButtonIconLeft}
            {ButtonName}
            {ButtonIconRight}
        </StyledButton>
    );
}

const StyledButton = styled.button`
    background-color: ${(props) => (props.color ? props.color : "var(--activeColor)")};
    color: #1a1a1a;
    border: 1px solid transparent;
    border-radius: calc(var(--borderRadius) / 2);
    transition: border-color 0.25s;
    padding: 0.6em 1em;
    font-size: 1em;
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    * {
        fill: #1a1a1a;
    }
    &:hover {
        border-color: ${(props) => (props.color ? props.color : "var(--activeColor)")};
        background-color: #1a1a1a;
        color: ${(props) => (props.color ? props.color : "var(--activeColor)")};
        * {
            fill: ${(props) => (props.color ? props.color : "var(--activeColor)")};
        }
    }
    &:disabled {
        background-color: #1a1a1a;
        color: #6a6a6a;
        &:hover {
            border-color: #1a1a1a;
            background-color: #1a1a1a;
            color: #6a6a6a;
            cursor: default;
        }
    }
    .reversed {
        background-color: #1a1a1a;
        color: ${(props) => (props.color ? props.color : "var(--activeColor)")};
        border-color: ${(props) => (props.color ? props.color : "var(--activeColor)")};
        &:hover {
            background-color: ${(props) => (props.color ? props.color : "var(--activeColor)")};
            color: #1a1a1a;
        }
    }
`;
