import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Main from "../Components/Main";
import { RoutesArray } from "../Router/RoutesArray";

export default function LoginPage() {
    return (
        <Main PageHeader="Login" PageTitle="login">
            <StyledLoginPage>
                <h2> Login Page comming.. </h2>
            </StyledLoginPage>
        </Main>
    );
}

const StyledLoginPage = styled.div`
    h2 {
        color: red;
    }
`;
