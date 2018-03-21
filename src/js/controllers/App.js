import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../modules/Header';
import { GlobalInfosProvider } from '../model/react-context/GlobalInfosProvider';
import MenuMobile from '../modules/MenuMobile';
import MenuStepNavigation from '../modules/MenuStepNavigation';
import fontawesome from '@fortawesome/fontawesome';
import Introduction from '../views/Introduction';
import Step1 from '../views/Step1';
import Step2 from '../views/Step2';
import Step3 from '../views/Step3';
import Step4 from '../views/Step4';
import Step5 from '../views/Step5';
import Step6 from '../views/Step6';
import Step7 from '../views/Step7';
import Step8 from '../views/Step8';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import { Helmet } from 'react-helmet';

//import PropTypes from 'prop-types';

fontawesome.library.add(solid);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPart1: true
    };

    this.changeShownPart = this.changeShownPart.bind(this);
  }

  changeShownPart() {
    this.setState({ showPart1: !this.state.showPart1 });
  }

  render() {
    return (
      <GlobalInfosProvider>
        <Helmet>
          <title>APOC Serious Game</title>
        </Helmet>
        <BrowserRouter basename="/mooc-agency-apoc">
          <div className="master__outer-container">
            <Header />
            <MenuMobile />
            <MenuStepNavigation
              showPart1={this.state.showPart1}
              changeShownPart={this.changeShownPart}
            />
            <div className="master__inner-container">
              <Switch>
                <Route exact path="/" render={() => <Redirect to="/intro" />} />
                <Route
                  path="/intro"
                  render={() => (
                    <Introduction showPart1={this.state.showPart1} />
                  )}
                />
                <Route path="/step1" render={() => <Step1 />} />
                <Route path="/step2" render={() => <Step2 />} />
                <Route path="/step3" render={() => <Step3 />} />
                <Route path="/step4" render={() => <Step4 />} />
                <Route path="/step5" render={() => <Step5 />} />
                <Route path="/step6" render={() => <Step6 />} />
                <Route path="/step7" render={() => <Step7 />} />
                <Route path="/step8" render={() => <Step8 />} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </GlobalInfosProvider>
    );
  }
}

App.propTypes = {};
