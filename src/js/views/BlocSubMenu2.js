import React from 'react';
import PropTypes from 'prop-types';
import ButtonWithArrow from './UI/ButtonWithArrow';
import BlocDescription from './BlocDescription';
import Fade from '../transitions/Fade';

class BlocSubMenu2 extends React.Component {
  state = {};

  handleButtonClick = changeMarketToShow => {
    this.props.action(changeMarketToShow);
  };

  render() {
    const { modulType, description, buttons, noDescription, scrollIntoView } = this.props;

    return (
      <Fade
        classProps={`bloc-sub-menu-2 bloc`}
        in={this.props.in}
        scrollIntoView={scrollIntoView}
        margins={this.props.margins}>
        {!noDescription && (
          <BlocDescription modulType={modulType} classProps="bloc-sub-menu-2__description" description={description} />
        )}
        <div className="bloc-sub-menu-2__buttons game">
          {buttons.map((button, i) => {
            return (
              <div className="bloc-sub-menu-2__buttons--button" key={button.action}>
                <ButtonWithArrow classOrigin="bloc-sub-menu-2" button={button} onClick={this.handleButtonClick} />
                <span
                  dangerouslySetInnerHTML={button.nameBelow}
                  style={{
                    color: button.fontColor,
                    borderColor: button.borderColor,
                  }}
                  className="bloc-sub-menu-2__buttons--name"
                />
              </div>
            );
          })}
        </div>
      </Fade>
    );
  }
}

BlocSubMenu2.propTypes = {
  in: PropTypes.bool,
  action: PropTypes.func.isRequired,
  /***************** DATA ******************/

  modulType: PropTypes.string.isRequired,
  description: PropTypes.shape({ __html: PropTypes.string.isRequired }),
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      position: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      action: PropTypes.string.isRequired,
    }),
  ).isRequired,
  noDescription: PropTypes.bool,
};

BlocSubMenu2.defaultProps = {
  in: false,
  scrollIntoView: false,
  noDescription: false,
};

export default BlocSubMenu2;
