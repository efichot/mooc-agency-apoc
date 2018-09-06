import React from 'react';
import PropTypes from 'prop-types';

import BlocHeader from '../views/BlocHeader';
import BlocDescription from './BlocDescription';
import ButtonPrimary from './UI/ButtonPrimary';
import PopupBlue from './UI/PopupBlue';
import Fade from '../transitions/Fade';

import arrowDown from '../../assets/img/icons/arrow-down.png';
import arrowRight from '../../assets/img/icons/arrow-right.png';

class BlocEnSavoirPlusType3 extends React.Component {
  state = {
    hideCard: true,
    cardNumberShown: 1,
  };

  cardNumberShown = card => {
    this.setState({ cardNumberShown: card.index, hideCard: false });
  };

  hideCards = card => {
    this.setState({ cardNumberShown: card.index, hideCard: true });
  };

  render = () => {
    const {
      modulType,
      noChapter,
      cards,
      duration,
      grid,
      chapter,
      title,
      firstDescription,
      scrollIntoView,
      module,
    } = this.props;

    const { hideCard, cardNumberShown } = this.state;

    return (
      <Fade
        in={this.props.in}
        classProps={`bloc bloc-en-savoir-plus bloc-en-savoir-plus-type-3 ${module}`}
        scrollIntoView={scrollIntoView}
        margins={this.props.margins}>
        {!noChapter && <BlocHeader type="horloge" duration={duration} name={chapter} />}
        <span className="bloc__name">{title}</span>
        <BlocDescription modulType={modulType} classProps="bloc__first-description" description={firstDescription} />
        <div
          className="bloc-en-savoir-plus-type-3__cards game"
          style={{
            gridTemplateColumns: `repeat(${2 * grid.columns}, 1fr)`, //FIXME
          }}>
          <React.Fragment>
            {cards.map((card, index) => {
              const hover = cardNumberShown === card.index && !hideCard;
              return (
                <React.Fragment key={index}>
                  <div
                    className={`button-groupe grid-row-start-${card.position.row} grid-column-start-${card.position
                      .column *
                      2 -
                      1}`}
                    onMouseEnter={() => this.cardNumberShown(card)}
                    onMouseLeave={() => this.hideCards(card)}
                    style={{
                      // gridRow: card.position.row,
                      // gridColumn: card.position.column * 2 - 1,
                      width: card.width,
                    }}>
                    <ButtonPrimary color={hover ? card.hoverColor : card.color} name={card.cardTitle} />
                    {card.arrowFollowing && (
                      <div className="arrow-following" style={{ backgroundImage: `url(${arrowDown})` }} />
                    )}
                  </div>
                  {card.arrowRight && (
                    <div
                      className={`arrow-right grid-row-start-${card.position.row} grid-column-start-${card.position
                        .column * 2}`}
                      style={{
                        // gridRow: card.position.row,
                        // gridColumn: card.position.column * 2,
                        backgroundImage: `url(${arrowRight})`,
                      }}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </React.Fragment>
          <PopupBlue
            classProps="bloc-en-savoir-plus-type-3__cards--to-show"
            hidePopup={hideCard}
            styleProps={{
              position: 'absolute',
              bottom: 30,
              right: 60,
            }}>
            <span className="card-title">{!hideCard && cards[cardNumberShown - 1].cardTitle}</span>
            <span className="card-subtitle">{!hideCard && cards[cardNumberShown - 1].cardSubTitle}</span>
            {!hideCard &&
              (cards[cardNumberShown - 1].cardContent.__html ? (
                <p className="card-content" dangerouslySetInnerHTML={cards[cardNumberShown - 1].cardContent} />
              ) : (
                <p className="card-content">{cards[cardNumberShown - 1].cardContent}</p>
              ))}
          </PopupBlue>
        </div>
      </Fade>
    );
  };
}

BlocEnSavoirPlusType3.propTypes = {
  in: PropTypes.bool,

  /***************** DATA ******************/

  modulType: PropTypes.string.isRequired,
  module: PropTypes.string,
  noChapter: PropTypes.bool,
  chapter: PropTypes.string.isRequired,
  duration: PropTypes.number,
  title: PropTypes.string.isRequired,
  grid: PropTypes.shape({
    rows: PropTypes.number.isRequired,
    columns: PropTypes.number.isRequired,
  }),
  firstDescription: PropTypes.shape({ __html: PropTypes.string.isRequired }),
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      hoverColor: PropTypes.string.isRequired,
      position: PropTypes.shape({
        row: PropTypes.number.isRequired,
        column: PropTypes.number.isRequired,
      }).isRequired,
      arrowFollowing: PropTypes.bool.isRequired,
      arrowRight: PropTypes.bool.isRequired,
      cardTitle: PropTypes.string.isRequired,
      cardContent: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.shape({ __html: PropTypes.string.isRequired }),
      ]).isRequired,
      cardSubTitle: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

BlocEnSavoirPlusType3.defaultProps = {
  in: false,
  module: '',

  /***************** DATA ******************/
  firstDescription: {
    __html: ``,
  },
  noChapter: false,
  duration: 0,
};

export default BlocEnSavoirPlusType3;
