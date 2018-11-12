import React from 'react';
import PropTypes from 'prop-types';
import PieChart from 'react-svg-piechart';

class Chrono extends React.Component {
  state = {
    remaining: this.props.totalDuration,
    context: this.props.context,
  };

  static getDerivedStateFromProps(nextProps, prevState, c) {
    // if (nextProps.restart) {
    //   return {
    //     ...prevState,
    //   };
    // }
    if (nextProps.reset && JSON.stringify(nextProps.context) !== JSON.stringify(prevState.context)) {
      return {
        ...prevState,
        remaining: nextProps.totalDuration,
        context: nextProps.context,
      };
    }
    if (nextProps.context !== prevState.context) {
      return {
        ...prevState,
        context: nextProps.context,
      };
    }
    return prevState;
  }

  componentDidUpdate(prevProps, prevState) {
    // Object.keys(this.props).forEach(key => {
    //   if (this.props[key] !== prevProps[key]) {
    //     console.log(key, 'changed from', prevProps[key], 'to', this.props[key]);
    //   }
    // });
    if (!prevProps.reset && this.props.reset) {
      this.nextSecond();
    }
    if (!prevProps.stop && this.props.stop) {
      this.props.timeRemaining({
        remainingTime: prevState.remaining,
        currentQuestionIndex: prevProps.currentQuestionIndex,
      });
      window.clearTimeout(this.timeout);
    }
    // if (!prevProps.restart && this.props.restart) {
    //   window.clearTimeout(this.timeout);
    // }
  }

  nextSecond = () => {
    const { remaining } = this.state;
    if (remaining === 0) {
      window.clearTimeout(this.timeout);
      return;
    }
    this.timeout = window.setTimeout(() => {
      this.setState({ remaining: remaining - 1 });
      this.nextSecond();
    }, 1000);
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
              color: process.env.REACT_APP_WHITE,
            },
            {
              value: grey,
              color: remaining <= 5 ? '#F00' : 'rgba(125,129,131,1.00)',
            },
          ]}
          viewBoxSize={40}
        />
        <span
          className="time"
          style={{
            color: remaining <= 5 ? '#F00' : 'rgba(125,129,131,1.00)',
            fontWeight: remaining <= 5 ? 'bold' : '',
          }}>
          {remaining}
        </span>
      </div>
    );
  }
}

Chrono.propTypes = {
  totalDuration: PropTypes.number,
  currentQuestionIndex: PropTypes.number,
  stop: PropTypes.bool,
  restart: PropTypes.bool,
  reset: PropTypes.bool,
  timeRemaining: PropTypes.func,
};

Chrono.defaultProps = {
  stop: false,
  restart: false,
  reset: false,
  totalDuration: 10,
  currentQuestionIndex: undefined,
  timeRemaining: () => {
    return;
  },
};

export default Chrono;
