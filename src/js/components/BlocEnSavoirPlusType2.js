import React from 'react';
import PropTypes from 'prop-types';

import BlocHeader from '../components/BlocHeader';
import BlocSpacer from '../components/BlocSpacer';
import BlocDescription from './BlocDescription';
import ButtonPrimary from './UI/ButtonPrimary';
import PopupBlue from './UI/PopupBlue';
import PopupBlueInnerHtml from './UI/PopupBlueInnerHtml';
import Fade from '../transitions/Fade';
import victoryMessages from '../model/static/popupBlueMessages';

import arrowDown from '../../assets/img/icons/arrow-down.png';

class BlocEnSavoirPlusType2 extends React.Component {
  state = {
    hideCard: true,
    showCard: 1,
    buttonActive: false,
    buttonAnswer: '',
    gameIsFinished: false,
    victoryMessage: undefined,
    correctAnswer: '',
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.answer !== '') {
      return {
        ...prevState,
        correctAnswer: nextProps.answer,
      };
    }
    return prevState;
  }

  showCard = card => {
    this.setState({ showCard: card.startPosition, hideCard: false });
  };

  hideCards = card => {
    this.setState({ showCard: card.startPosition, hideCard: true });
  };

  handleClick = answer => {
    this.setState({
      buttonAnswer: answer,
      victoryMessage: undefined,
      gameIsFinished: false,
    });
  };

  handleCloseClick = () => {
    if (this.state.victoryMessage === victoryMessages.isVictory) {
      this.props.gameIsFinished(this.props.modulType);
      this.setState({
        victoryMessage: undefined,
      });
    } else {
      this.setState({
        victoryMessage: undefined,
        gameIsFinished: false,
      });
    }
  };

  handleValidate = e => {
    if (this.state.buttonAnswer === this.state.correctAnswer) {
      this.setState({
        victoryMessage: victoryMessages.isVictory,
        gameIsFinished: true,
      });
    } else {
      this.setState({
        victoryMessage: victoryMessages.isDefeat,
      });
    }
  };

  render = () => {
    const {
      modulType,
      noChapter,
      cards,
      duration,
      chapter,
      title,
      firstDescription,
      secondDescription,
      scrollIntoView,
    } = this.props;

    const { buttonAnswer, gameIsFinished, hideCard, showCard, victoryMessage } = this.state;

    return (
      <Fade
        in={this.props.in}
        classProps={`bloc bloc-en-savoir-plus bloc-en-savoir-plus-type-2`}
        scrollIntoView={scrollIntoView}
        margins={this.props.margins}>
        {!noChapter && <BlocHeader type="horloge" duration={duration} name={chapter} />}
        <span className="bloc__name">{title}</span>
        <BlocDescription modulType={modulType} classProps="bloc__first-description" description={firstDescription} />
        <div className="bloc-en-savoir-plus-type-2__cards game" style={{ height: 326 + 'px' }}>
          <div className="bloc-en-savoir-plus-type-2__cards--to-hover">
            {cards.map((card, index) => {
              return (
                <div
                  key={index}
                  className="button-groupe"
                  onMouseEnter={() => this.showCard(card)}
                  onMouseLeave={() => this.hideCards(card)}>
                  <ButtonPrimary
                    color={card.color}
                    name={card.cardTitle}
                    classProps={`button-QCM-type-1${buttonAnswer === card.cardTitle ? ' active' : ''}${
                      gameIsFinished ? ' finished' : ''
                    }`}
                    onClick={this.handleClick}
                    answer={card.cardTitle}
                  />
                  {card.arrowFollowing && (
                    <div className="arrow-following" style={{ backgroundImage: `url(${arrowDown})` }} />
                  )}
                </div>
              );
            })}
          </div>
          <PopupBlueInnerHtml
            classProps="bloc-en-savoir-plus-type-2__cards--to-show"
            hidePopup={hideCard}
            description={cards[showCard - 1].cardContent}
            noCross
          />
        </div>
        <div className="bloc-en-savoir-plus-type-2__validate-victory">
          {victoryMessage && (
            <PopupBlue onCloseClick={this.handleCloseClick}>
              <span className="bloc-en-savoir-plus-type-2__victory-message">{victoryMessage}</span>
            </PopupBlue>
          )}

          <ButtonPrimary
            minWidth
            name="valider"
            onClick={this.handleValidate}
            classProps={`bloc-en-savoir-plus-type-2__validate`}
          />
        </div>
        <BlocSpacer />
        <span className="bloc__name">Synthèse</span>
        <BlocDescription modulType={modulType} classProps="bloc__second-description" description={secondDescription} />
      </Fade>
    );
  };
}

BlocEnSavoirPlusType2.propTypes = {
  in: PropTypes.bool,

  /***************** DATA ******************/

  answer: PropTypes.string,
  modulType: PropTypes.string.isRequired,
  noChapter: PropTypes.bool,
  chapter: PropTypes.string,
  duration: PropTypes.number,
  title: PropTypes.string.isRequired,
  firstDescription: PropTypes.shape({ __html: PropTypes.string.isRequired }).isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      hoverColor: PropTypes.string.isRequired,
      startPosition: PropTypes.number.isRequired,
      arrowFollowing: PropTypes.bool.isRequired,
      cardTitle: PropTypes.string.isRequired,
      cardContent: PropTypes.shape({ __html: PropTypes.string.isRequired }),
      cardSubTitle: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

BlocEnSavoirPlusType2.defaultProps = {
  in: false,
  scrollIntoView: false,
  answer: '',
  /***************** DATA ******************/

  noChapter: false,
  duration: 0,
  chapter: '',
};

export default BlocEnSavoirPlusType2;
