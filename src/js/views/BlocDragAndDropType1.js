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

class BlocDragAndDropType1 extends React.Component {
  state = {
    cardInPosition: {},
    reset: false,
    victoryMessage: undefined,
    solutions: {},
    cardCounter: 0,
    gameIsFinished: false,
  };

  renderDropCard = (dropStartOrEnd, dropPosition, dragCards) => {
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
        dragCard={this.handleSolutionChecking}>
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

  handleSolutionChecking = (bool, position) => {
    const cardInPositionStateCopy = this.state.cardInPosition;
    cardInPositionStateCopy[`${position}`] = bool;
    this.setState({ cardInPosition: cardInPositionStateCopy });
    this.setState({ reset: false });
    this.setState({ gameIsFinished: false });
    this.setState({ victoryMessage: undefined });
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
      this.setState({ victoryMessage: victoryMessages.isVictory });
      this.setState({ gameIsFinished: true });
      this.props.gameIsFinished(this.props.module);
      return;
    } else {
      this.setState({
        victoryMessage: victoryMessages.isDefeat,
      });
      return;
    }
  };

  reset = () => {
    this.setState({ reset: true });
    this.setState({ victoryMessage: undefined });
    this.setState({ cardInPosition: {} });
    this.setState({ gameIsFinished: false });
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
    const { modulType, noChapter, cards, duration, chapter, title, firstDescription, scrollIntoView } = this.props;

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
              {cards.map((onlyForIndex, indexDrop) => this.renderDropCard('start', indexDrop + 1, cards))}
            </div>
            <div className="risk-scale">
              <span className="risk-low">Moins de risque</span>
              {this.state.victoryMessage && (
                <PopupBlue onCloseClick={() => this.setState({ victoryMessage: undefined })}>
                  <span className="">{this.state.victoryMessage}</span>
                </PopupBlue>
              )}
              <span className="risk-high">Plus de risque</span>
            </div>
            <div className={`drop-cards-end${this.state.gameIsFinished ? ' finished' : ''}`}>
              {cards
                .filter(card => card.content.isDraggable)
                .map((card, indexDrop) => this.renderDropCard('end', indexDrop + 1, cards))}
            </div>
          </React.Fragment>
        </div>
        <BlocSpacer />
        <div className="bloc-drag-and-drop-1__buttons">
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
