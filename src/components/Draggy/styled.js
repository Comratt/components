import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 400px;
  height: 100%;
  padding: 25px;
  border: 2px dotted black;
  transition: .2s;
`;

export const Item = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid red;
  cursor: pointer;
  opacity: ${props => props.isDragging ? '.4' : '1'};
`;

export const ItemWrap = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  margin: 10px 0;
`;

export const DropZoneArea = styled.div`
  border: 3px dotted red;
  width: 100%;
  height: 30px;
  margin: 15px 0;
`;
