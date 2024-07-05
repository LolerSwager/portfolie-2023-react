import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import Button from "../Components/buttons/Button";
import Main from "../Components/Main";

export default function LoginPage() {
    const handleLogin = () => {
        window.location.href = `https://api.jannick.ninja/login`;
    };

    return (
        <Main PageHeader="Login" PageTitle="login">
            <StyledLoginPage>
                <h2>Get access using Discord AuthO2 </h2>
                <Button ButtonName="Login with" ButtonIconRight={<FontAwesomeIcon icon={faDiscord} />} isClicked={handleLogin} color="#5738d2" />
            </StyledLoginPage>
        </Main>
    );
}

const StyledLoginPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
`;
