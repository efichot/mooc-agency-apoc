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
  state = {
    scrolledIntoView: false
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.scrollIntoView && !prevState.scrolledIntoView) {
      console.log(
        'nextProps.scrollIntoView, !prevState.scrolledIntoView',
        nextProps.scrollIntoView,
        !prevState.scrolledIntoView
      );
      return {
        ...prevState,
        scrolledIntoView: true
      };
    }

    return prevState;
  }

  componentDidMount() {
    if (this.state.scrolledIntoView) {
      this.module.scrollIntoView({ behavior: 'smooth' });
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      '!prevState.scrolledIntoView, this.state.scrolledIntoView',
      !prevState.scrolledIntoView,
      this.state.scrolledIntoView
    );
    if (!prevState.scrolledIntoView && this.state.scrolledIntoView) {
      console.log('scrolling into view');
      this.module.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  render() {
    const { classProps } = this.props;

    console.log(this.state.scrolledIntoView);

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
              ref={module => (this.module = module)}
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
  scrollIntoView: PropTypes.bool,
  classProps: PropTypes.string
};

Fade.defaultProps = {
  in: false,
  scrollIntoView: false,
  classProps: ''
};

export default Fade;
