import React, { Component } from 'react';

import {
  MenuTopBar,
  MenuLogoWrap,
  MenuTabs
} from './styled';

import MenuTab from './MenuTab';

import MenuLogo from './Icons/MenuLogo';

const recurseFind = (arr, key) => {
  if(arr[0].key < key) {
    return arr[0];
  }

  const decreaseKey = arr.find(item => item.key === key - 1);
  if( typeof decreaseKey === 'object') {
    return decreaseKey;
  }

  return recurseFind(arr, key - 1);
}

class Menu extends Component
{

  state = {
    tabs: [
      { key: 1 },
      { key: 2 },
      { key: 3 }
    ],
    activeTab: 1
  }

  toggleActiveTab = key => this.setState({ activeTab: key });

  onClose = key => this.setState(prevState => {
    const filteredTabs = prevState.tabs.filter(tab => tab.key !== key);
    return {
      tabs: filteredTabs,
      // activeTab: recurseFind(filteredTabs, key).key
    };
  });

  render() {
    return (
      <nav>
        <MenuTopBar>
          <MenuLogoWrap>
            <MenuLogo fill="#fff" />
          </MenuLogoWrap>
          <MenuTabs>
            {this.state.tabs.map(tab => (
              <MenuTab
                key={tab.key}
                active={tab.key === this.state.activeTab}
                setActive={() => this.toggleActiveTab(tab.key)}
                onClose={() => this.onClose(tab.key)}
              />
            ))}
          </MenuTabs>
        </MenuTopBar>
      </nav>
    )
  }
}

export default Menu;