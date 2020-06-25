import styled from 'styled-components';

const SideBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: ${(props) => (props.left ? '17%' : '25%')};
  background-color: #f3f3f3;
  padding: 30px;
  height: 100%;
  box-sizing: border-box;
`;

export default SideBarContainer;
