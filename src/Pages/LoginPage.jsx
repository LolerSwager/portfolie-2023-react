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
                <h2>Login with Discord</h2>
                <Button ButtonName="Login" isClicked={handleLogin} />
            </StyledLoginPage>
        </Main>
    );
}

const StyledLoginPage = styled.div``;
