import React from 'react';
import PropTypes from 'prop-types';

const contains = (list, value) => {
  for (let i = 0; i < list.length; ++i) {
    if (list[i] === value) return true;
  }
  return false;
};

class DropCardForGame extends React.Component {
  state = {
    answer: null,
    isDraggingOver: null,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.reset) {
      return {
        answer: null,
      };
    }
    return prevState;
  }

  handleDragOver = event => {
    event.persist();
    this.setState({ isDraggingOver: true });
    const isDragCard =
      contains(event.dataTransfer.types, 'text') ||
      contains(event.dataTransfer.types, 'Text') ||
      contains(event.dataTransfer.types, 'text/plain');
    const isEndDropCard = this.props.startOrEnd === 'end';
    if (isDragCard && isEndDropCard) {
      event.preventDefault();
    }
  };

  handleDragExit = e => {
    this.setState({ isDraggingOver: false });
  };

  handleDrop = async event => {
    this.setState({ isDraggingOver: false });
    const data = event.dataTransfer.getData('text');
    const dropType = this.props.type;
    const dragType = data.split('+++')[3];
    const answer = data.split('+++')[0];
    const column = data.split('+++')[4];
    if (dropType === dragType) {
      this.setState({ answer });
    }
    this.props.onDragCard({ dropType, dragType, answer, column });
  };

  render() {
    const { startOrEnd, type } = this.props;

    const { isDraggingOver, answer } = this.state;

    return (
      <div
        className={`drop-card ${isDraggingOver ? 'dragging-over' : ''}`}
        onDragOver={this.handleDragOver}
        onDragLeave={this.handleDragExit}
        onDrop={this.handleDrop}>
        <span className="drop-card__type">{type}</span>
        <span className="drop-card__answer">{startOrEnd === 'end' && answer && answer !== 'undefined' && answer}</span>
      </div>
    );
  }
}

DropCardForGame.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  reset: PropTypes.bool,
  startOrEnd: PropTypes.string,
  onDragCard: PropTypes.func.isRequired,
};

DropCardForGame.defaultProps = {
  id: '',
  reset: false,
  startOrEnd: '',
};

export default DropCardForGame;
