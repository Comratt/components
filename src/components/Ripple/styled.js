import styled, { keyframes, css } from 'styled-components';

const circleAnimation = keyframes`
  0% {
    transform: scale(.01);
    opacity: .5;
  }
  10% {
    opacity: .75;
  }
  98% {
    opacity: 0.02
  }
  99% {
    opacity: 0.01
  }
  100% {
    transform: scale(1.75);
    opacity: 0;
  }
`;

const rippleShadow = css`
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0,0,0,.12);
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0,0,0,.12);
  }
  &:active {
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0,0,0,.12);
  }
`;

export const RippleCircle = styled.div`
  border-radius: 50%;
  background-color: ${props => props.color || '#eee'};
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  position: absolute;
  opacity: 0;
  top: ${({ y }) => parseInt(y)}px;
  left: ${({ x }) => parseInt(x)}px;
  animation: ${circleAnimation} ${props => props.animationDuration}ms linear;
  z-index: 1;
  pointer-events: none;
`;

export const RippleWrap = styled.div`
  position: relative;
  overflow: hidden;
  display: inline-block;
  z-index: 2;
  cursor: pointer;
  ${props => props.shadow && rippleShadow};
`;

export const Button = styled.button`
  height: 300px;
  width: 600px;
  background-color: #fcfc;
  border: none;
  cursor: pointer;
  outline: none;
`;
