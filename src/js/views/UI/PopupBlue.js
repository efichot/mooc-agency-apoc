import React from 'react';
import PropTypes from 'prop-types';

const PopupBlue = ({ hidePopup, classProps, noCross, onCloseClick, children, styleProps }) => (
  <div className={`${classProps} popup-blue`} style={{ opacity: hidePopup ? 0 : 1, ...styleProps }}>
    {!noCross && (
      <span className="cross" onClick={() => onCloseClick}>
        X
      </span>
    )}
    {children}
  </div>
);

PopupBlue.propTypes = {
  hidePopup: PropTypes.bool.isRequired,
  noCross: PropTypes.bool,
  classProps: PropTypes.string.isRequired,
};

PopupBlue.defaultProps = {
  hidePopup: false,
  noCross: false,
  classProps: '',
};

export default PopupBlue;
