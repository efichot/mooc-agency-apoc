import React from 'react';
import PropTypes from 'prop-types';

import BlocHeader from './BlocHeader';
import BlocSpacer from './BlocSpacer';
import BlocDescription from './BlocDescription';
import CardContentType4 from './UI/CardContentType4';
import ButtonPrimary from './UI/ButtonPrimary';
import PopupBlue from './UI/PopupBlue';
import Fade from '../transitions/Fade';
import victoryMessages from '../model/static/popupBlueMessages';
import { scrollIntoView } from '../transitions/transitionUtils';

class BlocQCMType4 extends React.Component {
  state = {
    victoryMessage: undefined,
    gameIsFinished: false,
    correctAnswers: {},
    proposedAnswers: {},
  };

  handleClick = ({ key, field }) => {
    this.setState({
      proposedAnswers: {
        ...this.state.proposedAnswers,
        [field]: {
          ...this.state.proposedAnswers[field],
          [key]: !this.state.proposedAnswers[field][key],
        },
      },
    });
    this.setState({ victoryMessage: undefined });
    this.setState({ gameIsFinished: false });
  };

  handleValidate = e => {
    const { correctAnswers, proposedAnswers } = this.state;

    let correct = true;
    Object.keys(proposedAnswers).length <= 0 && (correct = false);
    Object.keys(proposedAnswers).forEach(field => {
      Object.keys(proposedAnswers[field]).forEach(key => {
        if (!correct) {
          return;
        } else {
          correct = proposedAnswers[field][key] === correctAnswers[field][key];
        }
      });
    });

    if (correct) {
      this.setState({ victoryMessage: victoryMessages.isGoodAnswer });
      this.setState({ gameIsFinished: true });
      // this.props.gameIsFinished(this.state.gameIsFinished);
    } else {
      this.setState({
        victoryMessage: victoryMessages.isDefeat,
      });
    }
  };

  componentDidMount() {
    const { cards, selectedRow: selectedRowProp } = this.props;
    const selectedRow = selectedRowProp || 0;
    const proposedAnswers = {};
    Object.keys(cards[selectedRow].answers).forEach(field => {
      proposedAnswers[field] = {};
      Object.keys(cards[selectedRow].answers[field]).forEach(key => {
        proposedAnswers[field][key] = false;
      });
    });

    this.setState({ correctAnswers: cards[selectedRow].answers });
    this.setState({ proposedAnswers });
  }

  componentDidUpdate(prevProps) {
    if (this.props.in && prevProps.selectedRow !== this.props.selectedRow) {
      scrollIntoView(this.top);
    }
  }

  render() {
    const {
      modulType,
      noChapter,
      firstDescription,
      secondDescription,
      thirdDescription,
      chapter,
      duration,
      name,
      fields,
      cards,
      selectedRow: selectedRowProp,
      scrollIntoView,
    } = this.props;

    const { proposedAnswers, gameIsFinished, victoryMessage } = this.state;

    const isProposedAnswers = Object.keys(proposedAnswers).length > 0;

    const selectedRow = selectedRowProp || 0;

    return (
      <Fade
        classProps={`bloc bloc-QCM-type-4`}
        in={this.props.in}
        scrollIntoView={scrollIntoView}
        margins={this.props.margins}>
        {!noChapter && <BlocHeader type="horloge" duration={duration} name={chapter} />}
        <span className="bloc__name" ref={top => (this.top = top)}>
          {name}
        </span>
        <BlocDescription modulType={modulType} classProps="bloc__first-description" description={firstDescription} />
        <div className="bloc-QCM-type-4__cards game">
          {cards[selectedRow].cardsSet.map((card, i) => (
            <CardContentType4
              key={i}
              cardTitle={card.title}
              content={{
                __html: `<em>${card.element1.key}</em>&nbsp;${card.element1.value}</br>${
                  card.element1.transition
                }</br><em>${card.element2.key}</em>&nbsp;${card.element2.value}</br>${
                  card.element1.transition
                }</br><em>${card.element3.key}</em>&nbsp;${card.element3.value}</br>${
                  card.element1.transition
                }</br><em>${card.element4.key}</em>&nbsp;${card.element4.value}</br>${
                  card.element1.transition
                }</br><em>${card.element5.key}</em>&nbsp;${card.element5.value}</br>`,
              }}
            />
          ))}
        </div>
        <BlocSpacer />
        <BlocDescription modulType={modulType} classProps="bloc__first-description" description={secondDescription} />
        <BlocSpacer />
        <div className="bloc-QCM-type-4__answer-and-popup">
          <div className="bloc-QCM-type-4__answer-and-popup--labels">
            {Object.keys(fields).map((key, index) => <span key={key}>{fields[key]}</span>)}
          </div>
          <div className="bloc-QCM-type-4__answer-and-popup--answers">
            {Object.keys(cards[selectedRow].answers).map((field, index) => (
              <div key={field} className="field">
                {Object.keys(cards[selectedRow].answers[field]).map((key, i) => {
                  return (
                    <ButtonPrimary
                      key={i}
                      id={`QCM_question_4_answer_${i}`}
                      name={key}
                      classProps={`button-QCM-type-4${
                        isProposedAnswers && proposedAnswers[field][key] ? ' active' : ''
                      }${gameIsFinished ? ' finished' : ''}`}
                      onClick={this.handleClick}
                      answer={{ key, field }}
                    />
                  );
                })}
              </div>
            ))}
            {victoryMessage && (
              <PopupBlue
                onCloseClick={() => {
                  victoryMessage === victoryMessages.isGoodAnswer && this.props.gameIsFinished(modulType);
                  this.setState({ victoryMessage: undefined });
                }}>
                <span className="">{this.state.victoryMessage}</span>
              </PopupBlue>
            )}
          </div>
        </div>
        <BlocSpacer />
        <ButtonPrimary minWidth name="valider" onClick={this.handleValidate} classProps={`bloc-QCM-type-4__validate`} />
        <BlocSpacer />
        {gameIsFinished && (
          <BlocDescription modulType={modulType} classProps="bloc__first-description" description={thirdDescription} />
        )}
      </Fade>
    );
  }
}

BlocQCMType4.propTypes = {
  in: PropTypes.bool,
  gameIsFinished: PropTypes.func,

  /***************** DATA ******************/

  modulType: PropTypes.string.isRequired,
  noChapter: PropTypes.bool,
  chapter: PropTypes.string.isRequired,
  duration: PropTypes.number,
  name: PropTypes.string.isRequired,
  fields: PropTypes.shape({
    element1: PropTypes.string.isRequired,
    element2: PropTypes.string.isRequired,
    element3: PropTypes.string.isRequired,
    element4: PropTypes.string.isRequired,
    element5: PropTypes.string.isRequired,
  }).isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      answers: PropTypes.shape(PropTypes.object.isRequired),
      cardsSet: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          element1: PropTypes.shape({
            key: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            transition: PropTypes.string.isRequired,
          }).isRequired,
          element2: PropTypes.shape({
            key: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            transition: PropTypes.string.isRequired,
          }).isRequired,
          element3: PropTypes.shape({
            key: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            transition: PropTypes.string.isRequired,
          }).isRequired,
          element4: PropTypes.shape({
            key: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            transition: PropTypes.string.isRequired,
          }).isRequired,
          element5: PropTypes.shape({
            key: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            transition: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  ).isRequired,
  firstDescription: PropTypes.shape({ __html: PropTypes.string.isRequired }),
  secondDescription: PropTypes.shape({ __html: PropTypes.string.isRequired }),
  thirdDescription: PropTypes.shape({ __html: PropTypes.string.isRequired }),
  selectedRow: PropTypes.number,
};

BlocQCMType4.defaultProps = {
  in: false,
  noChapter: false,
  duration: 0,
  description: undefined,
  selectedRow: undefined,
};

export default BlocQCMType4;
