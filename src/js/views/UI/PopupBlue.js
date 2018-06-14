import React from 'react';
import PropTypes from 'prop-types';

class PopupBlue extends React.Component {
  state = {};

  render() {
    const { hidePopup, classProps, noCross } = this.props;

    return (
      <div
        className={`${classProps} popup-blue`}
        style={{ opacity: hidePopup ? 0 : 1 }}
      >
        {!noCross && (
          <span className="cross" onClick={() => this.props.onCloseClick()}>
            X
          </span>
        )}
        {this.props.children}
      </div>
    );
  }
}

PopupBlue.propTypes = {
  hidePopup: PropTypes.bool.isRequired,
  noCross: PropTypes.bool,
  classProps: PropTypes.string.isRequired
};

PopupBlue.defaultProps = {
  hidePopup: false,
  noCross: false,
  classProps: ''
};

export default PopupBlue;
