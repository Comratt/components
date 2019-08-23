import styled, { keyframes } from 'styled-components';

const circleAnimation = keyframes`
  0% {
    transform: scale(.1);
    opacity: .75;
  }
  98% {
    opacity: 0.02
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
`;

export const RippleCircle = styled.div`
  border-radius: 50%;
  background-color: deepskyblue;
  width: ${props => props.size || 20}px;
  height: ${props => props.size ||20}px;
  position: absolute;
  opacity: 0;
  top: ${({ y }) => parseInt(y)}px;
  left: ${({ x }) => parseInt(x)}px;
  animation: ${circleAnimation} ${props => props.animationDuration}ms ease;
  z-index: 1;
  pointer-events: none;
`;

export const RippleWrap = styled.div`
  position: relative;
  overflow: hidden;
  display: inline-block;
  z-index: 2;
  cursor: pointer;
`;

export const Button = styled.button`
  height: 400px;
  width: 400px;
  background-color: #fcfc;
  border: none;
  cursor: pointer;
`;
