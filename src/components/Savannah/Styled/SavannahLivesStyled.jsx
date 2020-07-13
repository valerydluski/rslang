import styled from 'styled-components';
import filledHeartIcon from '../../UI/Icon/heart-filled.svg';
import emptyHeartIcon from '../../UI/Icon/heart-empty.png';

const SavannahLiveEmptyStyled = styled.div`
  width: 38px;
  height: 34px;
  background-size: cover;
  background-image: url(${emptyHeartIcon});
  margin-left: 4px;
`;

const SavannahLiveFilledStyled = styled(SavannahLiveEmptyStyled)`
  background-image: url(${filledHeartIcon});
`;

export { SavannahLiveEmptyStyled, SavannahLiveFilledStyled };
