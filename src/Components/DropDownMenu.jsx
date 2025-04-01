import { useEffect, useRef } from "react";
import styled from "styled-components";

const DropDownMenu = ({ children, onClose }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return <StyledDropDownMenu ref={dropdownRef}>{children}</StyledDropDownMenu>;
};

const StyledDropDownMenu = styled.ul`
  text-align: left;
  position: absolute;
  right: 75px;
  top: 30px;
  overflow: unset;
  padding: 0.5rem !important;
  margin: 0 !important;
  background-color: #181818;
  border-radius: 10px 0 10px 10px;
  border: 1px solid transparent;
  list-style: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.2s ease-in-out;
  z-index: 100;
  gap: 0px !important; //force gap removal
  min-width: 200px;
  p {
    font-weight: 500;
  }
  small {
    font-size: 0.7rem;
    overflow-wrap: break-word;
    max-width: 130px;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  &:hover {
    border-color: var(--activeColor);
  }
`;

const DropDownMenuItem = styled.li`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: left !important;
  gap: 1rem !important;
  cursor: pointer;
  padding: 0.5em 1rem !important;
  border-radius: 10px;
  font-size: 1rem;
  color: #f9f9f9;
  background-color: transparent !important;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1) !important;
    color: #fff;
  }

  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-decoration: none;
    color: inherit;
    width: 100%;
  }

  &.no-inherit {
    background-color: transparent !important;
    color: initial;
    cursor: default;
  }
`;

const DropDownMenuHr = styled.hr`
  border: none;
  border-top: 1px solid #333;
  margin: 0.5rem 0rem;
`;
export { DropDownMenu, DropDownMenuItem, DropDownMenuHr };
