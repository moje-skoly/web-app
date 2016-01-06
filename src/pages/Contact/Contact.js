import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const Contact = () => {
  const styles = require('./Contact.less');
  return (
    <Grid>
      <Row>
        <Col xs={6} xsOffset={3}>
          <div className={styles.about}>
            <h1><strong>Kontakt</strong></h1>
            <p>
              Marek Lisý<br/>
              <i>Koordinátor projektu</i><br/>
              <br/>
              <a href="mailto:marek.lisy@vcelka.cz">marek.lisy@vcelka.cz</a>
            </p>
          </div>
        </Col>
      </Row>
    </Grid>
  );
};

export default Contact;
