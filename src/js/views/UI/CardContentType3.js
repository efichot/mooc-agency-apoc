import React from 'react';
import PropTypes from 'prop-types';
import draggableIcon from '../../../assets/img/icons/button-finger.png';

class CardContentType3 extends React.Component {
  state = {};

  handleDragStart = e => {
    const dataToTransfer = `${this.props.content.cardTitle}+++${this.props.content.cardSubTitle}+++${
      this.props.endPosition
    }`;
    e.dataTransfer.setData('drag-card', dataToTransfer);
    e.dataTransfer.effectAllowed = 'copy';
    e.dataTransfer.dropEffect = 'copy';
    this.setState({ isDragged: true });
  };

  render() {
    const {
      bigBorder,
      questionMark,
      bigTitle,
      isDraggable,
      cardTitle,
      cardSubTitle,
      title1,
      title2,
      image,
      list,
      list1,
      list2,
      help,
    } = this.props;

    return (
      <div
        className={`card-content__type-3 ${bigBorder ? 'big-border' : ''}`}
        draggable={isDraggable}
        style={{
          backgroundImage: image ? `url(${image})` : '',
          display: bigTitle || questionMark ? 'flex' : 'block',
          cursor: bigTitle ? 'pointer' : 'initial',
          fontSize: questionMark && 130,
          paddingTop: questionMark && 60,
        }}>
        {questionMark && <span>?</span>}
        {isDraggable && (
          <div className="card-content__type-3--drag-image" style={{ backgroundImage: `url(${draggableIcon})` }} />
        )}
        {cardTitle && <div className="card-content__type-3--title">{cardTitle}</div>}
        {bigTitle && <div className="card-content__type-3--big-title">{bigTitle}</div>}
        {cardSubTitle && <div className="card-content__type-3--subtitle">{cardSubTitle}</div>}
        {list && (
          <ul className="card-content__type-3--list">
            {list.map((item, i) => <li key={i} dangerouslySetInnerHTML={item} />)}
          </ul>
        )}
        {title1 && <div className="card-content__type-3--title-lower">{title1}</div>}
        {list1 && (
          <ul className="card-content__type-3--list">
            {list1.map((item, i) => <li key={i} dangerouslySetInnerHTML={item} />)}
          </ul>
        )}
        {title2 && <div className="card-content__type-3--title-lower">{title2}</div>}
        {help && <div className="card-content__type-3--help">{help}</div>}
        {list2 && (
          <ul className="card-content__type-3--list">
            {list2.map((item, i) => <li key={i} dangerouslySetInnerHTML={item} />)}
          </ul>
        )}
      </div>
    );
  }
}

CardContentType3.propTypes = {
  bigBorder: PropTypes.bool,
  bigTitle: PropTypes.string,
  questionMark: PropTypes.bool,
  /***************** DATA ******************/

  isDraggable: PropTypes.bool,
  cardTitle: PropTypes.string,
  cardSubTitle: PropTypes.string,
  image: PropTypes.string,
  list: PropTypes.array,
  title1: PropTypes.string,
  title2: PropTypes.string,
  list1: PropTypes.array,
  list2: PropTypes.array,
  help: PropTypes.string,
};

CardContentType3.defaultProps = {
  bigBorder: false,
  questionMark: false,
  bigTitle: undefined,
  /***************** DATA ******************/

  isDraggable: false,
  cardSubTitle: '',
  image: '',
};

export default CardContentType3;
