import React from 'react';
import PropTypes from 'prop-types';
import PieChart from 'react-svg-piechart';

class CardContentType2 extends React.Component {
  state = {};
  /*anyRef = React.createRef()*/
  /*anyFunction = (argument) => {}*/

  render() {
    const { name, pieData } = this.props;

    return (
      <React.Fragment>
        <div className="pie-chart-mini">
          <PieChart data={pieData} viewBoxSize={40} />
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
      color: PropTypes.string.isRequired
    })
  ).isRequired
};

CardContentType2.defaultProps = {};

export default CardContentType2;
