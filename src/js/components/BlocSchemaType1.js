import React from 'react';
import PropTypes from 'prop-types';
import BlocDescription from './BlocDescription';

class BlocSchemaType1 extends React.Component {
  state = {};

  render() {
    const { modulType, title, firstDescription, grid, column1, column3, column5 } = this.props;

    return (
      <div className="bloc-schema-type-1 game">
        {title && <span className="bloc__name">{title}</span>}
        {firstDescription && (
          <BlocDescription modulType={modulType} classProps="bloc__second-description" description={firstDescription} />
        )}
        <div
          className="bloc-schema-type-1__game game"
          style={{
            ...grid, //FIXME
          }}>
          {/*COLUMN 1*/}
          <div
            className="column1"
            style={{
              ...column1.style,
            }}>
            {column1.cards.map((card, ind) => (
              <div
                key={ind}
                className={card.className}
                style={{
                  ...card.style,
                }}>
                {card.content}
              </div>
            ))}
          </div>
          {/*COLUMN 2*/}
          <div className="arrow-column2" />
          {/*COLUMN 3*/}
          <div
            className="column3"
            style={{
              ...column3.style,
            }}>
            {column3.cards.map((card, ind) => (
              <div
                key={ind}
                className={card.className}
                style={{
                  ...card.style,
                }}>
                {card.content}
              </div>
            ))}
          </div>
          {/*COLUMN 4*/}
          <div className="arrow-column4" />
          {/*COLUMN 5*/}
          <div
            className="column5"
            style={{
              ...column5.style,
            }}>
            {column5.cards.map((card, ind) => (
              <div
                key={ind}
                className={card.className}
                style={{
                  ...card.style,
                }}>
                {card.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

BlocSchemaType1.propTypes = {
  modulType: PropTypes.string.isRequired,
  noChapter: PropTypes.bool,
  chapter: PropTypes.string,
  title: PropTypes.string.isRequired,
  firstDescription: PropTypes.shape({ __html: PropTypes.string.isRequired }),
  scrollIntoView: PropTypes.bool,
};

BlocSchemaType1.defaultProps = {
  noChapter: false,
  chapter: '',
  scrollIntoView: false,
};

export default BlocSchemaType1;
