import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { faClipboard, faCompress, faEllipsis, faExpand, faFileArrowDown, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import Prism from "prismjs";
import "prismjs/components/prism-json";
import "../Assets/styles/prism-theme.css";

export default function JsonReader({ jsonData, onClose, name = "no headline" }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [parsedData, setParsedData] = useState(null);

    useEffect(() => {
        if (typeof jsonData === "string") {
            try {
                const parsedJson = JSON.parse(jsonData);
                setParsedData(parsedJson);
            } catch (error) {
                console.error("Error parsing JSON:", error);
                setParsedData(jsonData); // Display as text if not valid JSON
            }
        } else {
            setParsedData(jsonData);
        }
    }, [jsonData]);

    useEffect(() => {
        Prism.highlightAll();
    }, [parsedData, isExpanded]);

    const handleDownload = () => {
        const jsonString = JSON.stringify(parsedData, null, 2);
        const blob = new Blob([jsonString], { type: "text/plain" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${name}.txt`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => window.URL.revokeObjectURL(url), 100);
    };

    const handleCopyToClipboard = () => {
        const jsonString = JSON.stringify(parsedData, null, 2);
        navigator.clipboard
            .writeText(jsonString)
            .then(() => alert("JSON copied to clipboard"))
            .catch((err) => console.error("Failed to copy:", err));
    };

    return (
        <StyledJsonReader isExpanded={isExpanded}>
            <div className="popup">
                <div className="popup-header">
                    <span>
                        <h2>{name}</h2>
                        <ul>
                            <li onClick={handleCopyToClipboard}>
                                <FontAwesomeIcon icon={faClipboard} />
                                <p>Copy</p>
                            </li>
                            <li onClick={handleDownload}>
                                <FontAwesomeIcon icon={faFileArrowDown} />
                                <p>Download</p>
                            </li>

                            <li onClick={() => setIsExpanded((prevState) => !prevState)}>
                                {isExpanded ? <FontAwesomeIcon icon={faCompress} /> : <FontAwesomeIcon icon={faExpand} />}
                                {isExpanded ? <p>Compress</p> : <p>Expand</p>}
                            </li>
                        </ul>
                    </span>
                    <FontAwesomeIcon icon={faXmark} className="faicon" onClick={onClose} />
                </div>
                <pre className="popup-content">
                    <code className="language-json">{isExpanded ? JSON.stringify(parsedData, null, 2) : JSON.stringify(parsedData, null, 2).substring(0, 700)}</code>
                </pre>
                {JSON.stringify(parsedData, null, 2).length > 700 && (
                    <span onClick={() => setIsExpanded((prevState) => !prevState)} className="toggle-button">
                        {isExpanded ? "Show Less" : "Show More"}
                    </span>
                )}
            </div>
        </StyledJsonReader>
    );
}

JsonReader.propTypes = {
    jsonData: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string, PropTypes.number]).isRequired,
    onClose: PropTypes.func.isRequired,
    name: PropTypes.string,
};

const StyledJsonReader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    .popup {
        background: var(--backGroundColor);
        color: white;
        min-width: 300px;
        max-width: 100%;
        max-height: 100dvh;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        border: 2px solid var(--wrapperColor);
        border-radius: var(--borderRadius);
        margin: 1rem;
        @media only screen and (min-width: 900px) {
            max-width: ${({ isExpanded }) => (!isExpanded ? "50%" : "100%;")};
        }
    }

    .popup-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: var(--wrapperColor);
        padding: 0.2rem 0.5rem;
        span {
            display: flex;
            align-items: center;
            gap: 1rem;
            ul {
                display: flex;
                li {
                    display: flex;
                    list-style: none;
                    align-items: center;
                    background: var(--wrapperColor);
                    text-transform: uppercase;
                    padding: 0.5rem;
                    gap: 0.5rem;
                    cursor: pointer;
                    position: relative;
                    &:hover * {
                        fill: var(--activeColor);
                    }
                    &:hover p {
                        display: flex;
                        color: var(--activeColor);
                    }
                    p {
                        position: absolute;
                        z-index: 11;
                        transform: translate(-50%);
                        left: 1rem;
                        top: 2rem;
                        background-color: var(--wrapperColor);
                        padding: 0.5rem;
                        display: none;
                    }
                }
            }
        }
        .faicon {
            height: 1.6rem;
            width: 1.6rem;
            cursor: pointer;
        }

        & *:hover {
            fill: var(--activeColor);
        }
    }

    .popup-content {
        padding: 1rem;
        overflow-y: auto;
        overflow-x: auto;
        white-space: pre-wrap;
        flex-grow: 1;
    }

    .toggle-button {
        color: var(--activeColor);
        cursor: pointer;
        display: block;
        margin-bottom: 1rem;
        text-align: center;
    }
`;
