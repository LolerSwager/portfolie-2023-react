import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);
    return (
        <StyledBreadcrumbs>
            <li>
                <Link to="/">
                    <FontAwesomeIcon icon={faHome} />
                </Link>
            </li>
            {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                return (
                    <li key={to}>
                        <Link to={to}>{value.charAt(0).toUpperCase() + value.slice(1)}</Link>
                    </li>
                );
            })}
        </StyledBreadcrumbs>
    );
}

const StyledBreadcrumbs = styled.ul`
    display: flex;
    align-items: center;
    background-color: #2d2d2d44;
    padding: 1rem;
    gap: 1rem;
    li {
        list-style: none;
        font-weight: 500;
        & + li:before {
            content: "/";
            padding: 0 1rem 0 0;
        }
        a {
            text-decoration: none;
            &:hover {
                font-weight: 600;
                color: var(--activeColor);
            }
            & *:hover {
                fill: var(--activeColor);
            }
        }
    }
`;
