import React from "react";
import { styled } from "styled-components";
import GameCard from "../Components/GameCard";
import Main from "../Components/Main";

export default function ServerPage({}) {
    return (
        <Main PageHeader="server page" PageTitle="make a play">
            <StyledServerPage>
                <GameCard
                    serverIp="pz.jannick.ninja"
                    serverPort="16261"
                    serverTitle="Go get em"
                    serverGame="Project Zomboid"
                    serverImage="https://cdn2.steamgriddb.com/icon_thumb/8476d966ed57bf67ad4ce07d59ca80ac.png"
                    isSteam={true}
                />
                {
                    <GameCard
                        serverIp="mc.northwing.games"
                        serverPort="25565"
                        serverTitle="Server Title Goes Here"
                        serverGame="Minecraft"
                        serverImage="https://assets-prd.ignimgs.com/2021/12/14/minecraft-1639513933156.jpg"
                        isSteam={false}
                    />
                }
            </StyledServerPage>
        </Main>
    );
}

const StyledServerPage = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 2rem;
    @media only screen and (max-width: 500px) {
        padding: 1rem;
        gap: 1rem;
    }
`;
