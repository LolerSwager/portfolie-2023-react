import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Main from "../Components/Main";

export default function SiteMap() {
    return (
        <Main PageHeader="Site map" PageTitle="en visualisering over sitemap">
            <StyledSiteMap>
                {AllPages?.map((item) => (
                    <li key={item.page}>
                        <Link to={item.path}>{item.page}</Link>
                    </li>
                ))}
                <li>
                    <a href="sitemap.xml">Sitemap</a>
                </li>
                <li>
                    <a href="robots.txt">Robots</a>
                </li>
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

const AllPages = [
    {
        page: "home",
        path: "/",
    },
    {
        page: "businessCard",
        path: "/businessCard",
    },
    {
        page: "projects",
        path: "/Projects",
    },
    {
        page: "cv",
        path: "/cv",
    },
    {
        page: "githubSearch",
        path: "/GithubSearch",
    },
    {
        page: "settings",
        path: "/settings",
    },
    {
        page: "test",
        path: "/test",
    },
];
