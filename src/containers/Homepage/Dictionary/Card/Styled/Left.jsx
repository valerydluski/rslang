import styled from 'styled-components';

const Left = styled.div`
  width: 20%;
  display: ${(props) => (props.isImageAssociation ? 'flex' : 'none')};
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
`;

export default Left;
