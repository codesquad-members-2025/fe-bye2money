import styled from "styled-components";

const StyledSwipeButton = styled.button`
  background: transparent;
  border: none;
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.64;
  }
`;

export { StyledSwipeButton };
