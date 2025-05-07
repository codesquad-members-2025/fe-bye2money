import { useState } from 'react';
import Modal from '../../../../shared/components/Modal';
import TextInput from '../../../../shared/components/TextInput';

const ADD_MODAL_CONFIG = {
  title: '추가하실 결제 수단을 입력해주세요.',
  placeholder: 'ex: 완자 카드',
  action: {
    label: '추가',
    variant: 'emphasized',
  },
};

export default function AddInputModalContent({ onSubmit, onClose }) {
  const [value, setValue] = useState('');

  const { title, placeholder, action } = ADD_MODAL_CONFIG;

  return (
    <Modal
      title={title}
      action={{
        label: action.label,
        onClick: () => onSubmit(value),
        variant: action.variant,
        disabled: value.length === 0,
      }}
      onClose={onClose}
    >
      <TextInput
        value={value}
        placeholderText={placeholder}
        onChange={setValue}
      />
    </Modal>
  );
}
