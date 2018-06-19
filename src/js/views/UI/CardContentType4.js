import React from 'react';
import PropTypes from 'prop-types';
import draggableIcon from '../../../assets/img/icons/button-finger.png';

class CardContentType4 extends React.Component {
  super = {};

  render() {
    const {
      bigBorder,
      bigTitle,
      isDraggable,
      cardTitle,
      content,
      image
    } = this.props;

    return (
      <div
        className={`card-content__type-4 ${bigBorder ? 'big-border' : ''}`}
        style={{
          backgroundImage: image ? `url(${image})` : '',
          display: bigTitle ? 'flex' : 'block'
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
        {content && (
          <div
            className="card-content__type-3--content"
            dangerouslySetInnerHTML={content}
          />
        )}
      </div>
    );
  }
}

CardContentType4.propTypes = {
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

CardContentType4.defaultProps = {
  bigBorder: false,
  /***************** DATA ******************/

  isDraggable: false,
  cardSubTitle: '',
  image: ''
};

export default CardContentType4;
