import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { select as selectPreview, unselect as unselectPreview } from '../../redux/modules/preview';

import SchoolFilter from '../../components/SchoolFilter/SchoolFilter';
import SchoolsList from '../../containers/SchoolsList/SchoolsList';
import SchoolsMap from '../../containers/SchoolsMap/SchoolsMap';
import styles from './Filter.less';

@connect(
  (state, props) => ({
    schools: state.filter.schools,
    radius: state.filter.radius,
    previewedSchoolId: state.router.params.previewId,
  }),
  (dispatch) => ({
    select: selectPreview(dispatch),
    unselect: unselectPreview(dispatch)
  })
)
export default class Filter extends Component {

  static propTypes = {
    radius: PropTypes.string,
    children: PropTypes.object,
    schools: PropTypes.array.isRequired,
    previewedSchoolId: PropTypes.string,

    select: PropTypes.func.isRequired,
    unselect: PropTypes.func.isRequired,

    params: PropTypes.shape({
      address: PropTypes.string.isRequired,
      schoolType: PropTypes.string.isRequired
    }).isRequired
  };

  selectSchool = (school) => {
    const { previewedSchoolId, select, unselect, params } = this.props;
    const { address, schoolType } = params;
    if (school._id === previewedSchoolId) {
      unselect(school, address, schoolType);
    } else {
      select(school, address, schoolType);
    }
  };

  render() {
    const { schools, children, radius, params } = this.props;
    const { address, schoolType } = params;

    return (
      <div className={styles.homepage}>
        <Grid>
          <Row>
            <Col sm={6}>
              <h1 className={styles.underlinedTitle}>{'Školy v oblasti'}</h1>
              <p className={styles.radiusParagraph}>{'v okruhu '}{radius}{' od zvolené adresy'}</p>
              <SchoolFilter address={address} schoolType={schoolType} />
              <SchoolsList schools={schools} select={this.selectSchool} />
            </Col>
            <Col sm={6}>
              <div className={styles.map}>
                <SchoolsMap schools={schools} select={this.selectSchool} />
              </div>
              {children}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
