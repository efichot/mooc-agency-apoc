import React from 'react';
import PropTypes from 'prop-types';

import PopupBlue from './UI/PopupBlue';
import ButtonPrimary from './UI/ButtonPrimary';
import BlocHeader from '../views/BlocHeader';
import BlocDescription from './BlocDescription';
import Fade from '../transitions/Fade';
import victoryMessages from '../model/static/popupBlueMessages';

import button_down_right from '../../assets/img/icons/button-down-right.png';
import button_up_left from '../../assets/img/icons/button-up-left.png';

class BlocUpAndDownType1 extends React.Component {
  state = {
    reset: false,
    victoryMessage: undefined,
    solutions: {},
    positions: {},
    cardCounter: 0,
    gameIsFinished: false,
  };

  handleArrowClick = e => {
    this.setState({ reset: false });
    this.setState({ victoryMessage: undefined });
    this.setState({ gameIsFinished: false });
    if (e.target.dataset.moveRow === 'up') {
      if (this.state.positions[`${e.target.dataset.column}`] === 0) {
        return;
      } else {
        const positionsCopy = { ...this.state.positions };
        positionsCopy[`${e.target.dataset.column}`] = positionsCopy[`${e.target.dataset.column}`] - 1;
        this.setState({ positions: positionsCopy });
      }
    } else {
      if (this.state.positions[`${e.target.dataset.column}`] === this.state.cardCounter - 1) {
        return;
      } else {
        const positionsCopy = { ...this.state.positions };
        positionsCopy[`${e.target.dataset.column}`] = positionsCopy[`${e.target.dataset.column}`] + 1;
        this.setState({ positions: positionsCopy });
      }
    }
  };

  checkAnswers = () => {
    const falseAnswers = Object.keys(this.state.positions).filter(
      index => this.state.positions[`${index}`] !== this.state.solutions[`${index}`] - 1,
    );
    if (falseAnswers.length === 0) {
      this.setState({ victoryMessage: victoryMessages.isVictory });
      this.setState({ gameIsFinished: true });
      this.props.gameIsFinished(this.state.gameIsFinished);
      return;
    } else {
      this.setState({
        victoryMessage: victoryMessages.isDefeat,
      });
      return;
    }
  };

  reset() {
    this.setState({ reset: true });
    this.setState({ victoryMessage: undefined });
    this.setState({ gameIsFinished: false });
  }

  componentWillMount() {
    const solutions = {};
    const positions = {};
    let cardCounter = 0;
    this.props.cards.forEach(card => {
      if (card.endPosition) {
        solutions[`${card.startPosition}`] = card.endPosition;
        positions[`${card.startPosition}`] = this.props.cards.length - 1;
        cardCounter++;
      }
    });

    this.setState({ solutions, positions, cardCounter });
  }

  render() {
    const { modulType, noChapter, cards, duration, chapter, name, firstDescription, scrollIntoView } = this.props;

    return (
      <Fade
        classProps={`bloc bloc-up-and-down-type-1`}
        in={this.props.in}
        scrollIntoView={scrollIntoView}
        margins={this.props.margins}>
        {!noChapter && <BlocHeader type="horloge" duration={duration} name={chapter} />}
        <span className="bloc__name">{name}</span>
        <BlocDescription modulType={modulType} classProps="bloc__first-description" description={firstDescription} />
        <span className="legend legend-high">Plus de performance</span>
        <div
          className="bloc-up-and-down-type-1__grid game"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${cards.length}, 1fr 5px)`,
          }}>
          {cards.map((card, index) => {
            return (
              <React.Fragment key={index}>
                {cards.map((onlyForIndex, indexDrop) => {
                  if (indexDrop + 1 < cards.length) {
                    return (
                      <div
                        key={indexDrop}
                        className={`bloc-up-and-down-type-1__button${
                          indexDrop === this.state.positions[index + 1] ? ' active' : ''
                        }${this.state.gameIsFinished ? ' finished' : ''}`}
                        style={{
                          gridColumn: `${2 * index + 1}`,
                          gridRow: `${2 * indexDrop + 1}`,
                        }}>
                        {indexDrop === this.state.positions[index + 1] && <span>{card.content.cardTitle}</span>}
                      </div>
                    );
                  } else {
                    return (
                      <React.Fragment key={indexDrop}>
                        <div
                          className={`bloc-up-and-down-type-1__button ${
                            indexDrop === this.state.positions[index + 1] ? 'active' : ''
                          }${this.state.gameIsFinished ? ' finished' : ''}`}
                          style={{
                            gridColumn: `${2 * index + 1}`,
                            gridRow: `${2 * indexDrop + 1}`,
                          }}>
                          {indexDrop === this.state.positions[index + 1] && <span>{card.content.cardTitle}</span>}
                        </div>
                        <div
                          className="bloc-up-and-down-type-1__arrows"
                          key={indexDrop + 1}
                          style={{
                            gridColumn: `${2 * index + 1}`,
                            gridRow: `${2 * (indexDrop + 1) + 1}`,
                          }}>
                          <div
                            data-column={index + 1}
                            data-move-row="up"
                            className="bloc-up-and-down-type-1__arrows--arrow-left-up"
                            style={{
                              backgroundImage: `url(${button_up_left})`,
                            }}
                            onClick={this.handleArrowClick}
                          />
                          <div
                            data-column={index + 1}
                            data-move-row="down"
                            className="bloc-up-and-down-type-1__arrows--arrow-right-down"
                            style={{
                              backgroundImage: `url(${button_down_right})`,
                            }}
                            onClick={this.handleArrowClick}
                          />
                        </div>
                      </React.Fragment>
                    );
                  }
                })}
              </React.Fragment>
            );
          })}
        </div>
        <div className="legend legend__low">
          <div className="legend__low--left">Moins</div>
          <div className="legend__low--right">Plus de risque</div>
        </div>
        <div className="bloc-up-and-down-type-1__buttons">
          <ButtonPrimary minWidth name="Recommencer" onClick={this.reset} />
          {this.state.victoryMessage && (
            <PopupBlue>
              <span className="">{this.state.victoryMessage}</span>
            </PopupBlue>
          )}
          <ButtonPrimary minWidth name="Valider" onClick={this.checkAnswers} />
        </div>
      </Fade>
    );
  }
}

BlocUpAndDownType1.propTypes = {
  in: PropTypes.bool,
  gameIsFinished: PropTypes.func.isRequired,

  /***************** DATA ******************/

  modulType: PropTypes.string.isRequired,
  firstDescription: PropTypes.shape({ __html: PropTypes.string.isRequired }),
  noChapter: PropTypes.bool,
  chapter: PropTypes.string.isRequired,
  duration: PropTypes.number,
  name: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      startPosition: PropTypes.number.isRequired,
      endPosition: PropTypes.number.isRequired,
      content: PropTypes.shape({
        isDraggable: PropTypes.bool.isRequired,
        cardTitle: PropTypes.string.isRequired,
        cardSubTitle: PropTypes.string,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};

BlocUpAndDownType1.defaultProps = {
  in: false,
  scrollIntoView: false,
  noChapter: false,
  duration: 0,
};

export default BlocUpAndDownType1;
