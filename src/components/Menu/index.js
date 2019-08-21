import React, { Component } from 'react';

import {
  MenuTopBar,
  MenuLogoWrap,
  MenuTabs
} from './styled';

import MenuTab from './MenuTab';

import MenuLogo from './Icons/MenuLogo';

class Menu extends Component
{
  render() {
    return (
      <nav>
        <MenuTopBar>
          <MenuLogoWrap>
            <MenuLogo fill="#fff" />
          </MenuLogoWrap>
          <MenuTabs>
            <MenuTab active />
            <MenuTab />
          </MenuTabs>
        </MenuTopBar>
      </nav>
    )
  }
}

export default Menu;