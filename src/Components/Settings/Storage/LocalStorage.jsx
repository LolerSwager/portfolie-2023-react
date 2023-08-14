import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export default function LocalStorage() {
    const [localStorageKeys, setLocalStorageKeys] = useState(Object.keys(localStorage));

    useEffect(() => {
        // Get the keys from local storage and store them in the state
        const keys = [];
        for (let i = 0; i < localStorage.length; i++) {
            keys.push(localStorage.key(i));
        }
        setLocalStorageKeys(keys);
    }, []);

    function RemoveLS(item) {
        localStorage.removeItem(item);
        setLocalStorageKeys((prevKeys) => prevKeys.filter((key) => key !== item));
    }

    function ClearAllStorage() {
        localStorage.clear();
        setLocalStorageKeys([]);
    }

    return (
        <StyledArticle>
            {localStorageKeys.map((item, index) => (
                <section key={index}>
                    <SpanRow>
                        <h4>{item}</h4>
                        {item === "color" ? <FontAwesomeIcon icon={faCircleInfo} title="This is the theme color of the site, It will be coming back as default value if you Clear it." /> : ""}
                    </SpanRow>
                    <button onClick={() => RemoveLS(item)}>Clear </button>
                </section>
            ))}
            {localStorageKeys.length !== 0 ? <button onClick={ClearAllStorage}>Clear All Local Storage</button> : <p>There is no Local Storage</p>}
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

const SpanRow = styled.span`
    display: flex;
    gap: 0.5rem;
    align-items: center;
`;
