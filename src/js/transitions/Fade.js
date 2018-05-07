import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';

import { duration } from './transitionUtils';

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out, color ${duration}ms ease-in-out`,
  opacity: 0
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0 }
};

class Fade extends React.Component {
  state = {};

  render() {
    const { classProps } = this.props;

    return (
      <Transition
        in={!!this.props.in}
        timeout={{ enter: 250, exit: 250 }}
        mountOnEnter
        unmountOnExit
      >
        {state => {
          return (
            <div
              className={classProps ? classProps : ''}
              style={{ ...defaultStyle, ...transitionStyles[state] }}
            >
              {this.props.children}
            </div>
          );
        }}
      </Transition>
    );
  }
}

Fade.propTypes = {
  in: PropTypes.bool,
  classProps: PropTypes.string
};

Fade.defaultProps = {
  in: false,
  classProps: ''
};

export default Fade;
