import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import SchoolDetail from '../../components/SchoolDetail/SchoolDetail';
import { load as loadComparison } from '../../redux/modules/comparison';
import styles from './Comparison.less';

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

  componentDidMount = () => {
    const { error, loaded, loading, load, schoolIds } = this.props;
    if (error === false && loaded === false && loading === false) { load(schoolIds); }
  };

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

  renderSchool(school) {
    return (
      <div className={styles.detail} key={school._id}>
        <SchoolDetail school={school} />
      </div>
    );
  }

  renderComparison() {
    const { schools } = this.props;

    return (
      <div className={styles.comparisonPage}>
        <Grid>
          <Row>
            <Col xs={12}>
              <h2>Srovnání škol</h2>
            </Col>
          </Row>
        </Grid>

        <div className={styles.comparisonRow}>
          {schools.length > 0
            ? schools.map((school, id) => this.renderSchool(school))
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
