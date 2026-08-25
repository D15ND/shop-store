import { createListCollection, Portal, Select } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

import { setSelect } from '@/store/sortSelect';

const select = createListCollection({
  items: [
    { label: 'High to low', value: 'high' },
    { label: 'Low to high', value: 'low' },
  ],
});

const SortSelect = () => {
  const dispatch = useDispatch();

  return (
    <Select.Root collection={select} size="sm" width="100%">
      <Select.HiddenSelect />
      <Select.Label>Sort to</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select sort" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {select.items.map((select) => (
              <Select.Item
                item={select}
                key={select.value}
                onClick={() => dispatch(setSelect(select.value))}
              >
                {select.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};

export default SortSelect;
