import { Link } from "react-router-dom";
import { styled } from "styled-components";

export default function SiteMap() {
    return (
        <StyledSiteMap>
            <ul>
                {AllPages?.map((item) => (
                    <li key={item.page}>
                        <Link to={item.path}>{item.page}</Link>
                    </li>
                ))}
            </ul>
        </StyledSiteMap>
    );
}

const StyledSiteMap = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #1a1a1a;
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
