import React from 'react';
import ButtonWithDoubleArrow from './UI/ButtonWithDoubleArrow';
import BlocDescription from './BlocDescription';
import BlocHeader from './BlocHeader';
import PieChart from 'react-svg-piechart';

//import PropTypes from 'prop-types';

export default class BlocPieChartPlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pieData: []
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(plusOrMinus, index) {
    const pieDataCopy = [...this.state.pieData];
    const { value } = pieDataCopy[index];
    const increment = 10;
    let remainingToDo = pieDataCopy[0].value;

    console.log(plusOrMinus === 'plus');
    console.log('(value === 100):', value === 100);
    console.log('remainingToDo === 0:', remainingToDo === 0);

    if (plusOrMinus === 'plus' && !(value === 100 || remainingToDo === 0)) {
      console.log('case 1');
      pieDataCopy[index].value = value + increment;
      pieDataCopy[0].value = remainingToDo - increment;
    } else if (
      plusOrMinus === 'minus' &&
      !(value === 0 || remainingToDo === 100)
    ) {
      pieDataCopy[index].value = value - increment;
      pieDataCopy[0].value = remainingToDo + increment;
    } else {
      return;
    }

    this.setState({ pieData: pieDataCopy });
  }

  componentWillMount() {
    const { buttons } = this.props.context;
    let pieData = [];
    buttons.forEach(button => {
      pieData[button.position] = {
        title: button.name,
        value: button.value,
        color: button.color
      };
    });

    pieData[0] = {
      title: 'blank',
      value: 100,
      color: 'rgba(255,255,255,1)'
    };

    this.setState({ pieData });
  }

  render() {
    const {
      noChapter,
      duration,
      chapter,
      name,
      description,
      buttons
    } = this.props.context;

    return (
      <div className={`bloc bloc-pie-chart-play bloc`}>
        {!noChapter && (
          <BlocHeader type="horloge" duration={duration} name={chapter} />
        )}
        <span className="bloc__name">{name}</span>
        {description && (
          <BlocDescription
            classes="bloc-pie-chart-play__description"
            description={description}
          />
        )}
        <PieChart data={this.state.pieData} viewBoxSize={300} />
        <div className="bloc-pie-chart-play__buttons">
          {buttons.map((button, i) => {
            return (
              <ButtonWithDoubleArrow
                attachedName={i + 1}
                key={button.action}
                button={button}
                click={this.handleButtonClick}
                name={`${button.name}`}
                value={`${this.state.pieData[i + 1].value}%`}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

BlocPieChartPlay.propTypes = {};
