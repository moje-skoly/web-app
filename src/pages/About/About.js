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
            <h3>Jak vznikl?</h3>
            <p>
              Projekt Moje školy vznikl v červnu 2015 během soutěže <a href="http://www.praguehacks.cz" target="_blank">Prague Hacks</a>, 48-hodinového hackathonu nad otevřenými daty města Prahy. Nápad se i díky podpoře <a href="http://www.motejl.cz" target="_blank">Fondu Otakara Motejla</a> podařilo přetavit ve fungující službu, která je zdarma k dispozici všem rodičům a žákům, kteří chtějí mít přehled o školách v jejich okolí.
            </p>
            <h3>Kdo za projektem stojí?</h3>
            <p>
              Hlavní iniciativu táhl tým z projektu <a href="https://www.vcelka.cz" target="_blank">Včelka.cz</a>, jmenovitě <a href="http://www.mareklisy.cz" target="_blank">Marek Lisý</a>, <a href="https://www.linkedin.com/in/%C5%A1imon-rozs%C3%ADval-07144088" target="_blank">Šimon Rozsíval</a> a <a href="https://www.linkedin.com/in/michalzwinger/cs" target="_blank">Michal Zwinger</a>. Grafickou stránku má na svědomí <a href="http://www.martinegrt.cz" target="_blank">Martin Egrt</a>. Dále spolupracovali Tomáš Fejfar, Jan Kašpárek a Lenka Moutelíková. Za Fond Otakara Motejla musíme zmínit Michala Tošovského.
            </p>
            <h3>Odkud pochází naše data?</h3>
            <p>
              Data poskytlo Ministerstvo školství, mládeže a tělovýchovy z <a href="http://rejskol.msmt.cz/" target="_blank">oficiálního rejstříku</a>. Ta nejzajímavější data poskytla Česká školní inspekce. Jde o data sbíraná formou dotazníků od jednotlivých škol, v původní podobě je můžete najít v <a href="">katalogu ČŠI</a>. V budoucnu uvažujeme o přidání dalších datových zdrojů, například zřizovatele škol, samotné školy či v omezené míře i veřejnost.
            </p>
          </div>
        </Col>
      </Row>
    </Grid>
  );
};

export default About;
