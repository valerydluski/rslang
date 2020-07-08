import styled from 'styled-components';

const EmptyProgressMarkerStyled = styled.div`
  width: 27px;
  height: 27px;
  border-radius: 100%;
  background: #c4c4c4;
  margin-right: 10px;
`;

const FilledProgressMarkerStyled = styled(EmptyProgressMarkerStyled)`
  background: #6550de;
`;

export { EmptyProgressMarkerStyled, FilledProgressMarkerStyled };
