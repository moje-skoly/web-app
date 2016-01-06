import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const About = () => {
  const styles = require('./About.less');
  return (
    <Grid>
      <Row>
        <Col xs={6} xsOffset={3}>
          <div className={styles.about}>
            <h1>O projektu <strong>Moje školy</strong></h1>
            <p>
              Projekt Moje školy vznikl v červnu 2015 během soutěže <a href="http://www.praguehacks.cz" target="_blank">Prague Hacks</a>, 48-hodinového hackathonu nad otevřenými daty města Prahy. Nápad se i díky podpoře <a href="http://www.motejl.cz" target="_blank">Fondu Otakara Motejla</a> podařilo přetavit ve fungující službu, která je zdarma k dispozici všem rodičům a žákům, kteří chtějí mít přehled o školách v jejich okolí.
            </p>
            <p>
              Hlavní iniciativu táhl tým z projektu <a href="https://www.vcelka.cz" target="_blank">Včelka.cz</a>, jmenovitě <a href="http://www.mareklisy.cz" target="_blank">Marek Lisý</a>, <a href="https://www.linkedin.com/in/%C5%A1imon-rozs%C3%ADval-07144088" target="_blank">Šimon Rozsíval</a> a <a href="https://www.linkedin.com/in/michalzwinger/cs" target="_blank">Michal Zwinger</a>. Grafickou stránku má na svědomí <a href="http://www.martinegrt.cz" target="_blank">Martin Egrt</a>. Dále spolupracovali Tomáš Fejfar, Jan Kašpárek a Lenka Moutelíková. Za Fond Otakara Motejla musíme zmínit Michala Tošovského.
            </p>
          </div>
        </Col>
      </Row>
    </Grid>
  );
};

export default About;
