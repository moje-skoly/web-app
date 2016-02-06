import React, { Component, PropTypes } from 'react';
import { Alert, Modal, ListGroup, ListGroupItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { load as filter } from '../../redux/modules/filter';

@connect(
  null,
  (dispatch, props) => ({
    load: (address) => {
      dispatch(filter(address, props.type));
      dispatch(pushState(null, `/filter/${encodeURIComponent(address)}/${encodeURIComponent(props.type)}`));
    }
  })
)
export default class SuggestedAdresses extends Component {

  static propTypes = {
    addresses: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired,
    load: PropTypes.func.isRequired
  };

  state = {
    shown: false
  };

  show = () => {
    this.setState({ shown: true });
  };

  hide = () => {
    this.setState({ shown: false });
  };

  search = (address) => {
    const { load } = this.props;
    load(address);
    this.hide();
  };

  render() {
    const { addresses } = this.props;
    if (addresses.length <= 1) {
      return null; // do not render anything
    }

    const firstAddr = addresses[0];
    return (
      <div>
        <Alert bsStyle={'info'}>
          <p>
            Mysleli jste <a onClick={() => this.search(firstAddr)} href={'#'}>{firstAddr}</a> nebo <a href={'#'} onClick={this.show}>{addresses.length - 1} podobné</a>{'?'}
          </p>
        </Alert>
        <Modal show={this.state.shown} onHide={this.hide}>
          <Modal.Header closeButton>
            <Modal.Title>Navrhované adresy</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ListGroup>
              {addresses.map((address, index) => (
                <ListGroupItem key={index} onClick={() => this.search(address)}>
                  {address}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Modal.Body>
        </Modal>
      </div>
    );
  }

}
