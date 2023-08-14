import { useEffect, useState } from "react";
import { styled } from "styled-components";

export default function Cookies() {
    const [cookies, setCookies] = useState([]);

    document.cookie = "This is not working=error";

    useEffect(() => {
        const cookieArray = document.cookie.split(";");
        const cookiesObject = cookieArray.reduce((obj, str) => {
            const [name, value] = str.split("=");
            obj[name.trim()] = value;
            return obj;
        }, {});

        setCookies(cookiesObject);
    }, []);

    function ClearCookie(item) {
        setCookies([]);

        /* document.cookies.remove({
            url: 'http://localhost:3000',
            name: item,
          })  */
    }

    function ClearAllCookie() {
        const cookies = document.cookie.split(";");
        for (const cookie of cookies) {
            const [name, value] = cookie.split("=");
            document.cookie = `${name}=${value}; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
        }
        setCookies([]);
    }

    return (
        <StyledArticle>
            {cookies &&
                Object.keys(cookies).map((item, index) => (
                    <section key={index}>
                        <h4>{item}</h4>
                        <button onClick={() => ClearCookie(item)} disabled title="Working on fixing cookie">
                            Clear{" "}
                        </button>
                    </section>
                ))}
            {Object.keys(cookies).length !== 0 ? <button onClick={() => ClearAllCookie()}>Eat all the Cookies</button> : <p>There is no Cookies</p>}
        </StyledArticle>
    );
}

const StyledArticle = styled.article`
    padding: 1rem;
    background-color: var(--wrapperColor);
    border-radius: var(--borderRadius);
    section {
        display: grid;
        align-content: space-between;
        grid-template-columns:
            minmax(150px, 1.75fr)
            auto;
        width: 100%;
    }
`;
