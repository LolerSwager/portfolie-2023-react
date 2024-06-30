import React from "react";
import { styled } from "styled-components";

export default function GameCard({ serverIp, serverPort, serverTitle, serverGame, serverImage, isSteam }) {
    const steamLink = `steam://connect/${serverIp}:${serverPort}`;
    const minecraftLink = `minecraft://connect/${serverIp}:${serverPort}`;

    return (
        <StyledGameCard>
            <img src={serverImage} alt={`${serverGame} logo`} />

            <div className="info">
                <span>
                    <label htmlFor="game-name">Game</label>
                    <h3 id="game-name">{serverGame}</h3>
                </span>
                <span>
                    <label htmlFor="server-title">Title</label>
                    <h3 id="server-title">{serverTitle}</h3>
                </span>
                <span>
                    <label htmlFor="server-ip">IP</label>
                    <h3 id="server-ip">
                        {serverIp}:{serverPort}
                    </h3>
                </span>
            </div>

            <a href={isSteam ? steamLink : minecraftLink}>Join Game</a>
        </StyledGameCard>
    );
}

const StyledGameCard = styled.div`
    background-color: var(--wrapperColor);
    border-radius: var(--borderRadius);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    width: 300px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;

    @media only screen and (max-width: 500px) {
        width: 100%;
    }

    &:hover {
        transform: translateY(-5px);
    }

    img {
        width: 150px;
        height: 150px;
        border-radius: var(--borderRadius);
    }

    .info {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        width: 100%;

        span {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.2rem;
            text-align: center;

            label {
                font-weight: bold;
                font-size: 1.1em;
                color: #696969;
            }
            h3 {
                margin: 0;
                font-size: 1.2em;
            }
        }
    }

    a {
        display: inline-block;
        background-color: var(--activeColor);
        color: #fff;
        border: 1px solid transparent;
        border-radius: 4px;
        padding: 0.6em 1em;
        font-size: 1em;
        font-weight: 700;
        text-decoration: none;
        transition: all 0.25s;
        cursor: pointer;

        &:hover {
            background-color: #1a1a1a;
            color: var(--activeColor);
            border-color: var(--activeColor);
        }

        &:disabled {
            background-color: #1a1a1a;
            color: #6a6a6a;
            cursor: default;

            &:hover {
                background-color: #1a1a1a;
                color: #6a6a6a;
                border-color: #1a1a1a;
            }
        }
    }
`;
