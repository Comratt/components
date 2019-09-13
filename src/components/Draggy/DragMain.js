import React, { Component } from 'react';

import Draggy from './index';

class DragMain extends Component {
  render() {
    const items = [
      {
        id: 1,
        name: 1
      },
      {
        id: 2,
        name: 2
      },
      {
        id: 3,
        name: 3
      }
    ];
    const items2 = [
      {
        id: 5,
        name: 5
      },
      {
        id: 6,
        name: 6
      },
      {
        id: 7,
        name: 7
      }
    ];
    return(
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Draggy name="Left" items={items} />
        <Draggy name="Right" items={items2} />
      </div>
    )
  }
}

export default DragMain;