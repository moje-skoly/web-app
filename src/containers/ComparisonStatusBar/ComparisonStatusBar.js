import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';

@connect(
  state => ({
    schoolsCount: state.comparison.schools.length,
    schoolIds: state.comparison.schools.map(school => school._id).join(',')
  }),
  dispatch => ({
    compare: (ids) => dispatch(pushState(null, `/comparison/${ids}`))
  })
)
export default class ComparisonStatusBar extends Component {

  static propTypes = {
    schoolsCount: PropTypes.number.isRequired,
    schoolIds: PropTypes.string.isRequired,
    compare: PropTypes.func.isRequired
  };

  goToComparison = () => {
    const { schoolsCount, schoolIds, compare } = this.props;
    if (schoolsCount >= 1) { compare(schoolIds); }
  };

  render() {
    const { schoolsCount } = this.props;
    const style = require('./ComparisonStatusBar.less');
    const disabled = schoolsCount <= 1;

    return (
      <button className={disabled ? style.empty : style.ready} onClick={this.goToComparison} disabled={disabled}>
        Porovnání {schoolsCount} škol
      </button>
    );
  }

}
