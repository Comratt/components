import React, { useState, useRef } from 'react';

import {
  RippleWrap,
  RippleCircle
} from './styled';

const Ripple = ({ children, animationDuration }) => {

  const circleRef = useRef(null);
  const [animations, setAnimations] = useState([]);

  const toggleClick = e => {
    console.log(e.target)
    const x = e.clientX - e.target.getBoundingClientRect().left;
    const y = e.clientY - e.target.getBoundingClientRect().top;
    setAnimations(() => [...animations, { x, y }]);
    setTimeout(() => setAnimations([]), animationDuration);
  };

  return (
    <RippleWrap
      onClick={toggleClick}
    >
      {children}
      {animations.map((elem, indx) => (
        <RippleCircle
          key={indx}
          x={elem.x}
          y={elem.y}
          ref={circleRef}
          animationDuration={animationDuration}
        />
      ))}
    </RippleWrap>
  )
};

export default Ripple;
