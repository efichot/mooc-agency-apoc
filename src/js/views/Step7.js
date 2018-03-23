import React from 'react';
import BlocVideo from '../modules/BlocVideo';
import BlocStepTopContent from '../modules/BlocStepTopContent';
import BlocDivider from '../modules/BlocDivider';
import BlocSubMenu1 from '../modules/BlocSubMenu1';
import step7 from '../model/static/step7';
import Step7Monetary from './Step7Monetary';
import Step7Actions from './Step7Actions';
import Step7Obligatary from './Step7Obligatary';
//import PropTypes from 'prop-types';

export default class Step7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMarketActions: true,
      showMarketObligatary: false,
      showMarketMonetary: false
    };

    this.changeMarketToShow = this.changeMarketToShow.bind(this);
  }

  changeMarketToShow(marketToShow) {
    const stateCopy = { ...this.state };

    Object.keys(stateCopy).forEach(stateAction => {
      stateAction === marketToShow
        ? (stateCopy[`${stateAction}`] = true)
        : (stateCopy[`${stateAction}`] = false);
    });

    this.setState(stateCopy);
  }

  render() {
    return (
      <div className="step step7">
        <BlocStepTopContent step={step7} />
        <BlocDivider />
        <BlocVideo context={step7.module3} />
        <BlocSubMenu1
          description={step7.module4.description}
          buttons={step7.module4.buttons}
          click={this.handleClick}
          action={this.changeMarketToShow}
        />
        {this.state.showMarketActions && <Step7Actions />}
        {this.state.showMarketObligatary && <Step7Obligatary />}
        {this.state.showMarketMonetary && <Step7Monetary />}
      </div>
    );
  }
}

Step7.propTypes = {};
