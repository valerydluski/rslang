import styled from 'styled-components';

const SettingsContainerStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  font-size: 18px;
  border-top: 1px solid #c4c4c4;
  user-select: none;
`;

export const SettingsFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
`;

export const SelectContainerStyled = styled.div`
  display: flex;
  width: 100%;
`;
export default SettingsContainerStyled;
