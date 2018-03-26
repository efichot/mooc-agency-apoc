import React from 'react';
import { GlobalInfosContext } from '../model/react-context/GlobalInfosProvider';
import { Link } from 'react-router-dom';
import BlocStepTopContent from '../views/BlocStepTopContent';
import BlocVideo from '../views/BlocVideo';
import BlocDivider from '../views/BlocDivider';
import BlocSubMenu1 from '../views/BlocSubMenu1';
import Step703 from './Step703';
import Step701 from './Step701';
import Step702 from './Step702';
import ButtonPrimary from '../views/UI/ButtonPrimary';
import BlocDescription from '../views/BlocDescription';
import BlocQuiz from '../views/BlocQuiz';
//import PropTypes from 'prop-types';

export default class Step7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_01: false,
      show_02: false,
      show_03: false,
      showSynthese: false,
      showQuiz: true
    };

    this.changeMarketToShow = this.changeMarketToShow.bind(this);
    this.handleShowSynthese = this.handleShowSynthese.bind(this);
    this.handleShowQuiz = this.handleShowQuiz.bind(this);
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

  handleShowSynthese(bool) {
    this.setState({ showSynthese: bool });
  }

  handleShowQuiz() {
    Object.keys(this.state).forEach(key => {
      this.setState({ [key]: false });
    });
    this.setState({ showQuiz: true });
  }

  render() {
    return (
      <div className="step step7">
        <GlobalInfosContext.Consumer>
          {context => {
            const step7 = context.state.step7;
            if (!this.state.showQuiz) {
              return (
                <React.Fragment>
                  <BlocStepTopContent step={step7} />
                  <BlocDivider />
                  <BlocVideo context={step7.module_02} />
                  <BlocSubMenu1
                    context={step7.module_03}
                    click={this.handleClick}
                    action={this.changeMarketToShow}
                  />
                  {this.state.show_01 && (
                    <Step701
                      context={step7}
                      endOfModules={this.handleShowSynthese}
                    />
                  )}
                  {this.state.show_02 && (
                    <Step702
                      context={step7}
                      endOfModules={this.handleShowSynthese}
                    />
                  )}
                  {this.state.show_03 && (
                    <Step703
                      context={step7}
                      endOfModules={this.handleShowSynthese}
                    />
                  )}
                  {this.state.showSynthese && (
                    <div className="step7__synthese step__synthese">
                      <span className="bloc__name">{step7.module_07.name}</span>
                      {this.state.show_01 && (
                        <BlocDescription
                          description={step7.module_07.description_1}
                        />
                      )}
                      {this.state.show_02 && (
                        <BlocDescription
                          description={step7.module_07.description_2}
                        />
                      )}
                      {this.state.show_03 && (
                        <BlocDescription
                          description={step7.module_07.description_3}
                        />
                      )}
                      <BlocSubMenu1
                        context={step7.module_03}
                        click={this.handleClick}
                        action={this.changeMarketToShow}
                        noDescription
                      />
                      <ButtonPrimary
                        name={step7.module_07.button_1}
                        onclick={this.handleShowQuiz}
                      />
                      <Link to="#" className="button">
                        <ButtonPrimary name={step7.module_07.button_2} />
                      </Link>
                    </div>
                  )}
                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment>
                  <BlocVideo context={step7.module_08} />
                  <BlocDivider />
                  <BlocQuiz context={step7.module_09} />
                </React.Fragment>
              );
            }
          }}
        </GlobalInfosContext.Consumer>
      </div>
    );
  }
}

Step7.propTypes = {};
