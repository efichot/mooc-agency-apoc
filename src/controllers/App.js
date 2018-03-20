import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import { MyProvider } from '../model/react-context/MyProvider';
import MenuMobile from '../components/MenuMobile';
import MenuStepNavigation from '../components/MenuStepNavigation';
import fontawesome from '@fortawesome/fontawesome';
import Introduction from '../views/Introduction';
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
      <MyProvider>
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
                <Route path="/step/:stepId" render={() => <Introduction />} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </MyProvider>
    );
  }
}

App.propTypes = {};
