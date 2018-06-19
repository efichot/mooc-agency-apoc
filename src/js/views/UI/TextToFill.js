import React from 'react';
import PropTypes from 'prop-types';

import TextQCM from './TextQCM';
import ButtonPrimary from './ButtonPrimary';
import Fade from '../../transitions/Fade';
import PopupBlueInnerHtml from './PopupBlueInnerHtml';
import victoryMessages from '../../model/static/popupBlueMessages';

class TextToFill extends React.Component {
  state = {
    answers: {},
    correctAnswers: {},
    filled: false,
    filledCorrectly: false,
    checkValidated: false,
    reset: false,
    showAnswers: false,
    highlightUnchecked: false,
    gameIsFinished: false,
    victoryMessage: undefined
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.reset) {
      const answers = {};
      nextProps.textToFill.forEach(text => {
        if (!text.toFill) {
          return;
        } else {
          answers[text.position] = null;
        }
      });
      return {
        ...prevState,
        answers
      };
    }
    return prevState;
  }

  componentDidMount() {
    const correctAnswers = {};
    const answers = {};
    this.props.textToFill.forEach(text => {
      if (!text.toFill) {
        return;
      } else {
        correctAnswers[text.position] = text.answer;
        answers[text.position] = null;
      }
    });
    this.setState({
      correctAnswers,
      answers
    });
  }

  handleTextClick = async (choice, position) => {
    const answers = { ...this.state.answers };
    answers[position] = choice;
    await this.setState({ answers });
    this.checkTextIsFilled();
  };

  checkTextIsFilled = () => {
    let filledCorrectly = true;
    let filled = true;
    const { answers, correctAnswers } = this.state;
    Object.keys(this.state.answers).forEach(key => {
      if (answers[key] === null) {
        filled = false;
        filledCorrectly = false;
      } else if (answers[key] !== correctAnswers[key]) {
        filledCorrectly = false;
      }
    });
    this.setState({
      filled,
      filledCorrectly
    });
    // this.props.textIsFilled(this.props.textStates, filled, correct);
  };

  handleValidate = () => {
    if (this.state.showAnswers) {
      return;
    }
    if (!this.state.filled) {
      const victoryMessage = { __html: victoryMessages.textNotFilled };
      this.setState({ victoryMessage });
      this.setState({ highlightUnchecked: true });
    } else if (this.state.filledCorrectly) {
      const victoryMessage = { __html: victoryMessages.isVictory };
      this.setState({ victoryMessage });
      this.setState({ checkValidated: true });
      this.setState({ highlightUnchecked: false });
      this.setState({ gameIsFinished: true });
      this.props.gameIsFinished(true);
    } else {
      const victoryMessage = {
        __html: victoryMessages.isDefeatHTML
      };
      this.setState({ checkValidated: true });
      this.setState({ highlightUnchecked: false });
      this.setState({ victoryMessage });
    }
  };

  handleReset = () => {
    this.setState({
      reset: true,
      checkValidated: false,
      showAnswers: false,
      filled: false,
      filledCorrectly: false
    });
    this.props.setTimeout(() => this.setState({ reset: false }), 200);
  };

  handleSeeAnswers = () => {
    this.setState({ showAnswers: true });
    if (!this.state.gameIsFinished) {
      this.setState({ gameIsFinished: true });
      this.props.gameIsFinished(true);
    }
  };

  render() {
    const { textToFill, title } = this.props;

    const {
      gameIsFinished,
      victoryMessage,
      checkValidated,
      reset,
      showAnswers,
      highlightUnchecked
    } = this.state;

    return (
      <Fade in={this.props.in}>
        {title && <span className="bloc__name">{title}</span>}
        <div className="bloc-text-to-fill__text">
          {textToFill.map(text => {
            if (text.toFill) {
              return (
                <TextQCM
                  key={text.position}
                  position={text.position}
                  choices={text.choices}
                  answer={text.answer}
                  onClick={this.handleTextClick}
                  reset={reset}
                  showAnswers={showAnswers}
                  checkValidated={checkValidated}
                  highlightUnchecked={highlightUnchecked}
                  gameIsFinished={gameIsFinished}
                />
              );
            } else {
              text.content.__html = text.content.__html
                .replace(/\r\n/g, '<br />')
                .replace(/[\r\n]/g, '<br />');
              return (
                <span
                  key={text.position}
                  className="bloc-text-to-fill__bloc-description-inline"
                  dangerouslySetInnerHTML={text.content}
                />
              );
            }
          })}
        </div>
        <div className="bloc-text-to-fill__validate-victory">
          <ButtonPrimary
            name="valider"
            onClick={this.handleValidate}
            classProps={`bloc-text-to-fill__validate`}
          />
          <ButtonPrimary
            name="voir la réponse"
            onClick={this.handleSeeAnswers}
            classProps={`bloc-text-to-fill__answers ${
              (checkValidated || gameIsFinished) && !showAnswers
                ? 'visible'
                : 'hidden'
            }`}
          />
          <ButtonPrimary
            name="recommencer"
            onClick={this.handleReset}
            classProps={`bloc-text-to-fill__reset ${
              checkValidated || showAnswers ? 'visible' : 'hidden'
            }`}
          />
          {victoryMessage && (
            <PopupBlueInnerHtml
              classProps="bloc-text-to-fill__victory-message"
              description={victoryMessage}
              onCloseClick={() => this.setState({ victoryMessage: undefined })}
            />
          )}
        </div>
      </Fade>
    );
  }
}

TextToFill.propTypes = {
  in: PropTypes.bool,
  gameIsFinished: PropTypes.func,
  title: PropTypes.string,
  textToFill: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        position: PropTypes.number.isRequired,
        toFill: PropTypes.bool.isRequired,
        content: PropTypes.shape({ __html: PropTypes.string.isRequired })
      }),
      PropTypes.shape({
        position: PropTypes.number.isRequired,
        toFill: PropTypes.bool.isRequired,
        choices: PropTypes.arrayOf(PropTypes.string).isRequired,
        answer: PropTypes.string.isRequired
      })
    ])
  ).isRequired
};

TextToFill.defaultProps = {
  in: false,
  gameIsFinished: undefined,
  title: undefined
};

export default TextToFill;
