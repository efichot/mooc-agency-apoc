import React from 'react';
import PropTypes from 'prop-types';

class PopupBlueInnerHtml extends React.Component {
  state = {};

  render() {
    const { description, classProps, hideCard } = this.props;

    if (description.__html) {
      description.__html = description.__html
        .replace(/\r\n/g, '<br />')
        .replace(/[\r\n]/g, '<br />');

      return (
        <div
          className={`${classProps} popup-blue`}
          style={{ opacity: hideCard ? 0 : 1 }}
          dangerouslySetInnerHTML={description}
        />
      );
    } else {
      return (
        <div
          className={`${classProps} popup-blue`}
          style={{ opacity: hideCard ? 0 : 1 }}
        >
          {description.replace(/\r\n/g, '<br />').replace(/[\r\n]/g, '<br />')}
        </div>
      );
    }
  }
}

PopupBlueInnerHtml.propTypes = {
  hideCard: PropTypes.bool,
  classProps: PropTypes.string,
  description: PropTypes.object.isRequired
};

PopupBlueInnerHtml.defaultProps = {
  hideCard: false,
  classProps: ''
};

export default PopupBlueInnerHtml;
