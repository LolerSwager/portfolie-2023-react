import { faHouseChimney, faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import Main from "../Components/Main";

export default function NotFound() {
    const wlp = window.location.pathname;
    const navigate = useNavigate();
    return (
        <Main PageHeader="404 Page Not Found" PageTitle={`404 Page -> ${wlp.replaceAll("%20", " ")}`}>
            <StyledErrorPage>
                <h2>
                    Siden "<span>{wlp}</span>" blev ikke fundet
                </h2>
                <div className="spacer">
                    <button onClick={() => navigate(-1)}>
                        <FontAwesomeIcon icon={faLeftLong} /> Gå tilbage til den sidste side
                    </button>
                    <Link to="/" className="reversed">
                        <FontAwesomeIcon icon={faHouseChimney} /> Gå til forsiden
                    </Link>
                </div>
            </StyledErrorPage>
        </Main>
    );
}

const StyledErrorPage = styled.section`
    display: flex;
    align-items: center;
    //justify-content: center;
    flex-direction: column;
    z-index: 10000;
    margin: 10% 0;
    h2 {
        margin: 1rem 1rem 0.5rem 1rem;
    }
    .spacer {
        gap: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0.5rem 0 1rem 0;
        button,
        a {
            background-color: var(--activeColor);
            color: #1a1a1a;
            border: 1px solid transparent;
            border-radius: calc(var(--borderRadius) / 2);
            transition: border-color 0.25s;
            padding: 0.6em 1em;
            font-size: 1em;
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
        .reversed {
            background-color: #1a1a1a;
            color: var(--activeColor);
            border-color: var(--activeColor);
            &:hover {
                background-color: var(--activeColor);
                color: #1a1a1a;
            }
        }
    }
`;
