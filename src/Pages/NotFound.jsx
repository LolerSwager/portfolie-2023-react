import { faHouseChimney, faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

export default function NotFound() {
    const wlp = window.location.pathname;
    const navigate = useNavigate();

    document.title = `404 Page -> ${wlp.replaceAll("%20", " ")}`;

    return (
        <ErrorPage>
            <h1>
                Siden "<span>{wlp}</span>" blev ikke fundet
            </h1>
            <div className="spacer">
                <button onClick={() => navigate(-1)}>
                    <FontAwesomeIcon icon={faLeftLong} /> Gå tilbage til den sidste side
                </button>
                <Link to="/">
                    <FontAwesomeIcon icon={faHouseChimney} /> Gå til forsiden
                </Link>
            </div>
        </ErrorPage>
    );
}

const ErrorPage = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #1a1a1a;
    h1 {
        margin: 1rem;
    }
    .spacer {
        gap: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
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
    }
`;
