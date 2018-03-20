import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ButtonPrimary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick();
  }

  render() {

    return(
      <Link to={this.props.link} className={this.props.classes}>
        <button className="button button-primary" onClick={this.handleClick}>{this.props.name}</button>
      </Link>
      )
  }
}

ButtonPrimary.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
};
