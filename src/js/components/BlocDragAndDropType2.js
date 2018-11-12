import React from 'react';
import PropTypes from 'prop-types';

import DragCardMini from './UI/DragCardMini';
import DropCardMini from './UI/DropCardMini';
import PopupBlue from './UI/PopupBlue';
import ButtonPrimary from './UI/ButtonPrimary';
import BlocHeader from '../components/BlocHeader';
import BlocSpacer from '../components/BlocSpacer';
import BlocDescription from './BlocDescription';
import Fade from '../transitions/Fade';
import victoryMessages from '../model/static/popupBlueMessages';

// import draggableIcon from '../../assets/img/icons/button-finger.png';

class BlocDragAndDropType2 extends React.Component {
  state = {
    cardInPosition: {},
    reset: false,
    victoryMessage: undefined,
    solutions: {},
    dragCards: {},
    cardCounter: 0,
    gameIsFinished: false,
    gridColumns: this.props.grid.columns.length,
    gridRows: this.props.grid.rows.length,
  };

  renderDropCard = (dropStartOrEnd, startPosition = 0, endPosition, dragCards, styleProps) => {
    const dropCoordinatesAsString = `droppable-${dropStartOrEnd}-${endPosition.row}-${endPosition.column}`;

    return (
      <DropCardMini
        id={dropCoordinatesAsString}
        key={dropCoordinatesAsString}
        endPosition={endPosition}
        classProps={`grid-column-start-${startPosition + 1}`}
        reset={this.state.reset}
        startOrEnd={dropStartOrEnd}
        dragCard={this.handlePositionDragcard}>
        {Object.keys(dragCards).map(dragCard =>
          this.renderDragCard(dragCards[dragCard], dropStartOrEnd, endPosition, startPosition, styleProps),
        )}
      </DropCardMini>
    );
  };

  renderDragCard = (dragCard, dropStartOrEnd, dropEndPosition, dropStartPosition, styleProps) => {
    const dragCoordinatesAsString = `dragable-${dragCard.endPosition.row}-${dragCard.endPosition.column}`;

    const showEndCard =
      dropStartOrEnd === 'end' &&
      dragCard.startOrEnd === dropStartOrEnd &&
      dragCard.endPosition.row === dropEndPosition.row &&
      dragCard.endPosition.column === dropEndPosition.column;

    const showStartCard =
      dropStartOrEnd === 'start' &&
      dragCard.startOrEnd === dropStartOrEnd &&
      dragCard.startPosition === dropStartPosition;

    if (showEndCard || showStartCard) {
      // showStartCard && console.log("dragCard", dragCard);
      return (
        <DragCardMini
          key={dragCoordinatesAsString}
          id={dragCoordinatesAsString}
          content={dragCard}
          styleProps={styleProps}
          type={'bloc-drag-and-drop-2'}
          startPosition={dragCard.startPosition || 0}
          endPosition={dragCard.endPosition}
        />
      );
    }
  };

  handlePositionDragcard = (dragCardName, inDropCardEndPosition) => {
    const dragCards = { ...this.state.dragCards };
    let alreadyInPosition = false;
    Object.keys(dragCards).forEach(dragCard => {
      const inRow = dragCards[dragCard].endPosition.row === inDropCardEndPosition.row;
      const inColumn = dragCards[dragCard].endPosition.column === inDropCardEndPosition.column;
      if (inRow && inColumn) {
        alreadyInPosition = true;
      }
    });
    if (!alreadyInPosition) {
      dragCards[dragCardName].endPosition = inDropCardEndPosition;
      dragCards[dragCardName].startOrEnd = 'end';
      this.setState({ dragCards }, () => this.handleSolutionChecking(dragCardName));
    }
  };

  handleSolutionChecking = dragCardName => {
    const cardInPositionStateCopy = this.state.cardInPosition;
    const { solutions, dragCards } = this.state;

    const inRow = solutions[dragCardName].rows
      ? solutions[dragCardName].rows.includes(dragCards[dragCardName].endPosition.row)
      : solutions[dragCardName].row === dragCards[dragCardName].endPosition.row;

    const inColumn = solutions[dragCardName].columns
      ? solutions[dragCardName].columns.includes(dragCards[dragCardName].endPosition.column)
      : solutions[dragCardName].column === dragCards[dragCardName].endPosition.column;

    if (inRow && inColumn) {
      cardInPositionStateCopy[dragCardName] = true;
    } else {
      cardInPositionStateCopy[dragCardName] = false;
    }
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
      // this.props.gameIsFinished(this.props.module);
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
    const solutions = {};
    const dragCards = {};
    const cardInPosition = {};
    let cardCounter = 0;
    this.props.cards.forEach(card => {
      solutions[`${card.name}`] = card.endPosition;
      if (card.startPosition) {
        dragCards[`${card.name}`] = {
          ...card,
          startOrEnd: 'start',
          endPosition: {
            row: 0,
            column: 0,
          },
        };
      } else {
        dragCards[`${card.name}`] = {
          ...card,
          startOrEnd: 'end',
        };
        cardInPosition[card.name] = true;
      }
      cardCounter++;
    });

    this.setState({ solutions, cardCounter, cardInPosition, dragCards });
  };

  componentDidMount() {
    const solutions = {};
    const dragCards = {};
    const cardInPosition = {};
    let cardCounter = 0;
    this.props.cards.forEach(card => {
      solutions[`${card.name}`] = card.endPosition;
      if (card.startPosition) {
        dragCards[`${card.name}`] = {
          ...card,
          startOrEnd: 'start',
          endPosition: {
            row: 0,
            column: 0,
          },
        };
      } else {
        dragCards[`${card.name}`] = {
          ...card,
          startOrEnd: 'end',
        };
        cardInPosition[card.name] = true;
      }
      cardCounter++;
    });

    this.setState({ solutions, cardCounter, cardInPosition, dragCards });
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
      grid,
      legend,
      verticalAxis,
      horizontalAxis,
      scrollIntoView,
    } = this.props;

    const {
      // solutions,
      dragCards,
    } = this.state;

    /*    const gridTemplateColumns = grid.columns.map(c => '1fr ').reduce((a, b) => `${a}${b}`); //FIXME
    // const gridTemplateRows = grid.rows.map(c => '1fr ').reduce((a, b) => `${a}${b}`);
    const gridTemplateRows = grid.templateRows;

    const gridTemplate = {
      gridTemplateColumns,
      gridTemplateRows,
    };*/

    const cells = grid.rows.map((headerRow, row) => {
      return grid.columns.map((headerCol, col) => {
        const borders = {};
        const firstColumn = col === 0;
        const lastLine = row === grid.rows.length - 1;
        let gridRow = `grid-row-start-${row + 1}-end-${row + 1}`;
        let gridColumn = `grid-column-start-${col + 1}-end-${col + 1}`;
        let gridHeader = firstColumn || lastLine ? 'grid-header' : '';
        let headerContentRow = firstColumn && headerRow;
        let headerContentCol = lastLine && headerCol;

        if (col < grid.columns.length - 1) {
          if (grid.columns[col] === grid.columns[col + 1]) {
            borders.borderRight = `none`;
            if (lastLine) {
              gridColumn = `grid-column-start-${col + 1}-end-${col + 3}`;
            }
          }
        }
        if (col > 0) {
          if (grid.columns[col] === grid.columns[col - 1]) {
            borders.borderLeft = `none`;
            if (lastLine) {
              headerContentCol = undefined;
              gridHeader = 'grid-header';
            }
          }
        }
        if (row < grid.rows.length - 1) {
          if (grid.rows[row] === grid.rows[row + 1]) {
            borders.borderBottom = `none`;
            if (firstColumn) {
              gridRow = `grid-row-start-${row + 1}-end-${row + 3}`;
            }
          }
        }
        if (row > 0) {
          if (grid.rows[row] === grid.rows[row - 1]) {
            borders.borderTop = `none`;
            if (firstColumn) {
              headerContentRow = undefined;
              gridHeader = 'grid-header';
            }
          }
        }

        return (
          <div
            key={`${headerRow}${headerCol}`}
            className={`grid-cell ${gridHeader} ${gridRow} ${gridColumn}`}
            style={{
              ...borders,
            }}>
            {headerContentRow}
            {headerContentCol}
            {cards.filter(card => card.isDraggable).map((card, indexDrop) => {
              if (card.endPosition.column === col + 1 && card.endPosition.row === row + 1) {
                return this.renderDropCard(
                  'end',
                  card.startPosition,
                  card.endPosition,
                  dragCards,
                  card.droppedCardStyle,
                );
              } else {
                return null;
              }
            })}
          </div>
        );
      });
    });

    return (
      <Fade
        classProps={`bloc bloc-drag-and-drop-2`}
        in={this.props.in}
        scrollIntoView={scrollIntoView}
        margins={this.props.margins}>
        {!noChapter && <BlocHeader type="horloge" duration={duration} name={chapter} />}
        <span className="bloc__name">{title}</span>
        <BlocDescription modulType={modulType} classProps="bloc__first-description" description={firstDescription} />
        <div className="bloc-drag-and-drop-2__start game">
          <div className="icon-draggable grid-column-start-1" />
          {cards
            .filter(card => card.startPosition)
            .map((card, indexDrop) =>
              this.renderDropCard('start', card.startPosition, card.endPosition, dragCards, card.dragCardStyle),
            )}
        </div>
        <BlocSpacer height={20} />
        <span className="bloc-drag-and-drop-2__axis vertical">{verticalAxis}</span>
        <BlocSpacer height={20} />
        <div className={`bloc-drag-and-drop-2__grid`}>
          {cells}
          {legend && (
            <ul
              className={`bloc-drag-and-drop-2__legend grid-column-start-${grid.columns.length - 1}-end-${grid.columns
                .length + 1} grid-row-start-${grid.rows.length - 2}-end-${grid.rows.length}`}>
              {legend.map(item => {
                return (
                  <li key={item.legendText}>
                    <div className="legend-square" style={{ backgroundColor: item.legendColor }} />
                    <div className="legend-text">{item.legendText}</div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <BlocSpacer height={20} />
        <span className="bloc-drag-and-drop-2__axis horizontal">{horizontalAxis}</span>
        <BlocSpacer height={20} />
        <div className="bloc-drag-and-drop-2__buttons">
          {this.state.victoryMessage && (
            <PopupBlue
              onCloseClick={() => {
                this.state.victoryMessage === victoryMessages.isVictory && this.props.gameIsFinished(this.props.module);
                this.setState({ victoryMessage: undefined });
              }}>
              <span className="">{this.state.victoryMessage}</span>
            </PopupBlue>
          )}
          <ButtonPrimary minWidth name="Recommencer" onClick={this.reset} />
          <ButtonPrimary minWidth name="Valider" onClick={this.checkAnswers} />
        </div>
        <BlocSpacer height={20} />
      </Fade>
    );
  }
}

BlocDragAndDropType2.propTypes = {
  in: PropTypes.bool,
  module: PropTypes.string.isRequired,
  gameIsFinished: PropTypes.func,

  /***************** DATA ******************/

  modulType: PropTypes.string.isRequired,
  firstDescription: PropTypes.shape({ __html: PropTypes.string.isRequired }),
  noChapter: PropTypes.bool,
  chapter: PropTypes.string.isRequired,
  verticalAxis: PropTypes.string.isRequired,
  horizontalAxis: PropTypes.string.isRequired,
  duration: PropTypes.number,
  grid: PropTypes.shape({
    columns: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])).isRequired,
    rows: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])).isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  legend: PropTypes.arrayOf(
    PropTypes.shape({
      legendColor: PropTypes.string.isRequired,
      legendText: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      startPosition: PropTypes.number,
      endPosition: PropTypes.shape({
        column: PropTypes.number.isRequired,
        row: PropTypes.number.isRequired,
      }).isRequired,
      pieData: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          value: PropTypes.number.isRequired,
          color: PropTypes.string.isRequired,
        }),
      ),
      background: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

BlocDragAndDropType2.defaultProps = {
  in: false,
  module: 'drag-and-drop',
  gameIsFinished: undefined,
  /***************** DATA ******************/

  firstDescription: undefined,
  noChapter: false,
  duration: 0,
  cards: {
    startPosition: undefined,
  },
};

export default BlocDragAndDropType2;
