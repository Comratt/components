import styled from 'styled-components';

export const Group = styled.div`
  position: relative;
  margin-bottom: 30px;
  & > svg {
    position: absolute;
    bottom: 10px;
  }
  & > button {
    position: absolute;
    bottom: 10px;
    right: 0px;
  }
`;

export const Input = styled.input`
  font-size: 16px;
  padding: 10px 80px 5px 30px;
  background: none;
  display: block;
  width: calc(100% - 110px);
  border: none;
  border-bottom: 1px solid #fff;
  color: #fff;
  font-size: 18px;
  &::placeholder {
    color: #fff;
    font-size: 18px;
    opacity: .9;
  }
  &:focus {
    outline: none;
  }

  &:focus ~ span:before,
  &:focus ~ span:after {
    width: 50%;
  }
`;

export const Bar = styled.span`
  position: relative;
  display: block;
  width: 100%;
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
  margin: 0;
  padding: 0;
`;