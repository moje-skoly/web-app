import React, { Component, PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

@connect(
  (state, props) => ({
    previewedSchoolId: state.router.params.previewId,
    isSelected: props.school._id === state.router.params.previewId
  })
)
export default class SchoolsListItem extends Component {

  static propTypes = {
    previewedSchoolId: PropTypes.string,
    school: PropTypes.object.isRequired,
    isSelected: PropTypes.bool.isRequired,
    select: PropTypes.func.isRequired
  };

  onClick = (event) => {
    const { select, school } = this.props;
    select(school);
  };

  getAddressString = (school) => {
    if (school.metadata.address === undefined) {
      return ''; // the address is missing
    }

    const { street, city, postalCode } = school.metadata.address;
    return `${street}, ${postalCode} ${city}`;
  };

  render() {
    const { school, isSelected } = this.props;
    const { contact = null } = school.metadata;
    const websites = school.metadata.contact !== undefined ? school.metadata.contact.websites : [];
    const styles = require('./SchoolsListItem.less');
    return (
      <button className={isSelected ? styles.selectedItem : styles.unselectedItem} onClick={this.onClick}>
        <h2>{school.metadata.name}</h2>
        <Row>
          <Col xs={1}><i className={'fa fa-map-marker'} /></Col>
          <Col xs={11}>{this.getAddressString(school)}</Col>
        </Row>
        {contact !== null && ('websites' in contact) && contact.websites.length >= 1
          && (
            <Row>
              <Col xs={1}><i className={'fa fa-link'} /></Col>
              <Col xs={11}>
                {websites.map(web => <a href={(!web.startsWith('http') ? 'http://' : '') + web} key={web}>{web}</a>)}
              </Col>
            </Row>
          )}
      </button>
    );
  }
}
