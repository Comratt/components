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
      size: {
        width: 20,
        height: 20,
      }
    }

    this.id = 0;
  }

  toggleClick = e => {
    const id = this.id++;
    const elementSize = e.target.getBoundingClientRect();
    const x = e.clientX - elementSize.left - (elementSize.width / 2);
    const y = e.clientY - elementSize.top - (elementSize.height / 2);
    this.setState(prevState => ({
      animations: [...prevState.animations, { x, y, id }],
      size: {
        width: elementSize.width,
        height: elementSize.height,
      }
    }), () => {
      setTimeout(() => this.setState(prevState => ({
        animations: prevState.animations.filter(animation => animation.id !== id)
      })), this.props.animationDuration)
    });
  };

  render() {
    const { children, animationDuration } = this.props;
    const { animations, size } = this.state;

    const circleSize = Math.max(size.height, size.width);

    return (
      <RippleWrap
        onClick={this.toggleClick}
      >
        {children}
        {animations.map(elem => (
          <RippleCircle
            key={elem.id}
            x={elem.x}
            y={elem.y}
            size={circleSize}
            animationDuration={animationDuration}
          />
        ))}
      </RippleWrap>
    )
  }
};

export default Ripple;
