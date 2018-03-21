import React from 'react';
// import DropOrDragCardContainer from '../UI/DropOrDragCardContainer';
import DragCard from '../UI/DragCard';
import DropCard from '../UI/DropCard';
// import { DragAndDropContext } from '../model/react-context/DragAndDropProvider';
import { GlobalInfosContext } from '../model/react-context/GlobalInfosProvider';
import { DragDropContext } from 'react-beautiful-dnd';
//import PropTypes from 'prop-types';

export const ItemTypes = {
  KNIGHT: 'knight'
};

class BlocDragAndDrop1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.renderDropCard = this.renderDropCard.bind(this);
    this.renderDragCard = this.renderDragCard.bind(this);
  }

  renderDropCard(dropStartOrEnd, dropPosition, dragCards) {
    const dropCoordinatesAsString = `${dropStartOrEnd}-${dropPosition}`;
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

    return <DropCard key={dropCoordinatesAsString}>{cardToShow}</DropCard>;
  }

  renderDragCard(dropStartOrEnd, dropPosition, dragCard) {
    const [dragStartOrEnd, dragPosition] = [
      dragCard.currentPosition.dragStartOrEnd,
      dragCard.currentPosition.position
    ];
    if (dropStartOrEnd === dragStartOrEnd && dropPosition === dragPosition) {
      return (
        <DragCard
          color={dragCard.color}
          id={dragCard.endPosition}
          connectDragSource
          isDragging
        />
      );
    }
  }

  handleDropCardClick(dropStartOrEnd, dropPosition) {}

  render() {
    return (
      <div className={`bloc-drag-and-drop-1`}>
        <GlobalInfosContext.Consumer>
          {context => {
            const cards = context.state.dataGame.cards;
            return (
              <React.Fragment>
                <div className="drop-cards-start">
                  {cards.map((onlyForIndex, indexDrop) =>
                    this.renderDropCard('start', indexDrop + 1, cards)
                  )}
                </div>
                <div className="drop-cards-end">
                  {cards.map((onlyForIndex, indexDrop) =>
                    this.renderDropCard('end', indexDrop + 1, cards)
                  )}
                </div>
              </React.Fragment>
            );
          }}
        </GlobalInfosContext.Consumer>
      </div>
    );
  }
}

BlocDragAndDrop1.propTypes = {};

export default BlocDragAndDrop1;
