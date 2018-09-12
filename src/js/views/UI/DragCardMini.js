import React from 'react';
import PropTypes from 'prop-types';
import CardContentType2 from './CardContentType2';
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
    const dataToTransfer = `${this.props.content.name}`;
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
    const { type, content, id } = this.props;

    return (
      <div
        className={`drag-card ${content.isDraggable ? 'is-draggable' : ''}`}
        draggable={`${content.isDraggable}`}
        id={id}
        onDragStart={this.handleDragStart}
        onDragEnd={this.handleDragEnd}
        onDrag={this.handleDrag}>
        {type === 'bloc-drag-and-drop-2' && <CardContentType2 name={content.name} pieData={content.pieData} />}
      </div>
    );
  }
}

DragCard.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  startPosition: PropTypes.number.isRequired,
  endPosition: PropTypes.shape({
    row: PropTypes.number.isRequired,
    column: PropTypes.number.isRequired,
  }).isRequired,
};

DragCard.defaultProps = {
  endPosition: undefined,
};

export default DragCard;
