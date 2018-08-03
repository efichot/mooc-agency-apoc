import React from 'react';
import PropTypes from 'prop-types';

import BlocHeader from '../views/BlocHeader';
import BlocDescription from './BlocDescription';
import ButtonPrimary from './UI/ButtonPrimary';
import BlocSpacer from './BlocSpacer';
import PopupBlue from './UI/PopupBlue';
import Fade from '../transitions/Fade';

class BlocEnSavoirPlusType3QCMType1 extends React.Component {
  state = {
    hideCard: true,
    cardNumberShown: 1,
    answers: [],
    currentQuestion: 0,
    showAll: false,
  };

  handleShowCard = card => {
    this.setState({ cardNumberShown: card.index, hideCard: false });
  };

  handleClosePopupBlue = () => {
    console.log('handleClosePopupBlue');
    this.setState({ showErrorMessage: false });
  };

  handleHideCards = card => {
    this.setState({ cardNumberShown: card.index, hideCard: true });
  };

  handleClick = ({ answer, currentQuestion }) => {
    const answers = [...this.state.answers];
    answers[currentQuestion] = answer;

    const showErrorMessage = this.props.error
      .map(
        errorSet =>
          errorSet.condition.map(condition => answers.includes(condition)).filter(isTrue => !isTrue).length === 0
            ? errorSet.errorMessage
            : undefined,
      )
      .filter(isErrorMessage => isErrorMessage)[0];

    if (showErrorMessage) {
      this.setState({ showErrorMessage });
    } else {
      this.setState({ answers });
    }
  };

  handleValidate = () => {
    this.setState({ currentQuestion: this.state.currentQuestion + 1 });
  };

  handleShowAll = () => {
    this.setState({ showAll: !this.state.showAll });
  };

  render = () => {
    const {
      modulType,
      noChapter,
      cards,
      duration,
      grid,
      chapter,
      title,
      firstDescription,
      scrollIntoView,
      questions,
      descriptionWhenNoMoreQuestion,
      showMoreQuestionsConditions,
    } = this.props;

    const { hideCard, cardNumberShown, currentQuestion, answers, showAll, showErrorMessage } = this.state;

    const showMoreQuestions =
      questions !== undefined &&
      showMoreQuestionsConditions
        .map(
          conditionSet =>
            conditionSet.map(condition => answers.includes(condition)).filter(isTrue => !isTrue).length === 0,
        )
        .filter(isTrue => isTrue).length > 0 &&
      currentQuestion >= questions.originalQuestions.length;

    const noMoreQuestion =
      questions === undefined
        ? true
        : showMoreQuestions
          ? currentQuestion === questions.originalQuestions.length + questions.moreQuestions.length
          : currentQuestion === questions.originalQuestions.length;

    const cardToShow = cards.filter(card => card.index === cardNumberShown)[0];

    const question =
      questions === undefined
        ? true
        : noMoreQuestion
          ? {}
          : showMoreQuestions
            ? questions.moreQuestions[currentQuestion - questions.originalQuestions.length]
            : questions.originalQuestions[currentQuestion].description
              ? questions.originalQuestions[currentQuestion]
              : questions.originalQuestions[currentQuestion][
                  questions.originalQuestions[currentQuestion - 1].answers.indexOf(answers[currentQuestion - 1])
                ];

    return (
      <Fade
        in={this.props.in}
        classProps={`bloc bloc-en-savoir-plus bloc-en-savoir-plus-type-3-qcm-type-1`}
        scrollIntoView={scrollIntoView}
        margins={this.props.margins}>
        {!noChapter && <BlocHeader type="horloge" duration={duration} name={chapter} />}
        <span className="bloc__name">{title}</span>
        <BlocDescription modulType={modulType} classProps="bloc__first-description" description={firstDescription} />
        <BlocSpacer height={25} />
        {questions !== undefined && (
          <React.Fragment>
            <BlocDescription
              modulType={modulType}
              classProps="bloc-en-savoir-plus-type-3-qcm-type-1__question"
              description={!noMoreQuestion ? question.description : descriptionWhenNoMoreQuestion}
            />
            <BlocSpacer height={25} />
            <div className="bloc-en-savoir-plus-type-3-qcm-type-1__answers">
              {!noMoreQuestion &&
                question &&
                question.description &&
                question.answers.map((answer, index) => (
                  <div key={index} className="bloc-en-savoir-plus-type-3-qcm-type-1__answers--answer">
                    <ButtonPrimary
                      id={`QCM_question_1_answer_${index}`}
                      name={answer}
                      classProps={`button-QCM-type-1${answers[currentQuestion] === answer ? ' active' : ''}`}
                      onClick={this.handleClick}
                      answer={{ answer, currentQuestion }}
                      styleProps={{
                        height: 40,
                        width: question.width,
                        padding: 0,
                        fontSize: '0.875rem',
                        lineHeight: '1em',
                        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
                      }}
                    />
                    {question.files &&
                      question.files[index].map((file, fileIndex) => (
                        <div
                          key={file.fileName}
                          className="bloc-en-savoir-plus-type-3-qcm-type-1__answers--file"
                          style={{
                            visibility: answers[currentQuestion] === answer ? 'visible' : 'hidden',
                          }}>
                          {file.title && <span>{file.title}</span>}
                          <a href={file.fileUrl} target="_blank" rel="noopener noreferrer">
                            {file.fileName}
                          </a>
                          {file.subTitle && <span>{file.subTitle}</span>}
                        </div>
                      ))}
                  </div>
                ))}
              {!noMoreQuestion && (
                <PopupBlue
                  classProps="bloc-en-savoir-plus-type-3-qcm-type-1__error"
                  hidePopup={!showErrorMessage}
                  onCloseClick={this.handleClosePopupBlue}>
                  {showErrorMessage &&
                    (showErrorMessage.__html ? (
                      <p className="card-content" dangerouslySetInnerHTML={showErrorMessage} />
                    ) : (
                      <p className="card-content">{showErrorMessage}</p>
                    ))}
                </PopupBlue>
              )}
            </div>
            <ButtonPrimary
              minWidth
              name={noMoreQuestion ? 'voir le reste du schéma' : 'valider'}
              onClick={noMoreQuestion ? this.handleShowAll : this.handleValidate}
              classProps={`bloc-QCM-type-1__validate`}
            />
          </React.Fragment>
        )}
        <div
          className="bloc-en-savoir-plus-type-3-qcm-type-1__cards game"
          style={{
            gridAutoRows: grid.gridAutoRows,
            gridTemplateColumns: grid.gridTemplateColumns,
          }}>
          {cards.map((card, index) => {
            const hover = cardNumberShown === card.index && !hideCard;
            const showThis =
              card.visibleIf &&
              typeof card.visibleIf === 'object' &&
              card.visibleIf
                .map(
                  condition => condition.map(answer => answers.includes(answer)).filter(value => !value).length === 0,
                )
                .filter(isTrue => isTrue).length > 0;
            const alwaysVisible = card.visibleIf === 'always';
            if (card.cardTitle) {
              return (
                <div
                  className="button-groupe"
                  onMouseEnter={() => this.handleShowCard(card)}
                  onMouseLeave={() => this.handleHideCards(card)}
                  style={{
                    ...card.style,
                  }}
                  key={index}>
                  <ButtonPrimary
                    color={hover ? card.hoverColor : card.color}
                    name={card.cardTitleToShow || card.cardTitle}
                    styleProps={{
                      color: showAll || showThis || alwaysVisible || hover ? 'var(--defaultTextColor)' : 'transparent',
                      ...card.buttonStyle,
                      height: `${card.height * grid.gridAutoRows}px`,
                    }}
                  />
                </div>
              );
            } else if (card.arrow) {
              return (
                <div
                  key={index}
                  className="bloc-en-savoir-plus-type-3-qcm-type-1__cards--arrow"
                  style={{
                    ...card.style,
                    backgroundImage: showAll || showThis || alwaysVisible ? `url(${card.arrow})` : '',
                  }}
                />
              );
            }
            return null;
          })}
          <PopupBlue
            classProps="bloc-en-savoir-plus-type-3-qcm-type-1__cards--to-show"
            hidePopup={hideCard}
            noCross
            styleProps={{
              gridRow: `${grid.rows} / ${grid.rows + grid.popupRows}`,
              gridColumn: `1 / -1`,
            }}>
            {!hideCard &&
              cardToShow.cardTitle &&
              (cardToShow.cardTitle.__html ? (
                <span className="card-title" dangerouslySetInnerHTML={cardToShow.cardTitle} />
              ) : (
                <span className="card-title">{cardToShow.cardTitle}</span>
              ))}
            <span className="card-subtitle">{!hideCard && cardToShow.cardSubTitle}</span>
            {!hideCard &&
              cardToShow.cardContent &&
              (cardToShow.cardContent.__html ? (
                <p className="card-content" dangerouslySetInnerHTML={cardToShow.cardContent} />
              ) : (
                <p className="card-content">{cardToShow.cardContent}</p>
              ))}
          </PopupBlue>
        </div>
      </Fade>
    );
  };
}

BlocEnSavoirPlusType3QCMType1.propTypes = {
  in: PropTypes.bool,

  /***************** DATA ******************/

  modulType: PropTypes.string.isRequired,
  noChapter: PropTypes.bool,
  chapter: PropTypes.string.isRequired,
  duration: PropTypes.number,
  title: PropTypes.string.isRequired,
  grid: PropTypes.shape({
    rows: PropTypes.number.isRequired,
    columns: PropTypes.number.isRequired,
  }),
  firstDescription: PropTypes.shape({ __html: PropTypes.string.isRequired }),
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      hoverColor: PropTypes.string.isRequired,
      style: PropTypes.shape({
        gridColumnStart: PropTypes.number.isRequired,
        gridColumnEnd: PropTypes.number.isRequired,
        gridRowStart: PropTypes.number.isRequired,
        gridRowEnd: PropTypes.number.isRequired,
        alignSelf: PropTypes.string.isRequired,
      }).isRequired,
      cardTitle: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.shape({ __html: PropTypes.string.isRequired }),
      ]),
      cardContent: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.shape({ __html: PropTypes.string.isRequired }),
      ]),
      cardSubTitle: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

BlocEnSavoirPlusType3QCMType1.defaultProps = {
  in: false,

  /***************** DATA ******************/
  firstDescription: {
    __html: ``,
  },
  noChapter: false,
  duration: 0,
};

export default BlocEnSavoirPlusType3QCMType1;
