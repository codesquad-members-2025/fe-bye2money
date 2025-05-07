import { ItemWrapper, ItemLabel } from './ItemStyle';
import ItemRemoveButton from './ItemRemoveButton';

export default function DropdownItem({ item, onClick, onDelete, isSelected }) {
  return (
    <ItemWrapper isSelected={isSelected} onClick={() => onClick(item)}>
      <ItemLabel>{item.name}</ItemLabel>

      {onDelete && (
        <ItemRemoveButton
          onClick={(e) => {
            e.stopPropagation();
            onDelete(item);
          }}
        />
      )}
    </ItemWrapper>
  );
}
