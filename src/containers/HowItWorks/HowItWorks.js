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
                                        <img src={require('../../theme/images/trychtir.svg')} alt="Filtr pro výsledky" />
                                    </p>
                                    <div className={styles.bubble}>
                                        <h3>Filtr pro výsledky</h3>
                                        <p>Upřesněte výsledky svého hledání pomocí podrobného filtru. Filtrovat lze například podle vyučovaných jazyků, kroužků něbo kapacity.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col sm={4}>
                                <div className={styles.item}>
                                    <p className={styles.imgWrapper}>
                                        <img src={require('../../theme/images/stupne.svg')} alt="Lokalita" />
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
                                        <h3>Mateřská školka</h3>
                                        <p>Vyberte si lokalitu, ve které hledáte školu pro své dítě. Typicky stačí zadat město nebo část města.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col sm={4}>
                                <div className={styles.item}>
                                    <p className={styles.imgWrapper}>
                                        <img src={require('../../theme/images/brasna.svg')} alt="Základní škola" />
                                    </p>
                                    <div className={styles.grayBubble}>
                                        <h3>Základní škola</h3>
                                        <p>Upřesněte výsledky svého hledání pomocí podrobného filtru. Filtrovat lze například podle vyučovaných jazyků, kroužků něbo kapacity.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col sm={4}>
                                <div className={styles.item}>
                                    <p className={styles.imgWrapper}>
                                        <img src={require('../../theme/images/skateboard.svg')} alt="Střední škola" />
                                    </p>
                                    <div className={styles.grayBubble}>
                                        <h3>Střední škola</h3>
                                        <p>V přehledném zobrazení si porovnejte profil jednotlivých škol mezi sebou.</p>
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
