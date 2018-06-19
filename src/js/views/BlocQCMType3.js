import React from 'react';
import PropTypes from 'prop-types';

import BlocHeader from '../views/BlocHeader';
import BlocDescription from './BlocDescription';
import ButtonPrimary from './UI/ButtonPrimary';
import PopupBlue from './UI/PopupBlue';
import PopupBlueInnerHtml from './UI/PopupBlueInnerHtml';
import SelectQCM from './UI/SelectQCM';
import Fade from '../transitions/Fade';
import victoryMessages from '../model/static/popupBlueMessages';

import arrowDown from '../../assets/img/icons/arrow-down.svg';

class BlocQCMType3 extends React.Component {
  state = {
    hideQuestion: true,
    showQuestion: 1,
    gameIsFinished: false,
    victoryMessage: null,
    answers: {},
    correctAnswers: {},
    hideExplanation: true
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.questions) {
      const correctAnswers = {};
      nextProps.questions.forEach(question => {
        if (!question.selects) {
          correctAnswers[question.questionNumber] = question.answer;
        } else {
          question.selects.forEach(select => {
            correctAnswers[select.selectNumber] = select.answer;
          });
        }
      });
      return {
        ...prevState,
        correctAnswers
      };
    }
    return prevState;
  }

  showQuestion = question => {
    this.setState({
      showQuestion: question.questionNumber,
      hideQuestion: false
    });
  };

  hideQuestions = question => {
    this.setState({
      showQuestion: question.questionNumber,
      hideQuestion: true
    });
  };

  handleQCMAnswer = (selectNumber, answer, correctAnswer) => {
    this.setState({ victoryMessage: null });
    const answers = { ...this.state.answers };
    answers[selectNumber] = answer;
    this.setState({ answers });
  };

  handleHideExplanation = () => {
    this.setState({ hideExplanation: true });
    this.setState({ victoryMessage: null });
  };

  handleValidate = async e => {
    let correct = true;
    Object.keys(this.state.answers).forEach(i => {
      if (this.state.correctAnswers[i] !== this.state.answers[i]) {
        correct = false;
      }
    });
    this.setState({ hideExplanation: false });
    if (correct) {
      const victoryMessage = { __html: victoryMessages.isVictory };
      this.setState({ victoryMessage });
      this.setState({ gameIsFinished: true });
      this.props.gameIsFinished(this.state.gameIsFinished);
    } else {
      const victoryMessage = {
        __html: victoryMessages.isDefeatHTML
      };
      this.setState({ victoryMessage });
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
      lineHeight,
      scrollIntoView
    } = this.props;

    const {
      hideQuestion,
      showQuestion,
      gameIsFinished,
      victoryMessage,
      hideExplanation
    } = this.state;

    return (
      <Fade
        in={this.props.in}
        classProps={`bloc bloc-QCM-type-3`}
        scrollIntoView={scrollIntoView}
        margins={this.props.margins}
      >
        {!noChapter && (
          <BlocHeader type="horloge" duration={duration} name={chapter} />
        )}
        <span className="bloc__name">{title}</span>
        <BlocDescription
          modulType={modulType}
          classProps="bloc__first-description"
          description={firstDescription}
        />
        <div className="bloc-QCM-type-3__questions game">
          <div
            className="bloc-QCM-type-3__questions--to-hover"
            style={{
              height: `${questions.length * lineHeight}px`
            }}
          >
            {questions.map((question, index) => {
              /*const hover = 
                this.state.showQuestion === question.startPosition &&
                !this.state.hideQuestion;*/
              return (
                <div
                  className={`bloc-QCM-type-3__questions--to-hover--question ${classSelect}`}
                  key={question.questionNumber}
                >
                  <div
                    className="button-groupe"
                    onMouseEnter={() => this.showQuestion(question)}
                    onMouseLeave={() => this.hideQuestions(question)}
                  >
                    <ButtonPrimary name={question.title} />
                    {question.arrowFollowing && (
                      <div
                        className="arrow-following"
                        style={{ backgroundImage: `url(${arrowDown})` }}
                      />
                    )}
                  </div>
                  {question.selects &&
                    question.selects.map((select, i) => (
                      <SelectQCM
                        key={select.selectNumber}
                        options={select.choices}
                        classProps={`select-QCM-type-2`}
                        onChange={this.handleQCMAnswer}
                        index={select.selectNumber}
                        placeholder="?"
                        answer={select.answer}
                      />
                    ))}
                </div>
              );
            })}
          </div>
          {!noPopup && (
            <PopupBlue
              classProps="bloc-QCM-type-3__questions--to-show"
              hidePopup={hideQuestion}
              noCross
            >
              <span className="question-title">
                {!hideQuestion && questions[showQuestion - 1].title}
              </span>
              {!hideQuestion &&
                (questions[showQuestion - 1].description.__html ? (
                  <p
                    className="question-content"
                    dangerouslySetInnerHTML={
                      questions[showQuestion - 1].description
                    }
                  />
                ) : (
                  <p className="question-content">
                    {questions[showQuestion - 1].description}
                  </p>
                ))}
            </PopupBlue>
          )}
        </div>
        <div className="bloc-QCM-type-3__validate-victory">
          {victoryMessage && (
            <PopupBlueInnerHtml
              classProps="bloc-QCM-type-3__victory-message"
              description={victoryMessage}
              onCloseClick={() => this.setState({ victoryMessage: undefined })}
            />
          )}
          <ButtonPrimary
            name="valider"
            onClick={this.handleValidate}
            classProps={`bloc-QCM-type-3__validate`}
          />
          {!hideExplanation &&
            !gameIsFinished && (
              <ButtonPrimary
                name="cacher l'explication"
                onClick={this.handleHideExplanation}
                classProps={`bloc-QCM-type-3__explanations`}
              />
            )}
        </div>
        {!hideExplanation && (
          <React.Fragment>
            <BlocDescription description={synthese.firstDescription} />
            {gameIsFinished && (
              <React.Fragment>
                {synthese.title && (
                  <span className="bloc__name">{synthese.title}</span>
                )}
                {synthese.secondDescription && (
                  <BlocDescription description={synthese.secondDescription} />
                )}
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </Fade>
    );
  };
}

BlocQCMType3.propTypes = {
  in: PropTypes.bool,
  classSelect: PropTypes.string,

  /***************** DATA ******************/

  modulType: PropTypes.string.isRequired,
  noChapter: PropTypes.bool,
  noPopup: PropTypes.bool,
  chapter: PropTypes.string.isRequired,
  duration: PropTypes.number,
  lineHeight: PropTypes.number,
  title: PropTypes.string.isRequired,
  firstDescription: PropTypes.shape({ __html: PropTypes.string.isRequired }),
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      questionNumber: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.shape({ __html: PropTypes.string.isRequired })
      ]),
      selects: PropTypes.arrayOf(
        PropTypes.shape({
          selectNumber: PropTypes.number.isRequired,
          choices: PropTypes.arrayOf(
            PropTypes.shape({
              value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
              label: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
            }).isRequired
          ),
          answer: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        }).isRequired
      ).isRequired
    }).isRequired
  ).isRequired,
  synthese: PropTypes.shape({
    firstDescription: PropTypes.shape({ __html: PropTypes.string.isRequired }),
    title: PropTypes.string,
    secondDescription: PropTypes.shape({ __html: PropTypes.string.isRequired })
  })
};

BlocQCMType3.defaultProps = {
  in: false,
  scrollIntoView: false,
  classSelect: '',

  /***************** DATA ******************/
  firstDescription: {
    __html: ``
  },
  questions: {
    description: undefined,
    choices: undefined,
    answer: 'no-question'
  },
  noChapter: false,
  noPopup: false,
  duration: 0,
  lineHeight: 100,
  synthese: undefined
};

export default BlocQCMType3;
