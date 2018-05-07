import React from 'react';
import PropTypes from 'prop-types';
import ReactTimeout from 'react-timeout';

import BlocHeader from './BlocHeader';
import BlocDescription from './BlocDescription';
import ButtonPrimary from './UI/ButtonPrimary';
import PopupBlue from './UI/PopupBlue';
import PopupBlueInnerHtml from './UI/PopupBlueInnerHtml';
import Fade from '../transitions/Fade';

const popupVictoryMessage = `Bravo ! C'est la bonne réponse.`;
const popupDefeatMessage = `Ce n'est pas la bonne réponse. Réessayez !`;

class BlocQuiz extends React.Component {
  state = {
    buttonActive: null,
    currentQuestion: 1,
    victoryMessage: undefined,
    gameIsFinished: false,
    correctAnswer: null,
    help: false,
    questions: {},
    timeout: null
  };

  handleClick = answer => {
    if (this.state.victoryMessage === popupVictoryMessage) {
      return;
    }
    this.setState({ buttonActive: answer });
    this.setState({ victoryMessage: null });
    this.setState({ gameIsFinished: false });
  };

  handleValidate = e => {
    this.setState({ help: true });
    this.props.clearTimeout(this.state.timeout);
    if (this.state.buttonActive === this.state.correctAnswer) {
      this.setState({ victoryMessage: popupVictoryMessage });
      /*this.setState({ gameIsFinished: true });
      this.props.gameIsFinished(this.state.gameIsFinished);*/
      if (this.state.victoryMessage === popupVictoryMessage)
        this.showNextQuestion();
    } else {
      this.setState({ victoryMessage: popupDefeatMessage });
      const timeout = this.props.setTimeout(() => {
        this.setState({ victoryMessage: undefined });
      }, 2000);
      this.setState({ timeout });
    }
  };

  showNextQuestion = () => {
    if (this.state.currentQuestion < Object.keys(this.state.questions).length) {
      this.setState({ currentQuestion: this.state.currentQuestion + 1 });
      this.setTheCorrectAnswer(
        this.state.questions[`question_${this.state.currentQuestion + 1}`]
      );
    }
    this.setState({ victoryMessage: undefined });
    this.setState({ buttonActive: null });
    this.setState({ help: false });
  };

  setTheCorrectAnswer = question => {
    let correctAnswer = null;
    question.answers.forEach((answer, index) => {
      if (correctAnswer !== null) {
        return;
      } else {
        if (answer.correctAnswer === true) {
          correctAnswer = index + 1;
        } else {
          return;
        }
      }
    });

    this.setState({ correctAnswer });
  };

  componentWillMount() {
    this.setState({ questions: this.props.questions });
    this.setTheCorrectAnswer(
      this.props.questions[`question_${this.state.currentQuestion}`]
    );
  }

  render() {
    const { noChapter, duration, chapter, name } = this.props;
    const { questions, currentQuestion } = this.state;
    const { question, answers, explication } = questions[
      `question_${currentQuestion}`
    ];

    return (
      <Fade classProps={`bloc bloc-quiz`} in={this.props.in}>
        {!noChapter && (
          <BlocHeader type="chrono" duration={duration} name={chapter} />
        )}
        <span className="bloc__name">{name}</span>
        <BlocDescription
          classProps="bloc__first-description"
          description={question}
        />
        <div className="bloc-quiz__answers">
          {answers.map((answer, index) => {
            return (
              <ButtonPrimary
                key={index}
                id={`QCM_question_1_answer_${index}`}
                name={answer.content}
                classProps={`button-quiz${
                  this.state.buttonActive === index + 1 ? ' active' : ''
                }${
                  this.state.victoryMessage === popupVictoryMessage
                    ? ' finished'
                    : ''
                }`}
                onClick={this.handleClick}
                answer={index + 1}
              />
            );
          })}
        </div>
        {this.state.victoryMessage && (
          <PopupBlue classProps={`popup-blue__victory-message`}>
            <span>{this.state.victoryMessage}</span>
          </PopupBlue>
        )}
        <ButtonPrimary
          name={
            this.state.victoryMessage === popupVictoryMessage
              ? 'suivant'
              : 'valider'
          }
          onClick={this.handleValidate}
          classProps={`bloc-quiz__validate`}
        />
        {this.state.help && (
          <PopupBlueInnerHtml
            classes={`popup-blue__explication`}
            description={explication}
          />
        )}
      </Fade>
    );
  }
}

BlocQuiz.propTypes = {
  in: PropTypes.bool,
  noChapter: PropTypes.bool,
  duration: PropTypes.number,
  questions: PropTypes.object.isRequired,
  description: PropTypes.object.isRequired,
  chapter: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

BlocQuiz.defaultProps = {
  in: false,
  noChapter: false,
  duration: 0
};

export default ReactTimeout(BlocQuiz);
