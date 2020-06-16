import React from 'react';
import { connect } from 'react-redux';
import Input from '../components/UI/Input/Input';
import { changeSpeakITLevel, changeSpeakITPage } from '../redux/action';

class RoundSwitch extends React.Component {
  constructor(props) {
    super(props);
    Object.assign(this, props);

    this.state = {
      inputs: [
        {
          name: 'level',
          classes: 'input_level',
          inputMax: '6',
          inputMin: '1',
          startValue: this.level,
          typeInput: 'number',
          onChangeInput: this.changeLevelHandler,
        },
        {
          name: 'page',
          classes: 'input_page',
          inputMax: '60',
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
    level: state.roundChange.speakITLevel,
    page: state.roundChange.speakITPage,
  };
};

const mapDispatchToProps = {
  changeLevel: changeSpeakITLevel,
  changePage: changeSpeakITPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(RoundSwitch);
