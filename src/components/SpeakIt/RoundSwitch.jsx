import React from 'react';
import PropTypes from 'prop-types';
import InputNumber from './InputNumber';

export default class RoundSwitch extends React.Component {
  constructor(props) {
    super(props);
    const { levelValue, pageValue } = props;

    this.state = {
      inputs: [
        { name: 'level', classes: 'input_level', inputMax: '6', value: levelValue || '1' },
        { name: 'page', classes: 'input_page', inputMax: '60', value: pageValue || '1' },
      ],
    };
  }

  submitHandler = (event) => {
    event.preventDefault();
  };

  render() {
    const { inputs } = this.state;

    return (
      <form onSubmit={this.submitHandler}>
        {inputs.map((input) => {
          return (
            <InputNumber
              key={input.name}
              name={input.name}
              classes={input.classes}
              inputMax={input.inputMax}
              inputValue={input.inputValue}
            />
          );
        })}
      </form>
    );
  }
}

RoundSwitch.propTypes = {
  levelValue: PropTypes.string,
  pageValue: PropTypes.string,
};

RoundSwitch.defaultProps = {
  levelValue: '1',
  pageValue: '1',
};
