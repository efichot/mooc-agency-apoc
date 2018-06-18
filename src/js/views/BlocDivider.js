import React from 'react';
import PropTypes from 'prop-types';

import Fade from '../transitions/Fade';
import BlocSpacer from './BlocSpacer';

class BlocDivider extends React.Component {
  render() {
    return (
      <Fade in={this.props.in}>
        {!this.props.noMarginTop && <BlocSpacer />}
        <div className="bloc-divider" />
        {!this.props.noMarginBottom && <BlocSpacer />}
      </Fade>
    );
  }
}

BlocDivider.propTypes = {
  in: PropTypes.bool,
  noMarginTop: PropTypes.bool,
  noMarginBottom: PropTypes.bool
};

BlocDivider.defaultProps = {
  in: false,
  noMarginTop: false,
  noMarginBottom: false
};

export default BlocDivider;
