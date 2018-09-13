import React from 'react';
import PropTypes from 'prop-types';
import PieChart from 'react-svg-piechart';

import ButtonWithDoubleArrow from './UI/ButtonWithDoubleArrow';
import ButtonPrimary from './UI/ButtonPrimary';
import BlocDescription from './BlocDescription';
import BlocHeader from './BlocHeader';
import BlocSpacer from './BlocSpacer';
import PopupBlue from './UI/PopupBlue';
import Fade from '../transitions/Fade';

import victoryMessages from '../model/static/popupBlueMessages';

class BlocPieChartPlay extends React.Component {
  state = {
    pieData: [],
    hidePopup: true,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.pieData.length === 0) {
      const { buttons } = nextProps;
      let pieData = [];
      buttons.forEach(button => {
        pieData[buttons.length - (button.position - 1)] = {
          name: button.name,
          value: button.value,
          color: button.color,
        };
      });

      pieData[0] = {
        name: 'blank',
        value: 90,
        color: 'rgba(255,255,255,1)',
      };

      return {
        ...prevState,
        pieData,
      };
    }
    return prevState;
  }

  handleValidateClick = e => {
    const percent = this.state.pieData
      .filter(data => data.name !== 'blank')
      .reduce((total, data) => total + data.value, 0);

    if (percent === 100) {
      // console.log('game is finito');
      this.props.gameIsFinished(e !== undefined ? this.props.modulType : undefined, this.state.pieData);
    } else {
      this.props.gameIsFinished(undefined, this.state.pieData);
      e !== undefined && this.setState({ hidePopup: false });
    }
  };

  handleButtonClick = (plusOrMinus, name) => {
    const pieDataCopy = [...this.state.pieData];
    const currentPieData = pieDataCopy.filter(pieData => pieData.name === name)[0];
    const index = pieDataCopy.indexOf(currentPieData);
    const { value } = pieDataCopy[index];
    const increment = 10;
    let remainingToDo = pieDataCopy[0].value;

    if (plusOrMinus === 'plus' && !(value === 100 || remainingToDo === 0)) {
      pieDataCopy[index].value = parseInt(value + increment, 10);
      pieDataCopy[0].value = parseInt(remainingToDo - increment, 10);
    } else if (plusOrMinus === 'minus' && !(value === 0 || remainingToDo === 100)) {
      pieDataCopy[index].value = parseInt(value - increment, 10);
      pieDataCopy[0].value = parseInt(remainingToDo + increment, 10);
    } else {
      return;
    }

    this.setState({ pieData: pieDataCopy }, this.handleValidateClick());
  };

  render() {
    const { modulType, noChapter, duration, chapter, name, description, buttons, scrollIntoView } = this.props;

    const { pieData, hidePopup } = this.state;

    return (
      <Fade
        classProps={`bloc bloc-pie-chart-play bloc`}
        in={this.props.in}
        scrollIntoView={scrollIntoView}
        margins={this.props.margins}>
        {!noChapter && <BlocHeader type="horloge" duration={duration} name={chapter} />}
        <span className="bloc__name">{name}</span>
        {description && (
          <BlocDescription
            modulType={modulType}
            classProps="bloc-pie-chart-play__description"
            description={description}
          />
        )}
        <BlocSpacer />
        <PieChart data={pieData} viewBoxSize={300} />
        <BlocSpacer />
        <div className="bloc-pie-chart-play__buttons">
          {buttons.map((button, i) => {
            return (
              <ButtonWithDoubleArrow
                key={i}
                attachedName={button.name}
                button={button}
                onClick={this.handleButtonClick}
                name={`${button.name}`}
                value={`${pieData[buttons.length - (button.position - 1)].value}%`}
              />
            );
          })}
        </div>
        <BlocSpacer />
        <div className="bloc-pie-chart-play__validate-victory">
          <ButtonPrimary
            minWidth
            name="valider"
            onClick={this.handleValidateClick}
            classProps={`bloc-pie-chart-play__validate`}
          />
          <PopupBlue hidePopup={hidePopup} onCloseClick={() => this.setState({ hidePopup: true })}>
            <span className="card-title">{victoryMessages.pieChartUnCompleted}</span>
          </PopupBlue>
        </div>
      </Fade>
    );
  }
}

BlocPieChartPlay.propTypes = {
  in: PropTypes.bool,
  module: PropTypes.string,
  gameIsFinished: PropTypes.func,

  /***************** DATA ******************/

  modulType: PropTypes.string.isRequired,
  noChapter: PropTypes.bool,
  iconType: PropTypes.string.isRequired,
  duration: PropTypes.number,
  chapter: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.shape({ __html: PropTypes.string.isRequired }).isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      position: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

BlocPieChartPlay.defaultProps = {
  module: 'pie-chart',
  in: false,
  noChapter: false,
  duration: 0,
  gameIsFinished: undefined,
};

export default BlocPieChartPlay;
