// Absolute imports
import React, { Component } from 'react';

// Styled
import {
  RippleWrap,
  RippleCircle
} from './styled';

class Ripple extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      animations: [],
      circleSize: 0,
    };

    this.id = 0;
  }

  toggleClick = e => {
    const id = this.id++;

    const elementSize = e.target.getBoundingClientRect();
    const circleSize = Math.max(elementSize.height, elementSize.width);

    const x = e.clientX - elementSize.left - (circleSize / 2);
    const y = e.clientY - elementSize.top - (circleSize / 2);

    this.setState(prevState => ({
      animations: [
        ...prevState.animations,
        { x, y, id }
      ],
      circleSize
    }), () => {
      setTimeout(() => this.setState(prevState => ({
        animations: prevState.animations.filter(animation => animation.id !== id),
      })), this.props.animationDuration);
    });
  };

  render() {
    const { children, animationDuration, color, shadow } = this.props;
    const { animations, circleSize } = this.state;
    console.log(Object.getOwnPropertyNames(children))
    return (
      <RippleWrap
        onClick={this.toggleClick}
        shadow={shadow}
      >
        {children}
        {animations.map(elem => (
          <RippleCircle
            key={elem.id}
            x={elem.x}
            y={elem.y}
            size={circleSize}
            color={color}
            animationDuration={animationDuration}
          />
        ))}
      </RippleWrap>
    )
  }
};

export default Ripple;
