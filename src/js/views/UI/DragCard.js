import React from 'react';
import PropTypes from 'prop-types';
import CardContentType1 from './CardContentType1';
// import CardContentType2 from './CardContentType2';
import _ from 'lodash';
// import { GlobalInfosContext } from '../model/react-context/GlobalInfosProvider';

class DragCard extends React.Component {
  state = {
    isDragged: false,
    topWhileBeingDragged: null,
    leftWhileBeingDragged: null
  };

  throttledMouseMove = _.throttle(e => {
    if (!this.state.isDragged) {
      e.preventDefault();
      return;
    } else {
    }
  }, 200);

  handleDragStart = e => {
    const dataToTransfer = `${this.props.content.cardTitle}+++${
      this.props.content.cardSubTitle
    }+++${this.props.endPosition}`;
    e.dataTransfer.setData('drag-card', dataToTransfer);
    e.dataTransfer.effectAllowed = 'copy';
    e.dataTransfer.dropEffect = 'copy';
    this.setState({ isDragged: true });
  };

  handleDrag = e => {
    // this.setState({
    //   topWhileBeingDragged: (e.clientY - startDragTop),
    //   leftWhileBeingDragged: (e.clientY - startDragLeft)
    // })
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

    // onMouseMove={this.handleMouseMove}
    /*onDrag={this.handleDrag}
    style={{
      position: this.state.isDragged && 'fixed',
      backgroundColor: this.state.isDragged && 'blue',
      top: this.state.isDragged && this.state.topWhileBeingDragged,
      left: this.state.isDragged && this.state.leftWhileBeingDragged,
    }}*/
    return (
      <div
        className={`drag-card ${content.isDraggable ? 'is-draggable' : ''}`}
        draggable={`${content.isDraggable}`}
        id={id}
        onDragStart={this.handleDragStart}
        onDragEnd={this.handleDragEnd}
        onDrag={this.handleDrag}
      >
        {type === 'bloc-drag-and-drop-1' && <CardContentType1 {...content} />}
        {/*type === 'bloc-drag-and-drop-2' && (
          <CardContentType2 content={content} />
        )*/}
      </div>
    );
  }
}

DragCard.propTypes = {
  color: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  startPosition: PropTypes.number.isRequired,
  endPosition: PropTypes.number.isRequired
};

DragCard.defaultProps = {};

export default DragCard;
