import React from 'react';
import styled from 'styled-components';

const Menu = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const StatusMenu = () => {
  return (
    <Menu>
      <input type="text" />
      <input type="text" />
    </Menu>
  );
};

export default StatusMenu;
