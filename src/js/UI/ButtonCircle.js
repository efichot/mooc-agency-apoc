import React from 'react';
//import PropTypes from 'prop-types';

export default class ButtonCircle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onclick();
  }

  render() {
    return (
      <div
        className={`button-circle ${this.props.class}`}
        onClick={this.handleClick}
      >
        {this.props.children}
      </div>
    );
  }
}

ButtonCircle.propTypes = {};
