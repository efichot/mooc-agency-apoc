import React from 'react';
/*import PropTypes from 'prop-types';*/

import BlocHeader from './BlocHeader';
import BlocDescription from './BlocDescription';
import CardContentType4 from './UI/CardContentType4';
import Fade from '../transitions/Fade';

class BlocCardsType1 extends React.Component {
  state = {
    selectedRow: null,
  };

  handleCardClick = rowIndex => {
    console.log('has been called');
    const selectedRow = {
      selectedRow: rowIndex,
    };
    this.setState(selectedRow);
    this.props.selectedRow(selectedRow);
  };

  render() {
    const {
      modulType,
      noChapter,
      chapter,
      title,
      duration,
      firstDescription,
      secondary,
      cards,
      scrollIntoView,
    } = this.props;

    const { selectedRow } = this.state;

    return (
      <Fade
        classProps={`bloc-cards-type-1`}
        in={this.props.in}
        scrollIntoView={scrollIntoView}
        margins={this.props.margins}>
        {!noChapter && <BlocHeader type="horloge" duration={duration} name={chapter} />}
        {title && <span className={`bloc__name ${secondary}`}>{title}</span>}
        {firstDescription && (
          <BlocDescription modulType={modulType} classProps="bloc__second-description" description={firstDescription} />
        )}
        <div className="bloc-cards-type-1__cards game">
          {cards.map((cardset, rowIndex) =>
            cardset.map((card, colIndex) => (
              <div
                key={colIndex}
                style={{ gridRow: rowIndex + 1, gridColumn: colIndex + 1 }}
                onClick={() => this.handleCardClick(rowIndex)}
                data-index={rowIndex}>
                <CardContentType4 cardTitle={card.title} content={card.content} bigBorder={selectedRow === rowIndex} />
              </div>
            )),
          )}
        </div>
      </Fade>
    );
  }
}

BlocCardsType1.propTypes = {};

BlocCardsType1.defaultProps = {};

export default BlocCardsType1;
