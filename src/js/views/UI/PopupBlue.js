import React from 'react';
import PropTypes from 'prop-types';

const PopupBlue = ({ hidePopup, classProps, noCross, onCloseClick, children, styleProps, column }) => (
  <div className={`${classProps} popup-blue`} style={{ visibility: hidePopup ? 'hidden' : 'visible', ...styleProps }}>
    {!noCross && (
      <span className="cross" onClick={() => onCloseClick({ column })}>
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
