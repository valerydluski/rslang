import styled from 'styled-components';
import Button from './StyledPuzzleRoundButton';

const StyledPuzzleRoundRedButton = styled(Button)`
  background-color: ${(props) => (props.isActive ? '#7968dc' : '#F56748')};
`;

export default StyledPuzzleRoundRedButton;
