import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Main from "../Components/Main";
import { RoutesArray } from "../Router/RoutesArray";
export default function SiteMap() {
    return (
        <Main PageHeader="Site map" PageTitle="en visualisering over sitemap">
            <StyledSiteMap>
                {RoutesArray?.map((item) => (
                    <li key={item.page}>
                        <Link to={item.path}>
                            {item.name} - [{item.path}]
                        </Link>
                    </li>
                ))}
            </StyledSiteMap>
        </Main>
    );
}

const StyledSiteMap = styled.ul`
    list-style: none;
    position: relative;
    &::before {
        background-color: var(--activeColor);
        content: "";
        height: 100%;
        width: 2px;
        position: absolute;
        top: 13px;
        left: 0px;
    }
    li {
        margin: 1rem;
        position: relative;
        &::before {
            background-color: var(--activeColor);
            content: "";
            height: 2px;
            width: 23px;
            position: absolute;
            top: 50%;
            left: -15px;
        }
        a {
            text-decoration: none;
            padding: 0.5rem;
            margin: 0.5rem;
            &:hover {
                text-decoration: underline;
                color: var(--activeColor);
            }
        }
    }
`;
