import React from 'react';
/*import PropTypes from 'prop-types';*/

import BlocHeader from './BlocHeader';
import BlocDescription from './BlocDescription';
import CardContentType4 from './UI/CardContentType4';
import Fade from '../transitions/Fade';

class BlocCardsType1 extends React.Component {
  state = {
    selectedRow: null
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
      cards
    } = this.props;

    const { selectedRow } = this.state;

    return (
      <Fade classProps={`bloc-cards-type-1`} in={this.props.in}>
        {!noChapter && (
          <BlocHeader type="horloge" duration={duration} name={chapter} />
        )}
        {title && <span className={`bloc__name ${secondary}`}>{title}</span>}
        {firstDescription && (
          <BlocDescription
            modulType={modulType}
            classProps="bloc__second-description"
            description={firstDescription}
          />
        )}
        <div className="bloc-cards-type-1__cards">
          {cards.map((cardset, rowIndex) =>
            cardset.map((card, colIndex) => (
              <div
                key={colIndex}
                style={{ gridRow: rowIndex + 1, gridColumn: colIndex + 1 }}
                onClick={() => {
                  this.setState({ selectedRow: rowIndex });
                  this.props.selectedRow(rowIndex);
                }}
              >
                <CardContentType4
                  cardTitle={card.title}
                  content={card.content}
                  bigBorder={selectedRow === rowIndex}
                />
              </div>
            ))
          )}
        </div>
      </Fade>
    );
  }
}

BlocCardsType1.propTypes = {};

BlocCardsType1.defaultProps = {};

export default BlocCardsType1;
