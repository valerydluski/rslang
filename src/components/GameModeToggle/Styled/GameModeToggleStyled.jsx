import styled from 'styled-components';

const RuGameModeToggleStyled = styled.div`
  position: relative;
  margin-top: 20px;
  border-radius: 5px;
  color: #c4c4c4;
  font-weight: 500;
  input {
    -webkit-appearance: none;
    height: 50px;
    width: 225px;
    background-image: linear-gradient(180deg, #fff 40%, #f0f0f0);
    border-radius: 5px;
    position: relative;
    cursor: pointer;
    &::after {
      content: '';
      position: absolute;
      top: 3px;
      left: 3px;
      width: 44px;
      height: 44px;
      z-index: 1;
      transition: 0.3s;
      background: #404496;
      border-radius: 5px;
      box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.2);
    }
    & + span:after {
      position: absolute;
      content: attr(data-on);
      font-size: 2rem;
      text-transform: uppercase;
      left: 60px;
      top: 13px;
      cursor: pointer;
      transition: 0.3s;
    }
    &:checked {
      &::after {
        transform: translateX(175px);
      }
      & + span:after {
        content: attr(data-off);
        left: 20px;
      }
    }
    &:focus {
      outline-color: transparent;
    }
  }
`;

const EnGameModeToggleStyled = styled(RuGameModeToggleStyled)`
  input {
    width: 140px;
    &:checked {
      &::after {
        transform: translateX(90px);
      }
    }
  }
`;

export { RuGameModeToggleStyled, EnGameModeToggleStyled };
