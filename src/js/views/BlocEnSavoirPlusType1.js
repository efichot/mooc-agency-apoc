import React from 'react';
import PropTypes from 'prop-types';

import BlocHeader from '../views/BlocHeader';
import BlocDescription from './BlocDescription';
import ButtonPrimary from './UI/ButtonPrimary';
import PopupBlue from './UI/PopupBlue';
import Fade from '../transitions/Fade';

import arrowDown from '../../assets/img/icons/arrow-down.svg';

class BlocEnSavoirPlusType1 extends React.Component {
  state = {
    hideCard: true,
    showCard: 1
  };

  showCard = card => {
    this.setState({ showCard: card.startPosition, hideCard: false });
  };

  hideCards = card => {
    this.setState({ showCard: card.startPosition, hideCard: true });
  };

  render = () => {
    const {
      modulType,
      noChapter,
      cards,
      duration,
      chapter,
      title,
      firstDescription
    } = this.props;

    return (
      <Fade
        in={this.props.in}
        classProps={`bloc bloc-en-savoir-plus bloc-en-savoir-plus-type-1`}
      >
        {!noChapter && (
          <BlocHeader type="horloge" duration={duration} name={chapter} />
        )}
        <span className="bloc__name">{title}</span>
        <BlocDescription
          modulType={modulType}
          classProps="bloc__first-description"
          description={firstDescription}
        />
        <div className="bloc-en-savoir-plus-type-1__cards">
          <div className="bloc-en-savoir-plus-type-1__cards--to-hover">
            {cards.map((card, index) => {
              return (
                <div
                  key={index}
                  className="button-groupe"
                  onMouseEnter={() => this.showCard(card)}
                  onMouseLeave={() => this.hideCards(card)}
                >
                  <ButtonPrimary color={card.color} name={card.cardTitle} />
                  {card.arrowFollowing && (
                    <div
                      className="arrow-following"
                      style={{ backgroundImage: `url(${arrowDown})` }}
                    />
                  )}
                </div>
              );
            })}
          </div>
          <PopupBlue
            classProps="bloc-en-savoir-plus-type-1__cards--to-show"
            hideCard={this.state.hideCard}
          >
            <span className="card-title">
              {!this.state.hideCard && cards[this.state.showCard - 1].cardTitle}
            </span>
            <span className="card-subtitle">
              {!this.state.hideCard &&
                cards[this.state.showCard - 1].cardSubTitle}
            </span>
            <p className="card-content">
              {!this.state.hideCard &&
                cards[this.state.showCard - 1].cardContent}
            </p>
          </PopupBlue>
        </div>
      </Fade>
    );
  };
}

BlocEnSavoirPlusType1.propTypes = {
  in: PropTypes.bool,

  /***************** DATA ******************/

  modulType: PropTypes.string.isRequired,
  noChapter: PropTypes.bool,
  chapter: PropTypes.string.isRequired,
  duration: PropTypes.number,
  title: PropTypes.string.isRequired,
  firstDescription: PropTypes.shape({ __html: PropTypes.string.isRequired })
    .isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      hoverColor: PropTypes.string.isRequired,
      startPosition: PropTypes.number.isRequired,
      arrowFollowing: PropTypes.bool.isRequired,
      cardTitle: PropTypes.string.isRequired,
      cardContent: PropTypes.string.isRequired,
      cardSubTitle: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

BlocEnSavoirPlusType1.defaultProps = {
  in: false,

  /***************** DATA ******************/

  noChapter: false,
  duration: 0
};

export default BlocEnSavoirPlusType1;
