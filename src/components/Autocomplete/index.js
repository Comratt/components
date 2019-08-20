import React, { useState } from 'react';

import {
  Wrapper,
  Input,
  MatchesWrap,
  List,
  Item
} from './styled';

const Autocomplete = ({ items, limit }) => {

  const [value, setValue] = useState('');

  const onInputChange = e => {
    const { value } = e.target;
    setValue(value);
  }

  const filterItems = (arrItems = [], searchValue = '') =>
    arrItems.filter(item =>
      item.name.toLowerCase().includes(searchValue.toLowerCase()))
      || [];

  return (
    <Wrapper>
      <Input
        type="text"
        value={value}
        onChange={onInputChange}
      />
      <MatchesWrap>
        <List>
          {filterItems(items, value).slice(0, limit).map(item => 
            <Item key={item.id}>{item.name}</Item>
          )}
        </List>
      </MatchesWrap>
    </Wrapper>
  )
}

export default Autocomplete;
