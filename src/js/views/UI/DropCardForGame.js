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

  handleDragOver = e => {
    e.persist();
    this.setState({ isDraggingOver: true });
    const isDragCard =
      contains(e.dataTransfer.types, 'text') ||
      contains(e.dataTransfer.types, 'Text') ||
      contains(e.dataTransfer.types, 'text/plain');
    const isEndDropCard = this.props.startOrEnd === 'end';
    if (isDragCard && isEndDropCard) {
      e.preventDefault();
    }
  };

  handleDragExit = e => {
    this.setState({ isDraggingOver: false });
  };

  handleDrop = async e => {
    this.setState({ isDraggingOver: false });
    const data = e.dataTransfer.getData('text');
    const dropType = this.props.type;
    const dragType = data.split('+++')[3];
    const answer = data.split('+++')[0];
    const column = data.split('+++')[4];
    if (dropType === dragType) {
      this.setState({ answer });
    }
    this.props.onDragCard({ dropType, dragType, answer, column });
    e.preventDefault(); //pre Firefox to load an inexisting URL
  };

  render() {
    const { startOrEnd, type, classProps } = this.props;

    const { isDraggingOver, answer } = this.state;

    return (
      <div
        className={`drop-card ${classProps} ${isDraggingOver ? 'dragging-over' : ''}`}
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
  classProps: PropTypes.string,
  type: PropTypes.string.isRequired,
  reset: PropTypes.bool,
  startOrEnd: PropTypes.string,
  onDragCard: PropTypes.func.isRequired,
};

DropCardForGame.defaultProps = {
  id: '',
  classProps: '',
  reset: false,
  startOrEnd: '',
};

export default DropCardForGame;
