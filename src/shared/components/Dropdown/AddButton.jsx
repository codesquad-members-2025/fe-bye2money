import { ItemWrapper, ItemLabel } from './ItemStyle';

export default function AddButton({ label = '추가하기', onAdd }) {
  return (
    <ItemWrapper onClick={onAdd} isSelected={false}>
      <ItemLabel>{label}</ItemLabel>
    </ItemWrapper>
  );
}
