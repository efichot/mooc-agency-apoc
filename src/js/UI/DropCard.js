import React from 'react';

//import PropTypes from 'prop-types';

function contains(list, value) {
  for (let i = 0; i < list.length; ++i) {
    if (list[i] === value) return true;
  }
  return false;
}

export default class DropCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      subtitle: null
    };

    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (nextProps.reset) {
      this.setState({ title: null, subtitle: null });
    }
  }

  handleDragOver(event) {
    const isDragCard = contains(event.dataTransfer.types, 'drag-card');
    const isEndDropCard = this.props.startOrEnd === 'end';
    if (isDragCard && isEndDropCard) {
      event.preventDefault();
    }
  }

  handleDrop(event) {
    const data = event.dataTransfer.getData('drag-card');
    console.log(data);
    this.setState({
      title: data.split('+++')[0],
      subtitle: data.split('+++')[1]
    });
    parseInt(data.split('+++')[2], 10) === parseInt(this.props.endPosition, 10)
      ? this.props.dragCard(true, this.props.endPosition)
      : this.props.dragCard(false, this.props.endPosition);
    event.preventDefault();
  }

  render() {
    return (
      <div
        className={`drop-card`}
        onDragOver={this.handleDragOver}
        onDrop={this.handleDrop}
      >
        {this.props.startOrEnd === 'end' &&
          this.state.title && <span className="title">{this.state.title}</span>}
        {this.props.startOrEnd === 'end' &&
          this.state.subtitle &&
          this.state.subtitle !== 'undefined' && (
            <span className="subtitle">{this.state.subtitle}</span>
          )}
        {this.props.children}
      </div>
    );
  }
}

DropCard.propTypes = {};
