import React from 'react';
import DragCard from './UI/DragCard';
import DropCard from './UI/DropCard';
import PopupBlue from './UI/PopupBlue';
import ButtonPrimary from './UI/ButtonPrimary';
import BlocHeader from '../views/BlocHeader';
import BlocDescription from './BlocDescription';
import PropTypes from 'prop-types';
import ReactTimeout from 'react-timeout';

class BlocDragAndDropType1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardInPosition: {},
      reset: false,
      victoryMessage: undefined,
      solutions: {},
      cardCounter: 0,
      gameIsFinished: false
    };

    this.renderDropCard = this.renderDropCard.bind(this);
    this.renderDragCard = this.renderDragCard.bind(this);
    this.handleSolutionChecking = this.handleSolutionChecking.bind(this);
    this.checkAnswers = this.checkAnswers.bind(this);
    this.reset = this.reset.bind(this);
  }

  renderDropCard(dropStartOrEnd, dropPosition, dragCards) {
    const dropCoordinatesAsString = `droppable-${dropStartOrEnd}-${dropPosition}`;
    let cardToShow;

    dragCards.forEach(dragCard => {
      if (!cardToShow) {
        cardToShow = this.renderDragCard(
          dropStartOrEnd,
          dropPosition,
          dragCard
        );
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
      >
        {cardToShow}
      </DropCard>
    );
  }

  renderDragCard(dropStartOrEnd, dropPosition, dragCard) {
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
          index={dragCoordinatesAsString}
          content={dragCard.content}
          type={'bloc-drag-and-drop-1'}
          startPosition={dragCard.startPosition}
          endPosition={dragCard.endPosition}
        />
      );
    }
  }

  handleSolutionChecking(bool, position) {
    const cardInPositionStateCopy = this.state.cardInPosition;
    cardInPositionStateCopy[`${position}`] = bool;
    this.setState({ cardInPosition: cardInPositionStateCopy });
    this.setState({ reset: false });
    this.setState({ gameIsFinished: false });
    this.setState({ victoryMessage: undefined });
  }

  checkAnswers() {
    if (
      Object.keys(this.state.cardInPosition).length < this.state.cardCounter
    ) {
      this.setState({
        victoryMessage: `Vous n'avez pas rempli toutes les cases.`
      });
      this.props.setTimeout(() => {
        this.setState({ victoryMessage: undefined });
      }, 4000);
      return;
    }
    const falseAnswers = Object.keys(this.state.cardInPosition).filter(
      card => !this.state.cardInPosition[`${card}`]
    );
    if (falseAnswers.length === 0) {
      this.setState({ victoryMessage: 'Bravo, vous avez réussi !' });
      this.setState({ gameIsFinished: true });
      this.props.gameIsFinished(this.state.gameIsFinished);
      return;
    } else {
      this.setState({
        victoryMessage: `Ce n'est pas la bonne réponse... réessayez !`
      });
      return;
    }
  }

  reset() {
    this.setState({ reset: true });
    this.setState({ victoryMessage: undefined });
    this.setState({ cardInPosition: {} });
    this.setState({ gameIsFinished: false });
  }

  componentDidMount() {
    const solutions = {};
    let cardCounter = 0;
    this.props.context.cards.forEach(card => {
      if (card.endPosition) {
        solutions[`${card.startPosition}`] = card.endPosition;
        cardCounter++;
      }
    });

    this.setState({ solutions, cardCounter });
  }

  render() {
    const {
      noChapter,
      cards,
      duration,
      chapter,
      title,
      firstDescription
    } = this.props.context;

    return (
      <div className={`bloc bloc-drag-and-drop-1`}>
        {!noChapter && (
          <BlocHeader type="horloge" duration={duration} name={chapter} />
        )}
        <span className="bloc__name">{title}</span>
        <BlocDescription
          classes="bloc__first-description"
          description={firstDescription}
        />
        <div className="bloc-drag-and-drop-1__cards">
          <React.Fragment>
            <div className="drop-cards-start">
              {cards.map((onlyForIndex, indexDrop) =>
                this.renderDropCard('start', indexDrop + 1, cards)
              )}
            </div>
            <div className="risk-scale">
              <span className="risk-low">Moins de risque</span>
              {this.state.victoryMessage && (
                <PopupBlue>
                  <span className="">{this.state.victoryMessage}</span>
                </PopupBlue>
              )}
              <span className="risk-high">Plus de risque</span>
            </div>
            <div
              className={`drop-cards-end${
                this.state.gameIsFinished ? ' finished' : ''
              }`}
            >
              {cards
                .filter(card => card.content.isDraggable)
                .map((card, indexDrop) =>
                  this.renderDropCard('end', indexDrop + 1, cards)
                )}
            </div>
          </React.Fragment>
        </div>
        <div className="bloc-drag-and-drop-1__buttons">
          <ButtonPrimary name="Recommencer" onclick={this.reset} />
          <ButtonPrimary name="Valider" onclick={this.checkAnswers} />
        </div>
      </div>
    );
  }
}

BlocDragAndDropType1.propTypes = {
  context: PropTypes.object.isRequired,
  gameIsFinished: PropTypes.func
};

export default ReactTimeout(BlocDragAndDropType1);
