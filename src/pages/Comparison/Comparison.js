import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import SchoolDetail from '../../components/SchoolDetail/SchoolDetail';
import { load as loadComparison } from '../../redux/modules/comparison';
import MetaData from '../../containers/MetaData/MetaData';
import UnitDetail from '../../components/UnitDetail/UnitDetail';
import SchoolsMap from '../../components/SchoolsMap/SchoolsMap';
import ComparisonButton from '../../components/ComparisonButton/ComparisonButton';
import styles from './Comparison.less';

const scrollStep = 400;

@connect(
  (state, props) => ({
    error: !!state.comparison.error,
    loading: state.comparison.loading === true,
    loaded: state.comparison.loaded === true,
    schools: state.comparison.schools,
    schoolIds: props.params.schoolIds.split(',')
  }),
  dispatch => ({
    load: (ids) => dispatch(loadComparison(ids))
  })
)
export default class Comparison extends Component {

  static propTypes = {
    error: PropTypes.bool,
    loaded: PropTypes.bool,
    loading: PropTypes.bool,
    schools: PropTypes.array,
    schoolIds: PropTypes.array.isRequired,
    params: PropTypes.object,
    load: PropTypes.func.isRequired
  };

  state = {
    focusedSchool: 0,
    showArrows: true
  };

  componentDidMount = () => {
    const { error, loaded, loading, load, schoolIds } = this.props;
    if (error === false && loaded === false && loading === false) { load(schoolIds); }
    setTimeout(() => this.checkArrowsNecessity(), 1000);
    window.addEventListener('resize', () => this.checkArrowsNecessity());
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', () => this.checkArrowsNecessity());
  };

  checkArrowsNecessity() {
    if (!!this.refs.table &&
        !!this.refs.page &&
          this.refs.table.getBoundingClientRect().width <= this.refs.page.getBoundingClientRect().width) {
      this.setState({
        showArrows: false,
        focusedSchool: 0
      });
    } else {
      this.setState({
        showArrows: true
      });
    }
  }

  prevSchool() {
    this.setState({
      focusedSchool: Math.max(0, this.state.focusedSchool - 1)
    });
  }

  nextSchool() {
    this.setState({
      focusedSchool: Math.min(this.props.schools.length - 1, this.state.focusedSchool + 1)
    });
  }

  renderLoading() {
    return (
      <p>Načítám srovnání škol...</p>
    );
  }

  renderError() {
    return (
      <p className={'alert alert-warning'}>Došlo k chybě při komunikaci se serverem.</p>
    );
  }

  renderNoSchools() {
    return (
      <p className={'alert alert-warning'}>Nejsou vybrány žádné školy k porovnávání.</p>
    );
  }

  renderSchools(schools) {
    // find the unit types of all the schools
    const unitTypes = schools.reduce(
      (schoolAcc, school) => [...schoolAcc, ...school.units.reduce(
        (unitAcc, unit) => [...unitAcc, unit.unitType], []
      )], [])
      .reduce((acc, item) => acc.indexOf(item) < 0 ? [...acc, item] : acc, []);

    return (
      <table className={styles.comparisonTable} ref={'table'}>
        <tbody>
        {/* Metadata */}
        <tr>
        {schools.map(school => (
          <td key={school.id} className={styles.comparisonSegment}>
            <div className={styles.comparisonBlock}>
              <span className={'pull-right'}>
                <ComparisonButton school={school} />
              </span>
            </div>
            <div className={styles.comparisonBlock}>
              <MetaData data={school.metadata} />
            </div>
            {school.metadata.address.location && <SchoolsMap schools={[school]} center={school.metadata.address.location} allowZoom={false} centerTitle={school.metadata.name} />}
          </td>
        ))}
        </tr>

        {/* Unit types */}
        {unitTypes.map(type => (
          <tr key={type}>
          {schools.map(school => {
            const unitOfType = school.units.find(unit => unit.unitType === type);
            if (!unitOfType) {
              return (
                <td className={styles.comparisonSegment}>
                  {/* this field will be empty */}
                  <div className={styles.comparisonBlock} /> {/* the white bg */}
                </td>
              );
            }

            return (
              <td className={styles.comparisonSegment}>
                <div className={styles.comparisonBlock}>
                  <UnitDetail schoolMetadata={school.metadata} unit={unitOfType} />
                </div>
              </td>
            );
          })}
          </tr>
        ))}
        </tbody>
      </table>
    );
  }

  renderSchool(school) {
    return (
      <div className={styles.detail} key={school._id}>
        <SchoolDetail school={school} />
      </div>
    );
  }

  renderComparison() {
    const { schools } = this.props;
    const { focusedSchool, showArrows } = this.state;

    return (
      <div className={styles.comparisonPage} ref={'page'}>
        <Grid>
          <Row>
            <Col xs={12}>
              <h2 className={styles.title}>Srovnání škol</h2>
            </Col>
          </Row>
          {showArrows && (
            <Row>
              <Col xs={6}>
                <button onClick={() => this.prevSchool()} className={styles.moveLeft} />
              </Col>
              <Col xs={6}>
                <button onClick={() => this.nextSchool()} className={styles.moveRight} />
              </Col>
            </Row>
          )}
        </Grid>


        <div className={styles.comparisonRow} style={{ left: -1 * scrollStep * focusedSchool }}>
          {schools.length > 0
            ? this.renderSchools(schools)
            : this.renderNoSchools()}
        </div>
      </div>
    );
  }

  render() {
    const { loading, loaded, error } = this.props;
    if (error === true) {
      return this.renderError();
    }

    if (loading === true) {
      return this.renderLoading();
    }

    if (loaded === true) {
      return this.renderComparison();
    }

    return null; // do not render anything until something is happening
  }
}
