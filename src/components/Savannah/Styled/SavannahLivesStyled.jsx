import styled from 'styled-components';
import filledHeartIcon from '../../UI/Icon/heart-filled.svg';
import emptyHeartIcon from '../../UI/Icon/heart-empty.svg';

const SavannahLiveEmptyStyled = styled.div`
  width: 40px;
  height: 40px;
  background-size: cover;
  background-image: url(${emptyHeartIcon});
  margin-left: 5px;
`;

const SavannahLiveFilledStyled = styled(SavannahLiveEmptyStyled)`
  background-image: url(${filledHeartIcon});
`;

export { SavannahLiveEmptyStyled, SavannahLiveFilledStyled };
