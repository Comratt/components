import React from 'react'
import { createGlobalStyle } from 'styled-components'

import Slider from './components/Slider';

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
  return (
    <>
      <GlobalStyle />
      <Slider
        images={images}
        show={1}
        margin={15}
      />
    </>
  )
}
export default App