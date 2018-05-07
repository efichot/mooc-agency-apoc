import React from 'react';
import PropTypes from 'prop-types';

import Fade from '../transitions/Fade';

class BlocDivider extends React.Component {
  render() {
    return <Fade in={this.props.in} classProps={`bloc-divider`} />;
  }
}

BlocDivider.propTypes = {
  in: PropTypes.bool
};

BlocDivider.defaultProps = {
  in: false
};

export default BlocDivider;
