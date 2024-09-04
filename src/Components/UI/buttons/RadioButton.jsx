import { styled } from "styled-components";
export default function RadioButton({ RadioDisabled = false, isChecked, onChange, labelName, RadioDcategory }) {
    return (
        <StyledRadio>
            <label className="form-control">
                <input type="radio" name={RadioDcategory} checked={isChecked} onChange={onChange} disabled={RadioDisabled} />
                {labelName}
            </label>
        </StyledRadio>
    );
}

const StyledRadio = styled.div`
    .form-control {
        font-size: 1rem;
        font-weight: bold;
        line-height: 1.1;
        display: grid;
        grid-template-columns: 1em auto;
        gap: 1rem;
        cursor: pointer;
        input[type="radio"] {
            appearance: none;
            background-color: var(--wrapperColor);
            margin: 0;
            font: inherit;
            color: black;
            width: 1em;
            height: 1em;
            border: 2px solid var(--fontColor);
            border-radius: 50%;
            transform: translateY(-0.075em);
            display: grid;
            place-content: center;

            &::before {
                content: "";
                width: 0.5em;
                height: 0.5em;
                border-radius: 50%;
                transform: scale(0);
                transition: 12ms transform ease-in-out;
                box-shadow: inset 1em 1em var(--activeColor);
                background-color: var(--wrapperColor);
            }

            &:checked::before {
                background-color: var(--activeColor);
                transform: scale(1);
            }

            &:disabled {
                cursor: not-allowed;
                opacity: 40%;
            }

            /* cursor: pointer;
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
            */
        }
    }
    .form-control + .form-control {
        margin-top: 1em;
    }
`;
