import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { load as loadComparison } from '../../redux/modules/comparison';
import MetaData from '../../containers/MetaData/MetaData';
import SchoolsMap from '../../components/SchoolsMap/SchoolsMap';
import ComparisonButton from '../../components/ComparisonButton/ComparisonButton';
import styles from './Comparison.less';

const scrollStep = 400;

const getUnitType = (type) => {
  switch (type) {
  case 'materska_skola':
    return 'Mateřská škola';
  case 'zakladni_skola':
    return 'Základní škola';
  case 'stredni_skola':
    return 'Střední škola';
  default:
    return type;
  }
};

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
              <MetaData data={school.metadata} isTitle />
            </div>
          </td>
        ))}
        </tr>
        <tr>
          {schools.map(school => (
            <td>
              {school.metadata.address.location && <SchoolsMap schools={[school]} center={school.metadata.address.location} allowZoom={false} centerTitle={school.metadata.name} />}
            </td>
          ))}
        </tr>

        {/* Unit types */}
        {unitTypes.map(type => this.renderUnit(type, schools))}
        </tbody>
      </table>
    );
  }

  renderUnit(type, schools) {
    const units = schools.map(school => school.units.find(unit => unit.unitType === type));
    return (
      <div key={type}>
        <tr>
          {units.map((unit, unitId) => (
            <td key={unitId}>
              <h3 className={styles.unitTitle}>{getUnitType(type)}</h3>
            </td>
          ))}
        </tr>
        <tr>
          {units.map((unit, unitId) => (
            <td key={unitId}>
              {(unit && unit.metadata)
                ? <MetaData data={unit.metadata} />
                : getUnitType(type) + ' na této škole není.'}
            </td>
          ))}
        </tr>
        {this.renderUnitSections(units)}
      </div>
    );
  }

  renderUnitSections(units) {
    const sections = units.map(unit => !!unit ? unit.sections : [])
                          .reduce((acc, unit) => !unit ? acc : [...acc, ...unit.reduce((unitAcc, section) => [...unitAcc, section.title], [])], [])
                          .reduce((acc, item) => acc.indexOf(item) < 0 ? [...acc, item] : acc, []);

    return (
      <div>
        {sections.map((section, sectionId) => (
          <div key={sectionId}>
            <tr>
              {units.map((unit, unitId) => (
                <td key={unitId}>
                  <h4 className={styles.sectionTitle}>{section}</h4>
                </td>
              ))}
            </tr>
            {this.renderUnitSection(units.map(unit => (!unit || !unit.sections) ? [] : unit.sections.find(sec => sec.title === section)))}
          </div>
        ))}
      </div>
    );
  }

  renderUnitSection(sections) {
    const questions = sections.map(section => (!section || !section.information) ? [] : section.information)
                              .reduce((sectionsAcc, information) => [...sectionsAcc, ...information.reduce((informationAcc, { key }) => [...informationAcc, key], [])], [])
                              .reduce((acc, item) => acc.indexOf(item) < 0 ? [...acc, item] : acc, []);

    return (
      <div>
        {questions.map((question, questionId) => (
          <tr key={'question-' + questionId}>
            {sections.map((section, sectionId) => {
              const answer = (!section || !section.information) ? null : section.information.find(({ key }) => key === question);
              return (
                <td>
                  <p className={styles.question}>{question}{':'}</p>
                  <p className={styles.answer}>{!answer ? '-' : answer.value}</p>
                </td>
              );
            })}
          </tr>
        ))}
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
