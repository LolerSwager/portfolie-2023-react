import { styled } from "styled-components"

export default function Cv() {
    document.title = "Curriculum Vitae"
    return (
        <StyledMain>
            <StyledList>
                <h1>Curriculum Vitae</h1>
                <section>
                    <h3>ERHVERVSERFARING</h3>
                    <ul>
                        <li>
                            <div>
                                <span>
                                    <h4>Montører</h4>
                                    <h5>DUELCO A/S</h5>
                                </span>
                                <h5>2021-2022</h5>
                            </div>

                            <p>
                                Opbygning samt installation af kritisk strøm fordeling elementer til ophæng i og på
                                væggen med fokus af Hospitaler.
                            </p>
                        </li>
                    </ul>
                </section>
                <section>
                    <h3>UDDANNELSE & KURSER</h3>
                    <ul>
                        <li>
                            <div>
                                <span>
                                    <h4>Webudvikler</h4>
                                    <h5>TECHCOLLEGE</h5>
                                </span>
                                <h5>2022-2023</h5>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>
                                    <h4>Webudvikler</h4>
                                    <h5>TECHCOLLEGE</h5>
                                </span>
                                <h5>2020-2021</h5>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>
                                    <h4>Grundudannelse</h4>
                                    <h5>FGU Aalborg</h5>
                                </span>
                                <h5>2016-2019</h5>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>
                                    <h4>Data og kommunikation</h4>
                                    <h5>TECHCOLLEGE</h5>
                                </span>
                                <h5>2016-2016</h5>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>
                                    <h4>It web og media</h4>
                                    <h5>TECHCOLLEGE</h5>
                                </span>
                                <h5>2015-2016</h5>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>
                                    <h4>10 Klasse</h4>
                                    <h5>LØVVANGSKOLEN</h5>
                                </span>
                                <h5>2014-2015</h5>
                            </div>
                        </li>
                    </ul>
                </section>
            </StyledList>
        </StyledMain>
    )
}

const StyledMain = styled.main`
    display: flex;
    justify-content: center;
`

const StyledList = styled.article`
    max-width: var(--pageMaxWidth);
    h1 {
        background-color: var(--activeColor);
        color: var(--contrastColor);
        display: block;
        font-size: 40px;
        padding: 0.3em;
        width: 350px;
        margin: 2rem 0;
    }
    section {
        h3 {
            margin: 1rem;
        }
        ul {
            margin: 1rem 1.3rem 1rem 2.7rem;
            li {
                margin: 0 0 2.2rem 0;
                list-style: none;
                position: relative;
                &::before {
                    background-color: var(--activeColor);
                    content: "";
                    height: 17px;
                    width: 17px;
                    border-radius: 50%;
                    position: absolute;
                    top: 5px;
                    left: -27px;
                }
                &:not(:last-child) {
                    &::after {
                        background: gray;
                        content: "";
                        height: 100%;
                        width: 3px;
                        position: absolute;
                        top: 31px;
                        left: -20px;
                    }
                }
                h4 {
                    color: var(--activeColor);
                    font-size: 24px;
                }

                p {
                    display: inherit;
                    align-items: center;
                    font-size: 18px;
                    font-weight: 500;
                }
                div {
                    display: flex;
                    justify-content: space-between;
                    h5 {
                        min-width: 100px;
                        display: inherit;
                        align-items: center;
                        font-size: 18px;
                        font-weight: 500;
                    }
                }
            }
        }
    }
`
