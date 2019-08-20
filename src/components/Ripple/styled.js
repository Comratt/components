import styled, { keyframes, css } from 'styled-components';

const circleAnimation = keyframes`
  0% {
    transform: scale(.98, .98);
    opacity: .5;
  }
  100% {
    transform: scale(20);
    opacity: 0;
  }
`;

export const RippleCircle = styled.div`
  border-radius: 50%;
  background-color: deepskyblue;
  width: 10px;
  height: 10px;
  position: absolute;
  opacity: 0;
  top: ${({ y }) => parseInt(y)}px;
  left: ${({ x }) => parseInt(x)}px;
  animation: ${circleAnimation} ${props => props.animationDuration}ms forwards linear;
  z-index: 1;
`;

export const RippleWrap = styled.div`
  position: relative;
  overflow: hidden;
  display: inline-block;
  z-index: 2;
`;

export const Button = styled.button`
  height: 40px;
  width: 100px;
  background-color: #fcfc;
  border: none;
`;
