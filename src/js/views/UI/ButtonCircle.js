import React from 'react';
import PropTypes from 'prop-types';

class ButtonCircle extends React.Component {
  state = {};

  handleClick = e => {
    this.props.onclick();
  };

  render() {
    const { classProps } = this.props;

    return (
      <div className={`button-circle ${classProps}`} onClick={this.handleClick}>
        {this.props.children}
      </div>
    );
  }
}

ButtonCircle.propTypes = {
  classProps: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

ButtonCircle.defaultProps = {
  classProps: ''
};

export default ButtonCircle;
