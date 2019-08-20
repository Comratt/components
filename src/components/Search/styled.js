import styled, { css } from 'styled-components';

const inputActive = css`
  & ~ label {
    top: -15px;
    font-size: 14px;
    color: #fff;
  }
`;

export const Group = styled.div`
  position: relative;
  margin-bottom: 30px;
  & > svg {
    position: absolute;
    top: 15px;
  }
  & > button {
    position: absolute;
    top: 15px;
    left: 270px;
  }
`;

export const Input = styled.input`
  font-size: 16px;
  padding: 10px 10px 15px 30px;
  background: none;
  display: block;
  width: 300px;
  border: none;
  border-bottom: 1px solid #fff;
  &:focus {
    outline: none;
    ${inputActive}
  }
  ${props => Boolean(props.value) && inputActive}

  &:focus ~ span:before,
  &:focus ~ span:after {
    width: 50%;
  }
`;

export const Label = styled.label`
  color: #fff;
  font-size: 18px;
  position: absolute;
  pointer-events: none;
  left: 30px;
  top: 15px;
  transition: 0.2s ease all;
`;

export const Bar = styled.span`
  position: relative;
  display: block;
  width: 340px;
  &:before, &:after {
    content: "";
    height: 2px;
    width: 0;
    bottom: 0;
    position: absolute;
    background: #fff;
    transition: 0.2s ease all;
  }
  &:before {
    left: 50%;
  }
  &:after {
    right: 50%;
  }
`;

export const Button = styled.button`
  background: none;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  font-size: 16px;
`;