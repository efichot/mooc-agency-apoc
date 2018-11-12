import React from 'react';
import PropTypes from 'prop-types';
import Select, { components } from 'react-select';
import SVGInline from 'react-svg-inline';

import button_down_right from '../../../assets/img/icons/button-down-right.svg';

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <SVGInline svg={button_down_right} />
    </components.DropdownIndicator>
  );
};

class SelectQCM extends React.Component {
  state = {
    value: this.props.options[0],
  };

  handleChange = option => {
    // console.log('handleChange');
    this.setState({ value: option.value });
    this.props.onChange(this.props.index, option.value, this.props.answer);
  };

  render() {
    const { placeholder, classProps, options } = this.props;

    return (
      <Select
        options={options}
        placeholder={placeholder}
        components={{ DropdownIndicator }}
        className={classProps}
        styles={{
          dropdownIndicator: () => button_down_right,
        }}
        onChange={this.handleChange}
      />
    );
  }
}

SelectQCM.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  answer: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  index: PropTypes.number.isRequired,
  classProps: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    }).isRequired,
  ).isRequired,
};

SelectQCM.defaultProps = {
  classProps: '',
  placeholder: '',
  answer: '',
};

export default SelectQCM;
