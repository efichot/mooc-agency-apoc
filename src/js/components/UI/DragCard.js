import React from 'react';
import PropTypes from 'prop-types';
import CardContentType1 from './CardContentType1';
import CardContentType3 from './CardContentType3';
// import CardContentType2 from './CardContentType2';
import _ from 'lodash';
// import { DataContext } from '../model/DataProvider';

class DragCard extends React.Component {
  state = {
    isDragged: false,
    topWhileBeingDragged: null,
    leftWhileBeingDragged: null,
  };

  throttledMouseMove = _.throttle(e => {
    if (!this.state.isDragged) {
      e.preventDefault();
      return;
    } else {
    }
  }, 200);

  handleDragStart = e => {
    const { content: { cardTitle, cardSubTitle, type, column }, endPosition, startPosition } = this.props;
    const dataToTransfer = `${cardTitle}+++${cardSubTitle}+++${endPosition}+++${type}+++${column}+++${startPosition}`;
    e.dataTransfer.setData('text', dataToTransfer);
    e.dataTransfer.effectAllowed = 'copy';
    // e.dataTransfer.dropEffect = 'copy';
    this.setState({ isDragged: true });
  };

  handleDragEnd = e => {
    this.setState({ isDragged: false });
  };

  handleMouseMove = e => {
    e.persist();
    this._throttledMouseMove(e);
  };

  render() {
    const { color, type, content, id, styleProps, classProps } = this.props;

    return (
      <div
        className={`drag-card ${classProps} ${content.isDraggable ? 'is-draggable' : ''}`}
        draggable={`${content.isDraggable}`}
        id={id}
        onDragStart={this.handleDragStart}
        onDragEnd={this.handleDragEnd}
        onDrag={this.handleDrag}
        style={{
          ...styleProps,
        }}>
        {type === 'bloc-drag-and-drop-1' && <CardContentType1 {...content} bgColor={color} />}
        {type === 'bloc-card-game-type-4' && <CardContentType3 {...content} bgColor={color} />}
      </div>
    );
  }
}

DragCard.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  endPosition: PropTypes.number,
};

DragCard.defaultProps = {
  endPosition: undefined,
};

export default DragCard;
