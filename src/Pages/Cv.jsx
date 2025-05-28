import { styled } from "styled-components";
import Main from "../Components/Main";

export default function Cv() {
  return (
    <Main
      PageHeader="Curriculum Vitae"
      PageTitle="CV af Jannick Vanderhoef Trolle Nielsen"
    >
      <StyledList>
        <section>
          <h3>ERHVERVSERFARING</h3>
          <ul>
            <li>
              <div>
                <span>
                  <h4>Webudvikler</h4>
                  <h5>ORIGO</h5>
                </span>
                <h5>2023</h5>
              </div>
              <p>
                Praktik ved Origo i Reykjavík, Island i 3 uger, hvor jeg
                arbejdede med React Native.
              </p>
            </li>
            <li>
              <div>
                <span>
                  <h4>Montører</h4>
                  <h5>DUELCO A/S</h5>
                </span>
                <h5>2021-2022</h5>
              </div>
              <p>
                Opbygning samt installation af kritisk strøm fordeling elementer
                til ophæng i og på væggen med fokus af Hospitaler.
              </p>
            </li>
          </ul>
        </section>
        <section>
          <h3>UDDANNELSE & KURSER</h3>
          <ul>
            <li>
              <span className="PulseEfect">
                <div>
                  <span>
                    <h4>Learn Next.js</h4>
                    <h5>scrimba</h5>
                  </span>
                  <h5>2025 - now</h5>
                </div>
              </span>
            </li>
            <li>
              <div>
                <span>
                  <h4>Learn Typescript</h4>
                  <h5>scrimba</h5>
                </span>
                <h5>2025 - 2025</h5>
              </div>
              <a
                className="certificate"
                href="https://scrimba.com/certificate-cert24zAwJ77fGKP7LfQ2ifrEP2wD856gBdEGegvE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 6.222a2.222 2.222 0 01-2.222 2.222h-8.89a2.222 2.222 0 010-4.444h8.89C23.005 4 24 4.995 24 6.222zm-7.333 9.334h-8.89a2.222 2.222 0 000 4.444h8.89a2.222 2.222 0 000-4.444zm0-5.778H13.11a2.222 2.222 0 000 4.444h3.556a2.222 2.222 0 000-4.444zM2.222 15.556a2.222 2.222 0 100 4.444 2.222 2.222 0 000-4.444z" />
                </svg>
                certificate
              </a>
            </li>
            <li>
              <div>
                <span>
                  <h4>Learn React</h4>
                  <h5>scrimba</h5>
                </span>
                <h5>2023-2024</h5>
              </div>
            </li>
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
    </Main>
  );
}

const StyledList = styled.article`
  max-width: var(--pageMaxWidth);

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
          top: 10px;
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
            text-transform: uppercase;
          }
        }
      }
    }
  }

  .certificate {
    border: 1px solid var(--activeColor);
    border-radius: var(--borderRadius);
    background-color: color-mix(in srgb, var(--activeColor) 20%, transparent);
    padding: 0.5rem;
    margin: 1rem;
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    &:hover {
      background-color: color-mix(in srgb, var(--activeColor) 40%, transparent);
      cursor: pointer;
    }
    svg {
      width: 24px;
      height: 24px;
      min-width: 30px;
      min-height: 30px;
      display: block;
      fill: var(--activeColor);
    }
  }

  .PulseEfect::before {
    content: "";
    position: absolute;
    left: -27px;
    top: 10px;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background: var(--activeColor);
    animation: pulse 2000ms infinite linear;
    z-index: 2;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.5);
      opacity: 1;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.7;
    }
    100% {
      transform: scale(2.2);
      opacity: 0;
    }
  }
`;
