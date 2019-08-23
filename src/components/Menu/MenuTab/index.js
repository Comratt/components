import React from 'react';

import {
  TabWrap,
  TabContentLeft,
  TabContentRight,
  TabContentCenter,
  IconWrap,
  TabTitle,
  TabClose
} from './styled';

import TabIcon from '../Icons/TabIcon';

const MenuTab = ({ active, setActive, onClose }) => {
  return (
    <TabWrap
      active={active}
      onClick={setActive}
    >
      <TabContentLeft />
      <TabContentCenter>
        <IconWrap>
          <TabIcon fill="#fff" />
        </IconWrap>
        <TabTitle>
          <span>Beratung > Vetter, Gustav</span>
        </TabTitle>
        <TabClose onClick={onClose} />
      </TabContentCenter>
      <TabContentRight />
    </TabWrap>
  )
};

export default MenuTab;
