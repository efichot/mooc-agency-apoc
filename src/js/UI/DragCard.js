import React from 'react';
import PropTypes from 'prop-types';
import CardContentType1 from './CardContentType1';
import _ from 'lodash';
// import { GlobalInfosContext } from '../model/react-context/GlobalInfosProvider';

export default class DragCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDragged: false,
      topWhileBeingDragged: null,
      leftWhileBeingDragged: null
    };
    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDragEnd = this.handleDragEnd.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this._throttledMouseMove = _.throttle(
      this._throttledMouseMove.bind(this),
      200
    );
  }

  _throttledMouseMove(e) {
    if (!this.state.isDragged) {
      e.preventDefault();
      return;
    } else {
    }
  }

  handleDragStart(e) {
    const dataToTransfer = `${this.props.content.cardTitle}+++${
      this.props.content.cardSubTitle
    }+++${this.props.endPosition}`;
    e.dataTransfer.setData('drag-card', dataToTransfer);
    e.dataTransfer.effectAllowed = 'copy';
    e.dataTransfer.dropEffect = 'copy';
    this.setState({ isDragged: true });
  }

  handleDrag(e) {
    // this.setState({
    //   topWhileBeingDragged: (e.clientY - startDragTop),
    //   leftWhileBeingDragged: (e.clientY - startDragLeft)
    // })
  }

  handleDragEnd(e) {
    this.setState({ isDragged: false });
  }

  handleMouseMove(e) {
    e.persist();
    this._throttledMouseMove(e);
  }

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
        className={`drag-card`}
        draggable={`${content.isDraggable}`}
        id={id}
        onDragStart={this.handleDragStart}
        onDragEnd={this.handleDragEnd}
        onDrag={this.handleDrag}
      >
        {type === 'bloc-drag-and-drop-1' && (
          <CardContentType1 content={content} />
        )}
      </div>
    );
  }
}

DragCard.propTypes = {
  color: PropTypes.string,
  id: PropTypes.string
};
