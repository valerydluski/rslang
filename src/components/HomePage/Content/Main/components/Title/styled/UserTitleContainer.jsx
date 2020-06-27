import styled from 'styled-components';

const UserTitleContainer = styled.div`
  width: 100%;
  height: 205px;
  background-image: url(${(props) => props.bg});
  position: relative;
  background-size: cover;

  h2 {
    margin: 0;
    position: absolute;
    left: 26px;
    bottom: 6px;
    color: #ffffff;
    font-weight: bold;
    font-size: 29px;
    line-height: 56px;
  }
`;

export default UserTitleContainer;
