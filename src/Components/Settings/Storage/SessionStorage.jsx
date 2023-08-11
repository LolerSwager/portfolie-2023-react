import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';

export default function SessionStorage(){
    const [sessionStorageKeys, setSessionStorageKeys] = useState(Object.keys(sessionStorage));

    useEffect(() => {
        // Get the keys from local storage and store them in the state
        const keys = [];
        for (let i = 0; i < sessionStorage.length; i++) {
          keys.push(sessionStorage.key(i));
        }
        setSessionStorageKeys(keys);
    }, []);

    function RemoveSS(item) {
        sessionStorage.removeItem(item)
        setSessionStorageKeys(prevKeys => prevKeys.filter(key => key !== item));
    }

    function ClearAllStorage(){
        sessionStorage.clear()
        setSessionStorageKeys([])
    }

    
    return(
        <StyledArticle>
            {sessionStorageKeys.map((item, index) => (
                <section key={index}>
                    <h4>{item}</h4>
                    <button onClick={() => RemoveSS(item)}>Clear </button>
                </section>
            ))}
           {sessionStorageKeys.length !== 0 ? <button onClick={ClearAllStorage}>Clear All Session Storage</button> : <p>There is no Session Storage</p>} 
        </StyledArticle>
    )
}

const StyledArticle = styled.article`
    padding: 1rem;
    background-color: var(--wrapperColor);
    border-radius: var(--borderRadius);
    section{
        display: grid;
        align-content: space-between;
        grid-template-columns: 
            minmax(150px, 1.75fr)
            auto;
        width: 100%;
    }
`