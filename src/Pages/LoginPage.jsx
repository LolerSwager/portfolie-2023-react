import { styled } from "styled-components";
import Main from "../Components/Main";

export default function LoginPage() {
    const handleLogin = () => {
        window.location.href = `https://api.jannick.ninja/login`;
    };

    return (
        <Main PageHeader="Login" PageTitle="login">
            <StyledLoginPage>
                <h2>Login with Discord</h2>
                <button onClick={handleLogin}>Login</button>
            </StyledLoginPage>
        </Main>
    );
}

const StyledLoginPage = styled.div``;
