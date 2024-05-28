import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import qrimg from "../Assets/qrcode.svg";
export default function BusinessCard() {
    document.title = "Jannick Nielsen | Business Card";
    const profileImage = "https://lh3.googleusercontent.com/pw/AP1GczOuZ3boWGWxlyiAxqT2HJE1fC-HbbDORRoM7YUUtRyKonRTkHjdmZZpBwNsn_KwqewIZtULQZXhenbzlOy7UkyU1hV9jh3SralFSsoJ6RhQ2CyvLlA=w2400";

    const [sharingState, setSharingState] = useState(false);
    const [qrCodeState, setQrCodeState] = useState(false);

    const shareringlink = "https://jannick.ninja/businesscard";

    return (
        <StyledHome>
            <section>
                <div className="profile">
                    <img src={profileImage} alt="Image of Jannick Nielsen" />
                    <h2>Jannick VanderHoef Trolle Nielsen</h2>
                    <div className="Media">
                        <a href="https://www.linkedin.com/in/jannick-nielsen-web/" title="Kontakt mig på Linkedin">
                            <FontAwesomeIcon icon="fa-brands fa-linkedin-in" className="faicon" />
                        </a>
                        <a href="https://github.com/LolerSwager" title="Tjæk min Github">
                            <FontAwesomeIcon icon="fa-brands fa-github" className="faicon" />
                        </a>
                        <p onClick={() => (window.location = "mailto:JannickTrolleNielsen@hotmail.com ?subject=I have a job for you")} title="Kontakt mig på E-mail">
                            <FontAwesomeIcon icon="fa-solid fa-envelope" className="faicon" />
                        </p>
                        <p onClick={() => setSharingState((prevState) => !prevState)}>
                            <FontAwesomeIcon icon="fa-solid fa-share" className="faicon" />
                        </p>
                    </div>
                </div>
                <div className="about">
                    <h3>About</h3>
                    <p>
                        Jeg er uddannet som <b>WebUdvikler</b> på TechCollege Aalborg og har gennem flere år haft erfaring med blant andet Javascript, Html, Css, React, Node.js, GitHub, Figma, Adobe
                        XD, UI / UX, REST API, scrum.
                    </p>
                    <p>
                        Søger du eller en du kender en udvikler inden for hjemmesider eller apps så er jeg pt klar på nye eventyr og ledig til stillingen. Jeg søger også andre programerings opgaver ud
                        over hjemmesider og frontend.
                    </p>
                </div>
                <div className="LinkList">
                    <h3>Links</h3>
                    <ul>
                        <li>
                            <a href="https://vanderhoef.dk">
                                <FontAwesomeIcon icon="fa-solid fa-person-digging" />
                                vanderhoef.dk
                            </a>
                        </li>
                        <li>
                            <a href="https://jannick.ninja">
                                <FontAwesomeIcon icon="fa-solid fa-user-ninja" />
                                Jannick.ninja
                            </a>
                        </li>
                        <li>
                            <p onClick={() => window.open("tel:+4520665586")} title="Ring til mig :D">
                                <FontAwesomeIcon icon="fa-solid fa-phone" />
                                +45 20 66 55 86
                            </p>
                        </li>
                    </ul>
                </div>
                {sharingState === true ? (
                    <div className="SochialSchare">
                        <div className="SSHeader">
                            <h3>Share business card on.</h3>
                            <FontAwesomeIcon icon="fa-solid fa-xmark" className="faicon" onClick={() => setSharingState(false)} />
                        </div>
                        <ul>
                            <li>
                                <a href={`https://www.facebook.com/sharer.php?u=${shareringlink}`} target="_blank">
                                    <FontAwesomeIcon icon="fa-brands fa-facebook" /> FaceBook
                                </a>
                            </li>
                            <li>
                                <a href={`https://twitter.com/intent/tweet?text=${shareringlink}`} target="_blank">
                                    <FontAwesomeIcon icon="fa-brands fa-twitter" /> Twitter
                                </a>
                            </li>
                            <li>
                                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareringlink}`} target="_blank">
                                    <FontAwesomeIcon icon="fa-brands fa-linkedin-in" /> Linkdin
                                </a>
                            </li>
                            <li>
                                <a href={`https://t.me/share/url?url=${shareringlink}&text=Check out this page`} target="_blank">
                                    <FontAwesomeIcon icon="fa-brands fa-telegram" /> Telegram
                                </a>
                            </li>
                            <li>
                                <a href={`fb-messenger://share?link=${shareringlink}&app_id=439963215433050`} target="_blank">
                                    <FontAwesomeIcon icon="fa-brands fa-facebook-messenger" /> Messenger
                                </a>
                            </li>
                            <li>
                                <span onClick={() => (window.location = `mailto:?subject=Awesom site &body=look at this ${shareringlink}`)}>
                                    <FontAwesomeIcon icon="fa-solid fa-envelope" />
                                    Shaire via Email
                                </span>
                            </li>
                            <li>
                                <span onClick={() => setQrCodeState((prevState) => !prevState)}>
                                    <FontAwesomeIcon icon="fa-solid fa-qrcode" /> QR code
                                </span>
                                {qrCodeState === true ? <img src={qrimg} alt="qr link" onClick={() => setQrCodeState(false)} /> : <></>}
                            </li>
                            <li>
                                <span
                                    onClick={() => {
                                        navigator.clipboard.writeText(shareringlink);
                                    }}
                                >
                                    <FontAwesomeIcon icon="fa-solid fa-link" /> Coppy link
                                </span>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <></>
                )}
            </section>
        </StyledHome>
    );
}

const StyledHome = styled.main`
    margin: auto;
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        max-width: 500px;
        padding: 1rem;
        // background-color: var(--wrapperColor);
        position: relative;
    }
    .profile {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        img {
            width: 100%;
            padding: 1.5rem;
            border-radius: 50%;
            object-fit: cover;
            object-position: left top;
        }
        h2 {
            text-align: center;
        }
        &::before {
            content: "";
            height: 2px;
            width: 100%;
            position: absolute;
            top: 100%;
            right: 0;
            background: linear-gradient(90deg, var(--activeColor) 0%, var(--backGroundColor) 100%);
            transition: 0.2s, background-position 0s;
        }
    }
    .about {
        width: 100%;
        p {
            margin: 0 0 1rem 0;
        }
        &:hover {
            b,
            span {
                color: var(--activeColor);
            }
        }
    }
    .Media {
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 0.2rem;
        cursor: pointer;
        .faicon {
            padding: 0.5rem;
            height: 1.6rem;
            width: 1.6rem;
            &:hover {
                background-color: var(--activeColor);
            }
        }
    }
    .LinkList {
        width: 100%;
        ul {
            list-style: none;
            width: 100%;
            li {
                a,
                p {
                    color: var(--textColor);
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    width: 100%;
                    padding: 0.5rem;
                    margin: 0.5rem 0;
                    border-radius: var(--borderRadius);
                    background-color: var(--wrapperColor);
                    cursor: pointer;
                    &:hover {
                        background-color: var(--activeColor);
                    }
                }
            }
        }
    }
    .SochialSchare {
        width: 100%;
        max-width: 500px;
        background-color: var(--wrapperColor);
        border-top-left-radius: var(--borderRadius);
        border-top-right-radius: var(--borderRadius);
        border-top: 1px solid black;
        // position: absolute;
        position: fixed;
        bottom: 0%;
        z-index: 1000;
        animation: popup 500ms linear;

        ul {
            padding: 0 1.5rem 0.5rem 1.5rem;
            width: 100%;
            list-style: none;
            li {
                background-color: var(--backGroundColor);
                border-radius: var(--borderRadius);
                cursor: pointer;
                margin: 1rem 0;

                &:hover {
                    background-color: var(--activeColor);
                }
                a,
                span {
                    color: var(--textColor);
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 1.2rem;
                    width: 100%;
                    padding: 0.8rem;
                }
                img {
                    width: 100%;
                    display: flex;
                    align-items: center;
                }
            }
        }
        .SSHeader {
            padding: 1rem 1.5rem 0 1.5rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .faicon {
                height: 1.6rem;
                width: 1.6rem;
                cursor: pointer;
                &:hover {
                    fill: var(--activeColor);
                }
            }
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
