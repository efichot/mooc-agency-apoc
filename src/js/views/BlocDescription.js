import React from 'react';
import PropTypes from 'prop-types';

import Fade from '../transitions/Fade';

class BlocDescription extends React.Component {
  render() {
    const { description, classProps, padding } = this.props;

    if (description.__html) {
      description.__html = description.__html
        .replace(/\r\n/g, '<br />')
        .replace(/[\r\n]/g, '<br />');

      return (
        <Fade in={this.props.in}>
          <p
            className={`bloc bloc-description${classProps}`}
            dangerouslySetInnerHTML={description}
            style={{ padding: `${padding}px` }}
          />
        </Fade>
      );
    } else {
      return (
        <Fade>
          <p
            className={`bloc bloc-description${classProps}`}
            style={{ padding: `${padding}px` }}
          >
            {description}
          </p>
        </Fade>
      );
    }
  }
}

BlocDescription.propTypes = {
  in: PropTypes.bool,
  description: PropTypes.object.isRequired,
  classProps: PropTypes.string,
  padding: PropTypes.number
};

BlocDescription.defaultProps = {
  in: false,
  classProps: '',
  padding: 10
};

export default BlocDescription;
