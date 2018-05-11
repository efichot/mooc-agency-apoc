import React from 'react';
import PropTypes from 'prop-types';
import ReactTimeout from 'react-timeout';

import BlocHeader from './BlocHeader';
import BlocDescription from './BlocDescription';
import ButtonPrimary from './UI/ButtonPrimary';
import PopupBlue from './UI/PopupBlue';
import Chrono from './UI/Chrono';
import PopupBlueInnerHtml from './UI/PopupBlueInnerHtml';
import Fade from '../transitions/Fade';

const popupVictoryMessage = `Bravo ! C'est la bonne réponse.`;
const popupDefeatMessage = `Ce n'est pas la bonne réponse. Dommage !`;

class BlocQuiz extends React.Component {
  state = {
    buttonActive: null,
    /******** ACHTUNG ! La question 1 est à l'index 0, la question 10 à l'index 9 *******/
    currentQuestionIndex: 0,
    victoryMessage: undefined,
    gameIsFinished: false,
    correctAnswer: null,
    help: false,
    questions: [],
    timeout: null,
    chrono: 60
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.questions.length > 0) {
      return {
        ...prevState,
        questions: nextProps.questions
      };
    }
    return prevState;
  }

  componentDidMount() {
    this.setTheCorrectAnswer(
      this.props.questions[this.state.currentQuestionIndex]
    );
  }

  handleClick = answer => {
    if (this.state.victoryMessage === popupVictoryMessage) {
      return;
    }
    this.setState({ buttonActive: answer });
    this.setState({ victoryMessage: undefined });
    this.setState({ gameIsFinished: false });
  };

  handleValidate = e => {
    this.setState({ help: true });
    this.props.clearTimeout(this.state.timeout);
    if (this.state.buttonActive === this.state.correctAnswer) {
      if (this.state.victoryMessage === popupVictoryMessage) {
        this.showNextQuestion();
        return;
      }
      this.setState({ victoryMessage: popupVictoryMessage });
    } else {
      if (this.state.victoryMessage === popupDefeatMessage) {
        this.showNextQuestion();
        return;
      }
      this.setState({ victoryMessage: popupDefeatMessage });
    }
  };

  showNextQuestion = async () => {
    const { currentQuestionIndex, questions } = this.state;

    if (currentQuestionIndex < questions.length) {
      const nextQIndex = currentQuestionIndex + 1;
      this.setState({ currentQuestionIndex: nextQIndex });
      this.setTheCorrectAnswer(questions[nextQIndex]);
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

  render() {
    const { modulType, noChapter, duration, chapter, name } = this.props;

    const { questions, currentQuestionIndex, chrono } = this.state;

    const { question, answers, explication } = questions[currentQuestionIndex];

    return (
      <Fade classProps={`bloc bloc-quiz`} in={this.props.in}>
        {!noChapter && (
          <BlocHeader type="chrono" duration={duration} name={chapter} />
        )}
        <span className="bloc__name">{name}</span>
        <div className="chrono-question">
          <Chrono
            totalDuration={chrono}
            stop={this.state.help}
            reset={!this.state.help}
            context={currentQuestionIndex}
          />
          <BlocDescription
            modulType={modulType}
            classProps="bloc__first-description"
            description={question}
          />
        </div>
        <div className="bloc-quiz__answers">
          {answers.map((answer, index) => {
            return (
              <ButtonPrimary
                key={index}
                id={`QCM_question_1_answer_${index}`}
                name={answer.content}
                classProps={`button-quiz${
                  this.state.buttonActive === index + 1 ? ' active' : ''
                }${this.state.victoryMessage !== undefined ? ' finished' : ''}${
                  this.state.correctAnswer === index + 1 ? ' correct' : ''
                }`}
                onClick={this.handleClick}
                answer={index + 1}
              />
            );
          })}
        </div>
        <div className="validate-and-popup">
          {this.state.victoryMessage && (
            <PopupBlue
              classProps={`popup-blue__victory-message`}
              style={{
                visibility: this.state.victoryMessage ? 'visible' : 'hidden'
              }}
            >
              <span>{this.state.victoryMessage}</span>
            </PopupBlue>
          )}
          <ButtonPrimary
            name={
              this.state.victoryMessage !== undefined ? 'suivant' : 'valider'
            }
            onClick={this.handleValidate}
            classProps={`bloc-quiz__validate`}
          />
        </div>
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

  /***************** DATA ******************/

  modulType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
  noChapter: PropTypes.bool,
  duration: PropTypes.number,
  description: PropTypes.shape({ __html: PropTypes.string.isRequired })
    .isRequired,
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      chrono: PropTypes.number,
      questionNumber: PropTypes.number.isRequired,
      question: PropTypes.shape({ __html: PropTypes.string.isRequired })
        .isRequired,
      answers: PropTypes.arrayOf(
        PropTypes.shape({
          content: PropTypes.string.isRequired,
          correctAnswer: PropTypes.bool.isRequired
        }).isRequired
      ).isRequired,
      explication: PropTypes.shape({ __html: PropTypes.string.isRequired })
        .isRequired
    }).isRequired
  ).isRequired
};

BlocQuiz.defaultProps = {
  in: false,
  noChapter: false,
  duration: 0
};

export default ReactTimeout(BlocQuiz);
