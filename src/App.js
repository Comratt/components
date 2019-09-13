import React from 'react'
import { createGlobalStyle } from 'styled-components'

import Slider from './components/Slider';
import Autocomplete from './components/Autocomplete';
import Icon from './components/Icon';
import Search from './components/Search';
import Ripple from './components/Ripple';
import { Button } from './components/Ripple/styled';
import Menu from './components/Menu';
import DragMain from './components/Draggy/DragMain';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: grey;
    font-family: "Open Sans", Arial, Helvetica, sans-serif
  }
`;

const App = props => {
  const images = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      text: 'Lorem some 1'
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      text: 'Lorem some 2'
    },
    {
      id: 3,
      url: 'https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022__340.jpg',
      text: 'Lorem some 3'
    },
    {
      id: 4,
      url: 'https://image.shutterstock.com/image-photo/colorful-flower-on-dark-tropical-260nw-721703848.jpg',
      text: 'Lorem some 4'
    },
    {
      id: 5,
      url: 'https://image.shutterstock.com/image-photo/colorful-flower-on-dark-tropical-260nw-721703848.jpg',
      text: 'Lorem some 5'
    },
  ];

  const items = [
    {
      id: 123,
      name: 'Cat'
    },
    {
      id: 141,
      name: 'Dog'
    },
    {
      id: 1425,
      name: 'Elephant'
    },
    {
      id: 412,
      name: 'Bird'
    },
    {
      id: 2412,
      name: 'Turtle'
    },
    {
      id: 3421,
      name: 'Mouse'
    },
    {
      id: 412,
      name: 'Muse'
    },
  ];

  const onSubmit = phrase => {
    console.log(phrase)
  }

  return (
    <>
      <GlobalStyle />
      <div style={{ display: 'none' }}>
        <Slider
          images={images}
          show={3}
          margin={15}
          cardSlideWidth={200}
        />
      </div>
      <div style={{ display: 'none' }}>
        <Autocomplete items={items} limit={5} />
      </div>
      <div style={{ display: 'none' }}>
        <Icon />
      </div>
      <div id="search" style={{ display: 'none' }}>
        <Search
          onSubmit={onSubmit}
          placeholder="Vorname, Nachname, Beratungsname"
        />
      </div>
      <div style={{ display: 'none' }}>
        <Ripple
          animationDuration={600}
          color="#000"
          shadow
        >
          <Button>Click</Button>
        </Ripple>
      </div>
      <div style={{ display: 'none' }}>
        <Menu />
      </div>
      <div>
        <DragMain />
      </div>
    </>
  )
}
export default App