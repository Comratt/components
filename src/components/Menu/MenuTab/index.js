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

const MenuTab = ({ active }) => {
  return (
    <TabWrap active={active}>
      <TabContentLeft />
      <TabContentCenter active={active}>
        <IconWrap>
          <TabIcon fill="#fff" />
        </IconWrap>
        <TabTitle>
          <span>Beratung > Vetter, Gustav</span>
        </TabTitle>
        <TabClose />
      </TabContentCenter>
      <TabContentRight />
    </TabWrap>
  )
};

export default MenuTab;
