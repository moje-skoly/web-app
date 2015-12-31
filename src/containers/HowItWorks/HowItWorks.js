import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class HowItWorks extends Component {
  render() {
    const styles = require('./HowItWorks.less');
    return (
      <div className={styles.howItWorks}>
        <div className={styles.white}>
          <div className={styles.homepageSection}>
            <Grid>
              <Row>
                <Col xs={12}>
                  <h2>Jak to funguje</h2>
                </Col>
              </Row>
              <Row>
                <Col sm={4}>
                  <div className={styles.item}>
                    <p className={styles.imgWrapper}>
                      <img src={require('../../theme/images/globus.svg')} alt="Lokalita" />
                    </p>
                    <div className={styles.bubble}>
                      <h3>Lokalita</h3>
                      <p>Vyberte si lokalitu, ve které hledáte školu pro své dítě. Typicky stačí zadat město nebo část města.</p>
                    </div>
                  </div>
                </Col>

                <Col sm={4}>
                  <div className={styles.item}>
                    <p className={styles.imgWrapper}>
                      <img src={require('../../theme/images/trychtir.svg')} alt="Řazení podle filtrů" />
                    </p>
                    <div className={styles.bubble}>
                      <h3>Řazení podle filtrů</h3>
                      <p>Upřesněte výsledky svého hledání pomocí podrobného filtru. Výsledky nejvíce odpovídající zadaným hodnotám budou řazeny nejvýše.</p>
                    </div>
                  </div>
                </Col>

                <Col sm={4}>
                  <div className={styles.item}>
                    <p className={styles.imgWrapper}>
                      <img src={require('../../theme/images/stupne.svg')} alt="Porovnání škol" />
                    </p>
                    <div className={styles.bubble}>
                      <h3>Porovnání škol</h3>
                      <p>V přehledném zobrazení si porovnejte profil jednotlivých škol mezi sebou.</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>
        </div>
        <div className={styles.gray}>
          <div className={styles.homepageSection}>
            <Grid>
              <Row>
                <Col sm={4}>
                  <div className={styles.item}>
                    <p className={styles.imgWrapper}>
                      <img src={require('../../theme/images/lopatka.svg')} alt="Mateřská školka" />
                    </p>
                    <div className={styles.grayBubble}>
                      <h3>Otevřená data</h3>
                      <p>Data o školách jsou agregována z otevřených zdrojů od veřejných institucí jako je Ministerstvo školství, mládeže a tělovýchovy a Česká školní inspekce.</p>
                    </div>
                  </div>
                </Col>

                <Col sm={4}>
                  <div className={styles.item}>
                    <p className={styles.imgWrapper}>
                      <img src={require('../../theme/images/brasna.svg')} alt="Základní škola" />
                    </p>
                    <div className={styles.grayBubble}>
                      <h3>Tvrdá fakta</h3>
                      <p>Zprostředkováváme přehledně faktické informace z ověřených zdrojů, abyste mohli udělat racionální, informované rozhodnutí při výběru školy.</p>
                    </div>
                  </div>
                </Col>

                <Col sm={4}>
                  <div className={styles.item}>
                    <p className={styles.imgWrapper}>
                      <img src={require('../../theme/images/skateboard.svg')} alt="Střední škola" />
                    </p>
                    <div className={styles.grayBubble}>
                      <h3>Školy jsou pestré</h3>
                      <p>Při výběru školy je dobré vzít úvahu více faktorů. Školní program, nabízené kroužky, družina, počet žáků ve třídě, to vše může hrát větši roli, než se zdá.</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}
