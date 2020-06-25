import React from 'react';
import { connect } from 'react-redux';
import Input from '../components/UI/Input/Input';
import { changeGameLevel, changeGamePage } from '../redux/Games/action';

const maxLevel = '6';
const maxPage = '60';

class RoundSwitch extends React.Component {
  constructor(props) {
    super(props);
    Object.assign(this, props);

    this.state = {
      inputs: [
        {
          name: 'level',
          classes: 'input_level',
          inputMax: maxLevel,
          inputMin: '1',
          startValue: this.level,
          typeInput: 'number',
          onChangeInput: this.changeLevelHandler,
        },
        {
          name: 'page',
          classes: 'input_page',
          inputMax: maxPage,
          inputMin: '1',
          startValue: this.page,
          typeInput: 'number',
          onChangeInput: this.changePageHandler,
        },
      ],
    };

    this.changeLevelHandler = this.changeLevelHandler.bind(this);
    this.changePageHandler = this.changePageHandler.bind(this);
  }

  submitHandler = (event) => {
    event.preventDefault();
  };

  changeLevelHandler = (value) => {
    this.changeLevel(value);
  };

  changePageHandler = (value) => {
    this.changePage(value);
  };

  render() {
    const { inputs } = this.state;

    return (
      <form onSubmit={this.submitHandler}>
        {inputs.map((input) => {
          return (
            <Input
              key={input.name}
              name={input.name}
              classes={input.classes}
              inputMax={input.inputMax}
              inputMin={input.inputMin}
              startValue={input.startValue}
              typeInput={input.typeInput}
              onChangeInput={input.onChangeInput}
            />
          );
        })}
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    level: state.roundChange.gameLevel,
    page: state.roundChange.gamePage,
  };
};

const mapDispatchToProps = {
  changeLevel: changeGameLevel,
  changePage: changeGamePage,
};

export default connect(mapStateToProps, mapDispatchToProps)(RoundSwitch);
