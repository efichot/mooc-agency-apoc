import React from 'react';
import PropTypes from 'prop-types';

const contains = (list, value) => {
  for (let i = 0; i < list.length; ++i) {
    if (list[i] === value) return true;
  }
  return false;
};

class DropCardMini extends React.Component {
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
    const isDragCard =
      contains(e.dataTransfer.types, 'text') ||
      contains(e.dataTransfer.types, 'Text') ||
      contains(e.dataTransfer.types, 'text/plain');
    const isEndDropCard = this.props.startOrEnd === 'end';
    if (isDragCard && isEndDropCard) {
      e.preventDefault();
    }
  };

  handleDrop = async e => {
    const data = e.dataTransfer.getData('text');
    this.props.dragCard(data, this.props.endPosition);
    e.preventDefault(); //prevent Firefox to load an inexisting URL
  };

  render() {
    const { startOrEnd } = this.props;

    return (
      <React.Fragment>
        {startOrEnd === 'end' && (
          <div className="drop-card" onDragOver={this.handleDragOver} onDrop={this.handleDrop}>
            {this.props.children.filter(child => child !== undefined).length > 0 ? (
              this.props.children
            ) : (
              <div className="pie-chart-mini pie-chart-empty" />
            )}
          </div>
        )}
        {startOrEnd === 'start' && (
          <div className="drop-card drop-card-empty" onDragOver={this.handleDragOver} onDrop={this.handleDrop}>
            {this.props.children}
          </div>
        )}
      </React.Fragment>
    );
  }
}

DropCardMini.propTypes = {
  id: PropTypes.string,
  endPosition: PropTypes.shape({
    row: PropTypes.number.isRequired,
    column: PropTypes.number.isRequired,
  }).isRequired,
  reset: PropTypes.bool,
  startOrEnd: PropTypes.string,
  dragCard: PropTypes.func.isRequired,
};

DropCardMini.defaultProps = {
  id: '',
  reset: false,
  startOrEnd: '',
};

export default DropCardMini;
