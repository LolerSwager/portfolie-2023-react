import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import qrimg from "../Assets/qrcode.svg";
import { faEnvelope, faLink, faQrcode, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faFacebookMessenger, faLinkedin, faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Schare({ url, msg, setSharingState }) {
    document.title = "Jannick Nielsen | Business Card";

    const [qrCodeState, setQrCodeState] = useState(false);

    return (
        <StyledSchare>
            <div className="SSHeader">
                <h3>Share business card on.</h3>
                <FontAwesomeIcon icon={faXmark} className="faicon" onClick={() => setSharingState(false)} />
            </div>
            <ul>
                <li>
                    <a href={`https://www.facebook.com/sharer.php?u=${url}`} target="_blank">
                        <FontAwesomeIcon icon={faFacebookF} /> FaceBook
                    </a>
                </li>
                <li>
                    <a href={`https://twitter.com/intent/tweet?text=${msg} ${url}`} target="_blank">
                        <FontAwesomeIcon icon={faTwitter} /> Twitter
                    </a>
                </li>
                <li>
                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`} target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} /> Linkdin
                    </a>
                </li>
                <li>
                    <a href={`https://t.me/share/url?url=${url}&text=${msg}`} target="_blank">
                        <FontAwesomeIcon icon={faTelegram} /> Telegram
                    </a>
                </li>
                <li>
                    <a href={`fb-messenger://share?link=${url}&app_id=439963215433050`} target="_blank">
                        <FontAwesomeIcon icon={faFacebookMessenger} /> Messenger
                    </a>
                </li>
                <li>
                    <span onClick={() => (window.location = `mailto:?subject=Awesom site &body=${msg} ${url}`)}>
                        <FontAwesomeIcon icon={faEnvelope} />
                        Shaire via Email
                    </span>
                </li>
                <li>
                    <span onClick={() => setQrCodeState((prevState) => !prevState)}>
                        <FontAwesomeIcon icon={faQrcode} /> QR code
                    </span>
                    {qrCodeState === true ? <img src={qrimg} alt="qr link" onClick={() => setQrCodeState(false)} /> : <></>}
                </li>
                <li>
                    <span
                        onClick={() => {
                            navigator.clipboard.writeText(url);
                        }}
                    >
                        <FontAwesomeIcon icon={faLink} /> Coppy link
                    </span>
                </li>
            </ul>
        </StyledSchare>
    );
}

const StyledSchare = styled.div`
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

    @-webkit-keyframes popup {
        0% {
            bottom: -100%;
        }
        100% {
            bottom: 0%;
        }
    }
`;
