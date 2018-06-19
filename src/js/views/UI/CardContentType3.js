import React from 'react';
import PropTypes from 'prop-types';
import draggableIcon from '../../../assets/img/icons/button-finger.png';

class CardContentType3 extends React.Component {
  super = {};

  render() {
    const {
      bigBorder,
      bigTitle,
      isDraggable,
      cardTitle,
      cardSubTitle,
      title1,
      title2,
      image,
      list,
      list1,
      list2
    } = this.props;

    return (
      <div
        className={`card-content__type-3 ${bigBorder ? 'big-border' : ''}`}
        style={{
          backgroundImage: image ? `url(${image})` : '',
          display: bigTitle ? 'flex' : 'block',
          cursor: bigTitle ? 'pointer' : 'initial'
        }}
      >
        {isDraggable && (
          <div
            className="card-content__type-3--drag-image"
            style={{ backgroundImage: `url(${draggableIcon})` }}
          />
        )}
        {cardTitle && (
          <div className="card-content__type-3--title">{cardTitle}</div>
        )}
        {bigTitle && (
          <div className="card-content__type-3--big-title">{bigTitle}</div>
        )}
        {cardSubTitle && (
          <div className="card-content__type-3--subtitle">{cardSubTitle}</div>
        )}
        {list && (
          <ul className="card-content__type-3--list">
            {list.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={item} />
            ))}
          </ul>
        )}
        {title1 && (
          <div className="card-content__type-3--title-lower">{title1}</div>
        )}
        {list1 && (
          <ul className="card-content__type-3--list">
            {list1.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={item} />
            ))}
          </ul>
        )}
        {title2 && (
          <div className="card-content__type-3--title-lower">{title2}</div>
        )}
        {list2 && (
          <ul className="card-content__type-3--list">
            {list2.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={item} />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

CardContentType3.propTypes = {
  bigBorder: PropTypes.bool,
  /***************** DATA ******************/

  isDraggable: PropTypes.bool,
  cardTitle: PropTypes.string,
  bigTitle: PropTypes.string,
  cardSubTitle: PropTypes.string,
  image: PropTypes.string,
  list: PropTypes.array,
  title1: PropTypes.string,
  title2: PropTypes.string,
  list1: PropTypes.array,
  list2: PropTypes.array
};

CardContentType3.defaultProps = {
  bigBorder: false,
  /***************** DATA ******************/

  isDraggable: false,
  cardSubTitle: '',
  image: ''
};

export default CardContentType3;
