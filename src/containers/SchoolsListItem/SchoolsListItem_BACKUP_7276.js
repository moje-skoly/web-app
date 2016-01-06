import React, { Component, PropTypes } from 'react';
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
<<<<<<< HEAD
    if (school.metadata.address === undefined) {
      return '(adresa nebyla uvedena)'; // the address is missing
    }
=======
		if (school.metadata.address === undefined) {
			return ''; // the address is missing
		}
>>>>>>> 2c071d77b1a54809e3492c03e56b5ae5ffe17f3b

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
        <table className={styles.table}>
          <tbody>
            <tr>
              <th><i className={'fa fa-map-marker'} /></th>
              <td>{this.getAddressString(school)}</td>
            </tr>
            {contact != null && !('websites' in contact) && contact.websites.length >= 1
              && (
                <tr>
                  <th><i className={'fa fa-link'} /></th>
                  <td>
                    {websites.map(web => <a href={web} key={web}>{web}</a>)}
                  </td>
                </tr>
              )}
          </tbody>
        </table>
      </button>
    );
  }
}