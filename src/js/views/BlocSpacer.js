import React from 'react';
import PropTypes from 'prop-types';

const BlocSpacer = ({ height }) => (
  <div className={`bloc-spacer`} style={{ height }} />
);

BlocSpacer.propTypes = {
  height: PropTypes.number
};

BlocSpacer.defaultProps = {
  height: 50
};

export default BlocSpacer;
