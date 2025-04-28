// CancelButton.jsx
import styled from '@emotion/styled';

const StyledResetFormButton = styled.button`
  ${({ theme }) => theme.typography.semibold14};
  color: ${({ theme }) => theme.colors.dangerTextDefault};
  cursor: pointer;
`;

export default function ResetFormButton({
  isEditMode,
  onClick,
  children = '↺',
}) {
  return (
    <StyledResetFormButton isEditMode={isEditMode} onClick={onClick}>
      {children}
    </StyledResetFormButton>
  );
}
