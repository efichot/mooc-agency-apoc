import React from 'react';
import PropTypes from 'prop-types';

import BlocHeader from '../components/BlocHeader';
import BlocDescription from './BlocDescription';
import BlocSpacer from './BlocSpacer';
import ButtonPrimary from './UI/ButtonPrimary';
import PopupBlue from './UI/PopupBlue';
import PopupBlueInnerHtml from './UI/PopupBlueInnerHtml';
import SelectQCM from './UI/SelectQCM';
import Fade from '../transitions/Fade';
import victoryMessages from '../model/static/popupBlueMessages';
import { scrollIntoView as scrollItemIntoView } from '../transitions/transitionUtils';

import arrowDown from '../../assets/img/icons/arrow-down.svg';

class BlocQCMType2 extends React.Component {
  state = {
    hideQuestion: true,
    showQuestion: 1,
    gameIsFinished: undefined,
    victoryMessage: undefined,
    answers: [],
    correctAnswers: [],
    hideExplanation: true,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.questions) {
      const correctAnswers = nextProps.questions.map(question => question.answer);
      const answers = nextProps.questions.map(question => (question.answer === 'no-question' ? 'no-question' : null));
      return {
        ...prevState,
        correctAnswers,
        answers,
      };
    }
    return {
      ...prevState,
    };
  }

  showQuestion = question => {
    this.setState({
      showQuestion: question.questionNumber,
      hideQuestion: false,
    });
  };

  hideQuestions = question => {
    this.setState({
      showQuestion: question.questionNumber,
      hideQuestion: true,
    });
  };

  handleQCMAnswer = (index, answer) => {
    this.setState({ victoryMessage: undefined, gameIsFinished: undefined });
    const answers = [...this.state.answers];
    answers[index - 1] = answer;
    this.setState({ answers });
  };

  handleHideExplanation = () => {
    this.setState({
      hideExplanation: true,
      victoryMessage: undefined,
      gameIsFinished: undefined,
    });
  };

  handleShowExplanation = () => {
    this.setState({
      hideExplanation: false,
      victoryMessage: undefined,
    });
  };

  handleValidate = async e => {
    let correct = true;
    Object.keys(this.state.answers).length <= 0 && (correct = false);
    this.state.answers.forEach((answer, index) => {
      if (this.state.correctAnswers[index] !== answer) {
        correct = false;
      }
    });
    // this.setState({ hideExplanation: false });
    if (correct) {
      const victoryMessage = { __html: victoryMessages.isGoodAnswer };
      this.setState({
        victoryMessage,
        gameIsFinished: 'victory',
      });
      this.props.handleFinishBloc && this.props.bloc && this.props.handleFinishBloc(this.props.bloc);
      // this.props.gameIsFinished(this.state.gameIsFinished);
    } else {
      const victoryMessage = {
        __html: victoryMessages.isDefeatHTML,
      };
      this.setState({ victoryMessage, gameIsFinished: 'defeat' });
    }
  };

  render = () => {
    const {
      modulType,
      noChapter,
      noPopup,
      questions,
      duration,
      chapter,
      title,
      firstDescription,
      synthese,
      classSelect,
      scrollIntoView,
      questionsHeight,
    } = this.props;

    const { hideQuestion, showQuestion, gameIsFinished, victoryMessage, hideExplanation } = this.state;

    return (
      <Fade
        in={this.props.in}
        classProps={`bloc bloc-QCM-type-2`}
        scrollIntoView={scrollIntoView}
        margins={this.props.margins}>
        {!noChapter && <BlocHeader type="horloge" duration={duration} name={chapter} />}
        <span className="bloc__name">{title}</span>
        <BlocDescription modulType={modulType} classProps="bloc__first-description" description={firstDescription} />
        <div className="bloc-QCM-type-2__questions game" style={{ height: questionsHeight }}>
          <div
            className="bloc-QCM-type-2__questions--to-hover"
            style={{
              height: `${questions.length * 50}px`,
            }}>
            {questions.map((question, index) => {
              return (
                <div
                  className={`bloc-QCM-type-2__questions--to-hover--question ${classSelect}`}
                  key={question.questionNumber}>
                  <div
                    className="button-groupe"
                    onMouseEnter={() => this.showQuestion(question)}
                    onMouseLeave={() => this.hideQuestions(question)}>
                    <ButtonPrimary name={{ __html: question.title }} />
                    {question.arrowFollowing && (
                      <div className="arrow-following" style={{ backgroundImage: `url(${arrowDown})` }} />
                    )}
                  </div>
                  {question.choices && (
                    <SelectQCM
                      options={question.choices}
                      classProps="select-QCM-type-2"
                      onChange={this.handleQCMAnswer}
                      index={question.questionNumber}
                      placeholder="?"
                    />
                  )}
                </div>
              );
            })}
          </div>
          {!noPopup && (
            <PopupBlue classProps="bloc-QCM-type-2__questions--to-show" hidePopup={hideQuestion} noCross>
              <span className="question-title">{!hideQuestion && questions[showQuestion - 1].title}</span>
              {!hideQuestion &&
                (questions[showQuestion - 1].description.__html ? (
                  <p className="question-content" dangerouslySetInnerHTML={questions[showQuestion - 1].description} />
                ) : (
                  <p className="question-content">{questions[showQuestion - 1].description}</p>
                ))}
            </PopupBlue>
          )}
        </div>
        <div className="bloc-QCM-type-2__validate-victory">
          {victoryMessage && (
            <PopupBlueInnerHtml
              classProps="bloc-QCM-type-2__victory-message rightSide"
              description={victoryMessage}
              onCloseClick={() => {
                if (victoryMessage.__html === victoryMessages.isGoodAnswer) {
                  this.props.gameIsFinished(modulType);
                  this.setState({ hideExplanation: false });
                }
                this.setState({ victoryMessage: undefined });
              }}
            />
          )}
          <ButtonPrimary
            minWidth
            name="valider"
            onClick={this.handleValidate}
            classProps={`bloc-QCM-type-2__validate`}
          />
          {gameIsFinished && (
            <ButtonPrimary
              minWidth
              name={!hideExplanation ? "Revenir à l'exercice" : "Voir l'explication"}
              onClick={() => (!hideExplanation ? this.handleHideExplanation() : this.handleShowExplanation())}
              classProps={`bloc-QCM-type-2__explanations leftSide`}
            />
          )}
        </div>
        {gameIsFinished && !hideExplanation && <BlocSpacer />}
        {gameIsFinished &&
          !hideExplanation && (
            <div
              className="it-is-the-end"
              ref={syn => {
                this.synthese = syn;
                if (gameIsFinished === 'victory') {
                  scrollItemIntoView(syn);
                }
              }}>
              <BlocDescription description={synthese.firstDescription} />
              {gameIsFinished === 'victory' &&
                synthese && (
                  <React.Fragment>
                    <BlocSpacer />
                    {synthese.title && <span className="bloc__name">{synthese.title}</span>}
                    {synthese.secondDescription && <BlocDescription description={synthese.secondDescription} />}
                  </React.Fragment>
                )}
            </div>
          )}
      </Fade>
    );
  };
}

BlocQCMType2.propTypes = {
  in: PropTypes.bool,
  classSelect: PropTypes.string,

  /** *************** DATA ******************/

  modulType: PropTypes.string.isRequired,
  noChapter: PropTypes.bool,
  noPopup: PropTypes.bool,
  chapter: PropTypes.string.isRequired,
  duration: PropTypes.number,
  title: PropTypes.string.isRequired,
  firstDescription: PropTypes.shape({ __html: PropTypes.string.isRequired }),
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      questionNumber: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.shape({ __html: PropTypes.string.isRequired }),
      ]),
      choices: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
          label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        }).isRequired,
      ),
      answer: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }).isRequired,
  ).isRequired,
  synthese: PropTypes.shape({
    firstDescription: PropTypes.shape({ __html: PropTypes.string.isRequired }),
    title: PropTypes.string,
    secondDescription: PropTypes.shape({ __html: PropTypes.string.isRequired }),
  }),
};

BlocQCMType2.defaultProps = {
  in: false,
  scrollIntoView: false,
  classSelect: '',

  /** *************** DATA ******************/
  firstDescription: {
    __html: ``,
  },
  questions: {
    description: undefined,
    choices: undefined,
    answer: 'no-question',
  },
  noChapter: false,
  noPopup: false,
  duration: 0,
  synthese: undefined,
};

export default BlocQCMType2;
