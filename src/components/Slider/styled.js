import styled, { css } from 'styled-components';

const leftBtn = css`
  left: 0;
`;

const rightBtn = css`
  right: 0;
`;

export const ScrollContainer = styled.div`
  overflow: hidden;
  width: ${props => props.width}px;
  position: relative;
  margin: 0 40px;
`;

export const SliderWrap = styled.div`
  display: inline-block;
  white-space: nowrap;
  transform: translateX(${props => props.translateX}px);
  transition: .3s;
  & > div {
  margin-right: ${props => props.margin}px;
  }
`;

export const Card = styled.div`
  width: ${props => props.width}px;
  height: 300px;
  border: 1px solid black;
  border-radius: 25px;
  overflow: hidden;
  display: inline-flex;
  flex-direction: column;
  & > img {
    width: 100%;
    height: 150px;
  }
  & > span {
    color: black;
  }
`;

export const NavButton = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 2px solid black;
  position: absolute;
  ${props => props.position === 'left' ? leftBtn : rightBtn};
  top: 40%;
  z-index: 1;
`;
