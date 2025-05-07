import styled from '@emotion/styled';
import Driver from '../Driver';
import DropdownItem from './DropdownItem';
import AddButton from './AddButton';

const DropdownContainer = styled.div`
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.neutralSurfaceDefault};
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.neutralTextDefault};
`;

function Dropdown({ items, selectedItem, onSelect, onAdd, onDelete }) {
  const itemNodes = items.flatMap((item, idx, arr) => {
    const node = (
      <DropdownItem
        key={item.id}
        item={item}
        isSelected={selectedItem?.id === item.id}
        onClick={onSelect}
        onDelete={onDelete}
      />
    );

    return idx < arr.length - 1
      ? [node, <Driver key={`div-${item.id}`} inset={24} />]
      : [node];
  });

  return (
    <DropdownContainer>
      {itemNodes}

      {onAdd && (
        <>
          {items.length > 0 && <Driver key="div-add" inset={24} />}
          <AddButton key="__add__" onAdd={onAdd} />
        </>
      )}
    </DropdownContainer>
  );
}

export default Dropdown;
