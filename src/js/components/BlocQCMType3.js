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

import arrowDown from '../../assets/img/icons/arrow-down.png';

class BlocQCMType3 extends React.Component {
  state = {
    hideQuestion: true,
    showQuestion: 1,
    gameIsFinished: undefined,
    victoryMessage: null,
    answers: {},
    correctAnswers: {},
    hideExplanation: true,
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
        correctAnswers,
      };
    }
    return prevState;
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

  handleQCMAnswer = (selectNumber, answer) => {
    this.setState({ victoryMessage: undefined, gameIsFinished: undefined });
    this.setState(({ answers }) => ({
      victoryMessage: undefined,
      gameIsFinished: undefined,
      answers: {
        ...answers,
        [selectNumber]: answer,
      },
    }));
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
    const notEnoughAnswer = Object.keys(this.state.answers).length < Object.keys(this.state.correctAnswers).length;
    if (notEnoughAnswer) {
      this.setState({ victoryMessage: victoryMessages.textNotFilled });
      return;
    }

    //Target: compare answers and correct answers
    const answers = this.props.questions.map(q => []); // build an array of arrays, where we will fill the answers
    Object.keys(this.state.answers).forEach(key => {
      const index = parseInt(key[0], 10) - 1;
      answers[index].push(this.state.answers[key]); //get the array of answer needed (array 2 for question 2, etc.) and push the answer
      answers[index].sort(); // sort the answer, so that we can compare answers and correct answers
    });

    // same for correct answers
    const correctAnswers = this.props.questions.map(q => []);
    Object.keys(this.state.correctAnswers).forEach(key => {
      const index = parseInt(key[0], 10) - 1;
      correctAnswers[index].push(this.state.correctAnswers[key]);
      correctAnswers[index].sort();
    });

    if (JSON.stringify(answers) !== JSON.stringify(correctAnswers)) {
      correct = false;
    }
    // this.setState({ hideExplanation: false });
    if (correct) {
      const victoryMessage = { __html: victoryMessages.isGoodAnswer };
      this.setState({
        victoryMessage,
        gameIsFinished: 'victory',
      });
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
      lineHeight,
      scrollIntoView,
    } = this.props;

    const { hideQuestion, showQuestion, gameIsFinished, victoryMessage, hideExplanation } = this.state;
    return (
      <Fade
        in={this.props.in}
        classProps={`bloc bloc-QCM-type-3`}
        scrollIntoView={scrollIntoView}
        margins={this.props.margins}>
        {!noChapter && <BlocHeader type="horloge" duration={duration} name={chapter} />}
        <span className="bloc__name">{title}</span>
        <BlocDescription modulType={modulType} classProps="bloc__first-description" description={firstDescription} />
        <div className="bloc-QCM-type-3__questions game">
          <div
            className="bloc-QCM-type-3__questions--to-hover"
            style={{
              height: `${questions.length * lineHeight}px`,
            }}>
            {questions.map(question => {
              if (question.selects && question.selects.length <= 3) {
                return (
                  <div
                    className={`bloc-QCM-type-3__questions--to-hover--question ${classSelect}`}
                    key={question.questionNumber}>
                    <div
                      className="button-groupe"
                      style={{
                        maxWidth: question.maxWidth,
                      }}
                      onMouseEnter={() => this.showQuestion(question)}
                      onMouseLeave={() => this.hideQuestions(question)}>
                      <ButtonPrimary name={{ __html: question.title }} />
                      {question.arrowFollowing && (
                        <div className="arrow-following" style={{ backgroundImage: `url(${arrowDown})` }} />
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
              } else {
                return (
                  <div
                    className={`bloc-QCM-type-3__questions--to-hover--question ${classSelect}`}
                    key={question.questionNumber}>
                    <div className="line-1">
                      <div
                        className="button-groupe"
                        style={{
                          maxWidth: question.maxWidth,
                        }}
                        onMouseEnter={() => this.showQuestion(question)}
                        onMouseLeave={() => this.hideQuestions(question)}>
                        <ButtonPrimary name={{ __html: question.title }} />
                        {question.arrowFollowing && (
                          <div className="arrow-following" style={{ backgroundImage: `url(${arrowDown})` }} />
                        )}
                      </div>
                      {question.selects &&
                        question.selects
                          .filter((q, i) => i < 2)
                          .map((select, i) => (
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
                    <div className="line-2">
                      {question.selects &&
                        question.selects
                          .filter((q, i) => i >= 2)
                          .map((select, i) => (
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
                  </div>
                );
              }
            })}
          </div>
          {!noPopup && (
            <PopupBlue classProps="bloc-QCM-type-3__questions--to-show" hidePopup={hideQuestion} noCross>
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
        <BlocSpacer height={20} />
        <div className="bloc-QCM-type-3__validate-victory">
          {victoryMessage && (
            <PopupBlueInnerHtml
              classProps="bloc-QCM-type-3__victory-message"
              description={victoryMessage}
              onCloseClick={() => {
                if (victoryMessage.__html === victoryMessages.isGoodAnswer) {
                  // console.log('laklkaslk');
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
            classProps={`bloc-QCM-type-3__validate`}
          />
          {gameIsFinished && (
            <ButtonPrimary
              minWidth
              name={!hideExplanation ? "Cacher l'explication" : "Voir l'explication"}
              onClick={() => (!hideExplanation ? this.handleHideExplanation() : this.handleShowExplanation())}
              classProps={`bloc-QCM-type-2__explanations`}
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
        PropTypes.shape({ __html: PropTypes.string.isRequired }),
      ]),
      selects: PropTypes.arrayOf(
        PropTypes.shape({
          selectNumber: PropTypes.number.isRequired,
          choices: PropTypes.arrayOf(
            PropTypes.shape({
              value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
              label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
            }).isRequired,
          ),
          answer: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        }).isRequired,
      ).isRequired,
    }).isRequired,
  ).isRequired,
  synthese: PropTypes.shape({
    firstDescription: PropTypes.shape({ __html: PropTypes.string.isRequired }),
    title: PropTypes.string,
    secondDescription: PropTypes.shape({ __html: PropTypes.string.isRequired }),
  }),
};

BlocQCMType3.defaultProps = {
  in: false,
  scrollIntoView: false,
  classSelect: '',

  /***************** DATA ******************/
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
  lineHeight: 100,
  synthese: undefined,
};

export default BlocQCMType3;
