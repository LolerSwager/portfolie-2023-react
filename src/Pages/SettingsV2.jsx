import { styled } from "styled-components";
import Appearance from "../Components/Settings/Appearance";
import DeviceInfo from "../Components/Settings/DeviceInfo";
import Notifications from "../Components/Settings/Notifications";
import Permissions from "../Components/Settings/Permissions";
import Storage from "../Components/Settings/Storage";
import Main from "../Components/Main";
import { Link } from "react-router-dom";
import Button from "../Components/buttons/Button";

export default function SettingsV2() {
    return (
        <StyledSettings>
            <StyledSiteMenu>
                <ul>
                    <li>
                        <Link to="Appearance">Appearance</Link>
                    </li>
                    <li>
                        <Link to="Permissions">Permissions</Link>
                    </li>
                    <li>
                        <Link to="Notifications">Notifications</Link>
                    </li>
                    <li>
                        <Link to="Storage">Storage</Link>
                    </li>
                    <li>
                        <Link to="DeviceInfo">Device Info</Link>
                    </li>
                </ul>
                <Button ButtonName="Reload Page" isClicked={() => window.location.reload()} />
            </StyledSiteMenu>
            <Main PageHeader="Settings V2" PageTitle="Settings make it like you want it">
                <Appearance />
                <Permissions />
                <Notifications />
                <Storage />
                <DeviceInfo />
            </Main>
        </StyledSettings>
    );
}

const StyledSettings = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 1rem;
    // position: relative;
`;

const StyledSiteMenu = styled.aside`
    width: 200px;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #0f0f0f;
    // position: absolute;
    // justify-content: space-between;
    ul {
        list-style: none;
        li {
            display: flex;
            gap: 1rem;
            padding: 1rem;
            a {
                text-decoration: none;
            }
            &:hover {
                background-color: var(--wrapperColor);
            }
        }
    }
`;
