import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-redux-i18n';
import AboutPersonCardContainer from './styled/AboutPersonCardContainer';

export default function AboutPersonCard(props) {
  const { poster, title, description } = props;

  return (
    <AboutPersonCardContainer>
      <img src={poster} alt={title} />
      <h3>
        <Translate value={title} />
      </h3>
      <div>
        <p>
          <Translate value={description} />
        </p>
      </div>
    </AboutPersonCardContainer>
  );
}

AboutPersonCardContainer.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};