import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid, faApple, faChrome, faEdge, faFirefoxBrowser, faLinux, faOpera, faSafari, faUbuntu, faWindows } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faInfoCircle, faSatellite, faShieldHalved, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function DeviceInfo() {
    const [oSName, setOSName] = useState("Unknown");
    const [oSIcon, setOSIcon] = useState(faTriangleExclamation);
    useEffect(() => {
        if (window.navigator.userAgent.indexOf("Win") !== -1) {
            setOSName("Windows");
            setOSIcon(faWindows);
        } else if (window.navigator.userAgent.indexOf("Mac") !== -1) {
            setOSName("MacOS");
            setOSIcon(faApple);
        } else if (window.navigator.userAgent.indexOf("android") !== -1) {
            setOSName("Android");
            setOSIcon(faAndroid);
        } else if (window.navigator.userAgent.indexOf("Linux x86_64") !== -1) {
            setOSName("Ubuntu");
            setOSIcon(faUbuntu);
        } else if (window.navigator.userAgent.indexOf("X11") !== -1) {
            setOSName("UNIX");
            setOSIcon(faTriangleExclamation);
        } else if (window.navigator.userAgent.indexOf("Linux") !== -1) {
            setOSName("Linux");
            setOSIcon(faLinux);
        } else {
            setOSName("unknown");
            setOSIcon(faTriangleExclamation);
        }
    }, []);

    const [browserName, setBrowserName] = useState("Unknown");
    const [browserIcon, setBrowserIcon] = useState(faTriangleExclamation);

    useEffect(() => {
        if (window.navigator.userAgent.indexOf("Chrome") !== -1) {
            setBrowserName("Chrome");
            setBrowserIcon(faChrome);
        } else if (window.navigator.userAgent.indexOf("Safari") !== -1) {
            setBrowserName("Safari");
            setBrowserIcon(faSafari);
        } else if (window.navigator.userAgent.indexOf("Firefox") !== -1) {
            setBrowserName("FireFox");
            setBrowserIcon(faFirefoxBrowser);
        } else if (window.navigator.userAgent.indexOf("Opera") !== -1) {
            setBrowserName("Opera");
            setBrowserIcon(faOpera);
        } else if (window.navigator.userAgent.indexOf("Edg") !== -1) {
            setBrowserName("Edge");
            setBrowserIcon(faEdge);
        } else {
            setBrowserName("unknown");
            setBrowserIcon(faTriangleExclamation);
        }
    }, []);

    const [adBlockEnabled, setAdBlockEnabled] = useState(false);
    useEffect(() => {
        const googleAdUrl = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";

        const checkAdBlock = async () => {
            try {
                await fetch(new Request(googleAdUrl));
            } catch (e) {
                setAdBlockEnabled(true);
            }
        };

        checkAdBlock();
    }, []);

    const [ipAddress, setIpAddress] = useState("Connecting...");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://nodejs-menu.vercel.app/info");
                setIpAddress(response.data);
            } catch (error) {
                console.error("Error fetching IP address:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const [showUserAgentBox, setShowUserAgentBox] = useState(false);

    return (
        <>
            <h2 id="DeviceInfo">
                Device Info <Beta>beta</Beta>
            </h2>
            <StyledArticle onClick={() => setShowUserAgentBox((prevState) => !prevState)}>
                <SpanSpread>
                    <SpanCollom>
                        <FontAwesomeIcon icon={faDesktop} size="3x" />
                        <h3>Desktop</h3>
                    </SpanCollom>
                    <SpanCollom>
                        <SpanRow>
                            <FontAwesomeIcon icon={oSIcon} />
                            <h4>{oSName}</h4>
                        </SpanRow>
                        <SpanRow>
                            <FontAwesomeIcon icon={browserIcon} />
                            <SpanRow>
                                <h4>{browserName}</h4>
                                <p>{}</p>
                            </SpanRow>
                        </SpanRow>
                        <SpanRow>
                            <FontAwesomeIcon icon={faShieldHalved} />
                            <SpanRow>
                                <h4>Adblocker</h4>
                                {adBlockEnabled ? <p>True</p> : <p>False</p>}
                            </SpanRow>
                        </SpanRow>
                        <SpanRow>
                            <FontAwesomeIcon icon={faSatellite} />
                            <SpanRow>
                                <h4>IP </h4>
                                {loading ? <p>Loading...</p> : <p>{ipAddress.ip}</p>}
                            </SpanRow>
                        </SpanRow>
                    </SpanCollom>
                </SpanSpread>
                {showUserAgentBox === true ? (
                    <SpanCenter>
                        <FontAwesomeIcon icon={faInfoCircle} title="This is for the more advanced user" />
                        <SpanRow>
                            <h4>{window.navigator.userAgent}</h4>
                        </SpanRow>
                    </SpanCenter>
                ) : (
                    <></>
                )}
            </StyledArticle>
        </>
    );
}

const StyledArticle = styled.article`
    padding: 1rem;
    background-color: var(--wrapperColor);
    border-radius: var(--borderRadius);
    cursor: pointer;
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

const SpanCollom = styled.span`
    display: flex;
    flex-direction: column;
`;

const SpanSpread = styled.span`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const SpanCenter = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`;

const Beta = styled.small`
    font-size: 0.9rem;
    color: var(--activeColor);
`;
