import { useEffect } from "react"
import { useState } from "react"
import { styled } from "styled-components"
import ToggleSwitch from "../ToggleSwitch"

export default function Notifications() {
    const [notificationToggle, setNotificationToggle] = useState()

    if (notificationToggle === true) {
        NotificationPermission()
    }

    useEffect(() => {
        const getNotificationData = JSON.parse(localStorage.getItem("permissions")).find(
            (item) => item.name === "notifications"
        )
        console.log(getNotificationData)
    }, [])

    function NotificationPermission() {
        Notification.requestPermission().then((Permission) => {
            if (Permission !== "granted") {
                return
            }

            new Notification("First Notification", {
                body: "Thank you for Notification Permission",
                icon: "https://creazilla-store.fra1.digitaloceanspaces.com/emojis/51208/waving-hand-emoji-clipart-xl.png",
                image: "https://images.unsplash.com/photo-1556244573-c3686c0f0e78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
            })
        })
    }

    return (
        <>
            <h2 id="Notifications">Notifications</h2>
            <SpanGrid>
                <SpanCollom>
                    <h3>Notify me when the web site get updated</h3>
                    <StyledArticle>
                        <section>
                            <h4>Get Browser Notifications</h4>
                            <ToggleSwitch
                                ToggleDisabled={false}
                                isToggeld={notificationToggle}
                                onToggle={() => setNotificationToggle((prevState) => !prevState)}
                            />
                        </section>
                        <section>
                            <h4> Get Push notifications</h4>
                            <ToggleSwitch ToggleDisabled={true} />
                        </section>
                        <section>
                            <h4>Get Email notifications</h4>
                            <ToggleSwitch ToggleDisabled={true} />
                        </section>
                    </StyledArticle>
                </SpanCollom>
                <SpanCollom>
                    <h3>Notify me when a new Project has been added</h3>
                    <StyledArticle>
                        <section>
                            <h4>Get Browser Notifications</h4>
                            <ToggleSwitch ToggleDisabled={true} />
                        </section>
                        <section>
                            <h4> Get Push notifications</h4>
                            <ToggleSwitch ToggleDisabled={true} />
                        </section>
                        <section>
                            <h4>Get Email notifications</h4>
                            <ToggleSwitch ToggleDisabled={true} />
                        </section>
                    </StyledArticle>
                </SpanCollom>

                <SpanCollom>
                    <h3>Notify me when your job status changes</h3>
                    <StyledArticle>
                        <section>
                            <h4>Get Browser Notifications</h4>
                            <ToggleSwitch ToggleDisabled={true} />
                        </section>
                        <section>
                            <h4> Get Push notifications</h4>
                            <ToggleSwitch ToggleDisabled={true} />
                        </section>
                        <section>
                            <h4>Get Email notifications</h4>
                            <ToggleSwitch ToggleDisabled={true} />
                        </section>
                    </StyledArticle>
                </SpanCollom>
            </SpanGrid>
        </>
    )
}

const SpanGrid = styled.span`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
`

const SpanCollom = styled.span`
    display: flex;
    flex-direction: column;
`

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
`
