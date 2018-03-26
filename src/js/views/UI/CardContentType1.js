import React from 'react';
//import PropTypes from 'prop-types';
import draggableIcon from '../../../assets/img/icons/button-finger.svg';

export default class CardContentType1 extends React.Component {
  //constructor(props) {
  //super(props);
  //this.state = {};
  //}

  render() {
    const {
      bigBorder,
      isDraggable,
      cardTitle,
      cardSubTitle,
      image,
      list,
      legend
    } = this.props.content;

    return (
      <div className={`card-content__type-1 ${bigBorder ? 'big-border' : ''}`}>
        {isDraggable && (
          <div
            className="card-content__type-1--drag-image"
            style={{ backgroundImage: `url(${draggableIcon})` }}
          />
        )}
        <div className="card-content__type-1--title">{cardTitle}</div>
        {image && (
          <div
            className="card-content__type-1--image"
            style={{ backgroundImage: `url(${image})` }}
          />
        )}
        {cardSubTitle && (
          <div className="card-content__type-1--subtitle">{cardSubTitle}</div>
        )}
        {list && (
          <ul className="card-content__type-1--list">
            {list.map(item => <li key={item}>{item}</li>)}
          </ul>
        )}
        {legend && (
          <ul className="card-content__type-1--legend">
            {legend.map(item => {
              return (
                <li key={item.legendText}>
                  <div
                    className="legend-square"
                    style={{ backgroundColor: item.legendColor }}
                  />
                  <div className="legend-text">{item.legendText}</div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

CardContentType1.propTypes = {};
