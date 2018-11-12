import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { DataProvider } from '../model/DataProvider';
import Header from '../components/Header';
import MenuMobile from '../components/MenuMobile';
import MenuStepNavigation from '../components/MenuStepNavigation';
import MenuTop from '../components/MenuTop';
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
    showPart1: true,
  };

  changeShownPart = () => {
    this.setState({ showPart1: !this.state.showPart1 });
  };

  checkIfIntro = bool => {
    this.setState({ isIntro: bool });
  };

  render() {
    // const isIntro = this.props.match.path === '/intro';
    const { isIntro, showPart1 } = this.state;

    return (
      <DataProvider>
        <Helmet>
          <title>APOC Serious Game</title>
        </Helmet>
        <BrowserRouter basename={`${process.env.REACT_APP_BASENAME}`}>
          <Fade in classProps="master__outer-container" component="App">
            <Header />
            <MenuMobile />
            <MenuStepNavigation showPart1={showPart1} changeShownPart={this.changeShownPart} />
            <div className={`master__inner-container ${isIntro ? 'intro' : ''}`}>
              {isIntro && <div className="hide-box-shadow" />}
              <MenuTop />
              <Switch>
                <Route exact path="/" render={() => <Redirect to="/intro" />} />
                <Route
                  path="/intro"
                  render={() => <Introduction tellAppIAmIntro={this.checkIfIntro} showPart1={showPart1} in />}
                />
                <Route path="/step1" render={route => <Step1 {...route} tellAppIAmIntro={this.checkIfIntro} />} />
                <Route path="/step2" render={route => <Step2 {...route} tellAppIAmIntro={this.checkIfIntro} />} />
                <Route path="/step3" render={route => <Step3 {...route} tellAppIAmIntro={this.checkIfIntro} />} />
                <Route path="/step4" render={route => <Step4 {...route} tellAppIAmIntro={this.checkIfIntro} />} />
                <Route path="/step5" render={route => <Step5 {...route} tellAppIAmIntro={this.checkIfIntro} />} />
                <Route path="/step6" render={route => <Step6 {...route} tellAppIAmIntro={this.checkIfIntro} />} />
                <Route path="/step7" render={route => <Step7 {...route} tellAppIAmIntro={this.checkIfIntro} />} />
                <Route path="/step8" render={route => <Step8 {...route} tellAppIAmIntro={this.checkIfIntro} />} />
              </Switch>
            </div>
          </Fade>
        </BrowserRouter>
      </DataProvider>
    );
  }
}

export default App;
