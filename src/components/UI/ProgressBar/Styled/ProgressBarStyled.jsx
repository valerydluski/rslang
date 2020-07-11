import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Circle = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-right: 5px;
  &:nth-child {
    margin-right: 0;
  }
`;
