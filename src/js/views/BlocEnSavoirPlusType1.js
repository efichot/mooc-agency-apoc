import React from 'react';
import PropTypes from 'prop-types';
import BlocHeader from '../views/BlocHeader';
import BlocDescription from './BlocDescription';
import ButtonPrimary from './UI/ButtonPrimary';
import PopupBlue from './UI/PopupBlue';
import arrowDown from '../../assets/img/icons/arrow-down.svg';

export default class BlocEnSavoirPlusType1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideCard: true,
      showCard: 1
    };
  }

  showCard(card) {
    this.setState({ showCard: card.startPosition, hideCard: false });
  }

  hideCards(card) {
    this.setState({ showCard: card.startPosition, hideCard: true });
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
      <div className={`bloc bloc-en-savoir-plus bloc-en-savoir-plus-type-1`}>
        {!noChapter && (
          <BlocHeader type="horloge" duration={duration} name={chapter} />
        )}
        <span className="bloc__name">{title}</span>
        <BlocDescription
          classes="bloc__first-description"
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
            classes="bloc-en-savoir-plus-type-1__cards--to-show"
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
      </div>
    );
  }
}

BlocEnSavoirPlusType1.propTypes = {
  context: PropTypes.object.isRequired
};
