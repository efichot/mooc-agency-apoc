import React from 'react';
import PropTypes from 'prop-types';
import CardContentType1 from './CardContentType1';
import CardContentType3 from './CardContentType3';
// import CardContentType2 from './CardContentType2';
import _ from 'lodash';
// import { GlobalInfosContext } from '../model/react-context/GlobalInfosProvider';

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
    const dataToTransfer = `${this.props.content.cardTitle}+++${this.props.content.cardSubTitle}+++${
      this.props.endPosition
    }+++${this.props.content.type}+++${this.props.content.column}`;
    e.dataTransfer.setData('drag-card', dataToTransfer);
    e.dataTransfer.effectAllowed = 'copy';
    e.dataTransfer.dropEffect = 'copy';
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
    const { type, content, id, styleProps } = this.props;

    return (
      <div
        className={`drag-card ${content.isDraggable ? 'is-draggable' : ''}`}
        draggable={`${content.isDraggable}`}
        id={id}
        onDragStart={this.handleDragStart}
        onDragEnd={this.handleDragEnd}
        onDrag={this.handleDrag}
        style={{
          ...styleProps,
        }}>
        {type === 'bloc-drag-and-drop-1' && <CardContentType1 {...content} />}
        {type === 'bloc-card-game-type-4' && <CardContentType3 {...content} />}
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
