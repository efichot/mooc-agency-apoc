import React from 'react';
import PropTypes from 'prop-types';

import BlocHeader from './BlocHeader';
import BlocSpacer from './BlocSpacer';
import BlocDescription from './BlocDescription';
import ButtonPrimary from './UI/ButtonPrimary';
import PopupBlue from './UI/PopupBlue';
import Chrono from './UI/Chrono';
import PopupBlueInnerHtml from './UI/PopupBlueInnerHtml';
import Fade from '../transitions/Fade';
import victoryMessages from '../model/static/popupBlueMessages';

const popupVictoryMessage = victoryMessages.isVictory;
const popupDefeatMessage = victoryMessages.isDefeatOneShot;

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
    const {
      modulType,
      noChapter,
      duration,
      chapter,
      name,
      scrollIntoView
    } = this.props;

    const {
      questions,
      currentQuestionIndex,
      chrono,
      victoryMessage,
      buttonActive,
      correctAnswer,
      help
    } = this.state;

    const { question, answers, explication } = questions[currentQuestionIndex];

    return (
      <Fade
        classProps={`bloc bloc-quiz`}
        in={this.props.in}
        scrollIntoView={scrollIntoView}
        margins={this.props.margins}
      >
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
        <BlocSpacer />
        <div className="bloc-quiz__answers">
          {answers.map((answer, index) => {
            return (
              <ButtonPrimary
                key={index}
                id={`QCM_question_1_answer_${index}`}
                name={answer.content}
                classProps={`button-quiz${
                  buttonActive === index + 1 ? ' active' : ''
                }${victoryMessage !== undefined ? ' finished' : ''}${
                  correctAnswer === index + 1 ? ' correct' : ''
                }`}
                onClick={this.handleClick}
                answer={index + 1}
              />
            );
          })}
        </div>
        <BlocSpacer />
        <div className="validate-and-popup">
          {victoryMessage && (
            <PopupBlue
              classProps={`popup-blue__victory-message`}
              style={{
                visibility: victoryMessage ? 'visible' : 'hidden'
              }}
              noCross
            >
              <span>{victoryMessage}</span>
            </PopupBlue>
          )}
          <ButtonPrimary
            name={victoryMessage !== undefined ? 'suivant' : 'valider'}
            onClick={this.handleValidate}
            classProps={`bloc-quiz__validate`}
          />
        </div>
        {help && (
          <PopupBlueInnerHtml
            classes={`popup-blue__explication`}
            description={explication}
            noCross
          />
        )}
      </Fade>
    );
  }
}

BlocQuiz.propTypes = {
  in: PropTypes.bool,
  scrollIntoView: PropTypes.bool,

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
  scrollIntoView: false,
  noChapter: false,
  duration: 0
};

export default BlocQuiz;
