import React from 'react';
import PropTypes from 'prop-types';

import Fade from '../transitions/Fade';

class BlocDescription extends React.Component {
  render() {
    const { description, classProps, padding } = this.props;

    if (description.__html) {
      description.__html = description.__html.replace(/\r\n/g, '<br />').replace(/[\r\n]/g, '<br />');

      return (
        <Fade in={this.props.in} margins={this.props.margins}>
          <p
            className={`bloc bloc-description ${classProps}`}
            dangerouslySetInnerHTML={description}
            style={{ padding: `${padding}px` }}
          />
        </Fade>
      );
    } else {
      return (
        <Fade>
          <p className={`bloc bloc-description${classProps}`} style={{ padding: `${padding}px` }}>
            {description}
          </p>
        </Fade>
      );
    }
  }
}

BlocDescription.propTypes = {
  in: PropTypes.bool,
  description: PropTypes.oneOfType([PropTypes.shape({ __html: PropTypes.string.isRequired }), PropTypes.string])
    .isRequired,
  /***************** DATA ******************/
  classProps: PropTypes.string,
  padding: PropTypes.number,
  modulType: PropTypes.string.isRequired,
};

BlocDescription.defaultProps = {
  in: true,
  classProps: '',
  padding: 0,
};

export default BlocDescription;
