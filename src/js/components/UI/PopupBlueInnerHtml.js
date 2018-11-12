import React from 'react';
import PropTypes from 'prop-types';

class PopupBlueInnerHtml extends React.Component {
  state = {};

  render() {
    const { description, classProps, hidePopup, noCross } = this.props;

    if (description.__html) {
      description.__html = description.__html.replace(/\r\n/g, '<br />').replace(/[\r\n]/g, '<br />');

      return (
        <div className={`${classProps} popup-blue`} style={{ opacity: hidePopup ? 0 : 1 }}>
          {!noCross && (
            <span className="cross" onClick={() => this.props.onCloseClick()}>
              X
            </span>
          )}
          <span dangerouslySetInnerHTML={description} />
        </div>
      );
    } else {
      return (
        <div className={`${classProps} popup-blue`} style={{ opacity: hidePopup ? 0 : 1 }}>
          {description.replace(/\r\n/g, '<br />').replace(/[\r\n]/g, '<br />')}
        </div>
      );
    }
  }
}

PopupBlueInnerHtml.propTypes = {
  hidePopup: PropTypes.bool,
  noCross: PropTypes.bool,
  classProps: PropTypes.string,
  description: PropTypes.object.isRequired,
};

PopupBlueInnerHtml.defaultProps = {
  hidePopup: false,
  noCross: false,
  classProps: '',
};

export default PopupBlueInnerHtml;
