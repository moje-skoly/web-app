import React, { Component, PropTypes } from 'react';
import { IndexLink } from 'react-router';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import DocumentMeta from 'react-document-meta';
import config from '../../config';
import ComparisonStatusBar from '../../containers/ComparisonStatusBar/ComparisonStatusBar';

@connect(
  state => ({
    comparisonCount: state.comparison.schools.length
  })
)
export default class App extends Component {
  static propTypes = {
    comparisonCount: PropTypes.number.isRequired,
    children: PropTypes.object.isRequired
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const styles = require('./App.less');
    const logoImg = require('../../theme/images/logo.svg');
    return (
      <div>
        <DocumentMeta {...config.app}/>
        <header id="top" className={styles.top}>
          <Grid>
            <Row>
              <Col xs={6}>
                <h1><IndexLink to="/"><img src={logoImg} alt="Moje školy"/></IndexLink></h1>
              </Col>
              <Col xs={6} className="text-right">
                <a href="#" className={styles.helpLink}>návod k používání</a>
              </Col>
            </Row>
          </Grid>
        </header>

        <div className={styles.appContent}>
          {this.props.children}
          <ComparisonStatusBar schoolsCount={this.props.comparisonCount} />
        </div>

        <footer className={styles.bottom}>
          <Grid>
            <Row>
              <Col xs={12}>
                <ul className="pull-right">
                  <li><a href="#">o nás</a></li>
                  <li><a href="#">cookies</a></li>
                  <li><a href="#">soukromí</a></li>
                  <li><a href="#">kontakt</a></li>
                </ul>
              </Col>
            </Row>
          </Grid>
        </footer>
      </div>
    );
  }
}
