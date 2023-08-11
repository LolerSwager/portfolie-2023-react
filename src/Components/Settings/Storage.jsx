import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faClock, faCookie, faArchive } from '@fortawesome/free-solid-svg-icons';
import { styled } from 'styled-components';
import LocalStorage from './Storage/LocalStorage';
import Cache from './Storage/Cache';
import SessionStorage from './Storage/SessionStorage';
import Cookies from './Storage/Cookies';

export default function Storage(){
    return(
        <>
            <h2 id="Storage">Storage</h2>
                <SpanGrid>
                    <SpanCollom>
                        <SpanRow>
                            <h3>Local Storage</h3>
                            <FontAwesomeIcon icon={faDatabase} />
                        </SpanRow>
                        <LocalStorage/>
                    </SpanCollom>
                    <SpanCollom>
                        <SpanRow>
                            <h3>Session Storage</h3>
                            <FontAwesomeIcon icon={faClock} />
                        </SpanRow>
                        <SessionStorage/>
                    </SpanCollom>
                    <SpanCollom>
                        <SpanRow>
                            <h3>Cookies</h3>
                            <FontAwesomeIcon icon={faCookie} />
                        </SpanRow>
                        <Cookies/>
                    </SpanCollom>
                    <SpanCollom>
                        <SpanRow>
                            <h3>Cache</h3>
                            <FontAwesomeIcon icon={faArchive} />
                        </SpanRow>
                        <Cache/>
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
 
const SpanRow = styled.span`
    display: flex;
    gap: .5rem;
    align-items: center;
`

const SpanCollom = styled.span`
    display: flex;
    flex-direction: column;
`