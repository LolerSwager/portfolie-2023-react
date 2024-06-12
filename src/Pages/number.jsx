import { faHouseChimney, faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import Main from "../Components/Main";

export default function Number() {
    const wlp = window.location.pathname;
    const navigate = useNavigate();
    return (
        <Main PageHeader="phone number" PageTitle={`Phone Number`}>
            <StyledPhoneNumber>
                <button onClick={() => window.open("tel:+4520665586")} title="Ring til mig :D">
                    +45 20 66 55 86
                </button>
            </StyledPhoneNumber>
        </Main>
    );
}

const StyledPhoneNumber = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 10000;
    margin: 0;
    height: 40vh;
    button {
        background-color: var(--activeColor);
        color: #1a1a1a;
        border: 1px solid transparent;
        border-radius: calc(var(--borderRadius) / 2);
        transition: border-color 0.25s;
        padding: 0.6em 1em;
        font-size: 1.5em;
        font-weight: 700;
        text-decoration: none;
        cursor: pointer;
        &:hover {
            border-color: var(--activeColor);
            background-color: #1a1a1a;
            color: var(--activeColor);
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
    }
`;
