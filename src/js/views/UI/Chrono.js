import React from 'react';
import PropTypes from 'prop-types';
import ReactTimeout from 'react-timeout';
import PieChart from 'react-svg-piechart';

class Chrono extends React.Component {
  state = {
    remaining: this.props.totalDuration,
    timeout: null,
    context: this.props.context
  };

  static getDerivedStateFromProps(nextProps, prevState, c) {
    if (nextProps.restart) {
      return {
        ...prevState
      };
    }
    if (nextProps.reset && nextProps.context !== prevState.context) {
      return {
        ...prevState,
        remaining: nextProps.totalDuration,
        context: nextProps.context
      };
    }
    if (nextProps.stop) {
      nextProps.clearTimeout(prevState.timeout);
      return {
        ...prevState,
        timeout: null
      };
    }
    if (nextProps.context !== prevState.context) {
      return {
        ...prevState,
        context: nextProps.context
      };
    }
    return prevState;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.reset !== true && prevState.timeout === null) {
      console.log('caca');
      this.nextSecond();
    }
  }

  nextSecond = () => {
    if (this.state.remaining === 0) {
      this.props.clearTimeout(this.state.timeout);
      return;
    }
    const timeout = this.props.setTimeout(() => {
      this.setState({ remaining: this.state.remaining - 1 });
      this.nextSecond();
    }, 1000);

    this.setState({ timeout });
  };

  componentDidMount() {
    this.nextSecond();
  }

  render() {
    const { totalDuration } = this.props;

    const { remaining } = this.state;

    const white = remaining;
    const grey = totalDuration - remaining;

    return (
      <div className={`chrono`}>
        <PieChart
          data={[
            {
              value: white,
              color: 'var(--white)'
            },
            {
              value: grey,
              color: remaining <= 5 ? '#F00' : 'rgba(125,129,131,1.00)'
            }
          ]}
          viewBoxSize={40}
        />
        <span
          className="time"
          style={{
            color: remaining <= 5 ? '#F00' : 'rgba(125,129,131,1.00)',
            fontWeight: remaining <= 5 ? 'bold' : ''
          }}
        >
          {remaining}
        </span>
      </div>
    );
  }
}

Chrono.propTypes = {
  totalDuration: PropTypes.number,
  stop: PropTypes.bool,
  restart: PropTypes.bool,
  reset: PropTypes.bool
};

Chrono.defaultProps = {
  stop: false,
  restart: false,
  reset: false,
  totalDuration: 10
};

export default ReactTimeout(Chrono);
