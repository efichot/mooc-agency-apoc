import React from 'react';
import PropTypes from 'prop-types';

export default class BlocDescription extends React.Component {
  //constructor(props) {
  //super(props);
  //this.state = {};
  //}

  render() {
    const { description, classes, padding } = this.props;

    if (description.__html) {
      description.__html = description.__html
        .replace(/\r\n/g, '<br />')
        .replace(/[\r\n]/g, '<br />');

      return (
        <p
          className={`bloc bloc-description ${classes}`}
          dangerouslySetInnerHTML={description}
          style={{ padding: padding ? '20px' : '10px' }}
        />
      );
    } else {
      return (
        <p
          className={`bloc bloc-description ${classes}`}
          style={{ padding: padding ? '20px' : '10px' }}
        >
          {description}
        </p>
      );
    }
  }
}

BlocDescription.propTypes = {
  description: PropTypes.object.isRequired,
  classes: PropTypes.string,
  padding: PropTypes.bool
};
