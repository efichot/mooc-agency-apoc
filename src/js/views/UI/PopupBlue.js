import React from 'react';
import PropTypes from 'prop-types';

class PopupBlue extends React.Component {
  state = {};

  render() {
    const { hidePopup, classProps } = this.props;

    return (
      <div
        className={`${classProps} popup-blue`}
        style={{ opacity: hidePopup ? 0 : 1 }}
      >
        {this.props.children}
      </div>
    );
  }
}

PopupBlue.propTypes = {
  classProps: PropTypes.string.isRequired,
  hidePopup: PropTypes.bool.isRequired
};

PopupBlue.defaultProps = {
  hidePopup: false,
  classProps: ''
};

export default PopupBlue;
