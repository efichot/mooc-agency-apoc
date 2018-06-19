import React from 'react';
import PropTypes from 'prop-types';

const contains = (list, value) => {
  for (let i = 0; i < list.length; ++i) {
    if (list[i] === value) return true;
  }
  return false;
};

class DropCard extends React.Component {
  state = {
    title: null,
    subtitle: null
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.reset) {
      return {
        title: null,
        subtitle: null
      };
    }
    return prevState;
  }

  handleDragOver = event => {
    this.setState({ isDraggingOver: true });
    const isDragCard = contains(event.dataTransfer.types, 'drag-card');
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
    const data = event.dataTransfer.getData('drag-card');
    await this.setState({
      title: data.split('+++')[0],
      subtitle: data.split('+++')[1]
    });
    parseInt(data.split('+++')[2], 10) === parseInt(this.props.endPosition, 10)
      ? this.props.dragCard(true, this.props.endPosition)
      : this.props.dragCard(false, this.props.endPosition);
    /*event.preventDefault();*/
  };

  render() {
    const { startOrEnd } = this.props;

    const { title, subtitle, isDraggingOver } = this.state;

    return (
      <div
        className={`drop-card ${isDraggingOver ? 'dragging-over' : ''}`}
        onDragOver={this.handleDragOver}
        onDragLeave={this.handleDragExit}
        onDrop={this.handleDrop}
      >
        {startOrEnd === 'end' &&
          title && <span className="title">{title}</span>}
        {startOrEnd === 'end' &&
          subtitle &&
          subtitle !== 'undefined' && (
            <span className="subtitle">{subtitle}</span>
          )}
        {this.props.children}
      </div>
    );
  }
}

DropCard.propTypes = {
  id: PropTypes.string,
  endPosition: PropTypes.number.isRequired,
  reset: PropTypes.bool,
  startOrEnd: PropTypes.string,
  dragCard: PropTypes.func.isRequired
};

DropCard.defaultProps = {
  id: '',
  reset: false,
  startOrEnd: ''
};

export default DropCard;
