import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { load as filter } from '../../redux/modules/filter';

@connect((state) => ({}))
export default class HomepageSarch extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  state = {
    loc: '',
    type: 'zakladni_skola',
    canSearch: false
  };

  changeLoc = (event) => {
    this.setState({
      loc: event.target.value,
      canSearch: event.target.value.length > 0
    });
  };

  changeType = (event) => {
    this.setState({
      type: event.target.value
    });
  };

  searchSchool = (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    const { loc, type, canSearch} = this.state;
    if (canSearch) {
      dispatch(filter(loc, type));
      dispatch(pushState(null, `/filter/${loc}/${type}`));
    }
  };

  render() {
    const styles = require('./HomepageSearch.less');
    const { loc, type, canSearch } = this.state;
    return (
      <Grid>
        <div className={styles.searchBox}>
          <form className="form form-horizontal">
            <Row>
              <Col md={8} xs={12}>
                <label htmlFor="loc">Lokalita školy</label>
                <input id="loc" type="text" value={loc} onChange={this.changeLoc} placeholder="zadejte adresu" className="form-control" />
              </Col>
              <Col md={2} xs={6}>
                <label htmlFor="type">Typ školy</label>
                <select id="type" name="school_type" className="form-control" value={type} onChange={this.changeType}>
                  <option value="materska_skola">Mateřská</option>
                  <option value="zakladni_skola">Základní</option>
                  <option value="stredni_skola">Střední</option>
                </select>
              </Col>
              <Col md={2} xs={6}>
                <label>&nbsp;</label>
                <button className={styles.searchBtn} onClick={this.searchSchool} disabled={!canSearch}>Najít Školu</button>
              </Col>
            </Row>
          </form>
        </div>
      </Grid>
    );
  }
}
