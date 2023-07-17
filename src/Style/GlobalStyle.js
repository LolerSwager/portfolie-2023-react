import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

    @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
    
    * {   
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
        color: var(--fontColor);
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
        --wrapperColorDark: #0f0f0f;

        // light
        --backGroundColorLight: #eeeeee;
        --fontColorLight: #000000;
        --wrapperColorLight: #0f0f0f;

        // changing
        --activeColor: ${({ theme }) => (theme.dark.color ? theme.dark.color : "#8400db")};
        
        --backGroundColor: var(--backGroundColorDark);
        --fontColor: var(--fontColorDark);
        --wrapperColor: var(--wrapperColorDark);


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

`

export default GlobalStyle