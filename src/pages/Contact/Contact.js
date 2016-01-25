import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const Contact = () => {
  const styles = require('./Contact.less');
  return (
    <Grid className={styles.about}>
      <Row>
        <h1><strong>Kontakt</strong></h1>
        <Col xs={6} xsOffset={3}>
          <p>
            Marek Lisý<br/>
            <i>Koordinátor projektu</i><br/>
            <br/>
            e-mail: <a href="mailto:marek.lisy@vcelka.cz">marek.lisy@vcelka.cz</a><br/>
            blog: <a href="http://www.mareklisy.cz">www.mareklisy.cz</a>
          </p>
        </Col>
        <Col xs={3}>
          <p>
            Šimon Rozsíval<br/>
            <i>Hlavní vývojář</i><br/>
            <br/>
            e-mail: <a href="mailto:simon.rozsival@vcelka.cz">simon.rozsival@vcelka.cz</a><br/>
            GitHub: <a href="https://github.com/simonrozsival">simonrozsival</a>
          </p>
        </Col>
      </Row>
    </Grid>
  );
};

export default Contact;
