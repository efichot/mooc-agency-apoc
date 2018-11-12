import React from 'react';
import PropTypes from 'prop-types';

import Fade from '../transitions/Fade';

class BlocDescription extends React.Component {
  render() {
    const { description, classProps, padding, scrollIntoView } = this.props;

    if (description.__html) {
      description.__html = description.__html.replace(/\r\n/g, '<br />').replace(/[\r\n]/g, '<br />');

      return (
        <Fade in={this.props.in} scrollIntoView={scrollIntoView} margins={this.props.margins} classProps={classProps}>
          <div
            className={`bloc bloc-description ${classProps}`}
            dangerouslySetInnerHTML={description}
            style={{ padding: `${padding}px` }}
          />
        </Fade>
      );
    } else {
      return (
        <Fade>
          <div className={`bloc bloc-description${classProps}`} style={{ padding: `${padding}px` }}>
            {description}
          </div>
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
  modulType: PropTypes.string,
};

BlocDescription.defaultProps = {
  in: true,
  classProps: '',
  padding: undefined,
  modulType: '',
};

export default BlocDescription;
