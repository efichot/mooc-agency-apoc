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
    subtitle: null,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.reset) {
      return {
        title: null,
        subtitle: null,
      };
    }
    return prevState;
  }

  handleDragOver = e => {
    e.persist();
    e.preventDefault();
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
    e.preventDefault(); // prevent Firefox to load an inexisting URL
    await this.setState({
      title: data.split('+++')[0],
      subtitle: data.split('+++')[1],
    });

    const { checkPositionInHere, dragCard, endPosition: endPositionNotParsed } = this.props;

    const supposedEndPosition = parseInt(endPositionNotParsed, 10);
    const currentEndPosition = parseInt(data.split('+++')[2], 10);
    const startPosition = parseInt(data.split('+++')[5], 10);

    /* check correct position here */
    if (checkPositionInHere) {
      dragCard(currentEndPosition === supposedEndPosition, supposedEndPosition);
    } else {
      /* check correct position in parent */
      dragCard(currentEndPosition, supposedEndPosition, startPosition);
    }
    /* e.preventDefault(); */
  };

  render() {
    const { startOrEnd, dropCardTitleStyles } = this.props;

    const { title, /* subtitle, */ isDraggingOver } = this.state;

    return (
      <div
        className={`drop-card ${isDraggingOver ? 'dragging-over' : ''}`}
        onDragOver={this.handleDragOver}
        onDragLeave={this.handleDragExit}
        onDrop={this.handleDrop}>
        {startOrEnd === 'end' &&
          title && (
            <span className="title" style={{ ...dropCardTitleStyles }}>
              {title}
            </span>
          )}
        {/* startOrEnd === 'end' && subtitle && subtitle !== 'undefined' && <span className="subtitle">{subtitle}</span> */}
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
  dragCard: PropTypes.func.isRequired,
  checkPositionInHere: PropTypes.bool,
};

DropCard.defaultProps = {
  id: '',
  reset: false,
  checkPositionInHere: true,
  startOrEnd: '',
};

export default DropCard;
