import styled from 'styled-components';

const StyledButtonWithIcon = styled.button`
  width: 150px;
  color: #929292;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 25px;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  position: relative;
  margin-bottom: 25px;
  transition: 0.3s linear;

  &::before {
    content: '';
    width: 28px;
    height: 28px;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${(props) => props.icon});
    background-repeat: no-repeat;
    transition: 0.3s linear;
  }

  &:hover {
    color: #6550de;

    &::before {
      background-image: url(${(props) => props.iconHover});
    }
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export default StyledButtonWithIcon;
