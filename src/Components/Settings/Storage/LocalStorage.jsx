import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import JsonReader from "../../JsonReader";

export default function LocalStorage() {
    const [localStorageKeys, setLocalStorageKeys] = useState(Object.keys(localStorage));

    useEffect(() => {
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

    const [isPopupVisible, setPopupVisible] = useState(false);
    const [popupData, setPopupData] = useState("");
    const [popupName, setPopupName] = useState("");

    const handleButtonClick = (item) => {
        setPopupData(localStorage.getItem(item));
        setPopupName(item);
        setPopupVisible(true);
    };

    const handleClosePopup = () => {
        setPopupVisible(false);
    };

    return (
        <StyledArticle>
            {localStorageKeys.map((item, index) => (
                <section key={index}>
                    <SpanRow>
                        <h4>{item}</h4>
                        {item === "color" ? <FontAwesomeIcon icon={faCircleInfo} title="This is the theme color of the site, It will be coming back as default value if you Clear it." /> : null}
                    </SpanRow>
                    <button onClick={() => handleButtonClick(item)}>Show Data</button>
                    <button onClick={() => RemoveLS(item)}>Clear</button>
                </section>
            ))}
            {localStorageKeys.length !== 0 ? <button onClick={ClearAllStorage}>Clear All Local Storage</button> : <p>There is no Local Storage</p>}
            {isPopupVisible && <JsonReader jsonData={popupData} name={popupName} onClose={handleClosePopup} />}
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
        grid-template-columns: minmax(150px, 1.75fr) auto auto;
        width: 100%;
        gap: 1rem;
    }
`;

const SpanRow = styled.span`
    display: flex;
    gap: 0.5rem;
    align-items: center;
`;
