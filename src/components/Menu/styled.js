import styled from 'styled-components';

export const MenuTopBar = styled.section`
  position: relative;
  height: 45px;
  background: #0c3b69;
  display: flex;
`;

export const MenuLogoWrap = styled.div`
  flex-shrink: 0;
  width: 45px;
  height: 23px;
  margin-top: 10px;
  margin-left: 10px;
`;

export const MenuTabs = styled.section`
  display: flex;
  align-items: flex-end;
  position: relative;
  width: 100%;
  height: 45px;
  overflow: hidden;
  & > div:first-child {
    margin-left: 10px;
  }
`;
