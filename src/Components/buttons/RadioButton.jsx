import { styled } from "styled-components";
export default function RadioButton({ RadioDisabled = false, isChecked, labelName, RadioDcategory }) {
    return (
        <StyledRadio>
            <input type="radio" name={RadioDcategory} checked={isChecked} disabled={RadioDisabled} />
            <label for={RadioDcategory}>{labelName}</label>
        </StyledRadio>
    );
}

const StyledRadio = styled.div`
    input[type="radio"] {
        margin: 0 1rem 0 0;
    }
    input[type="radio"]:after {
        content: "";
        width: 10px;
        height: 10px;
        border-radius: 15px;
        top: 0;
        left: 0;
        position: relative;
        background-color: var(--wrapperColor);
        display: inline-block;
        border: 2px solid var(--fontColor);
    }
    input[type="radio"]:checked:after {
        content: "";
        width: 10px;
        height: 10px;
        border-radius: 15px;
        top: 0;
        left: 0;
        position: relative;
        background-color: var(--activeColor);
        display: inline-block;
        border: 2px solid var(--fontColor);
    }
    input[type="radio"]:disabled {
        cursor: not-allowed;
        opacity: 40%;
    }
`;
