import React from 'react';
import PropTypes from 'prop-types';
import PieChart from 'react-svg-piechart';

class CardContentType2 extends React.Component {
  state = {};

  render() {
    const { name, pieData, background } = this.props;

    return (
      <React.Fragment>
        <div className="pie-chart-mini" style={{ backgroundImage: background && `url(${background})` }}>
          {pieData && <PieChart data={pieData} viewBoxSize={40} />}
        </div>
        <span className="name">{name}</span>
      </React.Fragment>
    );
  }
}

CardContentType2.propTypes = {
  name: PropTypes.string.isRequired,
  pieData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    }),
  ),
  background: PropTypes.string,
};

CardContentType2.defaultProps = {};

export default CardContentType2;
