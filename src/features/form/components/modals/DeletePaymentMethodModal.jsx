import Modal from '../../../../shared/components/Modal';
import TextInput from '../../../../shared/components/TextInput';

const DELETE_MODAL_CONFIG = {
  title: '해당 결제 수단을 삭제하시겠습니까?',
  action: {
    label: '삭제',
    variant: 'danger',
  },
};

export default function DeleteModalContent({ targetItem, onSubmit, onClose }) {
  const { title, action } = DELETE_MODAL_CONFIG;

  return (
    <Modal
      title={title}
      action={{
        label: action.label,
        onClick: () => onSubmit(targetItem),
        variant: action.variant,
        disabled: !targetItem,
      }}
      onClose={onClose}
    >
      <TextInput value={targetItem.name} disabled={true} />
    </Modal>
  );
}
