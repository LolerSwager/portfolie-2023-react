import { styled } from "styled-components"
import ToggleSwitch from "../ToggleSwitch"

export default function Notifications(){
    return(
        <>
            <h2 id="Notifications">
            Notifications
            </h2>
            <section>
                <SpanSpread>
                    <h4>
                       Get Browser Notifications
                    </h4>
                    <ToggleSwitch ToggleDisabled={false}/>
                </SpanSpread>
                <SpanSpread>
                    <h4>
                       Get Push notifications
                    </h4>
                    <ToggleSwitch ToggleDisabled={true}/>
                </SpanSpread>
                <SpanSpread>
                    <h4>
                       Get Email notifications
                    </h4>
                    <ToggleSwitch ToggleDisabled={true}/>
                </SpanSpread>
            </section>
            <section>
                <SpanSpread>
                    <h4>
                    notify me when website get updated
                    </h4>
                    <ToggleSwitch ToggleDisabled={true}/>
                </SpanSpread>
                <SpanSpread>
                    <h4>
                    notify me when a new Project is added
                    </h4>
                    <ToggleSwitch ToggleDisabled={true}/>
                </SpanSpread>
                <SpanSpread>
                    <h4>notify me when Jannick's job status chages </h4>
                    <ToggleSwitch ToggleDisabled={true}/>
                </SpanSpread>
            </section>
        </>
    )
}


const SpanSpread = styled.span`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0 1rem 1rem;
`