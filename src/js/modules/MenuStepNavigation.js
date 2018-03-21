import React from 'react';
import { Link } from 'react-router-dom';
import ButtonPrimary from '../UI/ButtonPrimary';
import UserGameInfos from './UserGameInfos';
import stepNavigation from '../model/static/stepNavigation';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

export default class MenuStepNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0.75,
      progression: 0.87,
      rank: 53
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.changeShownPart();
  }

  render() {
    return (
      <div className="menu-step-navigation">
        <div className="menu-step-navigation__frame">
          <div className="menu-step-navigation__title">
            <span>
              {this.props.showPart1
                ? stepNavigation.toggleParts.part2
                : stepNavigation.toggleParts.part1}
            </span>
          </div>
          <UserGameInfos class={`menu-step-navigation`} big={false} />
          {Object.keys(stepNavigation)
            .filter(
              key =>
                stepNavigation[`${key}`].part === (this.props.showPart1 ? 1 : 2)
            )
            .map((key, i, stepsFiltered) => {
              return (
                <Link
                  key={stepNavigation[`${key}`].name}
                  to={`step${stepNavigation[`${key}`].stepLink}`}
                  className={`menu-step-navigation__step`}
                >
                  <div className="menu-step-navigation__step--bullet">
                    <FontAwesomeIcon icon={['fas', 'check-circle']} />
                  </div>
                  <div
                    className={`menu-step-navigation__step--content ${
                      i === stepsFiltered.length - 1 ? 'last-step' : ''
                    }`}
                  >
                    <div className="menu-step-navigation__step--name">
                      <span>{stepNavigation[`${key}`].name}</span>
                    </div>
                    <div className="menu-step-navigation__step--durations">
                      <span>Détails min: 3 / 7 / 3 / 3</span>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
        <Link to="/">
          <ButtonPrimary
            classes={`menu-step-navigation__button`}
            name={
              this.props.showPart1
                ? `Poursuivre vers ${stepNavigation.toggleParts.part2}`
                : `Revenir à ${stepNavigation.toggleParts.part1}`
            }
            onclick={this.handleClick}
          />
        </Link>
      </div>
    );
  }
}

MenuStepNavigation.propTypes = {
  showPart1: PropTypes.bool.isRequired
};
