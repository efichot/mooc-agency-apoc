import React from 'react';
import PropTypes from 'prop-types';

class PopupBlue extends React.Component {
  state = {};

  render() {
    const { hideCard, classProps } = this.props;

    return (
      <div
        className={`${classProps} popup-blue`}
        style={{ opacity: hideCard ? 0 : 1 }}
      >
        {this.props.children}
      </div>
    );
  }
}

PopupBlue.propTypes = {
  classProps: PropTypes.string.isRequired,
  hideCard: PropTypes.bool.isRequired
};

PopupBlue.defaultProps = {
  hideCard: false,
  classProps: ''
};

export default PopupBlue;
