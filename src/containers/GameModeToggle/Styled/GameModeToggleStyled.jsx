import styled from 'styled-components';

const RuGameModeToggleStyled = styled.div`
  border-radius: 75px;
  margin: 15px 0;
  font-weight: 500;
  position: relative;
  input {
    -webkit-appearance: none;
    height: 60px;
    width: 255px;
    border: 1px solid #b2b2b2;
    border-radius: 75px;
    cursor: pointer;
    position: relative;
    outline: none;
    &::after {
      content: '';
      position: absolute;
      top: 5px;
      left: 6px;
      width: 48px;
      height: 48px;
      z-index: 1;
      transition: 0.6s;
      background: #6550de;
      border-radius: 100%;
    }
    &::before {
      position: absolute;
      content: attr(data-on);
      color: #7d7d7d;
      font-size: 22px;
      text-transform: uppercase;
      left: 70px;
      top: 18px;
      cursor: pointer;
      transition: 0.6s;
    }
    &:checked {
      &::after {
        transform: translateX(193px);
        background-color: #f56748;
        transition: 0.6s ease-out;
      }
      &::before {
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
    width: 160px;
    &:checked {
      &::after {
        transform: translateX(98px);
      }
    }
  }
`;

export { RuGameModeToggleStyled, EnGameModeToggleStyled };
