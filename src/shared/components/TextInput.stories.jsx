import { useState } from 'react';
import TextInput from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput,
  argTypes: {
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    type: {
      control: { type: 'radio' },
      options: ['default', 'textAreaOnly'],
    },
  },
};

const Template = (args) => {
  const [value, setValue] = useState('');

  return <TextInput {...args} value={value} onChange={(v) => setValue(v)} />;
};

export const 기본_입력창 = Template.bind({});
기본_입력창.args = {
  type: 'default',
  disabled: false,
  error: false,
  placeholderText: '결제수단을 입력해주세요',
};

export const 비활성화 = Template.bind({});
비활성화.args = {
  type: 'default',
  disabled: true,
  error: false,
  placeholderText: '입력 비활성화됨',
};

export const 에러상태 = Template.bind({});
에러상태.args = {
  type: 'default',
  disabled: false,
  error: true,
  placeholderText: '에러 발생 시',
};

export const 텍스트에어리어전용 = Template.bind({});
텍스트에어리어전용.args = {
  type: 'textAreaOnly',
  disabled: false,
  error: false,
  placeholderText: '라벨 없는 에어리어',
};

export const ParentWidthVariants = () => {
  const [value, setValue] = useState('');

  return (
    <div style={{ display: 'grid', gap: '24px' }}>
      <div style={{ width: '100%' }}>
        <label>100% 너비: 부모의 크기에 맞춰집니다</label>
        <TextInput
          type="default"
          value={value}
          onChange={(v) => setValue(v)}
          placeholderText="부모 width: 100%"
        />
      </div>

      <div style={{ width: '400px' }}>
        <label>400px 고정 너비</label>
        <TextInput
          type="default"
          value={value}
          onChange={(v) => setValue(v)}
          placeholderText="부모 width: 400px"
        />
      </div>

      <div
        style={{
          width: 'fit-content',
          border: '1px dashed gray',
          padding: '4px',
        }}
      >
        <label>fit-content</label>
        <TextInput
          type="default"
          value={value}
          onChange={(v) => setValue(v)}
          placeholderText="부모 width: fit-content"
        />
      </div>
    </div>
  );
};
