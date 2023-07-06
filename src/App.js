import { styled } from "styled-components"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import AppRouter from "./Router/AppRouter"
import { BrowserRouter } from "react-router-dom"

export default function App() {
    return (
        <STyledApp>
            <BrowserRouter>
                <Header />
                <AppRouter />
                <Footer />
            </BrowserRouter>
        </STyledApp>
    )
}

const STyledApp = styled.body`
    * {
        @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
        /* --background-color: #0f0f0f;
        --font-color: #eeeeee;
        --accent-color: #8400db;
        --card-color: #181818; */

        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
        color: #eeeeee;
    }

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto minmax(500px, 1fr) auto;
    width: 100%;
    min-height: 100dvh;
    background-color: #181818;
`
