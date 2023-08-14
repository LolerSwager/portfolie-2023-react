import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import AppRouter from "./Router/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./Style/GlobalStyle";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import KeyAction from "./Components/KeyAction";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
    const themeColor = localStorage.getItem("color");

    const theme = {
        dark: {
            color: themeColor,
        },
        light: {
            color: themeColor,
        },
    };

    const [selectedTheme, setSelectedTheme] = useState(theme);

    useEffect(() => {
        setSelectedTheme();
    }, [selectedTheme]);

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <>
                    <Header />
                    <AppRouter />
                    <Footer />
                </>
                <GlobalStyle />
                <ToastContainer theme="dark" />
                <KeyAction />
            </ThemeProvider>
        </BrowserRouter>
    );
}
