import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { GlobalInfosProvider } from '../model/react-context/GlobalInfosProvider';
import Header from '../views/Header';
import MenuMobile from '../views/MenuMobile';
import MenuStepNavigation from '../views/MenuStepNavigation';
import Introduction from './Introduction';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Step7 from './Step7';
import Step8 from './Step8';
import Fade from '../transitions/Fade';

import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';

fontawesome.library.add(solid);

class App extends React.Component {
  state = {
    showPart1: true
  };

  changeShownPart = () => {
    this.setState({ showPart1: !this.state.showPart1 });
  };

  render() {
    return (
      <GlobalInfosProvider>
        <Helmet>
          <title>APOC Serious Game</title>
        </Helmet>
        <BrowserRouter basename={`${process.env.REACT_APP_BASENAME}`}>
          <Fade in classProps="master__outer-container">
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
                    <Introduction showPart1={this.state.showPart1} in />
                  )}
                />
                <Route path="/step1" render={route => <Step1 {...route} />} />
                <Route path="/step2" render={route => <Step2 {...route} />} />
                <Route path="/step3" render={route => <Step3 {...route} />} />
                <Route path="/step4" render={route => <Step4 {...route} />} />
                <Route path="/step5" render={route => <Step5 {...route} />} />
                <Route path="/step6" render={route => <Step6 {...route} />} />
                <Route path="/step7" render={route => <Step7 {...route} />} />
                <Route path="/step8" render={route => <Step8 {...route} />} />
              </Switch>
            </div>
          </Fade>
        </BrowserRouter>
      </GlobalInfosProvider>
    );
  }
}

export default App;
