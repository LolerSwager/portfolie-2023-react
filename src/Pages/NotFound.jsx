import { useNavigate, Link } from "react-router-dom"
import styled from "styled-components"

export default function NotFound() {
    const wlp = window.location.pathname
    const navigate = useNavigate()

    document.title = `404 Page -> ${wlp.replaceAll('%20', ' ')}`

    return (
        <ErrorPage>
            <div>
                <h1>
                    Siden "<span>{wlp}</span>" blev ikke fundet
                </h1>
                <div>
                    <button onClick={() => navigate(-1)}>
                        <i class="fa-solid fa-arrow-left-long"></i> Gå tilbage til den sidste side
                    </button>
                    <Link to="/">
                        <i class="fa-solid fa-house-chimney"></i> Gå til forsiden
                    </Link>
                </div>
            </div>
        </ErrorPage>
    )
}

const ErrorPage = styled.main`
    display: grid;
    place-items: center;
    background-color: #1a1a1a;
    h1 {
        margin: 1rem;
    }
    button {
        background-color: var(--activeColor);
        color: #1a1a1a;
        border: 1px solid transparent;
        border-radius: 8px;
        transition: border-color 0.25s;
        padding: 0.6em 1em;
        margin: 0 0 0 1rem;
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
`
