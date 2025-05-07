import styled from '@emotion/styled';

const colorMap = {
  danger: 'dangerTextDefault',
  emphasized: 'neutralTextDefault',
  weak: 'neutralTextWeak',
};

const ModalOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ModalContainer = styled.div`
  width: 384px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.neutralBorderDefault};
  border-bottom: none;
  background-color: ${({ theme }) => theme.colors.neutralSurfaceDefault};
`;

const ModalContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  padding: 32px;
`;

const ModalTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.neutralTextDefault};
  ${({ theme }) => theme.typography.light16};
`;

const ModalActions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid ${({ theme }) => theme.colors.neutralBorderDefault};
  gap: 1px;

  background-color: ${({ theme }) => theme.colors.neutralTextDefault};
`;

const Button = styled.button`
  width: 100%;
  padding: 16px 0;
  color: ${({ variant = 'emphasized', disabled, theme }) =>
    disabled
      ? theme.colors[colorMap['weak']]
      : theme.colors[colorMap[variant]]};

  ${({ theme }) => theme.typography.semibold16};

  background-color: ${({ theme }) => theme.colors.neutralSurfaceDefault};
`;

const Modal = ({ title, children, action, onClose }) => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalContents>
          <ModalTitle>{title}</ModalTitle>
          {children}
        </ModalContents>
        <ModalActions>
          <Button key="cancle" onClick={onClose} variant="weak">
            취소
          </Button>
          <Button
            key="confirm"
            onClick={action.onClick}
            variant={action.variant}
            disabled={action.disabled}
          >
            {action.label}
          </Button>
        </ModalActions>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
