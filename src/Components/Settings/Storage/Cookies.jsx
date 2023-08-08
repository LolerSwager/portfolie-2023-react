import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

export default function Cookies(){
    const [cookies, setCookies] = useState([{}]);

    document.cookie = "Cookie=Monster";

    useEffect(() => {
        const cookieArray = document.cookie.split(';');
        const cookiesObject = cookieArray.reduce((obj, str) => {
            const s = str.split('=');
            obj[s[0].trim()] = s[1];
            return obj;
        }, {});

        setCookies(cookiesObject);
    }, []);

    function ClearCookie(item) {
        alert('Cookie name: ' + item)
       /*  cookies(prevKeys => prevKeys.filter(key => key !== item));

        document.cookies.remove({
            url: 'http://localhost:3000',
            name: item,
          }) */
    }
    return(
        <StyledArticle>
            {Object.keys(cookies).map((item, index) => (
                <section key={index}>
                    <h4>{item}</h4>
                    <button onClick={()=> ClearCookie(item)}>Clear </button>
                </section>
            ))}
            {Object.keys(cookies).length !== 0 ? <button onClick={() => alert('nom nom nom...')}>Eat all the Cookies</button> : <p>There is no Cookies</p>}
        </StyledArticle>
    )
}


const StyledArticle = styled.article`
    padding: 1rem;
    background-color: var(--wrapperColor);
    border-radius: var(--borderRadius);
    max-width: 400px;
    @media only screen and (max-width: 600px){
        max-width: 100%;
    }
    section{
        display: grid;
        align-content: space-between;
        grid-template-columns: 
            minmax(150px, 1.75fr)
            auto;
        width: 100%;
    }
`