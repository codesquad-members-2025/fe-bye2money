import theme from '../../app/theme/theme';
import CategoryTag from './CategoryTag';

export default {
  title: 'Shared/CategoryTag',
  component: CategoryTag,
  argTypes: {
    children: {
      control: 'text',
      description: '카테고리 이름 (예: 식비, 교통, 문화/여가 등)',
    },
  },
};

const Template = (args) => <CategoryTag {...args} />;

export const Test = Template.bind({});
Test.args = {
  children: '식비',
};

export const 전체카테고리 = () => {
  const categories = Object.keys(theme.categoryColors);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
      {categories.map((name) => (
        <CategoryTag key={name}>{name}</CategoryTag>
      ))}
    </div>
  );
};
