import React from 'react';
import PropTypes from 'prop-types';

import DragCard from './UI/DragCard';
import DropCard from './UI/DropCard';
import PopupBlue from './UI/PopupBlue';
import ButtonPrimary from './UI/ButtonPrimary';
import BlocHeader from '../views/BlocHeader';
import BlocSpacer from '../views/BlocSpacer';
import BlocDescription from './BlocDescription';
import Fade from '../transitions/Fade';
import victoryMessages from '../model/static/popupBlueMessages';
import { scrollIntoView as scrollItemIntoView } from '../transitions/transitionUtils';

const blankCard = ({ startPosition, endPosition, isDraggable = false }) => ({
  color: 'transparent',
  startPosition,
  endPosition,
  content: {
    isDraggable,
    cardTitle: '',
    cardSubTitle: '',
    list: [],
    legend: [],
  },
});

class BlocDragAndDropType1 extends React.Component {
  state = {
    cardInPosition: {},
    reset: false,
    victoryMessage: undefined,
    solutions: {},
    cardCounter: 0,
    gameIsFinished: undefined,
    showExplanation: false,
    hiddenDragCards: {},
    hideCardWhenDropped: true,
  };

  renderDropCard = ({ dropStartOrEnd, dropPosition, dragPosition, dragCards, dropCardTitleStyles }) => {
    const dropCoordinatesAsString = `droppable-${dropStartOrEnd}-${dropPosition}`;
    let cardToShow;

    dragCards.forEach(dragCard => {
      if (!cardToShow) {
        cardToShow = this.renderDragCard(dropStartOrEnd, dropPosition, dragCard);
      }
    });

    return (
      <DropCard
        id={dropCoordinatesAsString}
        key={dropCoordinatesAsString}
        endPosition={dropPosition}
        reset={this.state.reset}
        startOrEnd={dropStartOrEnd}
        dragCard={this.handleSolutionChecking}
        checkPositionInHere={false}
        dropCardTitleStyles={dropCardTitleStyles}>
        {cardToShow}
      </DropCard>
    );
  };

  renderDragCard = (dropStartOrEnd, dropPosition, dragCard) => {
    /*const [dragStartOrEnd, dragPosition] = [
      dragCard.currentPosition.dragStartOrEnd,
      dragCard.currentPosition.position
    ];
    */
    const [dragStartOrEnd, dragPosition] = ['start', dragCard.startPosition];

    const dragCoordinatesAsString = `dragable-${dragStartOrEnd}-${dragPosition}`;

    if (dropStartOrEnd === dragStartOrEnd && dropPosition === dragPosition) {
      return (
        <DragCard
          color={dragCard.color}
          id={dragCoordinatesAsString}
          content={dragCard.content}
          type={'bloc-drag-and-drop-1'}
          startPosition={dragCard.startPosition}
          endPosition={dragCard.endPosition}
        />
      );
    }
  };

  handleSolutionChecking = (currentEndPosition, supposedEndPosition, startPosition) => {
    const { cardInPosition, hiddenDragCards, hideCardWhenDropped } = this.state;
    cardInPosition[`${supposedEndPosition}`] = currentEndPosition === supposedEndPosition;
    if (hideCardWhenDropped) {
      hiddenDragCards[`${startPosition}`] = true;
    }
    this.setState({
      hiddenDragCards,
      cardInPosition,
      reset: false,
      gameIsFinished: undefined,
      victoryMessage: undefined,
    });
  };

  checkAnswers = () => {
    if (Object.keys(this.state.cardInPosition).length < this.state.cardCounter) {
      this.setState({
        victoryMessage: victoryMessages.casesNotFilled,
      });
      return;
    }
    const falseAnswers = Object.keys(this.state.cardInPosition).filter(card => !this.state.cardInPosition[`${card}`]);
    if (falseAnswers.length === 0) {
      this.setState({
        victoryMessage: victoryMessages.isVictory,
        gameIsFinished: 'victory',
      });
      // this.props.gameIsFinished(this.props.modulType);
      return;
    } else {
      this.setState({
        victoryMessage: victoryMessages.isDefeat,
        gameIsFinished: 'defeat',
      });
      return;
    }
  };

  reset = () => {
    this.setState({
      reset: true,
      victoryMessage: undefined,
      cardInPosition: {},
      gameIsFinished: undefined,
      hiddenDragCards: {},
      showExplanation: false,
    });
  };

  componentDidMount() {
    const solutions = {};
    let cardCounter = 0;
    this.props.cards.forEach(card => {
      if (card.endPosition) {
        solutions[`${card.startPosition}`] = card.endPosition;
        cardCounter++;
      }
    });

    this.setState({ solutions, cardCounter });
    this.setState({ in: true });
  }

  render() {
    const {
      modulType,
      noChapter,
      cards,
      duration,
      chapter,
      title,
      firstDescription,
      scrollIntoView,
      dropCardTitleStyles,
      explication,
    } = this.props;

    const { victoryMessage, gameIsFinished, showExplanation, hiddenDragCards } = this.state;

    const dragCards = cards.map(card => {
      if (hiddenDragCards[card.startPosition] || showExplanation) {
        return blankCard({
          startPosition: card.startPosition,
          endPosition: card.endPosition,
        });
      } else {
        return card;
      }
    });

    const isVictory = gameIsFinished === 'victory' && victoryMessage === victoryMessages.isVictory;

    return (
      <Fade
        classProps={`bloc bloc-drag-and-drop-1`}
        in={this.props.in}
        scrollIntoView={scrollIntoView}
        margins={this.props.margins}>
        {!noChapter && <BlocHeader type="horloge" duration={duration} name={chapter} />}
        <span className="bloc__name">{title}</span>
        <BlocDescription modulType={modulType} classProps="bloc__first-description" description={firstDescription} />
        <div className="bloc-drag-and-drop-1__cards game">
          <React.Fragment>
            <div className="drop-cards-start">
              {dragCards.map((dragCard, indexDrop) =>
                this.renderDropCard({
                  dropStartOrEnd: 'start',
                  dragPosition: dragCard.startPosition,
                  dropPosition: indexDrop + 1,
                  dragCards,
                  dropCardTitleStyles,
                }),
              )}
              {explication && (
                <div className="explanation" style={{ visibility: showExplanation ? 'visible' : 'hidden' }}>
                  <span ref={exp => (this.explication = exp)} className="bloc__name secondary">
                    {explication.title}
                  </span>
                  <BlocDescription in description={explication.description} />
                </div>
              )}
            </div>
            <div className="risk-scale">
              <span className="risk-low">Moins de risque</span>
              {victoryMessage && (
                <PopupBlue
                  onCloseClick={() => {
                    if (isVictory) {
                      this.props.gameIsFinished(modulType);
                      this.setState({ showExplanation: true });
                      scrollItemIntoView(this.explication);
                    }
                    this.setState({ victoryMessage: undefined });
                  }}>
                  <span className="">{victoryMessage}</span>
                </PopupBlue>
              )}
              <span className="risk-high">Plus de risque</span>
            </div>
            <div className={`drop-cards-end${isVictory ? ' finished' : ''}`}>
              {cards.filter(card => card.content.isDraggable).map((card, indexDrop) =>
                this.renderDropCard({
                  dropStartOrEnd: 'end',
                  dragPosition: card.startPosition,
                  dropPosition: indexDrop + 1,
                  dragCards: cards,
                  dropCardTitleStyles,
                }),
              )}
            </div>
          </React.Fragment>
        </div>
        <BlocSpacer />
        <div className="bloc-drag-and-drop-1__buttons">
          {gameIsFinished === 'defeat' &&
            !showExplanation && (
              <ButtonPrimary
                minWidth
                name="Voir l'explication"
                onClick={() => this.setState({ showExplanation: true })}
              />
            )}
          {showExplanation &&
            gameIsFinished !== 'victory' && (
              <ButtonPrimary
                minWidth
                name="Revenir à l'exercice"
                onClick={() => this.setState({ showExplanation: false })}
              />
            )}
          <ButtonPrimary minWidth name="Recommencer" onClick={this.reset} />
          <ButtonPrimary minWidth name="Valider" onClick={this.checkAnswers} />
        </div>
      </Fade>
    );
  }
}

BlocDragAndDropType1.propTypes = {
  in: PropTypes.bool,
  module: PropTypes.string.isRequired,
  gameIsFinished: PropTypes.func.isRequired,

  /***************** DATA ******************/

  modulType: PropTypes.string.isRequired,
  firstDescription: PropTypes.shape({ __html: PropTypes.string.isRequired }),
  noChapter: PropTypes.bool,
  chapter: PropTypes.string.isRequired,
  duration: PropTypes.number,
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      startPosition: PropTypes.number.isRequired,
      endPosition: PropTypes.number,
      content: PropTypes.shape({
        isDraggable: PropTypes.bool.isRequired,
        cardTitle: PropTypes.string.isRequired,
        cardSubTitle: PropTypes.string,
        image: PropTypes.string,
        list: PropTypes.arrayOf(PropTypes.string).isRequired,
        legend: PropTypes.arrayOf(
          PropTypes.shape({
            legendColor: PropTypes.string.isRequired,
            legendText: PropTypes.string.isRequired,
          }),
        ).isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};

BlocDragAndDropType1.defaultProps = {
  in: false,
  module: 'drag-and-drop',
  /***************** DATA ******************/

  firstDescription: undefined,
  noChapter: false,
  duration: 0,
  cards: {
    endPosition: 0,
    content: {
      cardSubTitle: '',
    },
  },
};

export default BlocDragAndDropType1;
