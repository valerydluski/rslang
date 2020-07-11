import React from 'react';
import { Translate } from 'react-redux-i18n';
import PropTypes from 'prop-types';
import { Switch, Redirect } from 'react-router-dom';
import PrivateNavigationRoute from '../../../Navigation/PrivateNavigationRoute';
import StyledDictionary from './Styled/StyledDictionary';
import StyledTitle from './Styled/StyledTitle';
import DictionaryNavigationMenu from '../../../../containers/Navigation/DictionaryNavigationMenu';
import LearningList from './Lists/LearningList';
import DifficultList from './Lists/DifficultList';
import DeletedList from './Lists/DeletedList';
import Title from '../../../../containers/Homepage/Content/Title/Title';

function Dictionary(props) {
  const { getAggregatedWords } = props;

  getAggregatedWords();

  return (
    <StyledDictionary>
      <Title />
      <StyledTitle>
        <Translate value="HomePage.dictionary" />
      </StyledTitle>
      <DictionaryNavigationMenu />
      <Switch>
        <PrivateNavigationRoute path="/dictionary/learning-words" exact component={LearningList} />
        <PrivateNavigationRoute
          path="/dictionary/difficult-words"
          exact
          component={DifficultList}
        />
        <PrivateNavigationRoute path="/dictionary/deleted-words" exact component={DeletedList} />
        <Redirect to="/dictionary/learning-words" />
      </Switch>
    </StyledDictionary>
  );
}

Dictionary.propTypes = {
  getAggregatedWords: PropTypes.func.isRequired,
};

export default Dictionary;
