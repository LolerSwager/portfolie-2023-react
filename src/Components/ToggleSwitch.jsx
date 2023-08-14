import { faListSquares } from "@fortawesome/free-solid-svg-icons"
import { styled } from "styled-components"

export default function ToggleSwitch({ToggleDisabled = false, isToggeld, onToggle}){
    

    return(
        <StyledToggle>
            <label className="switch" title={ToggleDisabled ? "This Toggle is disabled" : ""}>
                <input type="checkbox" disabled={ToggleDisabled} checked={isToggeld} onChange={onToggle}/>
                <span className="slider"></span>
            </label>
        </StyledToggle>
    )
}

const StyledToggle = styled.div`
    .switch {
        position: relative;
        display: inline-block;
        height: 24px;
        width: 45px;
        input { 
            opacity: 0;
            width: 0;
            height: 0;
        }
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        // background-color: var(--wrapperColor);
        background-color: #ffffff47;
        transition: background-color 0.125s ease-out;
        border-radius: 34px;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: 2px;
        top: 2px;
        background-color: var(--fontColor);
        -webkit-transition: .4s;
        transition: transform 0.125s ease-out;
        border-radius: 50%;
        box-shadow: 0 3px 1px 0 rgba(37, 34, 71, 0.05), 0 2px 2px 0 rgba(37, 34, 71, 0.1), 0 3px 3px 0 rgba(37, 34, 71, 0.05);
    }

    input:checked + .slider {
        background-color: var(--activeColor);
    }

    input:focus + .slider {
        box-shadow: 0 0 1px var(--activeColor);
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(20px);
        -ms-transform: translateX(20px);
        transform: translateX(20px);
    }

    input:disabled + .slider{
        cursor: not-allowed;
        opacity: 40%;
    }
`