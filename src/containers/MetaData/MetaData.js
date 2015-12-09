import React, {Component, PropTypes} from 'react';
import styles from './MetaData.less';
import { Row, Col } from 'react-bootstrap';

export default class MetaData extends Component {
  static propTypes = {
    comparison: PropTypes.object,
    data: PropTypes.object.isRequired
  }

  match = (first, second) => {
    return JSON.stringify(first) === JSON.stringify(second);
  };

  renderAddress = (address) => (
    <div className={styles.address}>
      <Row>
        <Col xs={2} className={styles.icon}>
          <i className={'fa fa-map-marker'} />
        </Col>
        <Col xs={10}>
          <p>
            {address.street}<br />
            {address.city}<br />
            {address.postalCode}
          </p>
        </Col>
      </Row>
    </div>
  );

  renderContact = (phoneNumbers, emails) => {
    if (!phoneNumbers && !emails) {
      return null; // do not show even the title...
    }

    return (
      <div className={styles.contact}>
        {phoneNumbers && (
          <Row>
            <Col xs={2} className={styles.icon}>
              <i className={'fa fa-phone'} />
            </Col>
            <Col xs={10}>
              <p>{phoneNumbers.join(', ')}</p>
            </Col>
          </Row>
        )}
        {emails && (
          <Row>
            <Col xs={2} className={styles.icon}>
              <i className={'fa fa-envelope-o'} />
            </Col>
            <Col xs={10}>
              <p>{emails.join(', ')}</p>
            </Col>
          </Row>
        )}
      </div>
    );
  };

  render() {
    const { comparison, data } = this.props;
    const { name, address, contact } = data;

    return (
      <div className={styles.metaInfo}>
        {(!comparison || comparison.name !== name)
          && <h2 className={styles.title}>{name}</h2>}

        {address
          && (!comparison || this.match(comparison.address, address) === false)
          && this.renderAddress(address)}

        {contact
          && (!comparison || this.match(comparison.contact, contact) === false)
          && this.renderContact(contact.phoneNumbers, contact.emails)}
      </div>
    );
  }
}
