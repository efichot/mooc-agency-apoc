import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import BlocHeader from './BlocHeader';
import BlocSpacer from './BlocSpacer';
import BlocDescription from './BlocDescription';
import ButtonPrimary from './UI/ButtonPrimary';
import PopupBlue from './UI/PopupBlue';
import Chrono from './UI/Chrono';
import PopupBlueInnerHtml from './UI/PopupBlueInnerHtml';
import Fade from '../transitions/Fade';
import victoryMessages from '../model/static/popupBlueMessages';

const popupVictoryMessage = victoryMessages.isGoodAnswer;
const popupDefeatMessage = victoryMessages.isDefeatOneShot;

class BlocQuiz extends React.Component {
  state = {
    buttonActive: null,
    /******** ACHTUNG ! La question 1 est à l'index 0, la question 10 à l'index 9 *******/
    currentQuestionIndex: 0,
    victoryMessage: undefined,
    victoryMessageIsVisible: false,
    gameIsFinished: false,
    correctAnswer: null,
    help: false,
    questions: [],
    chrono: 60,
    quizIsOver: false,
    goodAnswers: 0,
    bonusTime: 0,
    remainingTime: 0,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.questions.length > 0) {
      return {
        ...prevState,
        questions: nextProps.questions,
      };
    }
    return prevState;
  }

  handleStartQuiz = () => {
    this.setState({ quizStart: true });
    this.setTheCorrectAnswer(this.props.questions[this.state.currentQuestionIndex]);
  };

  handleClick = answer => {
    if (this.state.victoryMessage === popupVictoryMessage) {
      return;
    }
    this.setState({
      buttonActive: answer,
      victoryMessage: undefined,
      gameIsFinished: false,
    });
  };

  handleValidate = e => {
    const {
      currentQuestionIndex,
      questions,
      buttonActive,
      correctAnswer,
      victoryMessage,
      goodAnswers,
      remainingTime,
      bonusTime,
    } = this.state;

    if (buttonActive === correctAnswer) {
      if (victoryMessage === popupVictoryMessage) {
        this.setState({
          bonusTime: bonusTime + remainingTime,
        });
        this.showNextQuestion();
        return;
      }
      this.setState({
        victoryMessage: popupVictoryMessage,
        victoryMessageIsVisible: true,
        goodAnswers: goodAnswers + 10,
      });
    } else {
      if (victoryMessage === popupDefeatMessage) {
        this.showNextQuestion();
        return;
      }
      if (currentQuestionIndex === questions.length - 1) {
        this.setState({
          victoryMessage: victoryMessages.isDefeatQuizFinished,
          victoryMessageIsVisible: true,
        });
      } else {
        this.setState({
          victoryMessage: popupDefeatMessage,
          victoryMessageIsVisible: true,
        });
      }
    }
  };

  showNextQuestion = async () => {
    const { currentQuestionIndex, questions } = this.state;

    if (currentQuestionIndex < questions.length - 1) {
      const nextQIndex = currentQuestionIndex + 1;
      this.setState({ currentQuestionIndex: nextQIndex });
      this.setTheCorrectAnswer(questions[nextQIndex]);
    }
    this.setState({
      victoryMessage: undefined,
      victoryMessageIsVisible: false,
      buttonActive: null,
      help: false,
    });
  };

  handleStoreTime = ({ remainingTime, currentQuestionIndex }) => {
    // console.log('handleStoreTime', remainingTime);
    this.setState({
      remainingTime,
    });
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
    const { modulType, noChapter, duration, chapter, name, scrollIntoView, description, step } = this.props;

    const {
      questions,
      currentQuestionIndex,
      chrono,
      victoryMessage,
      buttonActive,
      correctAnswer,
      help,
      quizStart,
      quizIsOver,
      victoryMessageIsVisible,
      goodAnswers,
      bonusTime,
      remainingTime,
    } = this.state;

    const { question, answers, explication } = questions[currentQuestionIndex];
    const lastQuestion = currentQuestionIndex === questions.length - 1;

    return (
      <Fade
        classProps={`bloc bloc-quiz`}
        in={this.props.in}
        scrollIntoView={scrollIntoView}
        margins={this.props.margins}>
        {!noChapter && <BlocHeader type="chrono" duration={duration} name={chapter} />}
        <span className="bloc__name">{name}</span>
        <BlocSpacer />
        <BlocDescription modulType={modulType} classProps="bloc__first-description" description={description} />
        <BlocSpacer />
        {!quizStart && (
          <ButtonPrimary minWidth name="Commencer" onClick={this.handleStartQuiz} classProps="bloc-quiz__start" />
        )}
        {quizStart &&
          !quizIsOver && (
            <React.Fragment>
              <div className="chrono-question">
                <Chrono
                  totalDuration={chrono}
                  stop={this.state.victoryMessageIsVisible}
                  reset={!this.state.help}
                  context={currentQuestionIndex}
                  currentQuestionIndex={currentQuestionIndex}
                  timeRemaining={this.handleStoreTime}
                />
                <BlocDescription modulType={modulType} classProps="bloc__first-description" description={question} />
              </div>
              <BlocSpacer />
              <div className="bloc-quiz__answers">
                {answers.map((answer, index) => {
                  return (
                    <ButtonPrimary
                      key={index}
                      id={`QCM_question_1_answer_${index}`}
                      name={answer.content}
                      classProps={`button-quiz${buttonActive === index + 1 ? ' active' : ''}${
                        victoryMessage !== undefined ? ' finished' : ''
                      }${correctAnswer === index + 1 ? ' correct' : ''}`}
                      onClick={this.handleClick}
                      answer={index + 1}
                    />
                  );
                })}
              </div>
              <div className="validate-and-popup">
                <div className="bloc-quiz__popup-space">
                  {victoryMessage && (
                    <PopupBlue
                      classProps={`popup-blue__victory-message`}
                      hidePopup={!victoryMessageIsVisible}
                      onCloseClick={() => {
                        this.setState({ help: true, victoryMessageIsVisible: false });
                        if (lastQuestion) {
                          this.setState({ quizIsOver: true });
                          if (victoryMessage === popupVictoryMessage) {
                            this.setState({
                              bonusTime: bonusTime + remainingTime,
                            });
                          }
                        }
                      }}>
                      <span>{victoryMessage}</span>
                    </PopupBlue>
                  )}
                </div>
                {!victoryMessageIsVisible && (
                  <ButtonPrimary
                    minWidth
                    name={victoryMessage !== undefined ? 'suivant' : 'valider'}
                    onClick={this.handleValidate}
                    classProps={`bloc-quiz__validate`}
                  />
                )}
              </div>
              {help && <PopupBlueInnerHtml classes={`popup-blue__explication`} description={explication} noCross />}
            </React.Fragment>
          )}
        {quizIsOver && (
          <React.Fragment>
            <span className="endquiz">Bravo ! Vous avez terminé le quiz d'évaluation</span>
            <span className="endquiz">
              Vous obtenez <span className="points">{goodAnswers}</span> pts de bonnes réponses pour votre score
            </span>
            <span className="endquiz">
              Vous obtenez <span className="bonusTime">{bonusTime}</span> pts de bonus temps pour votre classement
            </span>
            <BlocSpacer />
            {step !== 8 &&
              step !== 4 && (
                <Link className="button-link button-end" to={`step${step + 1}`}>
                  <ButtonPrimary minWidth name="Continuez votre formation" enableClick />
                </Link>
              )}
            {step === 8 && (
              <React.Fragment>
                <Link className="button-link button-end" to="#">
                  <ButtonPrimary minWidth name="Terminer votre formation" enableClick />
                </Link>
                <a
                  href="https://fr.surveymonkey.com/r/adpv2"
                  className="button-end"
                  target="_blank"
                  rel="noopener noreferrer">
                  <ButtonPrimary minWidth name="Donner votre avis" enableClick />
                </a>
                <Link className="button-link button-end" to="#">
                  <ButtonPrimary minWidth name="Entrer sur le forum" enableClick />
                </Link>
              </React.Fragment>
            )}
            {step === 4 && (
              <React.Fragment>
                <Link className="button-link button-end" to="step5">
                  <ButtonPrimary minWidth name="Poursuivre vers comprendre les marchés" enableClick />
                </Link>
                <a
                  href="https://fr.surveymonkey.com/r/adpv2"
                  className="button-end"
                  target="_blank"
                  rel="noopener noreferrer">
                  <ButtonPrimary minWidth name="Donner votre avis" enableClick />
                </a>
                <Link className="button-link button-end" to="#">
                  <ButtonPrimary minWidth name="Entrer sur le forum" enableClick />
                </Link>
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </Fade>
    );
  }
}

BlocQuiz.propTypes = {
  in: PropTypes.bool,
  scrollIntoView: PropTypes.bool,
  step: PropTypes.number.isRequired,

  /***************** DATA ******************/

  modulType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
  noChapter: PropTypes.bool,
  duration: PropTypes.number,
  description: PropTypes.shape({ __html: PropTypes.string.isRequired }).isRequired,
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      chrono: PropTypes.number,
      questionNumber: PropTypes.number.isRequired,
      question: PropTypes.shape({ __html: PropTypes.string.isRequired }).isRequired,
      answers: PropTypes.arrayOf(
        PropTypes.shape({
          content: PropTypes.string.isRequired,
          correctAnswer: PropTypes.bool.isRequired,
        }).isRequired,
      ).isRequired,
      explication: PropTypes.shape({ __html: PropTypes.string.isRequired }).isRequired,
    }).isRequired,
  ).isRequired,
};

BlocQuiz.defaultProps = {
  in: false,
  scrollIntoView: false,
  noChapter: false,
  duration: 0,
};

export default BlocQuiz;
