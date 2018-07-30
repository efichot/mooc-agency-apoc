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

class BlocCardGameType3 extends React.Component {
  state = {
    gameSet: 0,
    column1NumberOfCards: 1,
    column3NumberOfCards: 1,
    column1CardsIndex: {},
    column3CardsIndex: {},
    victoryMessage: undefined,
  };

  componentDidMount() {
    const { game } = this.props;
    const gameSet = Math.floor(Math.random() * game.length);
    const column1NumberOfCards = game[gameSet].column1.actors.filter(actor => actor.answer).length;
    const column3NumberOfCards = game[gameSet].column3.actors.filter(actor => actor.answer).length;
    this.setState({
      gameSet,
      column1NumberOfCards,
      column3NumberOfCards,
    });
  }

  componentDidUpdate(prevProps, prevState) {}

  handleValidate = () => {
    const { gameSet, column1CardsIndex, column3CardsIndex } = this.state;
    const { game } = this.props;
    const correctAnswers = {
      column1CardsIndex: [],
      column3CardsIndex: [],
    };
    game[gameSet].column1.actors.forEach((actor, ind) => actor.answer && correctAnswers.column1CardsIndex.push(ind));
    game[gameSet].column3.actors.forEach((actor, ind) => actor.answer && correctAnswers.column3CardsIndex.push(ind));

    let answersAreCorrect = true;
    if (
      JSON.stringify(Object.values(column1CardsIndex).sort()) !==
      JSON.stringify(correctAnswers.column1CardsIndex.sort())
    ) {
      answersAreCorrect = false;
    }
    if (
      JSON.stringify(Object.values(column3CardsIndex).sort()) !==
      JSON.stringify(correctAnswers.column3CardsIndex.sort())
    ) {
      answersAreCorrect = false;
    }

    if (answersAreCorrect) {
      this.setState({ victoryMessage: victoryMessages.isGoodAnswer });
      this.props.gameIsFinished();
    } else {
      this.setState({ victoryMessage: victoryMessages.isDefeat });
    }
  };

  handleClosePopupBlue = () => {
    this.setState({ victoryMessage: undefined });
  };

  handleCardClick = (plusorminus, { column, row }) => {
    const { gameSet } = this.state;
    const columnIndex = `${column}CardsIndex`;
    const rowIndex = `row${row}Index`;
    const index = this.state[columnIndex][rowIndex];

    if (plusorminus === 'plus') {
      if (index === this.props.game[gameSet][column].actors.length - 1) {
        return;
      } else if (index === undefined) {
        this.setState({
          [columnIndex]: {
            ...this.state[columnIndex],
            [rowIndex]: 0,
          },
        });
        return;
      }
      this.setState({
        [columnIndex]: {
          ...this.state[columnIndex],
          [rowIndex]: index + 1,
        },
      });
    } else {
      if (index === 1 || index === 0) {
        return;
      } else if (index === undefined) {
        this.setState({
          [columnIndex]: {
            ...this.state[columnIndex],
            [rowIndex]: this.props.game[gameSet][column].actors.length - 1,
          },
        });
        return;
      }
      this.setState({
        [columnIndex]: {
          ...this.state[columnIndex],
          [rowIndex]: index - 1,
        },
      });
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
    } = this.props;

    const { gameSet, column1NumberOfCards, column3NumberOfCards, victoryMessage } = this.state;

    const column1 = [];
    const column2 = game[gameSet].column2.actors;
    const column3 = [];
    for (let numberOfCards = 0; numberOfCards < column1NumberOfCards; numberOfCards++) {
      column1.push(game[gameSet].column1.actors);
    }
    for (let numberOfCards = 0; numberOfCards < column3NumberOfCards; numberOfCards++) {
      column3.push(game[gameSet].column3.actors);
    }

    return (
      <Fade
        classProps="bloc-card-game-type-3 bloc"
        in={this.props.in}
        scrollIntoView={scrollIntoView}
        margins={this.props.margins}>
        <BlocHeader type="horloge" duration={duration} name={chapter} />
        {title && <span className={`bloc__name ${secondary}`}>{title}</span>}
        {firstDescription && (
          <BlocDescription modulType={modulType} classProps="bloc__second-description" description={firstDescription} />
        )}
        <div className="bloc-card-game-type-3__game game">
          {column1.map((card, ind) => {
            const key = `row${ind}Index`;
            const cardIndex = this.state.column1CardsIndex[key];
            return (
              <div
                key={key}
                className="card column-1"
                style={{
                  gridRow: ind + 1,
                  gridColumn: 1,
                }}>
                <ButtonWithDoubleArrow
                  button={{ name: 'Valider' }}
                  attachedName={{ column: 'column1', row: ind }}
                  onClick={this.handleCardClick}
                  noButton
                />
                {cardIndex >= 0 ? (
                  <CardContentType3
                    cardTitle={card[cardIndex].title}
                    cardSubTitle={card[cardIndex].subTitle}
                    title1={card[cardIndex].headList1}
                    title2={card[cardIndex].headList2}
                    list1={card[cardIndex].list1}
                    list2={card[cardIndex].list2}
                  />
                ) : (
                  <CardContentType3 bigTitle="Tirez la carte" />
                )}
              </div>
            );
          })}
          <ButtonPrimary
            name="valider"
            onClick={this.handleValidate}
            classProps={`button-validate`}
            styleProps={{
              gridRow: 2,
              gridColumn: 2,
            }}
          />
          {victoryMessage && (
            <PopupBlue
              classProps="popup"
              onCloseClick={this.handleClosePopupBlue}
              column={1}
              styleProps={{
                gridRow: 2,
                gridColumn: 2,
              }}>
              <span className="">{victoryMessage}</span>
            </PopupBlue>
          )}
          {column2.map((card, ind) => {
            const key = `column2card${ind}Index`;
            return (
              <div
                key={key}
                className="card column-1"
                style={{
                  gridRow: ind + 1,
                  gridColumn: 2,
                }}>
                <CardContentType3
                  cardTitle={card.title}
                  cardSubTitle={card.subTitle}
                  title1={card.headList1}
                  title2={card.headList2}
                  list1={card.list1}
                  list2={card.list2}
                />
              </div>
            );
          })}
          {column3.map((card, ind) => {
            const key = `row${ind}Index`;
            const cardIndex = this.state.column3CardsIndex[key];
            return (
              <div
                key={key}
                className="card column-1"
                style={{
                  gridRow: ind + 1,
                  gridColumn: 3,
                }}>
                <ButtonWithDoubleArrow
                  button={{ name: 'Valider' }}
                  attachedName={{ column: 'column3', row: ind }}
                  onClick={this.handleCardClick}
                  noButton
                />
                {cardIndex >= 0 ? (
                  <CardContentType3
                    cardTitle={card[cardIndex].title}
                    cardSubTitle={card[cardIndex].subTitle}
                    title1={card[cardIndex].headList1}
                    title2={card[cardIndex].headList2}
                    list1={card[cardIndex].list1}
                    list2={card[cardIndex].list2}
                  />
                ) : (
                  <CardContentType3 bigTitle="Tirez la carte" />
                )}
              </div>
            );
          })}
        </div>
      </Fade>
    );
  }
}

BlocCardGameType3.propTypes = {
  modulType: PropTypes.string.isRequired,
  noChapter: PropTypes.bool,
  chapter: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  firstDescription: PropTypes.shape({ __html: PropTypes.string.isRequired }),
  secondary: PropTypes.string,
  scrollIntoView: PropTypes.bool,
};

BlocCardGameType3.defaultProps = {
  noChapter: false,
  scrollIntoView: false,
  secondary: '',
};

export default BlocCardGameType3;
