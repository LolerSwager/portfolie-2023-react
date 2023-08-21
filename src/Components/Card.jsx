import { styled } from "styled-components";

export default function Card({ content }) {
    return (
        <StyledCard>
            <CardFrame>
                <CardContent>{content}</CardContent>
            </CardFrame>
        </StyledCard>
    );
}

const StyledCard = styled.div`
    width: 100%;
    height: 100%; //! this is stupid

    transform-style: preserve-3d;
    transition: transform 300ms;
    //box-shadow: 0px 0px 10px 1px #000000ee;
    border-radius: var(--borderRadius);

    @keyframes rotation_481 {
        0% {
            transform: rotateZ(0deg);
        }

        0% {
            transform: rotateZ(360deg);
        }
    }
`;

const CardFrame = styled.div`
    background-color: var(--wrapperColor);
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: var(--borderRadius);
    overflow: hidden;
    justify-content: center;
    display: flex;
    align-items: center;
    &:hover {
        &:before {
            position: absolute;
            content: " ";
            display: block;
            width: 25%;
            height: 400%;
            background: linear-gradient(90deg, transparent, var(--activeColor), var(--activeColor), var(--activeColor), var(--activeColor), transparent);
            animation: rotation_481 5000ms infinite linear;
        }
    }
`;

const CardContent = styled.div`
    position: absolute;
    width: 99%;
    height: 99%;
    background-color: var(--wrapperColor);
    border-radius: var(--borderRadius);
    color: white;
    gap: 30px;
`;
