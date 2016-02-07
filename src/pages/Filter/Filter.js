import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { select as selectPreview, unselect as unselectPreview } from '../../redux/modules/preview';

import SchoolFilter from '../../containers/SchoolFilter/SchoolFilter';
import SchoolsList from '../../containers/SchoolsList/SchoolsList';
import SchoolsMap from '../../components/SchoolsMap/SchoolsMap';
import SuggestedAddresses from '../../containers/SuggestedAddresses/SuggestedAddresses';
import styles from './Filter.less';

@connect(
  (state, props) => ({
    schools: state.filter.schools,
    addresses: state.filter.addresses || [],
    center: state.filter.center,
    previewedSchoolId: state.router.params.previewId,
  }),
  (dispatch) => ({
    select: selectPreview(dispatch),
    unselect: unselectPreview(dispatch)
  })
)
export default class Filter extends Component {

  static propTypes = {
    center: PropTypes.object,
    children: PropTypes.object,
    schools: PropTypes.array.isRequired,
    addresses: PropTypes.array,
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
    const { schools, children, center, params, addresses } = this.props;
    const { address, schoolType } = params;
    const filteredAddresses = addresses.filter(addr => addr !== address);
    const unitsOnMap = schools.map(school => {
      const unitOfType = school.units.find(unit => unit.unitType === schoolType);
      if (!!unitOfType && !!unitOfType.metadata.address.location) {
        // change the location of the school to the location of the unit
        school.metadata.address.location = unitOfType.metadata.address.location;
      }

      return school;
    });

    return (
      <div className={styles.homepage}>
        <Grid>
          <Row>
            <Col sm={6}>
              <h1 className={styles.underlinedTitle}>{'Školy v oblasti'}</h1>
              <p className={styles.radiusParagraph}>{address} {address.length > 0 && ' a okolí'}</p>
              <SchoolFilter address={address} schoolType={schoolType} />
              <SuggestedAddresses currentAddress={address} addresses={filteredAddresses} type={schoolType} />
              <SchoolsList schools={schools} select={this.selectSchool} />
            </Col>
            <Col sm={6}>
              <div className={styles.map}>
                <SchoolsMap schools={unitsOnMap} select={this.selectSchool} center={center} centerTitle={address} />
              </div>
              {children}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
