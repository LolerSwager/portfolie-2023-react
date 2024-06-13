import { BrowserRouter } from "react-router-dom";
import { styled, ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import AppRouter from "./Router/AppRouter";
import GlobalStyle from "./Style/GlobalStyle";
import KeyAction from "./Components/KeyAction";
import FloatingTool from "../src/Components/FloatingTool";
import Schare from "../src/Components/Schare";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
    const themeColor = localStorage.getItem("color");
    const pageWidth = localStorage.getItem("width");

    const theme = {
        dark: {
            color: themeColor,
            width: pageWidth,
        },
        light: {
            color: themeColor,
            width: pageWidth,
        },
    };

    const [selectedTheme, setSelectedTheme] = useState(theme);

    useEffect(() => {
        setSelectedTheme();
    }, [selectedTheme]);

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme} position="top-center">
                <>
                    <Header />
                    <AppRouter />
                    <Footer />
                </>
                <GlobalStyle />
                <ToastContainer theme="dark" position="top-right" />
                <KeyAction />
                <FloatingTool />
            </ThemeProvider>
        </BrowserRouter>
    );
}
