import React from 'react';
// import DropOrDragCardContainer from '../UI/DropOrDragCardContainer';
import DragCard from '../UI/DragCard';
import DropCard from '../UI/DropCard';
// import { DragAndDropContext } from '../model/react-context/DragAndDropProvider';
// import { GlobalInfosContext } from '../model/react-context/GlobalInfosProvider';
import { DragDropContext } from 'react-beautiful-dnd';
import BlocHeader from '../modules/BlocHeader';
import BlocDescription from './BlocDescription';
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
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragUpdate = this.onDragUpdate.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
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
      <DropCard id={dropCoordinatesAsString} key={dropCoordinatesAsString}>
        {cardToShow}
      </DropCard>
    );
  }

  renderDragCard(dropStartOrEnd, dropPosition, dragCard) {
    const [dragStartOrEnd, dragPosition] = [
      dragCard.currentPosition.dragStartOrEnd,
      dragCard.currentPosition.position
    ];
    const dragCoordinatesAsString = `dragable-${dragStartOrEnd}-${dragPosition}`;

    if (dropStartOrEnd === dragStartOrEnd && dropPosition === dragPosition) {
      return (
        <DragCard
          color={dragCard.color}
          id={dragCoordinatesAsString}
          index={dragCoordinatesAsString}
          content={dragCard.content}
          type={'bloc-drag-and-drop-1'}
        />
      );
    }
  }

  onDragStart() {
    /*...*/
  }
  onDragUpdate() {
    /*...*/
  }
  onDragEnd() {
    // the only one that is required
  }

  handleDropCardClick(dropStartOrEnd, dropPosition) {}

  render() {
    const {
      cards,
      duration,
      chapter,
      title,
      firstDescription
    } = this.props.context;

    return (
      <div className={`bloc bloc-drag-and-drop-1`}>
        <BlocHeader type="horloge" duration={duration} name={chapter} />
        <span className="bloc__name">{title}</span>
        <BlocDescription
          classes="bloc__first-description"
          description={firstDescription}
        />
        <div className="bloc-drag-and-drop-1__cards">
          <DragDropContext
            onDragStart={this.onDragStart}
            onDragUpdate={this.onDragUpdate}
            onDragEnd={this.onDragEnd}
          >
            <React.Fragment>
              <div className="drop-cards-start">
                {cards.map((onlyForIndex, indexDrop) =>
                  this.renderDropCard('start', indexDrop + 1, cards)
                )}
              </div>
              <div className="risk-scale">
                <span className="risk-low">Moins de risque</span>
                <span className="risk-high">Plus de risque</span>
              </div>
              <div className="drop-cards-end">
                {cards
                  .filter(card => card.content.isDraggable)
                  .map((card, indexDrop) =>
                    this.renderDropCard('end', indexDrop + 1, cards)
                  )}
              </div>
            </React.Fragment>
          </DragDropContext>
        </div>
      </div>
    );
  }
}

BlocDragAndDrop1.propTypes = {};

export default BlocDragAndDrop1;
