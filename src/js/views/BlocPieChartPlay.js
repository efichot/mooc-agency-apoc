import React from 'react';
import PropTypes from 'prop-types';
import PieChart from 'react-svg-piechart';
import ReactTimeout from 'react-timeout';

import ButtonWithDoubleArrow from './UI/ButtonWithDoubleArrow';
import ButtonPrimary from './UI/ButtonPrimary';
import BlocDescription from './BlocDescription';
import BlocHeader from './BlocHeader';
import PopupBlue from './UI/PopupBlue';
import Fade from '../transitions/Fade';

class BlocPieChartPlay extends React.Component {
  state = {
    pieData: [],
    hidePopup: true
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.pieData.length === 0) {
      const { buttons } = nextProps;
      let pieData = [];
      buttons.forEach(button => {
        pieData[buttons.length - (button.position - 1)] = {
          name: button.name,
          value: button.value,
          color: button.color
        };
      });

      pieData[0] = {
        name: 'blank',
        value: 100,
        color: 'rgba(255,255,255,1)'
      };

      return {
        ...prevState,
        pieData
      };
    }
    return prevState;
  }

  handleValidateClick = e => {
    const percent = this.state.pieData
      .filter(data => data.name !== 'blank')
      .reduce((total, data) => total + data.value, 0);

    if (percent === 100) {
      this.props.gameIsFinished(this.props.module);
    } else {
      this.setState({ hidePopup: false });
      this.props.setTimeout(() => {
        this.setState({ hidePopup: true });
      }, 1500);
    }
  };

  handleButtonClick = (plusOrMinus, name) => {
    const pieDataCopy = [...this.state.pieData];
    const currentPieData = pieDataCopy.filter(
      pieData => pieData.name === name
    )[0];
    const index = pieDataCopy.indexOf(currentPieData);
    const { value } = pieDataCopy[index];
    const increment = 10;
    let remainingToDo = pieDataCopy[0].value;

    if (plusOrMinus === 'plus' && !(value === 100 || remainingToDo === 0)) {
      pieDataCopy[index].value = parseInt(value + increment, 10);
      pieDataCopy[0].value = parseInt(remainingToDo - increment, 10);
    } else if (
      plusOrMinus === 'minus' &&
      !(value === 0 || remainingToDo === 100)
    ) {
      pieDataCopy[index].value = parseInt(value - increment, 10);
      pieDataCopy[0].value = parseInt(remainingToDo + increment, 10);
    } else {
      return;
    }

    this.setState({ pieData: pieDataCopy });
  };

  render() {
    const {
      noChapter,
      duration,
      chapter,
      name,
      description,
      buttons
    } = this.props;

    const { pieData, hidePopup } = this.state;

    return (
      <Fade classProps={`bloc bloc-pie-chart-play bloc`} in={this.props.in}>
        {!noChapter && (
          <BlocHeader type="horloge" duration={duration} name={chapter} />
        )}
        <span className="bloc__name">{name}</span>
        {description && (
          <BlocDescription
            classProps="bloc-pie-chart-play__description"
            description={description}
          />
        )}
        <PieChart data={pieData} viewBoxSize={300} />
        <div className="bloc-pie-chart-play__buttons">
          {buttons.map((button, i) => {
            return (
              <ButtonWithDoubleArrow
                key={i}
                attachedName={button.name}
                button={button}
                onClick={this.handleButtonClick}
                name={`${button.name}`}
                value={`${
                  pieData[buttons.length - (button.position - 1)].value
                }%`}
              />
            );
          })}
        </div>
        <ButtonPrimary name="valider" onClick={this.handleValidateClick} />
        <PopupBlue hideCard={hidePopup}>
          <span className="card-title">
            La composition de votre fonds est incomplète. réessayez !
          </span>
        </PopupBlue>
      </Fade>
    );
  }
}

BlocPieChartPlay.propTypes = {
  in: PropTypes.bool,
  module: PropTypes.string,
  noChapter: PropTypes.bool,
  duration: PropTypes.number,
  chapter: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.object.isRequired,
  buttons: PropTypes.array.isRequired,
  gameIsFinished: PropTypes.func
};

BlocPieChartPlay.defaultProps = {
  module: 'pie-chart',
  in: false,
  noChapter: false,
  duration: 0,
  gameIsFinished: undefined
};

export default ReactTimeout(BlocPieChartPlay);
