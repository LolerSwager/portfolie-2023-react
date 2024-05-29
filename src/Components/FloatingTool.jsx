import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faShare, faUpLong, faDownLong } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Schare from "../Components/Schare";

export default function FloatingTool() {
    const [sharingState, setSharingState] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [totalScrollSize, setTotalScrollSize] = useState(0);

    const handleScroll = () => {
        setScrollPosition(document.documentElement.scrollTop);
        setTotalScrollSize(document.documentElement.scrollHeight - window.innerHeight);
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <StyledFloatingTool>
                {scrollPosition > totalScrollSize / 2 ? (
                    <li onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                        <FontAwesomeIcon icon={faUpLong} />
                    </li>
                ) : (
                    <li onClick={() => window.scrollTo({ top: totalScrollSize, behavior: "smooth" })}>
                        <FontAwesomeIcon icon={faDownLong} />
                    </li>
                )}
                <li>
                    <Link to="/settings">
                        <FontAwesomeIcon icon={faCog} />
                    </Link>
                </li>
                <li onClick={() => setSharingState((prevState) => !prevState)}>
                    <FontAwesomeIcon icon={faShare} />
                </li>
                {/* <li>{scrollPosition}</li>
                <li>{totalScrollSize}</li> */}
            </StyledFloatingTool>
            {sharingState === true ? <Schare url="https://jannick.ninja/businesscard" msg="Tjæk lige ham her ud :O" setSharingState={setSharingState} /> : <></>}
        </>
    );
}

const StyledFloatingTool = styled.div`
    background-color: var(--wrapperColor);
    border-radius: 1rem;
    border: 1px solid black;
    // position: absolute;
    position: fixed;
    z-index: 100;
    bottom: 0%;
    right: 0%;
    width: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0.5rem;
    padding: 0.5rem;

    li {
        height: 3rem;
        width: 3rem;
        padding: 1rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        &:hover {
            background-color: black;
        }
    }
    @-webkit-keyframes popup {
        0% {
            bottom: -100%;
        }
        100% {
            bottom: 0%;
        }
    }
`;
