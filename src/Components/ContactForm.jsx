import { styled } from "styled-components"

export default function ContactForm() {
    return (
        <StyledContactForm>
            <input type="text" placeholder="Dit Navn" />
            <textarea placeholder="skriv her..."></textarea>
            <button>Send</button>
        </StyledContactForm>
    )
}

const StyledContactForm = styled.div`
    display: grid;
    gap: 0.8rem;
    width: 100%;
    input,
    textarea,
    button {
        color: black;
        padding: 0.2rem;
        font-size: 1.2rem;
        justify-items: start;
        border: none;
    }
    button {
        padding: 0.3rem;
        &:hover {
            background-color: #8400db;
        }
    }
`
