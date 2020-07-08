import styled from 'styled-components';
import { DEVICE } from '../../../config';

const SelectContainer = styled.div`
  margin-left: 10px;
  height: 100%;
  position: relative;

  @media ${DEVICE.tablet} {
    margin-left: 0;
  }
`;

export default SelectContainer;
