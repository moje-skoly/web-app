import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const How = () => {
  const styles = require('./How.less');
  return (
    <Grid>
      <Row>
        <Col xs={6} xsOffset={3}>
          <div className={styles.how}>
            <h1>Jak vybrat školu?</h1>
            <p>
              Upřímně, není to snadné. Dejte si heřmánkový čaj a hned to půjde lépe!
            </p>
          </div>
        </Col>
      </Row>
    </Grid>
  );
};

export default How;
