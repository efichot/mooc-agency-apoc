import React from 'react';
import PropTypes from 'prop-types';

/* import BlocDivider from '../components/BlocDivider'; */
import BlocLink from '../components/BlocLink';
import BlocQCMType2 from '../components/BlocQCMType2';
import BlocQCMType3 from '../components/BlocQCMType3';
import BlocSpacer from '../components/BlocSpacer';
import moduleTypes from '../model/static/moduleTypes';

class Step2_01 extends React.Component {
  state = {
    showNextModule: 0,
    stepFinish: false,
    bloc1: false,
    bloc2: false,
    bloc3: false,
  };

  handleFinishBloc = bloc => {
    this.setState({ [bloc]: true }, () => {
      const { bloc1, bloc2, bloc3 } = this.state;
      if (bloc1 && bloc2 && bloc3) {
        this.setState({ stepFinish: true });
        this.props.stepFinish(this.props.step);
      }
    });
  };

  handleShowNextModule = module => {
    if (module === `${moduleTypes.blocQCMType2}-1`) {
      this.setState({ showNextModule: 1 });
    } else if (module === moduleTypes.blocQCMType3) {
      this.setState({ showNextModule: 2 });
    } else if (module === `${moduleTypes.blocQCMType2}-2`) {
      this.setState({ showNextModule: 3 });
      this.props.endOfModules(true);
    }
  };

  handleShowLinks = () => {
    this.setState({ showLinks: !this.state.showLinks });
  };

  render() {
    const step2 = this.props.context.module_07;

    return (
      <React.Fragment>
        {/* <BlocDivider in={this.props.in} /> */}
        <BlocLink in={this.props.in} scrollIntoView={this.props.in} {...step2.module_07_01} />
        <BlocQCMType2
          in={this.props.in}
          {...step2.module_07_02}
          gameIsFinished={this.handleShowNextModule}
          modulType={`${moduleTypes.blocQCMType2}-1`}
          handleFinishBloc={this.handleFinishBloc}
          bloc="bloc1"
        />
        <BlocSpacer in={this.props.in} />
        <BlocQCMType3
          in={this.props.in}
          // scrollIntoView={stepInStep0}
          {...step2.module_07_03}
          modulType={`${moduleTypes.blocQCMType3}`}
          gameIsFinished={this.handleShowNextModule}
          handleFinishBloc={this.handleFinishBloc}
          bloc="bloc2"
        />
        {/* <BlocDivider in={stepInStep1} /> */}
        <BlocQCMType2
          in={this.props.in}
          // scrollIntoView={stepInStep1}
          margins
          {...step2.module_07_04}
          gameIsFinished={this.handleShowNextModule}
          modulType={`${moduleTypes.blocQCMType2}-2`}
          handleFinishBloc={this.handleFinishBloc}
          bloc="bloc3"
        />
        <BlocLink
          in={this.props.in}
          // scrollIntoView={stepInStep2}
          {...step2.module_07_05}
          onClick={this.handleShowLinks}
        />
        <BlocLink in={this.state.showLinks} scrollIntoView={this.state.showLinks} {...step2.module_07_06} />
        <BlocLink in={this.state.showLinks} {...step2.module_07_07} />
        <BlocLink in={this.state.showLinks} {...step2.module_07_08} />
        <BlocLink in={this.state.showLinks} {...step2.module_07_09} />
      </React.Fragment>
    );
  }
}

Step2_01.propTypes = {
  context: PropTypes.object.isRequired,
  endOfModules: PropTypes.func,
};

Step2_01.defaultProps = {};

export default Step2_01;
