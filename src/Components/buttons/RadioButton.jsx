import { styled } from "styled-components";
export default function RadioButton({ RadioDisabled = false, isChecked, onChange, labelName, RadioDcategory }) {
    return (
        <StyledRadio>
            <label>
                <input type="radio" name={RadioDcategory} checked={isChecked} onChange={onChange} disabled={RadioDisabled} />
                {labelName}
            </label>
        </StyledRadio>
    );
}

const StyledRadio = styled.div`
    label {
        //padding: 0.5rem 0.5rem 0.5rem 0;
        cursor: pointer;
        input[type="radio"] {
            margin: 0 1rem 0 0;
            cursor: pointer;
            &:after {
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
            &:checked:after {
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
            &:disabled {
                cursor: not-allowed;
                opacity: 40%;
            }
        }
    }
`;
