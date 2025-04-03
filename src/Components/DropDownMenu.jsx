import { useEffect, useRef, useCallback } from "react";
import styled from "styled-components";

const DropDownMenu = ({
  children,
  onClose,
  position = { top: "30px", right: "75px" },
}) => {
  const dropdownRef = useRef(null);

  const handleClickOutside = useCallback(
    (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose(false);
      }
    },
    [onClose]
  );

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        onClose(false);
      }
    },
    [onClose]
  );

  const handleScroll = useCallback(() => onClose(false), [onClose]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleClickOutside, handleKeyDown, handleScroll]);

  return (
    <StyledDropDownMenu ref={dropdownRef} style={position}>
      {children}
    </StyledDropDownMenu>
  );
};

const StyledDropDownMenu = styled.ul`
  text-align: left;
  position: absolute;
  /*  right: 75px;
  top: 30px; */
  overflow: unset;
  padding: 0.5rem !important;
  margin: 0 !important;
  background-color: #181818;
  border-radius: 10px 0 10px 10px;
  border: 1px solid transparent;
  list-style: none;
  box-shadow: 0 4px 12px #00000055;
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
    box-shadow: 0px 0px 10px 1px var(--activeColor);
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
    background-color: #ffffff19 !important;
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
