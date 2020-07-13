import React from 'react';
import UserDescriptionContainer from './styled/UserDescriptionContainer';
import StyledUserPhoto from './styled/StyledUserPhoto';
import photo from '../../../../assets/img/photo.png';

export default function UserDescription() {
  return (
    <UserDescriptionContainer>
      <StyledUserPhoto src={photo} alt="User Photo" />
      <h2>Elena</h2>
      <p>Minsk</p>
    </UserDescriptionContainer>
  );
}
