import React from 'react';
import PropTypes from 'prop-types';

class TextQCM extends React.Component {
  state = {
    choice: undefined
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.reset) {
      return {
        ...prevState,
        choice: undefined
      };
    } else if (nextProps.showAnswers) {
      return {
        ...prevState,
        choice: nextProps.answer
      };
    }
    return prevState;
  }

  handleClick = e => {
    this.props.onClick(e.target.dataset.value, this.props.position);
    this.setState({ choice: e.target.dataset.value });
  };

  render() {
    const {
      choices,
      checkValidated,
      answer,
      highlightUnchecked,
      gameIsFinished
    } = this.props;

    const correct =
      (checkValidated || gameIsFinished) && answer === this.state.choice;
    const validateClass =
      checkValidated || gameIsFinished ? (correct ? ' good' : ' bad') : '';
    const highlightClass =
      highlightUnchecked && !this.state.choice ? ' to-check' : '';

    return (
      <React.Fragment>
        {choices.map(choice => {
          const checked = choice === this.state.choice;
          const checkedClass = checked ? ' checked' : '';
          const classes = `${checkedClass}${validateClass}${highlightClass}`;
          return (
            <span
              key={choice}
              className="text-to-select"
              onClick={this.handleClick}
              data-value={choice}
            >
              <div className={`checkbox ${classes}`} data-value={choice} />
              {choice}
            </span>
          );
        })}
      </React.Fragment>
    );
  }
}

TextQCM.propTypes = {
  choices: PropTypes.arrayOf(PropTypes.string).isRequired,
  answer: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
  checkAnswer: PropTypes.bool,
  onClick: PropTypes.func,
  reset: PropTypes.bool.isRequired,
  showAnswers: PropTypes.bool.isRequired,
  checkValidated: PropTypes.bool.isRequired
};

TextQCM.defaultProps = {
  onClick: undefined,
  checkAnswer: false
};

export default TextQCM;
