import styled from 'styled-components';
import { DEVICE } from '../../../config';

const EmptyProgressMarkerStyled = styled.div`
  width: 27px;
  height: 27px;
  border-radius: 100%;
  background: #c4c4c4;
  margin-right: 10px;

  @media ${DEVICE.tablet} {
    width: 20px;
    height: 20px;
  }
`;

const FilledProgressMarkerStyled = styled(EmptyProgressMarkerStyled)`
  background: #6550de;
`;

export { EmptyProgressMarkerStyled, FilledProgressMarkerStyled };
