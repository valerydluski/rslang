import styled from 'styled-components';

const StyledGameProgress = styled.div`
  height: 8px;
  background: linear-gradient(
    90deg,
    #6550de ${(props) => props.gameProgressLine}%,
    #e5e5e5 ${(props) => props.gameProgressLine}%,
    #e5e5e5 ${(props) => 100 - props.gameProgressLine}%
  );
  margin: 0 auto;
  width: 90%;
  max-width: 1200px;
`;

export default StyledGameProgress;
