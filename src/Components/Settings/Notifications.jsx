import { styled } from "styled-components"
import ToggleSwitch from "../ToggleSwitch"

export default function Notifications(){
    return(
        <>
            <h2 id="Notifications">Notifications</h2>
            <SpanGrid>
                <SpanCollom>
                    <h3>Notify me when the website get updated</h3>
                    <StyledArticle>
                        <section>
                            <h4>Get Browser Notifications</h4>
                            <ToggleSwitch ToggleDisabled={true}/>
                        </section>
                        <section>
                            <h4> Get Push notifications</h4>
                            <ToggleSwitch ToggleDisabled={true}/>
                        </section>
                        <section>
                            <h4>Get Email notifications</h4>
                            <ToggleSwitch ToggleDisabled={true}/>
                        </section>
                    </StyledArticle>
                </SpanCollom>
                <SpanCollom>
                    <h3>Notify me when a new Project has been added</h3>
                    <StyledArticle>
                        <section>
                            <h4>Get Browser Notifications</h4>
                            <ToggleSwitch ToggleDisabled={true}/>
                        </section>
                        <section>
                            <h4> Get Push notifications</h4>
                            <ToggleSwitch ToggleDisabled={true}/>
                        </section>
                        <section>
                            <h4>Get Email notifications</h4>
                            <ToggleSwitch ToggleDisabled={true}/>
                        </section>
                    </StyledArticle>
                </SpanCollom>
                
                <SpanCollom>
                    <h3>Notify me when your job status changes</h3>
                    <StyledArticle>
                        <section>
                            <h4>Get Browser Notifications</h4>
                            <ToggleSwitch ToggleDisabled={true}/>
                        </section>
                        <section>
                            <h4> Get Push notifications</h4>
                            <ToggleSwitch ToggleDisabled={true}/>
                        </section>
                        <section>
                            <h4>Get Email notifications</h4>
                            <ToggleSwitch ToggleDisabled={true}/>
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
    section{
        display: grid;
        align-content: space-between;
        grid-template-columns: 
            minmax(150px, 1.75fr)
            auto;
        width: 100%;
    }
`