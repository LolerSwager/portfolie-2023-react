import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {   
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
        color: var(--fontColor);
       /*  &:focus { // this is the border when tapping throw the page
            outline: none !important;
            border: 1px solid var(--activeColor);
            box-shadow: 0 0 15px var(--activeColor);
        } */
    }

    #root{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto minmax(500px, 1fr) auto;
        width: 100%;
        min-height: 100dvh;
        background-color: var(--backGroundColor);
    }


    :root{
        // dark
        --backGroundColorDark: #181818;
        --fontColorDark: #eeeeee;
        --wrapperColorDark: #2D2D2D;

        // light
        --backGroundColorLight: #eeeeee;
        --fontColorLight: #000000;
        --wrapperColorLight: #0f0f0f;

        // changing
        --activeColor: ${({ theme }) => (theme.dark.color ? theme.dark.color : "#8400db")};
        
        --backGroundColor: var(--backGroundColorDark);
        --fontColor: var(--fontColorDark);
        --contrastColor: #000000;
        --wrapperColor: var(--wrapperColorDark);
        --borderRadius: 10px;
        --pageMaxWidth: 1200px;
        --MobileWidth: 600px;

        //! react-toastify custom css
        --toastify-color-progress-dark: ${({ theme }) => (theme.dark.color ? theme.dark.color : "#8400db")};
        --toastify-color-dark: var( --wrapperColor);
        --toastify-text-color-dark:var(--fontColor);
    }

    *::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    *::-webkit-scrollbar-track {
        background-color: #000000;
    }

    *::-webkit-scrollbar-thumb {
        background-color: var(--activeColor);
    }

    /*  #8400db Active
        #0f0f0f Header
        #000000 Footer

        some #0080ff
    */
`;

export default GlobalStyle;
