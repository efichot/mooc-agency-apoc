import React from 'react';
import PropTypes from 'prop-types';

import BlocHeader from './BlocHeader';
import BlocDescription from './BlocDescription';
import CardContentType3 from './UI/CardContentType3';
import ButtonWithDoubleArrow from './UI/ButtonWithDoubleArrow';
import ButtonPrimary from './UI/ButtonPrimary';
import Fade from '../transitions/Fade';
import PopupBlue from './UI/PopupBlue';
import victoryMessages from '../model/static/popupBlueMessages';
import { duration as transitionDuration } from '../transitions/transitionUtils';

import backCard from '../../assets/img/step5/card.png';

const populateAnswers = ({ game, questionNumber }) => {
  let column1Choices = {};
  let column2Choices = {};
  let column3Choices = {};
  game[questionNumber].column1 && game[questionNumber].column1.answers
    ? game[questionNumber].column1.answers.forEach(({ choice }) => (column1Choices[choice] = false))
    : (column1Choices = undefined);

  game[questionNumber].column2 && game[questionNumber].column2.answers
    ? game[questionNumber].column2.answers.forEach(({ choice }) => (column2Choices[choice] = false))
    : (column2Choices = undefined);

  game[questionNumber].column3 && game[questionNumber].column3.answers
    ? game[questionNumber].column3.answers.forEach(({ choice }) => (column3Choices[choice] = false))
    : (column3Choices = undefined);

  return {
    column1Choices,
    column2Choices,
    column3Choices,
  };
};

class BlocCardGameType2 extends React.Component {
  state = {
    questionNumber: 0,
    step: {
      questionNumber: 0,
      column: this.props.game[0].steps[0],
    },
    column1currentIndex: 0,
    column2currentIndex: 0,
    column3currentIndex: 0,
    column1Choices: undefined,
    column2Choices: undefined,
    column3Choices: undefined,
    column1IsFinished: false,
    column2IsFinished: false,
    column3IsFinished: false,
    column1ShowExplanation: false,
    column2ShowExplanation: false,
    column3ShowExplanation: false,
    victoryMessage: undefined,
  };

  componentDidMount() {
    const { questionNumber } = this.state;
    const { game } = this.props;
    this.setState(populateAnswers({ game, questionNumber }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.questionNumber !== this.state.questionNumber) {
      const { questionNumber } = this.state;
      const { game } = this.props;
      this.setState(populateAnswers({ game, questionNumber }));
    }
  }

  handleChoiceClick = ({ column, choice }) => {
    this.setState({
      [`column${column}Choices`]: {
        ...this.state[`column${column}Choices`],
        [choice]: !this.state[`column${column}Choices`][choice],
      },
    });
  };

  handleValidate = ({ column }) => {
    console.log('column', column);
    const { questionNumber } = this.state;
    const { game } = this.props;
    const correctAnswers = {};
    game[questionNumber][`column${column}`].answers.forEach(
      ({ choice, isAnswer }) => (correctAnswers[choice] = isAnswer),
    );
    let answersAreCorrect = true;
    Object.keys(this.state[`column${column}Choices`]).forEach(
      answer => this.state[`column${column}Choices`][answer] !== correctAnswers[answer] && (answersAreCorrect = false),
    );

    console.log('answersAreCorrect', answersAreCorrect);
    if (answersAreCorrect) {
      this.setState({
        victoryMessage: victoryMessages.isGoodAnswer,
        [`column${column}ShowExplanation`]: true,
      });
    } else {
      this.setState({ victoryMessage: victoryMessages.isDefeat });
    }
  };

  handleCardClick = (plusorminus, column) => {
    const indexName = `${column}currentIndex`;
    const index = this.state[indexName];
    const { questionNumber } = this.state;

    // console.log(`actors${column}`, this.props.game[question], "this.props.game[question][`actors${column}`]", this.props.game[question][`actors${column}`]);

    if (plusorminus === 'plus') {
      if (index === this.props.game[questionNumber][column][`actors${column}`].length) {
        return;
      }
      this.setState({ [indexName]: index + 1 });
    } else {
      if (index === 1 || index === 0) {
        return;
      }
      this.setState({ [indexName]: index - 1 });
    }
  };

  handleClosePopupBlue = ({ column }) => {
    const { questionNumber } = this.state;
    const { game } = this.props;
    console.log('questionNumber', questionNumber, 'game.length - 1', game.length - 1);

    if (this.state.victoryMessage === victoryMessages.isGoodAnswer) {
      game[questionNumber].steps.indexOf(`column${column}`) === game[questionNumber].steps.length - 1
        ? /*end of game*/
          questionNumber === game.length - 1
          ? this.setState(
              {
                /*end of game*/
                victoryMessage: undefined,
                [`column${column}IsFinished`]: true,
              },
              this.props.gameIsFinished(),
            )
          : this.setState({
              /*next step*/
              victoryMessage: undefined,
              step: { questionNumber: questionNumber + 1, column: game[questionNumber + 1].steps[0] },
              questionNumber: questionNumber + 1,
              column1IsFinished: false,
              column2IsFinished: false,
              column3IsFinished: false,
              column1ShowExplanation: false,
              column2ShowExplanation: false,
              column3ShowExplanation: false,
            })
        : this.setState({
            /*next question*/
            victoryMessage: undefined,
            step: {
              questionNumber,
              column: game[questionNumber].steps[game[questionNumber].steps.indexOf(`column${column}`) + 1],
            },
            [`column${column}IsFinished`]: true,
          });
    } else {
      this.setState({ victoryMessage: undefined });
    }
  };

  render() {
    const {
      modulType,
      // noChapter,
      chapter,
      title,
      duration,
      firstDescription,
      secondary,
      scrollIntoView,
      game,
      cards,
      styles,
    } = this.props;

    const {
      questionNumber,
      column1currentIndex,
      column2currentIndex,
      column3currentIndex,
      victoryMessage,
      column1Choices,
      column2Choices,
      column3Choices,
      column1IsFinished,
      column2IsFinished,
      column3IsFinished,
      column1ShowExplanation,
      column2ShowExplanation,
      column3ShowExplanation,
      step,
    } = this.state;

    const column1Card = game[questionNumber].column1 && cards.actorscolumn1[column1currentIndex - 1];
    const column2Card = game[questionNumber].column2 && cards.actorscolumn2[column2currentIndex - 1];
    const column3Card = game[questionNumber].column3 && cards.actorscolumn3[column3currentIndex - 1];

    return (
      <Fade
        classProps="bloc-card-game-type-2 bloc"
        in={this.props.in}
        scrollIntoView={scrollIntoView}
        margins={this.props.margins}>
        <BlocHeader type="horloge" duration={duration} name={chapter} />
        {title && <span className={`bloc__name ${secondary}`}>{title}</span>}
        {firstDescription && (
          <BlocDescription modulType={modulType} classProps="bloc__second-description" description={firstDescription} />
        )}
        <div
          className="bloc-card-game-type-2__game game"
          style={{
            transform: `translateX(${-questionNumber * (styles.gridAutoColumns + 10) * 4}px)`,
            gridAutoColumns: styles.gridAutoColumns,
            transition: `transform ${transitionDuration}ms ease-in-out`,
          }}>
          {game.map((question, questionIndex) => (
            <React.Fragment key={questionIndex}>
              <div
                style={{
                  gridRow: 1,
                  gridColumnStart: questionIndex * 4 + 1,
                  gridColumnEnd: questionIndex * 4 + 4,
                  paddingLeft: 20,
                }}>
                <BlocDescription
                  key={question.title__html}
                  classProps="bloc__second-description"
                  description={question.title}
                />
                <BlocDescription
                  key={question.question__html}
                  classProps="bloc__second-description"
                  description={question.question}
                />
              </div>
              {/*

                COLUMN 1

              */}
              {question.column1 && (
                <React.Fragment>
                  <div
                    className="card column-1 row-1"
                    style={{
                      gridRow: 2,
                      gridColumn: questionIndex * 4 + 1,
                    }}>
                    <ButtonWithDoubleArrow
                      button={{ name: 'Valider' }}
                      attachedName="column1"
                      onClick={this.handleCardClick}
                      noButton
                    />
                    {column1currentIndex > 0 ? (
                      <CardContentType3
                        cardTitle={column1Card.title}
                        cardSubTitle={column1Card.subTitle}
                        title1={column1Card.headList1}
                        title2={column1Card.headList2}
                        list1={column1Card.list1}
                        list2={column1Card.list2}
                      />
                    ) : (
                      <CardContentType3 image={backCard} />
                    )}
                  </div>
                  {question.column1.answers &&
                    step.questionNumber === questionIndex &&
                    question.steps.indexOf(step.column) >= question.steps.indexOf('column1') && (
                      <React.Fragment>
                        {step.questionNumber === questionIndex &&
                          step.column === 'column1' &&
                          victoryMessage && (
                            <PopupBlue
                              classProps="popup-column1"
                              onCloseClick={this.handleClosePopupBlue}
                              column={1}
                              styleProps={{
                                transform: `translateX(${questionNumber * (styles.gridAutoColumns + 10) * 4}px)`,
                              }}>
                              <span className="">{victoryMessage}</span>
                            </PopupBlue>
                          )}
                        {question.column1.answers.map(({ choice }, i) => (
                          <ButtonPrimary
                            key={choice}
                            id={`QCM_question_1_answer_${i}`}
                            name={choice}
                            classProps={`button-QCM-type-1${column1Choices && column1Choices[choice] ? ' active' : ''}${
                              column1IsFinished || victoryMessage === victoryMessages.isGoodAnswer ? ' finished' : ''
                            }`}
                            onClick={this.handleChoiceClick}
                            answer={{ column: 1, choice }}
                            styleProps={{
                              gridRow: i + 3,
                              gridColumn: questionIndex * 4 + 1,
                              width: 'auto',
                              fontSize: '0.8175em',
                              marginTop: 5,
                            }}
                          />
                        ))}
                        <ButtonPrimary
                          minWidth
                          name="valider"
                          onClick={this.handleValidate}
                          classProps={`button-validate`}
                          styleProps={{
                            gridRow: 6,
                            gridColumn: questionIndex * 4 + 1,
                            display:
                              (column1IsFinished ||
                                column1ShowExplanation ||
                                victoryMessage === victoryMessages.isGoodAnswer) &&
                              'none',
                          }}
                          answer={{ column: 1 }}
                        />
                      </React.Fragment>
                    )}
                </React.Fragment>
              )}
              {question.column1 &&
                question.column1.popup && (
                  <PopupBlue
                    classProps="popup-column1-explanation"
                    hidePopup={!column1ShowExplanation}
                    onCloseClick={() => this.setState({ column1ShowExplanation: false })}
                    styleProps={{
                      gridColumn: questionIndex * 4 + 1,
                    }}>
                    <span className="card-title">{column1ShowExplanation && question.column1.popup.cardTitle}</span>
                    <span className="card-subtitle">
                      {column1ShowExplanation && question.column1.popup.cardSubTitle}
                    </span>
                    {column1ShowExplanation &&
                      (question.column1.popup.description.__html ? (
                        <p className="card-content" dangerouslySetInnerHTML={question.column1.popup.description} />
                      ) : (
                        <p className="card-content">{question.column1.popup.description}</p>
                      ))}
                  </PopupBlue>
                )}
              {/*

                COLUMN 2

              */}
              {question.column2 && (
                <React.Fragment>
                  <div
                    className="card column-2 row-1"
                    style={{
                      gridRow: 2,
                      gridColumn: questionIndex * 4 + 2,
                    }}>
                    <ButtonWithDoubleArrow
                      button={{ name: 'Valider' }}
                      attachedName="column2"
                      onClick={this.handleCardClick}
                      noButton
                    />
                    {column2currentIndex > 0 ? (
                      <CardContentType3
                        cardTitle={column2Card.title}
                        cardSubTitle={column2Card.subTitle}
                        title1={column2Card.headList1}
                        title2={column2Card.headList2}
                        list1={column2Card.list1}
                        list2={column2Card.list2}
                      />
                    ) : (
                      <CardContentType3 image={backCard} />
                    )}
                  </div>
                  {question.column2.answers &&
                    step.questionNumber === questionIndex &&
                    question.steps.indexOf(step.column) >= question.steps.indexOf('column2') && (
                      <React.Fragment>
                        {step.questionNumber === questionIndex &&
                          step.column === 'column2' &&
                          victoryMessage && (
                            <PopupBlue
                              classProps="popup-column2"
                              onCloseClick={this.handleClosePopupBlue}
                              column={2}
                              styleProps={{
                                transform: `translateX(${questionNumber * (styles.gridAutoColumns + 10) * 4}px)`,
                              }}>
                              <span className="">{victoryMessage}</span>
                            </PopupBlue>
                          )}
                        {question.column2.answers.map(({ choice }, i) => (
                          <ButtonPrimary
                            key={choice}
                            id={`QCM_question_1_answer_${i}`}
                            name={choice}
                            classProps={`button-QCM-type-1${column2Choices && column2Choices[choice] ? ' active' : ''}${
                              column2IsFinished || victoryMessage === victoryMessages.isGoodAnswer ? ' finished' : ''
                            }`}
                            onClick={this.handleChoiceClick}
                            answer={{ column: 2, choice }}
                            styleProps={{
                              gridRow: i + 3,
                              gridColumn: questionIndex * 4 + 2,
                              width: 'auto',
                              fontSize: '0.8175em',
                              marginTop: 5,
                            }}
                          />
                        ))}
                        <ButtonPrimary
                          minWidth
                          name="valider"
                          onClick={this.handleValidate}
                          classProps={`button-validate`}
                          styleProps={{
                            gridRow: 6,
                            gridColumn: questionIndex * 4 + 2,
                            display:
                              (column2IsFinished ||
                                column2ShowExplanation ||
                                victoryMessage === victoryMessages.isGoodAnswer) &&
                              'none',
                          }}
                          answer={{ column: 2 }}
                        />
                      </React.Fragment>
                    )}
                </React.Fragment>
              )}
              {question.column2 &&
                question.column2.popup && (
                  <PopupBlue
                    classProps="popup-column2-explanation"
                    hidePopup={!column2ShowExplanation}
                    onCloseClick={() => this.setState({ column2ShowExplanation: false })}
                    styleProps={{
                      gridColumn: questionIndex * 4 + 2,
                    }}>
                    <span className="card-title">{column2ShowExplanation && question.column2.popup.cardTitle}</span>
                    <span className="card-subtitle">
                      {column2ShowExplanation && question.column2.popup.cardSubTitle}
                    </span>
                    {column2ShowExplanation &&
                      (question.column2.popup.description.__html ? (
                        <p className="card-content" dangerouslySetInnerHTML={question.column2.popup.description} />
                      ) : (
                        <p className="card-content">{question.column2.popup.description}</p>
                      ))}
                  </PopupBlue>
                )}
              {/*

                COLUMN 3

              */}
              {question.column3 && (
                <React.Fragment>
                  <div
                    className="card column-3 row-1"
                    style={{
                      gridRow: 2,
                      gridColumn: questionIndex * 4 + 3,
                    }}>
                    <ButtonWithDoubleArrow
                      button={{ name: 'Valider' }}
                      attachedName="column3"
                      onClick={this.handleCardClick}
                      noButton
                    />
                    {column3currentIndex > 0 ? (
                      <CardContentType3
                        cardTitle={column3Card.title}
                        cardSubTitle={column3Card.subTitle}
                        title1={column3Card.headList1}
                        title2={column3Card.headList2}
                        list1={column3Card.list1}
                        list2={column3Card.list2}
                      />
                    ) : (
                      <CardContentType3 image={backCard} />
                    )}
                  </div>
                  {question.column3.answers &&
                    step.questionNumber === questionIndex &&
                    question.steps.indexOf(step.column) >= question.steps.indexOf('column3') && (
                      <React.Fragment>
                        {step.questionNumber === questionIndex &&
                          step.column === 'column3' &&
                          victoryMessage && (
                            <PopupBlue
                              classProps="popup-column3"
                              onCloseClick={this.handleClosePopupBlue}
                              column={3}
                              styleProps={{
                                transform: `translateX(${questionNumber * (styles.gridAutoColumns + 10) * 4}px)`,
                              }}>
                              <span className="">{victoryMessage}</span>
                            </PopupBlue>
                          )}
                        {question.column3.answers.map(({ choice }, i) => (
                          <ButtonPrimary
                            key={choice}
                            id={`QCM_question_1_answer_${i}`}
                            name={choice}
                            classProps={`button-QCM-type-1${column3Choices && column3Choices[choice] ? ' active' : ''}${
                              column3IsFinished || victoryMessage === victoryMessages.isGoodAnswer ? ' finished' : ''
                            }`}
                            onClick={this.handleChoiceClick}
                            answer={{ column: 3, choice }}
                            styleProps={{
                              gridRow: i + 3,
                              gridColumn: questionIndex * 4 + 3,
                              width: 'auto',
                              fontSize: '0.8175em',
                              marginTop: 5,
                            }}
                          />
                        ))}
                        <ButtonPrimary
                          minWidth
                          name="valider"
                          onClick={this.handleValidate}
                          classProps={`button-validate`}
                          styleProps={{
                            gridRow: 6,
                            gridColumn: questionIndex * 4 + 3,
                            display:
                              (column3IsFinished ||
                                column3ShowExplanation ||
                                victoryMessage === victoryMessages.isGoodAnswer) &&
                              'none',
                          }}
                          answer={{ column: 3 }}
                        />
                      </React.Fragment>
                    )}
                </React.Fragment>
              )}
              {question.column3 &&
                question.column3.popup && (
                  <PopupBlue
                    classProps="popup-column3-explanation"
                    hidePopup={!column3ShowExplanation}
                    onCloseClick={() => this.setState({ column3ShowExplanation: false })}
                    styleProps={{
                      gridColumn: questionIndex * 4 + 3,
                    }}>
                    <span className="card-title">{column3ShowExplanation && question.column3.popup.cardTitle}</span>
                    <span className="card-subtitle">
                      {column3ShowExplanation && question.column3.popup.cardSubTitle}
                    </span>
                    {column3ShowExplanation &&
                      (question.column3.popup.description.__html ? (
                        <p className="card-content" dangerouslySetInnerHTML={question.column3.popup.description} />
                      ) : (
                        <p className="card-content">{question.column3.popup.description}</p>
                      ))}
                  </PopupBlue>
                )}
            </React.Fragment>
          ))}
        </div>
      </Fade>
    );
  }
}

BlocCardGameType2.propTypes = {
  modulType: PropTypes.string.isRequired,
  noChapter: PropTypes.bool,
  chapter: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  firstDescription: PropTypes.shape({ __html: PropTypes.string.isRequired }),
  secondary: PropTypes.string,
  scrollIntoView: PropTypes.bool,
};

BlocCardGameType2.defaultProps = {
  noChapter: false,
  scrollIntoView: false,
  secondary: '',
};

export default BlocCardGameType2;
