import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';

import BlocSpacer from '../components/BlocSpacer';

import { duration, scrollIntoView } from './transitionUtils';

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out, color ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0 },
};

class Fade extends React.Component {
  state = {
    scrolledIntoView: false,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.scrollIntoView && !prevState.scrolledIntoView) {
      return {
        ...prevState,
        scrolledIntoView: true,
      };
    }

    if (!nextProps.scrollIntoView && prevState.scrolledIntoView) {
      return {
        ...prevState,
        scrolledIntoView: false,
      };
    }

    return prevState;
  }

  componentDidMount() {
    if (this.state.scrolledIntoView) {
      scrollIntoView(this.module);
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!prevState.scrolledIntoView && this.state.scrolledIntoView) {
      scrollIntoView(this.module);
    }
  }

  render() {
    const { classProps, margins, styleProps } = this.props;

    return (
      <Transition in={!!this.props.in} timeout={{ enter: 0, exit: 0 }} mountOnEnter unmountOnExit>
        {state => {
          return (
            <div
              className={classProps ? classProps : ''}
              style={{ ...defaultStyle, ...transitionStyles[state], ...styleProps }}
              ref={module => (this.module = module)}>
              {margins && <BlocSpacer />}
              {this.props.children}
              {margins && <BlocSpacer />}
            </div>
          );
        }}
      </Transition>
    );
  }
}

Fade.propTypes = {
  in: PropTypes.bool,
  margins: PropTypes.bool,
  scrollIntoView: PropTypes.bool,
  classProps: PropTypes.string,
};

Fade.defaultProps = {
  in: false,
  margins: false,
  scrollIntoView: false,
  classProps: '',
};

export default Fade;
