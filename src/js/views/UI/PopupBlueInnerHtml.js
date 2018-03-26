import React from 'react';
//import PropTypes from 'prop-types';

export default class PopupBlue extends React.Component {
  //constructor(props) {
  //super(props);
  //this.state = {};
  //}

  render() {
    const { description, classes, hideCard } = this.props;

    if (description.__html) {
      description.__html = description.__html
        .replace(/\r\n/g, '<br />')
        .replace(/[\r\n]/g, '<br />');

      return (
        <div
          className={`${classes ? classes : ''} popup-blue`}
          style={{ opacity: hideCard ? 0 : 1 }}
          dangerouslySetInnerHTML={description}
        />
      );
    } else {
      return (
        <div
          className={`${classes ? classes : ''} popup-blue`}
          style={{ opacity: hideCard ? 0 : 1 }}
        >
          {description.replace(/\r\n/g, '<br />').replace(/[\r\n]/g, '<br />')}
        </div>
      );
    }
  }
}

PopupBlue.propTypes = {};
