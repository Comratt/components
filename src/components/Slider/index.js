import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  ScrollContainer,
  SliderWrap,
  Card,
  NavButton,
} from './styled';

const Slider = ({ images, show, margin }) => {
  const [currentSlides, setCurrentSlides] = useState(show);
  const [translateX, setTranslateX] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);

  const cardRef = useRef(null);

  useEffect(() => {
    const cardWidth = cardRef.current.getBoundingClientRect().width + margin;
    setSliderWidth((cardWidth * show) - margin);
  }, [])
  
  const toggleSlide = direction => {
    cardRef.current.getBoundingClientRect();
    const cardWidth = cardRef.current.getBoundingClientRect().width + margin;
    if(cardRef.current) {
      if(direction === 'right' && images.length > currentSlides) {
        setCurrentSlides(currentSlides + 1);
        setTranslateX(translateX - cardWidth);
      } else if(direction === 'left' && currentSlides > show) {
        setCurrentSlides(currentSlides - 1)
        setTranslateX(translateX + cardWidth);
      } else if(direction === 'right' && currentSlides >= images.length) {
        setCurrentSlides(show);
        setTranslateX(0);
      } else if(direction === 'left' && currentSlides <= show) {
        setCurrentSlides(images.length);
        setTranslateX(-(cardWidth * (images.length - show)));
      }
    }
  }

  return (
    <ScrollContainer width={sliderWidth}>
      <NavButton position="left" onClick={() => toggleSlide('left')} />
      <SliderWrap translateX={translateX}>
        {images.map(image => (
          <Card
            key={image.id}
            ref={cardRef}
            margin={margin}
          >
            <img
              src={image.url}
              alt="Slider"
            />
            <span>{image.text}</span>
          </Card>
        ))}
      </SliderWrap>
      <NavButton position="right" onClick={() => toggleSlide('right')} />
    </ScrollContainer>
  )
}

Slider.defaultProps = {
  images: [],
  show: 3,
  margin: 15,
};

Slider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    url: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
  show: PropTypes.number,
  margin: PropTypes.number,
};

export default Slider;
