import styled from 'styled-components';

const Left = styled.div`
  width: 100px;
  margin-left: 20px;
  display: ${(props) => (props.isImageAssociation ? 'flex' : 'none')};
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
`;

export default Left;
